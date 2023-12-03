import React from 'react'

function FQuestions() {

    return (
        <>
            <section className='fquesbox' id='FQuestions'>
                <div className='bluetxt slide_up' id='blueboxpfqs'>
                    <p >Pricing and plans 💰</p>
                </div>

                <p id='textbigpr' className='slide_up'>Find the best plan for your needs</p>

                <div class="accordion-wrapper slide_up">
                    <div class="accordion">
                        <input type="radio" name="radio-a" id="check1" checked />
                        <label class="accordion-label headacc" for="check1">Can I cancel my subscrition?</label>
                        <div class="accordion-content">
                            <p>You can cancel your plan whenever you’d like. You’ll be downgraded to the free plan. You won’t be locked out of any projects that have paid plans.</p>
                        </div>
                    </div>
                    <div class="accordion">
                        <input type="radio" name="radio-a" id="check2" />
                        <label class="accordion-label headacc" for="check2">What happens when my trial ends?</label>
                        <div class="accordion-content">
                            <p>When your trial period ends, your account will automatically be downgraded to our free plan, with limited features and functionality. To continue enjoying the full benefits of our service, you can upgrade to one of our paid plans at any time during or after the trial. Your data and settings will be preserved, ensuring a seamless transition as you move forward with our SaaS platform.</p>
                        </div>
                    </div>
                    <div class="accordion">
                        <input type="radio" name="radio-a" id="check3" />
                        <label class="accordion-label  headacc" for="check3">What payment methods do you offer?</label>
                        <div class="accordion-content">
                            <p>You can cancel your plan whenever you’d like. You’ll be downgraded to the free plan. You won’t be locked out of any projects that have paid plans.</p>
                        </div>
                    </div>
                    <div class="accordion">
                        <input type="radio" name="radio-a" id="check4" />
                        <label class="accordion-label headacc" for="check4">What is your refund policy?</label>
                        <div class="accordion-content">
                            <p>When your trial period ends, your account will automatically be downgraded to our free plan, with limited features and functionality. To continue enjoying the full benefits of our service, you can upgrade to one of our paid plans at any time during or after the trial. Your data and settings will be preserved, ensuring a seamless transition as you move forward with our SaaS platform.</p>
                        </div>
                    </div>
                    <div class="accordion">
                        <input type="radio" name="radio-a" id="check5" />
                        <label class="accordion-label headacc" for="check5">Do you offer discounts to educational institutions ?</label>
                        <div class="accordion-content">
                            <p>You can cancel your plan whenever you’d like. You’ll be downgraded to the free plan. You won’t be locked out of any projects that have paid plans.</p>
                        </div>
                    </div>

                </div>



            </section>    </>
    )
}

export default FQuestions
