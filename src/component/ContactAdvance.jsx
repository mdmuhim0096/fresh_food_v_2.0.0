import React from 'react'
import TextReder from './Textrender';
import AnimateText from './AnimateText';
import Navbar from './Navbar';
import Footer from './Footer';
import Space from './Space';
import Contact from './Contact';
const ContactAdvance = () => {
    return (
        <div>
            <Navbar />
            <div id='team' className='w-full h-auto flex justify-center items-center relative'>
                <img src="./assets/team.avif" className='w-full opacity-80' />
                <div className='absolute animate-bounce'>
                    <AnimateText text={"Our Team"} triggerId={"team"} splitType='chars' animation='rotate' />
                </div>
            </div>
            <section>
                <TextReder text={"Our Location"} triggerId='loaction' variant='random' />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1074.9459190220123!2d89.24878535132933!3d25.75236971168003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32de6fca6019b%3A0x9fa496e687f818c8!2sRangpur!5e0!3m2!1sen!2sbd!4v1750919592142!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full h-[70vh]'></iframe>
                <Contact />
            </section>
            <Footer />
        </div>
    )
}

export default ContactAdvance