const Footer = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-md-12 col-12 col-lg-3 my-3 my-lg-0">

          <svg className=" ms-5 mb-3" style={{ height: '50px' }} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path style={{ fill: 'var(--bs-purple)' }} d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z">
            </path>
          </svg>
          <p className="p-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas iste vero repellat vel, repudiandae veniam sequi error perspiciatis, dicta mollitia laborum quis, nostrum tempore.</p>
        </div>
        <div className="col-12 col-lg-3 col-md-4">
          <h4 className="">Products</h4>
          <ul className="list-unstyled">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </div>
        <div className="col-12 col-lg-3 col-md-4">
          <h4 className="">Resources</h4>
          <ul className="list-unstyled">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </div>
        <div className="col-12 col-lg-3 col-md-4">
          <h4 className="">Company</h4>
          <ul className="list-unstyled">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </div>
      </div>
      <div className=" mt-5 container d-flex justify-content-md-between flex-column flex-md-row align-items-lg-center">
        <div className="container ">
          <p className=""> &copy; Pranjul Kushwaha , All rights Reserved</p>
        </div>
        <div className="container d-flex flex-wrap">
                    
          <a href='/' className="text-decoration-none d-flex justify-content-center align-items-center p-2 bg-body-tertiary text-white  rounded-circle p-2 m-3" style={{height:'60px',width:'60px'}}  >
          <i className="fa-2x fab fa-facebook-f"  ></i>
          </a>
            
          <a href='/' className="text-decoration-none d-flex justify-content-center align-items-center p-2 bg-body-tertiary text-white  rounded-circle p-2 m-3" style={{height:'60px',width:'60px'}}  >
          <i className="fa-2x fab fa-twitter" ></i>
          </a>
            
          <a href='/' className="text-decoration-none d-flex justify-content-center align-items-center p-2 bg-body-tertiary text-white  rounded-circle p-2 m-3" style={{height:'60px',width:'60px'}}  >
          <i className="fa-2x fas fab fa-youtube"  ></i>
          </a>
            
          <a href='/' className="text-decoration-none d-flex justify-content-center align-items-center p-2 bg-body-tertiary text-white  rounded-circle p-2 m-3" style={{height:'60px',width:'60px'}}  >
          <i className="fa-2x fas fab fa-instagram" ></i>
          </a>


        </div>
      </div>
    </div>
  );
}
export default Footer;