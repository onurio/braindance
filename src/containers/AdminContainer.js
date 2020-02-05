import React,{useState} from 'react';
import { Admin } from '../components/Admin';
import { AdminLogin } from '../components/AdminLogin';



export const AdminContainer=props=>{
    const [isAuthenticated,setIsAuthenticaited] = useState(false);

    

    const auth =(password)=>{
        if (password==='braindance'){
            setIsAuthenticaited(true);
        }
        else{
            setIsAuthenticaited(false);
            alert('wrong password');
        }
    }

    switch(isAuthenticated){
        case true:
            return <Admin fillProjects={props.fillProjects} projects={props.projects}  fillPosts={props.fillPosts} posts={props.posts} db={props.db} logout={auth}/>
        default:
            return <AdminLogin  login={auth}/>
    }
}