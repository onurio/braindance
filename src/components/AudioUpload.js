import React,{useState} from 'react';
import {storage} from '../App';

export const AudioUpload=props=>{
    const [audio,setAudio] = useState(null);
    const [url,setUrl] = useState('');
    const [progress,setProgress] = useState(0);


    const handleChange=(e)=>{
        if(e.target.files[0]){
            const audio = e.target.files[0];
            setAudio(audio);
        }

    }

    const handleUpload=(e)=>{
        if(audio !== null){
            const uploadTask = storage.ref(`audio/${props.folder}/${audio.name}`).put(audio);
            console.log(uploadTask);
            
            uploadTask.on('state_changed',(snapshot)=>{
                let prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);
                setProgress(prog); 
            },(error)=>{
                alert(error);
            },()=>{
                storage.ref(`audio/${props.folder}`).child(audio.name).getDownloadURL().then((url)=>{
                    setUrl(url);
                    props.returnUrl(url);
                });
            });
        } else{
            alert('choose an mp3 file!')
        }
    }

    return(
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',backgroundColor:'white',borderRadius:'10px',padding:'4vmin'}}>
            <div>
            <input type="file" onChange={handleChange}/>
            <button onClick={handleUpload} >Upload MP3 file</button>
            </div>
            <br/>
            <progress value={progress} max='100' />
            <br/>
            <audio src={url} type="audio/mpeg" controls/>
        </div>
    );
}