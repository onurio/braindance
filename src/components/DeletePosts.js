import React from 'react';
import {db} from '../App';
import { useEffect } from 'react';
import { useState } from 'react';
import trash from '../images/delete.svg';

export const DeletePosts=props=>{
    const [postList,setPostList] = useState('Loading');
    
    const deletPost=(id)=>{
        if (window.confirm('Borrar post'+id+'?') ){
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
                        <td style={{border:'1px solid white',color:'white'}}>{posts[postId].header}</td>
                        <td style={{border:'1px solid white',color:'white'}}>{postId}</td>
                        <td style={{border:'1px solid white',color:'white'}}>
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
        <div className='column center'>
            <table style={{width: '70vw',border:'1px solid white',color:'white'}}>
                <thead>
                    <tr key={'nothing'}>
                        <th>Post Name</th>
                        <th>Post Id</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>{postList}</tbody>  
            </table>
        </div>
    );
}