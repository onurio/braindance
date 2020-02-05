import React from 'react';
import {db} from '../App';
import { useEffect } from 'react';
import { useState } from 'react';
import trash from '../images/delete.svg';

export const DeleteProjects=props=>{
    const [projectList,setProjectList] = useState('Loading');
    
    const deletPost=(id)=>{
        if (window.confirm('Delete Project'+id+'?') ){
            db.collection("projects").doc(id).delete().then(function() {
                console.log("Document successfully deleted!");
                props.fillProjects();
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            });
        }
    };

    useEffect(()=>{
        if(props.projects){
            let projects = props.projects
            let listNew = Object.keys(props.projects).map((projectId)=>{
                return (
                    <tr key={projectId}>
                        <td style={{border:'1px solid white',color:'white'}}>{projects[projectId].name}</td>
                        <td style={{border:'1px solid white',color:'white'}}>{projectId}</td>
                        <td style={{border:'1px solid white',color:'white'}}>
                            <button onClick={e=>deletPost(projectId)}><img src={trash} width='25px'  alt="delete"/></button>
                        </td>
                    </tr>
                    );
            });
            setProjectList(listNew);
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
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>{projectList}</tbody>  
            </table>
        </div>
    );
}