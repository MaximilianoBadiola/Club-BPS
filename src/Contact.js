import React from 'react'
import Map from './Map';
import SocialMedia from './SocialMedia'
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from "react-router-dom";
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import './Contact.css'

function Contact() {


    return (
        <div className="contact">

            <div className="contact_header">
                <h1>Contacto</h1>
                <p>Está Aquí: <Link className="contact_link" to="/">Inicio</Link> / Contacto </p>
            </div>

            <div className="contact_form">
                <div className="contact_data">

                    <h3>FORMULARIO DE CONTACTO</h3>

                    <div className="contact_data_name">
                        <label>Nombre </label>  <textarea /> 
                    </div>

                    <div className="contact_data_mail">
                        <label>Correo electrónico </label> <textarea />
                    </div>
                    
                    <div className="contact_data_asunto">
                        <label>Asunto </label> <textarea />
                    </div>
                    
                    <div className="contact_data_message"> 
                        <label>Mensaje </label> <textarea cols="50" rows="10" />
                    </div>

                    <div className="contact_data_copy"> 
                        <label>Envíeme una copia <br /> (opcional) </label> <input type="checkbox" value="1" />
                    </div>

                    <div className="contact_data_captcha"> 
                        <label>Captcha</label> 
                        
                        <div className="captcha">
                            <div className="check_captcha">
                                <input type="checkbox" value="1"  /> 
                            </div>
                            
                            <div className="not_robot">
                                <p>No soy un robot</p>
                            </div>

                            <div className="captcha_icon">
                                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="" />
                                <p>reCAPTCHA</p>
                                <div className="TermsAndPriv">
                                    <a>Privacidad</a>
                                    <a> - </a>
                                    <a>Términos</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact_data_confirm"> 
                        <button type="submit">Enviar</button>   
                    </div>                    
                </div>

                <div className="contact_info">
                    <h3>CONTACTO</h3>

                    <div className="contact_info_data">
                        <h3>Mercedes 1723, Montevideo</h3>
                        <p><PhoneIcon /> 2401 0302</p>
                        <a><MailOutlineIcon /> contacto@clubbps.com.uy</a>
                        <p><QueryBuilderIcon /> LUN - VIE: 7:00 - 22:30</p>
                        <p><QueryBuilderIcon /> SÁBADO: 8:00 - 21:00</p>
                    </div>

                    <h3>SÍGUENOS EN NUESTRAS REDES</h3>

                    <div className="contact_info_socialMedia">
                        <FacebookIcon onClick={()=> SocialMedia.openFacebook()} />                        
                    </div>

                </div>
            </div>

            <div className="map">
                <h3>UBICACIÓN</h3>

                <div className="map_component">
                    <Map  />
                </div>
                
            </div>

        </div>
    )
}

export default Contact
