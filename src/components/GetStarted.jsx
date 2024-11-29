import getStarted from '../assets/image/background-call-to-action.jpg';

const GetStarted = () => {
  return (
    <>
        <section className="get_started__container" id="get__started">
       <img className="get__started__img" src= {getStarted} alt="" />
       <div className="get__started__wrapper">
        <div>
            <h1>Get started today</h1>
            <p>It’s time to take control of your books. Buy our software so you can feel like you’re doing something productive.</p>
            <div className="get__started__btns">
                <a className="get__started__btn" href="#">Get 6 months free</a>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default GetStarted