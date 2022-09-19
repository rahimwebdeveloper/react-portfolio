import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_62qkgcd', 'template_ncp3q5q', refForm.current, 'aTOhjLAVAJYb9TtLY')
            .then((result) => {
                console.log(result.text);
                toast.success('You Email Send SuccessFull',)
            }, (error) => {
                console.log(error.text);
                toast.error('You email is Failed')
            });
        e.target.reset()


    }
    return (
        <>
            <div className="container contact-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                            letterClass={letterClass} />
                    </h1>
                    <p>I am interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to contact me using below form either.</p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail} >
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button2" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Abdur Rahim,
                    <br />
                    Nithpur,
                    <br />
                    Nithpur, Porsha, Naogoan
                    <br />
                    <span>info.abdurrahim12@gmail.com</span>
                </div>
                <div className="map-wrap">

                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact;