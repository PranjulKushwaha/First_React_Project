const Hero = () => {
    return (
            <div className="container text-center py-4 mt-5">
                <div className=" col col-md-8 mx-auto">

                    <h1>Landing template for startups </h1>
                    <p className="text-muted" style={{ textAlign: 'justified' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis libero sit corporis quo, incidunt commodi neque? Velit quae, numquam eius laudantium sunt dolorem repellendus ea.
                    </p>
                    <div className="container text-center">
                        <button className="btn text-light rounded-0 m-3 " style={{backgroundColor:'var(--bs-purple)'}}>Start free trial</button>
                        <button className="btn btn-secondary rounded-0 m-3">Start free trial</button>
                    </div>
                    <img className='img-fluid my-4' src={require('../assets/hero.jpg')} alt="Hero " />
                </div>
            </div>
       
    );
}
export default Hero