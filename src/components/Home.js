import React from 'react';
// import {Link} from 'react-router-dom';
import './Home.css';
import { ProjectsList } from './ProjectsList';



export const Home=props=>{
    return(
        <div className="main">
            <h1 style={{color:'white'}}>HOME</h1>
            <ProjectsList projects={props.projects} />
        </div>
    );
}