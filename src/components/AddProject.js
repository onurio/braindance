import React,{useState,useEffect} from 'react';
import { ImageUpload } from './ImageUpload';
import {db} from '../App';
import {getDateAndTime} from '../utils/utils';
import { AudioUpload } from './AudioUpload';



export const AddProject=props=>{
    // const [text,setText]= useState('');
    const [imgUrl,setImgUrl] = useState('');
    const [audioUrl,setAudioUrl] = useState('');
    const [name,setName] = useState('');
    const [link,setLink] = useState('');
    const [isReady,setIsReady] = useState('admin_button_inactive');
    const [uploadMessage,setUploadMessage] = useState('Fill all fields');



    const passImgUrl=url=>setImgUrl(url);
    const passAudioUrl=url=>setAudioUrl(url);

    const handleUpload=()=>{
        db.collection('projects').doc(Math.round((Math.random()*10000000)).toString()).set({
                imgUrl: imgUrl,
                audioUrl: audioUrl,
                name: name,
                link: link,
                date_time: getDateAndTime()
            });
        alert('Muy bien!');
        props.setAction('');
    }

    useEffect(()=>{
        if(imgUrl !== '' && link!=='' && audioUrl !== '' && name !== ''){
            setIsReady('admin_button_active');
            setUploadMessage('Upload');
        }else{
            setIsReady('admin_button_inactive');
            setUploadMessage('Fill all fields');
        };
    },[imgUrl,link,name,audioUrl]);


    return(
        <div className="column center"style={{backgroundColor:'midnightblue',marginTop:'4vmin',borderRadius:'10px',padding:'4vmin'}}>
            <h1 style={{padding:'4vmin',color:'white'}}>Add Project</h1>
            <h4 style={{marginBottom:'2vmin',color:'white'}}>Project Name</h4>
            <input type='text' style={{width:'40vmin'}} onChange={e=>setName(e.target.value)} />
            <h4 style={{marginBottom:'2vmin',color:'white'}}>Project Link</h4>
            <input type='text' style={{width:'40vmin'}} onChange={e=>setLink(e.target.value)} />
            <div className="row" style={{marginTop:'4vmin',padding:'4vmin'}}>
                <div style={{padding:'2vmin',height:'80vh'}} className='row'>
                    <ImageUpload returnUrl={passImgUrl}  folder={'projects_images'}/>
                    <AudioUpload returnUrl={passAudioUrl} folder={'projects_audios'} />
                </div>
            </div>
            <br/>
            <div onClick={handleUpload} className={isReady}>{uploadMessage}</div>
        </div>
    );
}