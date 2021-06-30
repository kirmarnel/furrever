import React from 'react';
import { Link } from "react-router-dom";
import Logo from './assets/Logo.png';


function About(props) {

    return (
        <div ref={props.myRef} id="about" class="row container aboutMe mx-auto">
                <div class="col-lg-6">
                    <img class="rndImg" src={Logo} alt="my profilePic"/>
                </div>
                <div class="col-lg-6 text-center">
                    <h2 class="pinkTxt" >About</h2>
                    <p class="">Hi this is Furrever..an App to help you find your Forver</p>
                    <div class="d-flex justify-content-center mt-4">
                        <Link to={'/#'}>
                            <div class="myBtn text-center" >Find friend</div>
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default About