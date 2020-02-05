import React,{useState} from 'react';
import { AdminActions } from './AdminActions';
import { AddPost } from './AddPost';
import {scrollToTop} from '../utils/utils';
import {DeletePosts} from './DeletePosts';
import { AddProject } from './AddProject';
import { DeleteProjects } from './DeleteProject';



export const Admin =props=>{
    const [action,setAction] = useState(undefined);

    const changeAction=action=>{
        scrollToTop();
        setAction(action);
    }

    switch(action){
        case 'add_post':
            return(
                <div>
                    <AdminActions setAction={changeAction}/>
                    <AddPost setAction={changeAction}/>
                </div>
            );
        case 'delete_post':
            return (
                <div>
                    <AdminActions setAction={changeAction}/>
                    <DeletePosts fillPosts={props.fillPosts} posts={props.posts} setAction={changeAction}/>
                </div>
            );
        case 'add_project':
            return (
                <div>
                    <AdminActions setAction={changeAction}/>
                    <AddProject setAction={changeAction}/>
                </div>
            );
        case 'delete_project':
            return (
                <div>
                    <AdminActions setAction={changeAction}/>
                    <DeleteProjects fillProjects={props.fillProjects} posts={props.projects} setAction={changeAction}/>
                </div>
            );
        default:
            return (
                <div className='column center'>
                    <AdminActions setAction={changeAction}/>
                    <h1>Choose what to do</h1>
                </div>
            );
    }
}