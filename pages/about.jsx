import React from 'react'


export async function getStaticProps(context) {
   

const res = await fetch(`https://liverpoolbavarian.com/admBenz/get_about_us`)
const data = await res.json()

   if(!data)
   {
      return {
         props : {
            loaded:false,
            aboutdtl:null,
      }};
      
   }
   else
   {
      return {
         props : {
         // loaded:true,
         aboutdtl:data,
         a_title : data.a_title,
         a_desc : data.a_desc,
         a_image1 : data.a_image1,
         a_image2 : data.a_image2,
         a_image3 : data.a_image3,
         a_title1 : data.a_title1,
         a_image : data.a_image,
         a_desc1 : data.a_desc1
      }};
      
   }
}

export default function about(props) {
  return (
    <div>
    <section className="justify-content-center about-banner">
             <div className="container">
                <div className="col-12 col-lg-8 col-md-8 col-sm-9 py-5 my-2 services-title">
                  <p className="wow fadeInUp animated animated animated" ></p> 
                </div>
             </div>
          </section>
          <div className="container-fluid">
             <div className="col-12 why-choose-img px-0">
                  <section className="specialise">
                     <div className="container">

                        
                           <div className="row">
                              <div className="col-12 col-md-6 about-specialise wow fadeInLeft animated" style={{"background": "url("+ props.a_image1 +"),no-repeat"}} ></div>
                                 <div className="col-12 col-md-6 pl-5">
                                    <h2 className="wow fadeInRight animated">{props.a_title}                                     
                                       
                                    </h2>
                                    <div className="wow fadeInRight  animated">
                                       <div dangerouslySetInnerHTML={{
                                        __html: props.a_desc
                                    }} >
                                          
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           

                         
                              
                           
                        

                     </div>
                  </section>
                <section className="bott-img">
                   <div className="container">
                      <div className="row">
                         <div className="col-12 pb-4">
                            <div className="row">
                            <div className="col-12 col-sm-5">
                               <img src={props.a_image2}  className="img-fluid p-1 wow fadeIn animated" alt=""/>
                            </div>
                            <div className="col-12 col-sm-5 d-flex align-items-end">
                               <img src={props.a_image3} className="img-fluid p-1 wow fadeIn animated" alt=""/>
                            </div>
                            </div>
                         </div>
                         <div className="col-12">
                            <div className="row">
                               <div className="col-12 col-md-6">
                                  <img src={props.a_image} className="img-fluid wow fadeIn animated" alt=""/>
                               </div>
                               <div className="col-12 col-md-6 m-pad">
                                  <h2 className="wow fadeIn animated">{props.a_title1}
                                  </h2>
                                  <p className="wow fadeIn animated">
                                       <div dangerouslySetInnerHTML={{
                                             __html: props.a_desc1
                                          }} >
                                               
                                       </div>
                                  </p>
                               </div>
                            </div>
                         </div>
                         <div className="col-12 custom-mar">
                            <h2 className="mob-mp wow fadeInUp  animated">Call us now to book <br/>
                               in for a service
                            </h2>
                            <a href="tel:01512713907"><p className="call-ico-bot mt-4 wow fadeInUp  animated">0151 271 3907  </p></a>
                         </div>
                      </div>
                   </div>
                </section>
             </div>
          </div>
          </div>
        
  )
}