import React, {useState} from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import './Testimonial.scss';
import { AppWrap, MotionWrap } from "../../wrapper"

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        {imgurl: images.jokowi, name: "Jokowi", feedback: "Tbn Delivery sangat membantu masyarakat tamban", company: "Presiden Indonesia"},
        {imgurl: images.prabowo, name: "Prabowo", feedback: "Tbn Delivery adalah contoh kreatifitas anak bangsa", company: "Menteri Pertahanan"},
        {imgurl: images.sandiaga, name: "Sandiaga Uno", feedback: "Keren Broo!!!", company: "Pengusaha"},

    ];

    const handleClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <>
            <p className='testimonial-p' style={{color: 'black'}}>Testimonials</p>
            {testimonials.length && (
                <>
                    <div className="app__testimonial-item app__flex">
                        <img src={testimonials[currentIndex].imgurl} alt={testimonials[currentIndex].name} />
                        <div className="app__testimonial-content">
                        <p className="p-text">{testimonials[currentIndex].feedback}</p>
                        <div>
                            <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                            <h5 className="p-text">{testimonials[currentIndex].company}</h5>
                        </div>
                        </div>
                    </div>

                    <div className="app__testimonial-btns app__flex">
                        <div className="app__flex shadow" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                        <HiChevronLeft />
                        </div>

                        <div className="app__flex shadow" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                        <HiChevronRight />
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default AppWrap(
    MotionWrap(Testimonial, 'app__testimonial'),
    'testimonial',
    'app__primarybg',
);