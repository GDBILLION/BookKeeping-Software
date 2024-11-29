import transistor from '../assets/image/transistor.svg';
import tuple from '../assets/image/tuple.svg';
import statickit from '../assets/image/statickit.svg';
import mirage from '../assets/image/mirage.svg';
import laravel from '../assets/image/laravel.svg';
import statamic from '../assets/image/statamic.svg';

const Hero = () => {
  return (
    <>
        <section id="hero">
        <div className="hero__wrapper">
            <div>
                <h1>Accounting <span>made simple</span> for small businesses.</h1>
                <p className="booking">Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.</p>
                <div className="hero__btns">
                    <a className="hero__btn first" href="#">Get 6 months free</a>
                    <a className="hero__btn second" href="#"> <i className='bx bx-play'></i> Watch video </a>
                </div>
                <p className="Trusted__companies">Trusted by these six companies so far</p>         
                <div className="companies">
                    <img src= {transistor} alt="" />
                    <img src={tuple} alt="" />
                    <img src= {statickit} alt="" />
                    <img src= {mirage} alt="" />
                    <img src= {laravel} alt="laravel" />
                    <img src= {statamic} alt="" />
                </div>      
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero