import React from 'react'
import './Footer.css'
import SocialMedia from './SocialMedia'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {

/*     const openFacebook = () => {
        const url = 'https://www.facebook.com/ClubBps/';
        window.open(url, '_blank');
    }

    const openFacebook = () => {
        const url = 'https://www.facebook.com/ClubBps/';
        window.open(url, '_blank');
    } */

    return (
        <div className='footer'>
            
            <div className="footer_info">
                <h3>Contáctanos</h3>

                <div className="footer_info_data">
                    <p>Mercedes 1723</p>
                    <p>Montevideo, Uruguay</p>
                    <p>(+598) 2401 0302</p>
                </div>

                <div className="mail">
                    <h3>Envíanos un email</h3>
                </div>
            </div>

            <div className="footer_redes">
                <h3>Seguinos en nuestras redes sociales</h3>
                <div className="footer_socialMedia">
                    <FacebookIcon onClick={()=> SocialMedia.openFacebook()} />  
                    <InstagramIcon onClick={()=> SocialMedia.openInstagram()} />
                </div>

            </div>
        </div>
    )
}

export default Footer
