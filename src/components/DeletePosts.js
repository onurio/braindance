import React from 'react';
import {db} from '../App';
import { useEffect } from 'react';
import { useState } from 'react';
import trash from '../images/delete.svg';

export const DeletePosts=props=>{
    const [postList,setPostList] = useState('Loading');
    
    const deletPost=(id)=>{
        if (window.confirm('Delete post'+id+'?') ){
            db.collection("posts").doc(id).delete().then(function() {
                console.log("Document successfully deleted!");
                props.fillPosts();
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            });
        }
    };

    useEffect(()=>{
        if(props.posts){
            let posts = props.posts
            let listNew = Object.keys(props.posts).map((postId)=>{
                return (
                    <tr key={postId}>
                        <td style={{border:'1px solid black'}}>{posts[postId].header}</td>
                        <td style={{border:'1px solid black'}}>{postId}</td>
                        <td style={{border:'1px solid black'}}>
                            <button onClick={e=>deletPost(postId)}><img src={trash} width='25px'  alt="delete"/></button>
                        </td>
                    </tr>
                    );
            });
            setPostList(listNew);
        }
        // eslint-disable-next-line
    },[props.posts])

    return(
        <div className='center column'>
            <table style={{width: '70vw',border:'1px solid black'}}>
                <thead>
                    <tr key={'nothing'}>
                        <th>Post Name</th>
                        <th>Post Id</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>{postList}</tbody>  
            </table>
        </div>
    );
}