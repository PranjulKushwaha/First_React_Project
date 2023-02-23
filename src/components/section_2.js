const SectionTwo = () => {
    return (
        <div className="container my-5 py-5 text-center border-bottom">
            <p className=" mt-3 bg-success-subtle  text-success-emphasis border border-border-success mx-auto px-4 rounded-pill" style={{ width: "max-content", }}>Reach goals that matter</p>
            <h2 className=" mt-1 mb-4 fw-bolder">
                One product, unlimited solutions
            </h2>
            <p className="col-8 mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iusto ipsum amet.
            </p>

            <div className="row flex-column-reverse flex-md-row py-5">
                <div className="col-12 col-md-6 d-flex flex-column  justify-content-center p-4  text-start">
                    <p className="" style={{ color: 'var(--bs-purple)', fontFamily: 'cursive' }}>More Speed , Less Spend.</p>
                    <h3 className="fw-bolder">Keep Projects on shedule</h3>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta temporibus cum quis aliquam hic facilis voluptatum accusamus! Commodi omnis libero distinctio dolor, molestias a minus.
                    </p>
                    <ul className='list-unstyled'>
                        <li> <i className="text-success fas fa-check"></i> Lorem, ipsum dolor.</li>
                        <li> <i className="text-success fas fa-check"></i> Lorem, ipsum.</li>
                        <li> <i className="text-success fas fa-check"></i> Lorem ipsum dolor sit.</li>
                    </ul>

                </div>
                <div className="col-12 col-md-6">
                    <img className="img-fluid" src={require('../assets/featureOne.png')} alt="" />
                </div>
            </div>


            <div className="row py-5">
                <div className="col-12 col-md-6">
                    <img className="img-fluid" src={require('../assets/featureOne.png')} alt="" />
                </div>
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center p-4  text-start">
                    <p className="" style={{ color: 'var(--bs-purple)', fontFamily: 'cursive' }}>More Speed , Less Spend.</p>
                    <h3 className="fw-bolder">Keep Projects on shedule</h3>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta temporibus cum quis aliquam hic facilis voluptatum accusamus! Commodi omnis libero distinctio dolor, molestias a minus.
                    </p>
                    <ul className='list-unstyled'>
                        <li> <i className="text-success fas fa-check"></i> Lorem, ipsum dolor.</li>
                        <li> <i className="text-success fas fa-check"></i> Lorem, ipsum.</li>
                        <li> <i className="text-success fas fa-check"></i> Lorem ipsum dolor sit.</li>
                    </ul>

                </div>
            </div>


            <div className="row flex-column-reverse flex-md-row py-5">
                <div className="col-12 col-md-6 d-flex flex-column  justify-content-center p-4  text-start">
                    <p className="" style={{ color: 'var(--bs-purple)', fontFamily: 'cursive' }}>More Speed , Less Spend.</p>
                    <h3 className="fw-bolder">Keep Projects on shedule</h3>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta temporibus cum quis aliquam hic facilis voluptatum accusamus! Commodi omnis libero distinctio dolor, molestias a minus.
                    </p>
                    <ul className='list-unstyled'>
                        <li> <i className="text-success fas fa-check"></i> Lorem, ipsum dolor.</li>
                        <li> <i className="text-success fas fa-check"></i> Lorem, ipsum.</li>
                        <li> <i className="text-success fas fa-check"></i> Lorem ipsum dolor sit.</li>
                    </ul>

                </div>
                <div className="col-12 col-md-6">
                    <img className="img-fluid" src={require('../assets/featureOne.png')} alt="" />
                </div>
            </div>

        </div>

    );
}
export default SectionTwo;