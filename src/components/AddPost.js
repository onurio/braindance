import React,{useState,useEffect} from 'react';
import { ImageUpload } from './ImageUpload';
import {db} from '../App';
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";
import {getDateAndTime} from '../utils/utils';


const style={};

style.h1 ={padding:'4vmin',color:'white'};


export const AddPost=props=>{
    const [text,setText]= useState('');
    const [imgUrl,setImgUrl] = useState('');
    const [header,setHeader] = useState('');
    const [isReady,setIsReady] = useState('admin_button_inactive');
    const [uploadMessage,setUploadMessage] = useState('Fill all fields');



    const passUrl=url=>setImgUrl(url);
    const handleUpload=()=>{
        db.collection('posts').doc(Math.round((Math.random()*10000000)).toString()).set({
                url: imgUrl,
                header: header,
                text: text,
                date_time: getDateAndTime()
            });
        alert('Muy bien!');
        props.setAction('');
    }

    useEffect(()=>{
        if(text !== '' && imgUrl !== '' && header !== ''){
            setIsReady('admin_button_active');
            setUploadMessage('Upload');
        }else{
            setIsReady('admin_button_inactive');
            setUploadMessage('Fill all fields');
        };
    },[text,imgUrl,header]);


    return(
        <div className="column center"style={{backgroundColor:'midnightblue',marginTop:'4vmin',borderRadius:'10px',padding:'4vmin'}}>
            <h1 style={style.h1}>Add Post</h1>
            <h4 style={{marginBottom:'2vmin',color:'white'}}>Nombre de post</h4>
            <input type='text' style={{width:'40vmin'}} onChange={e=>setHeader(e.target.value)} />
            <div className="row" style={{marginTop:'4vmin',padding:'4vmin'}}>
                <div style={{padding:'2vmin',height:'80vh'}} className='row'>
                    <ImageUpload returnUrl={passUrl}  folder={'posts_images'}/>
                    <div style={{backgroundColor:'white',overflow:'hidden'}}>
                        <JoditEditor  onChange={e=>setText(e)}/>
                    </div>
                </div>
            </div>
            <br/>
            <div onClick={handleUpload} className={isReady}>{uploadMessage}</div>
        </div>
    );
}