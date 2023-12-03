import React from 'react'
import msgGirl from "./components/Images/msgGirl.png"

const Ready = () => {
    return (
        <>
            <section className='readybox' id='Admin'>

                <div className='bluetxt slide_up' id='blueboxpfqs'>
                    <p >Last call Baby! 🚀</p>
                </div>

                <p id='redapara' className='slide_up '>Ready to start?</p>
                <p className='greytxt slide_up' id='readyget'>Here you should explain how cool your app is. Remember, <br /> focus on the benefits for your users, not on the features. </p>
                <div>
                    <button className='blkBtn slide_up' id='redbtn'> Get started, it's free </button>
                </div>

                <div className='redabox'>
                    <div className='msgCont'>
                        <div className='msgrow'>
                            <div className='msgGirlimg '>
                                <img src={msgGirl} alt="" className='slide_up reaimg' />
                            </div>
                            <div className='msgGirlBox'>
                                <div className='msgGirlsubBox slide_up' id='rdymsghero'>
                                    <p id='textbigmsg1'>I never missed a call again, the AI-drivenfeature  <br /> is a game changer for me! </p>
                                    <h2 id='headfin'>Adam, Solo founder </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Ready
