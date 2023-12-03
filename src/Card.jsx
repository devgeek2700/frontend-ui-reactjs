import React from 'react'
import c1 from "./components/Images/c1.png"
import c2 from "./components/Images/c1.png"
import c3 from "./components/Images/c3.png"
import c4 from "./components/Images/c4.png"
import c5 from "./components/Images/c5.png"
import c6 from "./components/Images/c6.png"


const Card = () => {
    return (
        <>
            <section className='CardCont' id='Card'>
                <div className='bluetxt slide_up' id='bluecard'>
                    <p >And so much more... 💼</p>
                </div>

                <p id='textbigcd' className='slide_up'>Our features to make your life easier</p>

                <div className='cardBox slide_up'>
                    <div className='cardrow'>

                        <div className='cardHero'>
                            <div className='cardimgbox'>
                                <img src={c1} alt="" className='cdImg' />
                            </div>
                            <div className='cardtextbox'>
                                <div className='cdsubbox1' id='cdsubbohhx1'>
                                    <p >Cross-Device Sync</p>
                                </div>
                                <p className='cdtext'>Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.</p>
                            </div>
                        </div>

                        <div className='cardHero'>
                            <div className='cardimgbox'>
                                <img src={c2} alt="" className='cdImg' />
                            </div>
                            <div className='cardtextbox'>
                                <div className='cdsubbox1' id='cdsubbohhx2'>
                                    <p >Auto Event Import</p>
                                </div>
                                <p className='cdtext'>Automatically import events from emails, social media, and other sources, so you never miss a beat or have to manually input details.</p>
                            </div>
                        </div>

                        <div className='cardHero'>
                            <div className='cardimgbox'>
                                <img src={c3} alt="" className='cdImg' />
                            </div>
                            <div className='cardtextbox'>
                                <div className='cdsubbox1' id='cdsubbohhx3'>
                                    <p >Task Delegation</p>
                                </div>
                                <p className='cdtext'>Easily assign tasks to team members, family, or friends, promoting shared responsibility and seamless collaboration.</p>
                            </div>
                        </div>


                    </div>

                </div>


                {/* 2 */}
                <div className='cardBox slide_up'>
                    <div className='cardrow'>

                        <div className='cardHero'>
                            <div className='cardimgbox'>
                                <img src={c4} alt="" className='cdImg' />
                            </div>
                            <div className='cardtextbox'>
                                <div className='cdsubbox1' id='cdsubbohhx4'>
                                    <p >Voice Command Integration</p>
                                </div>
                                <p className='cdtext'>Quickly create events, set reminders, or reschedule appointments with voice commands, thanks to compatibility with popular virtual assistants.</p>
                            </div>
                        </div>

                        <div className='cardHero'>
                            <div className='cardimgbox'>
                                <img src={c5} alt="" className='cdImg' />
                            </div>
                            <div className='cardtextbox'>
                                <div className='cdsubbox1' id='cdsubbohhx5'>
                                    <p >Customizable Alerts</p>
                                </div>
                                <p className='cdtext'>Personalize notification types and timings for events, tasks, and goals, ensuring you stay on track and informed without feeling overwhelmed.</p>
                            </div>
                        </div>

                        <div className='cardHero'>
                            <div className='cardimgbox'>
                                <img src={c6} alt="" className='cdImg' />
                            </div>
                            <div className='cardtextbox'>
                                <div className='cdsubbox1' id='cdsubbohhx6'>
                                    <p >Privacy Protection</p>
                                </div>
                                <p className='cdtext'>Safeguard your personal information and event details with our robust security measures, including end-to-end encryption and optional password protection.</p>
                            </div>
                        </div>


                    </div>

                </div>

            </section>
        </>
    )
}

export default Card
