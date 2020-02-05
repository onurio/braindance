import React,{useState, useEffect} from 'react';


export const ProjectLink=props=>{
    const [hover,setHover] = useState('')
    const [audio,setAudio] = useState(null);
    

    const handleHover=()=>{
        setHover('project_link_hover');
        playAudio();
    }

    const handleExit=()=>{
        setHover('');
        pauseAudio();
    }


    useEffect(()=>{
        var audio = new Audio(props.audioUrl);
        setAudio(audio);
    },[props.audioUrl])

    
    
    
    function playAudio() { 
    audio.play();
    
    } 

    function pauseAudio() { 
    audio.pause();
    }

    return(
        <a href={props.link} rel="noopener noreferrer" onClick={e=>audio.play()}  target="_blank" className='link_decoration_none' >
            <div style={{backgroundColor:'white'}} onMouseEnter={e=>handleHover()} onMouseLeave={e=>handleExit()} >
                <div className='project_link' style={{backgroundImage:`url(${props.imgUrl})`}} >  
                    <div className={`${hover}`} >
                        <h2>{props.name}</h2>
                    </div>      
                </div>
            </div>
        </a>
    );
    
}