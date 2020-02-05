import React,{useState} from 'react';
import { AdminActions } from './AdminActions';
import { AddPost } from './AddPost';
import {scrollToTop} from '../utils/utils';
import {DeletePosts} from './DeletePosts';



export const Admin =props=>{
    const [action,setAction] = useState(undefined);

    const changeAction=action=>{
        scrollToTop();
        setAction(action);
    }

    switch(action){
        case 'noticias':
            return(
                <div className='flex_column'>
                    <AdminActions setAction={changeAction}/>
                    <AddPost setAction={changeAction}/>
                </div>
            );
        // case 'horarios':
        //     return (
        //         <div className='flex_column'>
        //             <AdminActions setAction={changeAction}/>
        //             <ChangeHours setAction={changeAction}/>
        //         </div>
        //     );
        case 'noticias_borrar':
            return (
                <div className='flex_column'>
                    <AdminActions setAction={changeAction}/>
                    <DeletePosts fillPosts={props.fillPosts} posts={props.posts} setAction={changeAction}/>
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