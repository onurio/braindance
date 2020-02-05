import React from 'react';
import './Form.css';
import { useState,useEffect } from 'react';
import {db} from '../App';
import {getDateAndTime} from '../utils/utils';
import ok from '../images/ok-mark.svg';

export const Form=props=>{
    const [hover,setHover] = useState('');
    const [isReady,setIsReady] = useState(false);
    const [pressed,setPressed] = useState('');
    const [name,setName] = useState('');
    const [company,setCompany] = useState('');
    const [email,setEmail] = useState('');
    const [cel,setCel] = useState('');
    const [nameClass,setNameClass] = useState('');
    const [messageClass,setMessageClass] = useState('');
    const [companyClass,setCompanyClass] = useState('');
    const [emailClass,setEmailClass] = useState('');
    const [celClass,setCelClass] = useState('');
    const [message,setMessage] = useState('');

    const handleUpload=()=>{
        db.collection('contact_info').doc(Math.round((Math.random()*10000000)).toString()).set({
                name: name,
                email: email,
                cel: cel,
                company: company,
                message: message,
                date_time: getDateAndTime()
            });
    }

    function validateEmail(email) {
        // eslint-disable-next-line
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    useEffect(()=>{
        if(name && validateEmail(email) && cel && company){
            setIsReady(true);
        } else{
            setIsReady(false);
        };
        if(name.length > 0){
            setNameClass('field_ok');
        } else{
            setNameClass('');
        };
        if(validateEmail(email)){
            setEmailClass('field_ok');
        } else{
            setEmailClass('');
        };
        if(cel > 0){
            setCelClass('field_ok');
        } else{
            setCelClass('');
        };
        if(company.length > 0){
            setCompanyClass('field_ok');
        } else{
            setCompanyClass('');
        };
        if(message.length > 0){
            setMessageClass('field_ok');
        } else{
            setMessageClass('');
        };
    },[name,email,cel,company,message]);

    return(
        <div className='center'>
            <div className='form'>
                <div className='ok'>
                    <h4  >Nombres y Apellidos</h4>
                    <input  required onChange={e=>setName(e.target.value)} type="text"/>
                    <img className={nameClass} width='15px' src={ok} alt="ok"/>
                </div>
                <div className='ok'>
                    <h4>Compania</h4>
                    <input required onChange={e=>setCompany(e.target.value)} type="text"/>
                    <img className={companyClass} width='15px' src={ok} alt="ok"/>
                </div>
                <div className='ok'>
                    <h4>Correo Electrónico</h4>
                    <input required onChange={e=>setEmail(e.target.value)} type='email'/>
                    <img className={emailClass} width='15px' src={ok} alt="ok"/>
                </div>
                <div className='ok'>
                    <h4>Celular</h4>
                    <input required onChange={e=>setCel(e.target.value)} type='num'/>
                    <img className={celClass} width='15px' src={ok} alt="ok"/>
                </div>
                <div className='ok'>
                    <h4>Mensaje</h4>
                    <textarea required onChange={e=>setMessage(e.target.value)} type='text'/>
                    <img className={messageClass} width='15px' src={ok} alt="ok"/>
                </div>
                
                <div style={{alignItems:'center',marginTop:'4vmin'}} className='row'>
                    <button 
                    
                    onMouseDown={e=>{
                        if(isReady){
                            setPressed('pressed');
                            handleUpload();
                        }else{
                            alert('Llena todos los campos');
                        }
                        }} onMouseEnter={e=>setHover('hover3')} 
                        onMouseLeave={e=>setHover('')}>Enviar Mensaje</button>
                    <div className={`send_feedback ${hover} ${pressed}`} />
                    <div className={`send_feedback2 ${pressed}`} >Enviado!</div>
                </div>
                
            </div>
        </div>
    );
}