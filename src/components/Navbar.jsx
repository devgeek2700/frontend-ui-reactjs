import React from 'react'
import "../App.css"
import triangle from "./Images/triangle.png";

function Navbar() {
    return (
        <>
            <nav id="navbar1" class="navbar navbar-expand-md navbar-dark bgnav fixed-top p-3">
                <div class="container">

                    <span class="navbar-brand">
                        <div class="logoBox">
                            <div class="logorow">
                                <div class="triangle">
                                    <img src={triangle}
                                    />
                                </div>
                                <div class="logoname">Milton</div>
                            </div>

                        </div>
                    </span>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"  >
                        <span>
                            <i class="fa-solid fa-bars"></i>
                        </span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class=" navbar-nav mx-auto navtxtBox">
                            <li class="nav-item"><a class="nav-link" id="active1" href="#MainFeatures">Features</a></li>
                            <li class="nav-item"><a class="nav-link" id="active2" href="#Reviews">Testimonial</a></li>
                            <li class="nav-item"><a class="nav-link" id="active3" href="#Pricing">Pricing</a></li>
                            <li class="nav-item"><a class="nav-link" id="active3" href ="#FQuestions">FAQs</a></li>
                            <li class="nav-item"><a class="nav-link" id="active3" href="https://culture-breathe-337021.framer.app/blog">Blog</a></li>
                        </ul>

                        <ul class=" navbar-nav ms-auto">
                            <li class="nav-item"><a class="nav-link " id="activebtn1" href="#">Log in</a></li>
                            <li class="nav-item"><a class="nav-link " id="activebtn2" href="#">Get Started</a></li>
                        </ul>
                    </div>





                </div>
            </nav>







        </>
    )
}

export default Navbar
