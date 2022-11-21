import React, {useState} from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import './Contact.scss';
import { AppWrap, MotionWrap } from "../../wrapper"

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const isFormSubmitted = false;
    const loading = false;

    const { username, email, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <h2 className="head-text">Take a coffee & chat with me</h2>

            <div className="app__footer-cards">
                <div className="app__footer-card shadow">
                    <img src={images.email} alt="email" />
                    <a href="mailto:hello@micael.com" className="p-text">....@gmail.com</a>
                </div>
                <div className="app__footer-card shadow">
                    <img src={images.mobile} alt="phone" />
                    <a href="tel:081351583417" className="p-text">+62 81351583417</a>
                </div>
            </div>
            {!isFormSubmitted ? (
                <div className="app__footer-form app__flex">
                <div className="app__flex shadow">
                    <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
                </div>
                <div className="app__flex shadow">
                    <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
                </div>
                <div>
                    <textarea
                    className="p-text shadow"
                    placeholder="Your Message"
                    value={message}
                    name="message"
                    onChange={handleChangeInput}
                    />
                </div>
                <button type="button" className="p-text">{!loading ? 'Send Message' : 'Sending...'}</button>
                </div>
            ) : (
                <div>
                <h3 className="head-text">
                    Thank you for getting in touch!
                </h3>
                </div>
            )}
        </>
    )
}

export default AppWrap(
    MotionWrap(Contact, 'app__footer'),
    'contact',
    'app__whitebg',
  );