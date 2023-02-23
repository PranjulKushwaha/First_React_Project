const SectionThree = () => {
    return (
        <div className="container my-5 py-5 text-center">
            <h2 className="fw-bolder">
                Don't take our word for it
            </h2>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet et saepe architecto vero consequuntur quis.</p>
            <div className="row py-4 mt-3">
                <div className="  col col-lg-4">
                    <div className=" py-3 container bg-body-tertiary">
                        <img src={require('../assets/personOne.jpeg')} alt="" height="80" className=' mx-auto my-2 rounded-circle' />
                        <figure>
                            <blockquote class="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div className="  col col-lg-4">
                    <div className=" py-3 container bg-body-tertiary">
                        <img src={require('../assets/personTwo.jpeg')} alt="" height="80" className=' mx-auto my-2 rounded-circle' />
                        <figure>
                            <blockquote class="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div className="  col col-lg-4">
                    <div className=" py-3 container bg-body-tertiary">
                        <img src={require('../assets/personThree.jpeg')} alt="" height="80" className=' mx-auto my-2 rounded-circle' />
                        <figure>
                            <blockquote class="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
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