import React , {useRef}  from 'react'
import About from './About';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop); 

function HomePage() {

    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)
    return (
        <div>
            <div class="jumbotron jumbotron-fluid hero" >
                <div class="container hero1" >
                <div class="heroContext text-left" >
                    <h1 class="display-4 heroHead" >FURREVER</h1>
                    <div class="d-flex justify-content-start mt-4">
                        <p class="heroSubTxt">Find your FURREVER</p>
                    </div>
                    <div class="d-flex justify-content-start mt-4">
                        <div class="myBtn text-center"  onClick={executeScroll} >READ MORE</div>
                    </div>
                </div>
                </div>
            </div>
            <About myRef={myRef} />
            
        </div>

    )
}

export default HomePage
