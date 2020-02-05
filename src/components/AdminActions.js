import React from 'react';
import './Admin.css';


export const AdminActions=props=>{

    return(
        <div className='column center' style={{marginTop:'15vmin'}}>
            <h1>Admin Page</h1>
            <div style={{justifyContent:'center'}} className="row">
                <div className='admin_button' onClick={e=>props.setAction('horarios')}>Editar Horarios</div>
                <div className='admin_button' onClick={e=>props.setAction('noticias')}>Subir Noticias</div>
                <div className='admin_button' onClick={e=>props.setAction('noticias_borrar')}>Borrar Noticias</div>
            </div>
        </div>
    );
}