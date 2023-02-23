const SectionThree = () => {
    return (
        <div className="container my-5 py-5 text-center">
            <h2 className="fw-bolder">
                Don't take our word for it
            </h2>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet et saepe architecto vero consequuntur quis.</p>
            <div className="row py-4 mt-3">
                <div className="  col-8  col-lg-4 py-2 mx-auto">
                    <div className=" py-3 container bg-body-tertiary">
                        <img src={require('../assets/personOne.jpeg')} alt="" height="80" className=' mx-auto my-2 rounded-circle' />
                        <figure>
                            <blockquote className="blockquote py-2">
                                <p>Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before..</p>
                            </blockquote>
                            <figcaption className="blockquote-footer my-3">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div className="  col-8  col-lg-4 py-2 mx-auto">
                    <div className=" py-3 container bg-body-tertiary">
                        <img src={require('../assets/personTwo.jpeg')} alt="" height="80" className=' mx-auto my-2 rounded-circle' />
                        <figure>
                            <blockquote className="blockquote py-2">
                                <p>Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before..</p>
                            </blockquote>
                            <figcaption className="blockquote-footer my-3">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div className="  col-8  col-lg-4 py-2 mx-auto">
                    <div className=" py-3 container bg-body-tertiary">
                        <img src={require('../assets/personThree.jpeg')} alt="" height="80" className=' mx-auto my-2 rounded-circle' />
                        <figure>
                            <blockquote className="blockquote py-2">
                                <p>Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before..</p>
                            </blockquote>
                            <figcaption className="blockquote-footer my-3">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default SectionThree;