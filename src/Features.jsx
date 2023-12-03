import React from 'react'
import msgGirl from "./components/Images/msgGirl.png"
import pic21 from "./components/Images/pic21.png"
import pic3 from "./components/Images/pic3.png"
import pic4 from "./components/Images/pic4.png"
import calendra from "./components/Images/calendra.png"
import feat2 from "./components/Images/feat2.png"
import feat3 from "./components/Images/feat3.png"
import feat4 from "./components/Images/feat4.png"


const Features = () => {

    return (
        <>
            <section className='featBox' id='MainFeatures'>
                <div className='bluetxt slide_up' id='blefeat'>
                    <p >Our main features 🦸🏼</p>
                </div>

                <p id='textbig1' className='slide_up'>Discover your new superpowers</p>

                {/* 1 */}

                <div className='mnfeatcont'>
                    <div className='mnfeatrow'>
                        <div className='mnfeattxtbox' >
                            <div className='bluetxt slide_up' id='skinbox'>
                                <p >Seamless Scheduling</p>
                            </div>
                            <p id='textbig2' className='slide_up'>Focus on what matters  <br /> most for you</p>

                            <div>
                                <p className='greytxt2 slide_up'>Effortlessly plan your day with our intuitive drag-and- <br /> drop interface. Sync with multiple calendar platforms, <br /> import events from emails, and add participants with just <br /> a few clicks.</p>
                            </div>

                            <div className='msgCont'>
                                <div className='msgrow'>
                                    <div className='msgGirlimg '>
                                        <img src={msgGirl} alt="" className='slide_up' />
                                    </div>
                                    <div className='msgGirlBox'>
                                        <div className='msgGirlsubBox slide_up' >
                                            <p id='textbigmsg'>I tested many calendar apps. This app is the <br /> best of all! It saves me hours of time.</p>
                                            <h2 id='headfin'>Carla, Head of Finance </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className='mnfeatcalbox ' >
                            <img src={calendra} alt="" className='rotateImg' />
                        </div>
                    </div>
                </div>

                {/* 2 */}
                <div className='mnfeatcont' id='feathero2'>
                    <div className='mnfeatrow'>


                        <div className='mnfeatcalbox ' >
                            <img src={feat2} alt="" className='rotateImg' />
                        </div>


                        <div className='mnfeattxtbox'>
                            <div className='bluetxt slide_up' id='skinbox1'>
                                <p >Smart Reminders & Task</p>
                            </div>
                            <p id='textbig2' className='slide_up'>Never miss an important  <br /> deadline or event again</p>

                            <div>
                                <p className='greytxt2 slide_up'>Never miss an important deadline again with our AI-driven <br /> notifications. Our app intelligently analyzes your schedule <br /> to prioritize what's most important, keeping you on track <br /> and ensuring your day is productive and stress-free.</p>
                            </div>

                            <div className='msgCont'>
                                <div className='msgrow'>

                                    <div className='msgGirlBox'>
                                        <div className='msgGirlsubBox slide_up' id='featbox2'>
                                            <p id='textbigmsg'>I love how user-friendly this app is! It's
                                                <br />so easy to add events and set reminders!</p>
                                            <h2 id='headfin'>Adam, entrepreneur </h2>
                                        </div>
                                    </div>

                                    <div className='msgGirlimg ' id='rightmsgImg'>
                                        <img src={pic21} alt="" className='slide_up' />
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>

                {/* 3 */}
                <div className='mnfeatcont' id='feathero3'>
                    <div className='mnfeatrow'>
                        <div className='mnfeattxtbox'>
                            <div className='bluetxt slide_up' id='skinbox2'>
                                <p >Seamless Scheduling</p>
                            </div>
                            <p id='textbig2' className='slide_up'>Focus on what matters  <br /> most for you</p>

                            <div>
                                <p className='greytxt2 slide_up'>Effortlessly plan your day with our intuitive drag-and- <br /> drop interface. Sync with multiple calendar platforms, <br /> import events from emails, and add participants with just <br /> a few clicks.</p>
                            </div>

                            <div className='msgCont'>
                                <div className='msgrow'>
                                    <div className='msgGirlimg '>
                                        <img src={pic3} alt="" className='slide_up' id='msg3' />
                                    </div>
                                    <div className='msgGirlBox'>
                                        <div className='msgGirlsubBox slide_up' >
                                            <p id='textbigmsg'>I tested many calendar apps. This app is the <br /> best of all! It saves me hours of time.</p>
                                            <h2 id='headfin'>Carla, Head of Finance </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className='mnfeatcalbox ' >
                            <img src={feat3} alt="" className='rotateImg' />
                        </div>
                    </div>
                </div>

                {/* 4 */}

                <div className='mnfeatcont' id='feathero4'>
                    <div className='mnfeatrow'>


                        <div className='mnfeatcalbox ' >
                            <img src={feat4} alt="" className='rotateImg' />
                        </div>


                        <div className='mnfeattxtbox'>
                            <div className='bluetxt slide_up' id='skinbox4'>
                                <p >Smart Reminders & Task</p>
                            </div>
                            <p id='textbig2' className='slide_up'>Never miss an important  <br /> deadline or event again</p>

                            <div>
                                <p className='greytxt2 slide_up'>Never miss an important deadline again with our AI-driven <br /> notifications. Our app intelligently analyzes your schedule <br /> to prioritize what's most important, keeping you on track <br /> and ensuring your day is productive and stress-free.</p>
                            </div>

                            <div className='msgCont'>
                                <div className='msgrow'>

                                    <div className='msgGirlBox'>
                                        <div className='msgGirlsubBox slide_up' id='featbox2'>
                                            <p id='textbigmsg'>I love how user-friendly this app is! It's
                                                <br />so easy to add events and set reminders!</p>
                                            <h2 id='headfin'>Adam, entrepreneur </h2>
                                        </div>
                                    </div>

                                    <div className='msgGirlimg ' id='rightmsgImg'>
                                        <img src={pic4} alt="" className='slide_up' />
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>


            </section>
        </>
    )
}

export default Features
