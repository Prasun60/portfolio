import React,{useRef} from 'react'
import "../styles/contatct.css"
import email from "../pictures/email.png"
import phone from "../pictures/phone-call.png"
import location from "../pictures/location.png"
import emailjs from "emailjs-com"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { dark } from '@mui/material/styles/createPalette'



function Contatct() {

    const notify = () => toast('✅Message Sent', {
        position: "bottom-left",
        autoClose:  5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: dark,
        }); 

     const form =useRef();
    function sendEmail(e){
        
       e.preventDefault();
       emailjs.sendForm("service_6jk709a","template_uteqjou",e.target,"yLGyype06FKT3-C3g").then(res=>{
        console.log(res);
       }).catch(err=>{
        console.log(err);
       });
       e.target.reset();
    }


    return (
        <div className='contact' id='Contact'>
            <div className='contact-box'>
            <div className='glass'>
                <h2 className='contactheading'>Get in Touch</h2>
                <form className='row' onSubmit={sendEmail} ref={form}>
                    <label className='labels'>Name: </label>
                    <input type="text" name='name' className="form-control"   /><p></p>
                    <label className='labels'>Email: </label>
                    <input type="email" name="user_email" className="form-control"   /><p></p>
                    <label className='labels message'>Message: </label><p></p>
                    <textarea name='message' rows="4" className='form-control'  /><p></p>
                    <input type="submit" onClick={notify} value="send" className="form-control btn" />

                </form>
            </div>
            <div className='blob5'></div>
            <div><h2 className='meet'>There's my College</h2></div>
            <iframe class="gmap_iframe" className='map' src="https://maps.google.com/maps?width=452&amp;height=400&amp;hl=en&amp;q=IIITM&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            <div className='contact-details'>
                <img src={phone} className='contact-img' alt='' />+91-87777045674 
                <img src={email} className='contact-img' alt='' />prasunmondal60@gmail.com 
                <img src={location} className='contact-img' alt='' />Gwalior, Madhya Pradesh<p>
                <a href='https://www.instagram.com/prasun_mondal60/' target="blank"><InstagramIcon className="contact-img" /></a>
                <a href='https://www.linkedin.com/in/prasun-mondal-999766227/' target="blank"><LinkedInIcon className="contact-img" /></a>
                <a href='https://github.com/Prasun60' target="blank"><GitHubIcon className="contact-img" /></a>
                <a href='https://www.facebook.com/prasun.mondal.7146' target="blank"><FacebookIcon className="contact-img" /></a>
                
                </p>

            </div>
            </div>
            <ToastContainer />
            </div>
    )
}

export default Contatct