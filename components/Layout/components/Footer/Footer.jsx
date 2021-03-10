import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div>
        <section className="disc">
         <div className="container-fluid">
         <div className="col-12 row px-0 mx-0">
         <div className="col-12 col-lg-1"></div>
         <div className="col-12 col-xl-10 col-lg-10 col-md-12 col-sm-12 m-pad text-center d-flex align-items-center p-0">
            <div className="row col-12 d-flex justify-content-center p-0">
               <div className="col-12">
            <h5 className="m-center mb-3">OUR AFFILIATIONS</h5>
            </div>
               <div className="col-12">
               <img src="img/home/ico-1.png" className="certi-logo" alt=""/>
               <img src="img/home/ico-2.png" className="certi-logo" alt=""/>
               <img src="img/home/ico-3.png" className="certi-logo" alt=""/>
               {/* <img src="img/home/affiliations-right.png" className="certi-logo" alt=""/> */}
               </div>
               </div>
            </div>
         <div className="col-12 col-lg-1"></div>
            </div>
         </div>
      </section>
             <footer className="footer">
         <div className="container-fluid m-nopad">
            <div className="col-12 row px-0 mx-0">
               <div className="col-12 col-lg-1">
               </div>
               <div className="col-6 col-lg-2 col-md-3 col-sm-6 service-footer m-nopad">
                  <ul className="pl-3">
                     <h3>SERVICES</h3>
                     <li>
                     <Link className="wow fadeIn animated" href="/service"><a>Car Servicing And Repairs</a></Link>
                         {/* <a href="#" className="wow fadeIn animated"> Car Servicing And Repairs </a> */}
                     </li>
                     <li>
                     <Link className="wow fadeIn animated" href="/service"><a>Mot Testing</a></Link> 
                     </li>
                     <li>
                     <Link className="wow fadeIn animated" href="/service"><a>Clutches And Brakes</a></Link> 
                     </li>
                     <li>
                     <Link className="wow fadeIn animated" href="/service"><a>Exhausts</a></Link> 
                        {/* <a href="#" className="wow fadeIn animated">Exhausts</a> */}
                     </li>
                     <li>
                     <Link className="wow fadeIn animated" href="/service"><a>Air Conditioning</a></Link> 
                        
                     </li>
                     <li>
                     <Link className="wow fadeIn animated" href="/service"><a>Steering And Suspension</a></Link> 
                        {/* <a href="#" className="wow fadeIn animated">Steering And Suspension</a> */}
                     </li>
                  </ul>
               </div>
               <div className="col-6 col-lg-2 col-md-3 col-sm-6 nav-footer m-nopad">
                  <ul className="pl-3">
                     <h3>NAVIGATION</h3>
                     {/* <li><a href="#" className="wow fadeIn animated">FAQs</a></li> */}
                     <li>
                     <Link className="wow fadeIn animated" href="/about"><a>About Us</a></Link>
                     </li>
                     <li>
                     <Link className="wow fadeIn animated" href="/booking"><a>Book Online</a></Link>
                        {/* <a href="#" className="wow fadeIn animated">Book Online </a> */}
                     </li>
                     <li>
                     <Link className="wow fadeIn animated" href="/testimonial"><a>Testimonials</a></Link>  
                        {/* <a href="#" className="wow fadeIn animated">Testimonials </a> */}
                     </li>
                     {/* <li><a href="#" className="wow fadeIn animated">Sign Up </a></li> */}
                     <li>
                     <Link className="wow fadeIn animated" href="/contact"><a>Contact Us</a></Link>  
                        {/* <a href="#" className="wow fadeIn animated">Contact Us </a> */}
                     </li>
                  </ul>
               </div>
               <div className="col-6 col-lg-2 col-md-3 col-sm-6 bg-sub-footer m-pad">
                  <h3>ADDRESS</h3>
                  <ul>
                     <p className="wow fadeIn animated">Liverpool Bavarian Ltd <br/> 82-84 vauxhall Rd, <br/> Liverpool L3 6DI, <br/> United Kingdom </p>
                  </ul>
                  
                  <div className="col-12 p-0">
                  <div className="social">
                  <a className="wow fadeIn  animated pb-1 w-100" href="tel:01512713907"><strong><i className="fa fa-phone fa-rotate-90 mr-1" aria-hidden="true"></i>0151 271 3907 </strong></a>
                  <a className="wow fadeIn  animated w-100" href="tel:07902629444"><strong><i className="fa fa-phone fa-rotate-90 mr-1" aria-hidden="true"></i>
                  0790 262 9444 </strong></a>
                  </div>
               </div>

               </div>
               <div className="col-6 col-lg-4 col-md-3 col-sm-6 bg-sub-footer m-pad">
                  <h3>CONTACT US</h3>
                  <div className="row">
                  <div className="col-12 pb-3">
                  <div className="social m-center-0">
                     <a href="https://www.facebook.com/LiverpoolBavarian/" className="wow fadeIn animated animated" ><span className="fab fa-facebook-f"></span></a>
                     <a href="#" className="wow fadeIn animated animated" ><span className="fab fa-linkedin-in"></span></a>
                     <a href="#" className="wow fadeIn animated animated" ><span className="fab fa-twitter"></span></a>
                  </div>
                  </div>
                  <div className="col-12">
                     <a href="#" className="wow fadeIn animated animated" > <img src="img/home/footer-logo/footer1.png" className="certi-logo1" alt=""/> </a>
                     <a href="#" className="wow fadeIn animated animated" > <img src="img/home/footer-logo/footer2.png" className="certi-logo1" alt=""/> </a>
                     <a href="#" className="wow fadeIn animated animated" > <img src="img/home/footer-logo/footer3.png" className="certi-logo1" alt=""/> </a>
                  </div>
                  </div>
                  
               </div>
               <div className="col-12 col-lg-1 bg-sub-footer bg-sub-footer1">
               </div>
            </div>
         </div>
      </footer>

      <section className="footer-bottom">
         <div className="container">
            <div className="row">
               <div className="col-12 col-md-6 m-center">
                  <p className="text-white wow fadeIn animated">Powered by <a href="https://hintt.com/" target="_blank">Hintt</a></p>
               </div>
               <div className="col-12 col-md-6  cust-text-right m-center">
                  <p className="text-white wow fadeIn animated foot-p">Copyright © 2020 Liverpool Bavarian Ltd. all rights reserved</p>
               </div>
            </div>
         </div>
      </section>
        {/* <button onClick="topFunction()" id="backToTop" className="backToTop" title="Go to top"><i className="fas fa-angle-up bk-top-ico"></i></button> */}
      
    </div>
  )
}
