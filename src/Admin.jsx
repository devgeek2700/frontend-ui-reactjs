import React from 'react';
import adimImg from "./components/Images/adimImg.jpeg";
import "./App.css"

const Admin = () => {
    return (
        <>
            <section className='Adminbox' id='Admin'>
                <div className='adminImgbox'>
                    <img src={adimImg} alt="" className='slide_up'/>
                </div>

            </section>
        </>
    )
}

export default Admin
