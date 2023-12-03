import React from 'react'
import triangle from "./Images/triangle.png";

const Footer = () => {
    return (
        <>

            <footer class="footer">
                <div class="footcontainer">
                    <div class="row">
                        <div class="footer-col">
                            <div class="logoBox">
                                <div class="logorow">
                                    <div class="triangle">
                                        <img src={triangle}
                                        />
                                    </div>
                                    <div class="logoname">Milton</div>
                                </div>

                            </div>
                            <ul>
                                <li><a href="#" id='foologtxt'>A short text explaining

                                    why my startup is so cool</a></li>
                                <li><a href="#">© My super start-up

                                </a></li>
                            </ul>
                            <div class="social-links">
                                <a href="#" id='tr'><i class="fab fa-twitter" ></i></a>
                                <a href="#" id='fb'><i class="fab fa-facebook-f" ></i></a>
                                <a href="#" id='linked'><i class="fab fa-linkedin-in" ></i></a>
                            </div>
                        </div>
                        <div class="footer-col">
                            <h4>Products</h4>
                            <ul>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>

                        </div>
                        <div class="footer-col">
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="#">Change log</a></li>
                                <li><a href="#">Help center</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>

                        </div>
                        <div class="footer-col">
                            <h4>Others</h4>
                            <ul>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Affiliation</a></li>
                                <li><a href="#">Press</a></li>
                            </ul>
                        </div>
                        <div class="footer-col" id='footlst'>
                            <h4>
                                From the blog</h4>
                            <ul>
                                <li><a href="#">Mastering Your Schedule: Top Time Management Techniques for Balancing Work and Life</a></li>
                                <li><a href="#">
                                    Organizing Your Calendar for Enhanced Productivity and Focus</a></li>
                                <li><a href="#">The Power of Prioritization: Effective Strategies for Managing Your Time and Tasks
                                </a></li>
                                <li><a href="#">Maximizing Your Minutes: Essential Tips for Streamlining Your Daily Routine and Calendar
                                </a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </footer>








        </>
    )
}

export default Footer
