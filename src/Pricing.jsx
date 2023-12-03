import React from 'react'

const Pricing = () => {

    return (
        <>
            <section className='pricebox' id='Pricing'>
                <div className='bluetxt slide_up' id='blueboxprrr'>
                    <p >Pricing and plans 💰</p>
                </div>

                <p id='textbigpr' className='slide_up'>Find the best plan for your needs</p>


                <div class="containerprrr slide_up">

                    <div class="price-toggler">
                        <span class="month active"  id='month' >Monthly</span>
                        <span class="year"  id='year' >Annually</span>
                    </div>

                    <div class="box-container">
                        {/* 1 */}
                        <div class="box">
                            <div className='bluetxt' id='blueboxprcd'>
                                <p >Free</p>
                            </div>
                            <p id='greytxtcd'>So you can see how incredible our tool is. </p>
                            <div class="price month" id='monthpr'><span>$</span>0<small id='prmonth'>/mo</small></div>
                            <div class="price year" id='yearpr'><span>$</span>0<small id='prmonth'>/mo</small></div>
                            <div>
                                <p id='freetxt'>Free for ever</p>
                            </div>

                            <div>
                                <button className='blkBtn' id='blckprrbtn'> Get started </button>
                            </div>

                            <small id='prrcredit'>No credit card needed</small>

                            <p id='firtslsthead'>What's included:</p>



                            <div class="list">
                                <p> <i class="fas fa-check"></i> 1 person </p>
                                <p> <i class="fas fa-check"></i> 10GB storage </p>
                                <p> <i class="fas fa-check"></i> 1 domain </p>
                                <p> <i class="fas fa-check"></i> team support </p>
                                <p> <i class="fas fa-check"></i> maintenance </p>
                            </div>
                        </div>
                        {/* 2 */}
                        <div class="box">
                            <div className='bluetxt' id='blueboxprcd2'>
                                <p >Starter</p>
                            </div>
                            <p id='greytxtcd'>So you can see how incredible our tool is. </p>
                            <div class="price month" id='monthpr'><span>$</span>19<small id='prmonth'>/mo</small></div>
                            <div class="price year" id='yearpr'><span>$</span>15<small id='prmonth'>/mo</small></div>
                            <div>
                                <p id='freetxt'>Billed monthly</p>
                            </div>

                            <div>
                                <button className='blkBtn' id='blckprrbtn'> Get started </button>
                            </div>

                            <small id='prrcredit'>7 days free trial no credit card needed</small>

                            <p id='firtslsthead'>What's included:</p>



                            <div class="list">
                                <p> <i class="fas fa-check"></i> 1 person </p>
                                <p> <i class="fas fa-check"></i> 10GB storage </p>
                                <p> <i class="fas fa-check"></i> 1 domain </p>
                                <p> <i class="fas fa-check"></i> team support </p>
                                <p> <i class="fas fa-check"></i> maintenance </p>
                            </div>
                        </div>

                        {/* 3 */}
                        <div class="box">
                            <div className='bluetxt' id='blueboxprcd3'>
                                <p >Pro</p>
                            </div>
                            <p id='greytxtcd'>So you can see how incredible our tool is. </p>
                            <div class="price month" id='monthpr'><span>$</span>49<small id='prmonth'>/mo</small></div>
                            <div class="price year" id='yearpr'><span>$</span>45<small id='prmonth'>/mo</small></div>

                            <div>
                                <p id='freetxt'>Billed monthly</p>
                            </div>

                            <div>
                                <button className='blkBtn' id='blckprrbtn'> Get started </button>
                            </div>

                            <small id='prrcredit'>7 days free trial no credit card needed</small>
                            <p id='firtslsthead'>What's included:</p>



                            <div class="list">
                                <p> <i class="fas fa-check"></i> 1 person </p>
                                <p> <i class="fas fa-check"></i> 10GB storage </p>
                                <p> <i class="fas fa-check"></i> 1 domain </p>
                                <p> <i class="fas fa-check"></i> team support </p>
                                <p> <i class="fas fa-check"></i> maintenance </p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Pricing;
