import React, { useState }  from 'react';
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from "axios"; 
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();





   export async function getStaticProps(context) {   

   const res = await fetch(`https://liverpoolbavarian.com/admBenz/home_top_service`)
   const data = await res.json()

   const res1 = await fetch(`https://liverpoolbavarian.com/admBenz/home_data`)
   const data1 = await res1.json()



         if(!data1 && !data)
         {
            return {
               props : {
                  loaded:false,
                  hm_data:null,
                  topserv:null,
            }};
            
         }
         else
         {
            return {
               props : {
                  topserv:data,
                  sltitle:data1.slider_title, 
                  subheading:data1.slider_subheading,
                  sldesc:data1.slider_desc,
                  midserv:data1.o_service,
                  testml:data1.testimonial,   
                  topvideo:data1.videos,
                  responsive:{
                     0: {
                         items: 1,
                     },
                     450: {
                         items: 2,
                     },
                     600: {
                         items: 3,
                     },
                     1000: {
                         items: 3,
                     },
                 },
                  
                  

            }};
            
         } 
   
      
      
      
   }



export default function Home(props) {

   const [modalState, setModalState] = useState( true);
    const handleShow = event => 
    {
      setModalState( false);
    }
   console.log(modalState);

  

  const [contact, setContact] = useState({
    pname: '',
    pphone: '',
    pemail:'',
      }); 
  const [response, setResponse] = useState({
          submitted: false,
        });
  const handleInputChange = e =>
    setContact({  ...contact,[e.target.name]: e.target.value });
  const handleFormSubmit = async event => {
      setResponse({submitted: true});
      
      var formData = new FormData();
      formData.append('inputName',contact.pname);
      formData.append('inputEmail',contact.pemail);
      formData.append('inputPhone', contact.pphone);
      axios({
          method: 'post',
          url: "https://liverpoolbavarian.com/admBenz/insertMOTContactw_v",
          data: formData,
          })
          .then ((response) => {
            // console.log(response.data.data['rs']);
            if(response.data.data['rs'] ==0)
            {
            // console.log(response.data.data['errors'].inputName);
              toast.error(response.data.data['errors'].inputName) 
              toast.error(response.data.data['errors'].inputEmail) 
              toast.error(response.data.data['errors'].inputPhone) 
            
              setResponse({submitted: false});
              
            }
            else
            {
              
              toast.success(response.data.data['msg']) 
              setContact({
                  pname: '',
                  pemail: '',
                  pphone:''
                    });
              
            
                    setResponse({submitted: false});
                    setModalState( false);
            }

          })
          .catch(function (response) {
              //handle error
              console.log(response)
          });
    
            event.preventDefault();
    }

  return (
    <div>




      {/* modal window */}
      <div  className={"modal fade" + (modalState ? " show d-block" : " d-none")} tabIndex="-1" centered role="dialog">
         <div className="modal-dialog modal-dialog-centered " role="document">
               <div className="modal-content">
                  <div className="modal-header" style={{"color":"white"}}>
                     <h5 className="modal-title centered" >MOT Or Service Due ?<br/><span style={{ "font-size": "18px"}}>Send the team your details,<br/> We'll call you right back.</span></h5><br/>
                     {/* <h6 >Send the team your details,<br/> We'll call you right back.</h6> */}
                     <button type="button" className="close" onClick={handleShow}>
                           <span>&times;</span>
                     </button>
                  </div>
                  <form name="contactform" className="contactform" onSubmit= {handleFormSubmit}>
                  <div className="modal-body" style={{"position": "relative","flex": "1 1 auto","padding": "2rem"}}>
                                                
                        <div className="form-group wow fadeInUp animated">
                           <input type="text"  className="form-control rounded-0 custom-form-control" maxLength="100" id="#" name="pname" placeholder="Name" onChange={handleInputChange} value={contact.pname} />
                           
                        </div>
                        <div className="form-group wow fadeInUp animated">
                           <input type="text" className="form-control rounded-0 custom-form-control" id="#" name="pemail" maxLength="100" placeholder="Email" onChange={handleInputChange} value={contact.pemail} />
                           
                        </div>
                        <div className="form-group wow fadeInUp animated">
                           <input type="text" className="form-control rounded-0 custom-form-control" id="#" name="pphone" maxLength="20" placeholder="Phone" onChange={handleInputChange} value={contact.pphone} />
                           
                        </div>
                        
                     {/* <button type="submit" name="submit" className="btn btn-primary btn-submit rounded-0 py-2 px-5  wow fadeInUp animated">SEND</button> */}
                     

                  </div>
                  <div className="modal-footer">
                     
                     <button type="submit" name="submit" className="btn btn-primary btn-submit rounded-0 py-2 px-5  wow fadeInUp animated">SEND</button>

                  </div>
                  </form>
               </div>
         </div>
      </div>
      
   
       
   <div id="video-carousel-example2" className="carousel slide carousel-fade" data-ride="carousel" style={{zIndex:'0'}}>

      <div className="carousel-inner" role="listbox">
      
         <div className="carousel-item active">
         
            <div className="view">

               <video id="background-video" className='videoTag d-none d-sm-block' autoPlay loop muted style={{maxWidth: "100%",height:"auto"}}>
                  <source src={props.topvideo} type='video/mp4' />
               
               </video>
               <img src="img/home/mobile-banner.gif" className=" d-block d-sm-none ico-key w-100 mb-0" alt="" />
            </div>
   
         </div>
      </div> 
   </div> 
 
   <section className="bottom-banner">
      <div className="container">
         <div className="row">
            <div className="col-4 col-sm-4 nopad d-none d-md-block">
               <p className="cust-p wow fadeIn  animated">Your Auto Repair Specialist</p>
            </div>
            <div className="col-8 col-sm-8 bg-phn d-none d-md-block">
               <p className="call-ico wow fadeIn  animated"> <a href="tel:01512713907"><span className="d-none d-md-block float-left mr-1">Call Us :</span> 0151 271 3907 </a></p>
            </div>
         </div>
      </div>
      <div className="col-12 bg-phn d-block d-md-none">
         <div className="container">
            <p className="call-ico wow fadeIn  animated"><a href="tel:01512713907">Affordable Pricing : 0151 271 3907 </a></p>
         </div>
      </div>
   </section>
  
   <section className="specialise-german">
      <div className="container">
         <div className="card special-card col-12 col-lg-6 col-md-8 col-sm-9 wow headShake  animated">
            <div className="card-body">
               <h2 className="py-4 wow fadeInUp  animated">{props.sltitle}
               </h2>
   <p className="wow fadeInUp  animated">{props.subheading}</p>
               <p className="card-text py-3 wow fadeInUp  animated">{props.sldesc}</p>
               <a href="/about" className=" mb-4 special-cust-btn wow fadeInUp  animated"><i className="las la-long-arrow-alt-right" ></i></a>
            </div>
         </div>
      </div>
   </section>
   <section className="we-service">
      <div className="container">
         <div className="row">
            <div className="col-12">
               <h2 className=" wow fadeInUp  animated">Brands we specialise in</h2>
            </div>
            <div className="col-12">
               <div className="row d-flex justify-content-center">

               {
                
                props.topserv.map((itm,k)=>{ 
                   var fruits = [0,1,4,5];
                   var n = (fruits.includes(k)?'card we-service-card wow fadeInLeft animated':'card we-service-card wow fadeInRight animated');
                   
                  
                return (  
                   <>  
                   {(k==10?<div className="col-12" ><h2 className=" wow fadeInUp  animated"> Other makes and models</h2></div>:'')}
                   <div  className={n}>
                     
                      <img className="card-img-top" src={itm.image} alt="Card image cap" />
                      <div className="card-body">
                         <h5 className="card-title">{itm.heading}</h5>
                      </div>
                   </div>
                   </>
                    ) 
                  
                   })} 

               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="our-services">
      <div className="container-fluid">
         <div className="row">
            <div className="col-12 text-center">
               <h2 className=" wow fadeInUp  animated">Our services</h2>
            </div>
            {
               props.midserv.map((sitm,k)=>{ 
                return (    
                  
               <div key={sitm.s_title} className="col-12 col-lg-3 custom-col-lg-3 col-md-6 col-sm-6 hover-img wow fadeIn  animated">
                  <div className="card bg-service" style={{"background": "url("+sitm.s_image+")"}}>
                     <div className="card-body">
                <h5 className="card-title">{sitm.s_title}</h5>
                     </div>
                  </div>
               </div>
                ) 
                    
               })} 

            
         </div>
      </div>
   </section>
   <section className="ico-key-sec">
      <div className="container">
         <h2 className="text-center mb-5 wow fadeInUp  animated">Why choose us?</h2>
         <div className="col-12">
         <div className="row">
               <div className="col-12 col-sm-4 text-center why-icon  wow fadeInDown  animated">
                  <img src="img/home/key-benefits/surface1.png" className="ico-key mb-4" alt="" />
                  <p>Skilled <br />and trained technicians</p>
               </div>
               <div className="col-12 col-sm-4 text-center why-icon wow fadeInUp  animated">
                  <img src="img/home/key-benefits/car-repair.png" className="ico-key mb-4" alt="" />
                  <p>Maintaining <br />manufacturing standards</p>
               </div>
               <div className="col-12 col-sm-4 text-center why-icon wow fadeInDown  animated">
                  <img src="img/home/key-benefits/car-repair1.png" className="ico-key mb-4" alt="" />
                  <p>Free pick-up <br />and delivery</p>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="testi">
      <div className="container">
         <div className="col-12 text-center wow fadeInUp  animated">
            <h2 className="py-3">Testimonials</h2>
         </div>
         <div className="row">
            <div className="col-md-12">
                  <div id="testimonial-slider" >
                  

                  <OwlCarousel className="owl-theme" 
                     loop={true}
                     nav={true}
                     margin={10}
                     responsive={props.responsive}  
                     style={{width: "100%"}}
                     loop items={1} 
                     autoplay ={true}
                     items={3}                     
                     nav >
                     {
                     props.testml.map((titm,k)=>{
                     
                     return (  
                        <div key={titm.t_author} className="testimonial d-flex align-items-center">
                        <div className="pic">
                           <img src={titm.t_image}/>
                        </div>
                        <div className="col-12">
                           <p className="wow fadeIn  description animated">{titm.t_message}
                           </p>
                           <h6 className="wow fadeIn   animated">{titm.t_author}</h6>
                        </div>
                     </div> 
                       )                     
                     })} 
                  </OwlCarousel>






                  </div> 
               
            </div>
         </div>
      </div>
   </section>
  
   <section className="whypay">
      <div className="container-fluid m-nopad">
         <div className="col-12 bg-why-pay">
            <img src="img/home/why-pay/r-img.jpg" className="float-right r-img" alt=""/>
            <div className="col-12 pt-5 m-nomarg">
               <div className="row">
                  <div className="container">
                     <div className="wow pulse animated">
                        <div className="col-12 col-md-8 pt-3 why-sec text-white px-0">
                           <div className="col-12 pay-mpad">
                              <h2 className="pb-4 wow fadeIn  animated">Pay at <br/>your own pace</h2>
                              <p className="mb-2 wow fadeIn  animated">To make things easier, we now offer interest-free monthly instalment schemes so you can
                                 give the best of treatments to your vehicle.</p>
                                 <p className="custom-color">Subject to availability</p>
                           </div>
                           <div className="col-12 why-sec-bot text-white pt-4">
                              <div className="row">
                                 <div className="col-4 text-center">
                                    <img src="img/home/why-pay/ico1.png" className="wow fadeIn  animated" alt=""/>
                                    <p className="wow fadeIn  animated">NO INTEREST NO FEES</p>
                                 </div>
                                 <div className="col-4 text-center">
                                    <img src="img/home/why-pay/ico2.png" className="wow fadeIn  animated" alt=""/>
                                    <p className="wow fadeIn  animated">MONTHLY INSTALMENTS</p>
                                 </div>
                                 <div className="col-4 text-center">
                                    <img src="img/home/why-pay/ico3.png" className="wow fadeIn  animated" alt=""/>
                                    <p className="wow fadeIn  animated">QUICK AND EASY</p>
                                 </div>
                              </div>
                           </div>
                           
                        <div className="col-12 foot-why pay-mpad">
                              <a href="https://www.servicesureautocentres.com/">
                                 <figure>
                                   <img src="img/home/why-pay/logo.png" className="float-left" alt=""/>
                                 </figure>
                              </a>
                              <p>All loans are subject to affordability and other checks, including use of Credit Reference Agency data. You must be 18 or over. Participating Retailers only. Finance subject to 0% APR. Finance Agreement and full Ts&Cs available on application in Retailer. Finance provided by Auto Service Finance Limited. Correct at time of going to print.</p>
                           
                        </div>

                        </div>
                     </div>
                     <div className="col-12 custom-mar">
                        <h2 className="mt-5 pt-5 wow fadeInUp  animated">
                         
                        </h2>
                        <p className="mb-4 pt-5 wow fadeInUp  animated">
                          
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="book-bg">
      <div className="container">
         <div className="col-12">
            <div className="row">
               <div className="col-12 col-sm-6 brdr-r m-nopad">
                  <h2 className="wow fadeInUp  animated">  Book <br/> an appointment</h2>
                  <a href="tel:01512713907"><p className="call-ico-bot mb-4 wow fadeInUp  animated"> 0151 271 3907  </p></a>
               </div>
               <div className="col-12 col-sm-6  align-items-center trusted m-nopad">
                  <h2 className=" wow fadeInUp  animated">  Trusted specialists <br /> in auto repair</h2>
                  <br clear="all"/>
                  <div> <img src="img/Battery-sure-logo.jpg"/></div>
               </div>
            
         </div>
      </div>
      </div>
   </section>
        
      
    </div>
  )
}