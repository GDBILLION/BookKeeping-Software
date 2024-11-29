import payroll from '../assets/image/payroll.png'

const Features = () => {
  return (
    <>
        <section id="features">
        <div className="features__container">
            <h1 className="title">Everything you need to run your books.</h1>
            <p className="sub__title">Well everything you need if you aren’t that picky about minor details like tax compliance.</p>
            <div className="features__card">
                <div className="card">
                    <div className="card__detail">
                        <h1>Payroll</h1>
                        <p>Keep track of everyone&apos;s salaries and whether or not they&apos;ve been paid. Direct deposit not supported.</p>
                    </div>
                    <div className="card__detail">
                        <h1>Claim expenses</h1>
                        <p>All of your receipts organized into one place, as long as you don&apos;t mind typing in the data by hand.</p>
                    </div>
                    <div className="card__detail">
                        <h1>VAT handling</h1>
                        <p>We only sell our software to companies who don&apos;t deal with VAT at all, so technically we do all the VAT stuff they need.</p>
                    </div>
                    <div className="card__detail">
                        <h1>Reporting</h1>
                        <p>Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.</p> 
                    </div>
                </div>
                <img className="features__images" src= {payroll} alt="Payroll" />
                
            </div>
        </div>
    </section>
    </>
  )
}

export default Features