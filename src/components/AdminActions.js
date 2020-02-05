import React from 'react';
import './Admin.css';


export const AdminActions=props=>{

    return(
        <div className='column center' style={{marginTop:'15vmin'}}>
            <h1>Admin Page</h1>
            <div style={{justifyContent:'center'}} className="row">
                <div className='admin_button' onClick={e=>props.setAction('add_project')}>Add Project</div>
                <div className='admin_button' onClick={e=>props.setAction('delete_project')}>Delete Project</div>
                <div className='admin_button' onClick={e=>props.setAction('add_post')}>Add Post</div>
                <div className='admin_button' onClick={e=>props.setAction('delete_post')}>Delete Post</div>
            </div>
        </div>
    );
}