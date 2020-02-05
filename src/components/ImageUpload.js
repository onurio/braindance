import React,{useState} from 'react';
import {storage} from '../App';

export const ImageUpload=props=>{
    const [image,setImage] = useState(null);
    const [url,setUrl] = useState('');
    const [progress,setProgress] = useState(0);


    const handleChange=(e)=>{
        if(e.target.files[0]){
            const img = e.target.files[0];
            setImage(img);
        }

    }

    const handleUpload=(e)=>{
        if(image !== null){
            const uploadTask = storage.ref(`images/${props.folder}/${image.name}`).put(image);
            uploadTask.on('state_changed',(snapshot)=>{
                let prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);
                setProgress(prog); 
            },(error)=>{
                alert(error);
            },()=>{
                storage.ref(`images/${props.folder}`).child(image.name).getDownloadURL().then((url)=>{
                    setUrl(url);
                    props.returnUrl(url);
                });
            });
        } else{
            alert('choose an image! and do a plié!')
        }
    }

    return(
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',backgroundColor:'white',borderRadius:'10px',padding:'4vmin'}}>
            <div>
            <input type="file" onChange={handleChange}/>
            <button onClick={handleUpload} >Upload</button>
            </div>
            <br/>
            <progress value={progress} max='100' />
            <br/>
            <img src={url || 'https://via.placeholder.com/400x300'} alt='Uploaded-image1' width='400' height='300'/>
        </div>
    );
}