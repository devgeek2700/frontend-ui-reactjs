import React from 'react'
import user1 from "./components/Images/user1.png";
import user2 from "./components/Images/user2.png";
import user3 from "./components/Images/user3.png";
import user4 from "./components/Images/user5.webp";
import user5 from "./components/Images/user7.png";
import "./App.css"


const Home = () => {
    return (
        <>
            <section className='featBox' id='Features'>
                <div className='bluetxt slide_up'>
                    <p >An other way to manage time️</p>
                </div>

                <p id='textbig' className='slide_up'>Your new favorite <br /> calendar 🗓️ app</p>
                <p className='greytxt slide_up'>Here you should explain how cool your app is. Remember, <br /> focus on the benefits for your users, not on the features. </p>
                <div>
                    <button className='blkBtn slide_up'> Get started, it's free </button>
                </div>
                <small className='slide_up'>Free 14 days trials,no credit card needed</small>

                <div className='ImgBox slide_up'>
                    <div className='imgboxrow'>

                        <div className='imagecont' id='ava1'>
                            <div class="containerImg">
                                <img src={user1} alt="Avatar" class="imageAvat" />
                                <div class="overlay">
                                    <div class="text"><i class="fa-solid fa-star-of-life"></i></div>
                                </div>
                            </div>
                            <div class="containerImg" id='ava2'>
                                <img src={user4} alt="Avatar" class="imageAvat" />
                                <div class="overlay">
                                    <div class="text"><i class="fa-solid fa-star-of-life"></i></div>
                                </div>
                            </div>
                            <div class="containerImg" id='ava3'>
                                <img src={user1} alt="Avatar" class="imageAvat" />
                                <div class="overlay">
                                    <div class="text"><i class="fa-solid fa-star-of-life"></i></div>
                                </div>
                            </div>
                            <div class="containerImg" id='ava4'>
                                <img src={user4} alt="Avatar" class="imageAvat" />
                                <div class="overlay">
                                    <div class="text"><i class="fa-solid fa-star-of-life"></i></div>
                                </div>
                            </div>
                            <div class="containerImg" id='ava5'>
                                <img src={user1} alt="Avatar" class="imageAvat" />
                                <div class="overlay">
                                    <div class="text"><i class="fa-solid fa-star-of-life"></i></div>
                                </div>
                            </div>
                        </div>


                        <div className='imagetxt'>
                            <div className='starCont'>
                                <div className='starrow'>
                                    <div className='starsBox'>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <div className='starstxt'>
                                        <h4>5.0</h4>
                                    </div>
                                </div>
                                <p className='greytxt1'>From 200+ happy users</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Home
