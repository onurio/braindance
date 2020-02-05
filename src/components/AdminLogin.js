import React,{useState} from 'react'


export const AdminLogin=props=>{
    const [pass,setPass] = useState('');


    return(
        <div className="column center full">
            <h1>Login</h1><br/><br/>
            <div><p>password</p>
            <input onChange={(e)=>{
                setPass(e.target.value);
                }}/>  
            </div>
            <br/><br/>
            <button className="admin_button" onClick={e=>props.login(pass)} >Login</button>
        </div>
        
    );
}