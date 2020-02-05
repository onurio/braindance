import React,{useEffect,useState} from 'react';
import {ProjectLink} from './ProjectLink';
import './ProjectsList.css';



export const ProjectsList=props=>{
    const [list,setList] = useState(null);

    useEffect(()=>{
        if(props.projects){
            mapProjects(props.projects);
        }
    },[props.projects]);





    const mapProjects =projects=>{
        let list= [];
        Object.keys(projects).forEach((id,index)=>{
            let project = projects[id];            
            list.push(<ProjectLink key={id} id={id} link={project.link} imgUrl={project.imgUrl} audioUrl={project.audioUrl}  name={project.name}/>);
        });
        setList(list);
    }



    return(
        <div className='main' style={{width:'100vw'}}>
            {list}  
        </div>
    );
}