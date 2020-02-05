import React,{useState} from 'react';
import { Admin } from '../components/Admin';
import { AdminLogin } from '../components/AdminLogin';



export const AdminContainer=props=>{
    const [isAuthenticated,setIsAuthenticaited] = useState(false);

    

    const auth =(password)=>{
        if (password==='freestyle'){
            setIsAuthenticaited(true);
        }
        else{
            setIsAuthenticaited(false);
            alert('wrong password');
        }
    }

    switch(isAuthenticated){
        case true:
            return <Admin fillPosts={props.fillPosts} posts={props.posts} db={props.db} logout={auth}/>
        default:
            return <AdminLogin  login={auth}/>
    }
}