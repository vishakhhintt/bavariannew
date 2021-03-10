import React from 'react';




export async function getStaticProps(context) {
   

   const res = await fetch(`https://liverpoolbavarian.com/admBenz/get_our_services`)
   const data = await res.json()
   
      if(!data)
      {
         return {
            props : {
               loaded:false,
               services:null,
         }};
         
      }
      else
      {
         return {
            props : {

               services:data    

         }};
         
      }
   }

export default function service(props) {
  return (
    <div>
       
     
        <section className="justify-content-center services-banner">
            <div className="container">
                <div className="col-12 col-lg-8 col-md-8 col-sm-9 py-5 my-2 services-title">
                <p className="wow fadeInUp animated animated animated" ></p>
                </div>
            </div>
        </section>
      <div className="container-fluid">
         <div className="col-12 px-0">
            <section className="scrvice-sec">
               <div className="container">
                  <h2 className="text-center wow fadeIn animated d-block d-lg-none">We fit out our premises with the latest servicing, 
                     testing, repair and diagnostic equipment, and 
                     this allows us  to offer a wider range of  
                     automotive services
                  </h2>
                  <h2 className="text-center wow fadeIn animated d-none d-lg-block">We fit out our premises with the latest servicing, <br/>
                     testing, repair and diagnostic equipment, and <br/>
                     this allows us  to offer a wider range of  <br/>
                     automotive services
                  </h2>
                  <div className="col-12">
                     <div className="row">
                        {
                      
                        props.services.map((serv,k)=>{ 
                           var arr = {0:'cust-mt-1', 1:'cust-mt-2', 3:'cust-mt-1', 4:'cust-mt-2',6:'cust-mt-1', 7:'cust-mt-2',9:'cust-mt-1', 10:'cust-mt-2'};
                          
                        return (  

                        <div key={serv.os_title}  className={"col-12 col-md-4 wow "+ arr[k] +" fadeInUp animated scrvice-hover"}>
                           <div className="card card-service">
                              <figure>
                                 <img className="card-img-top" src={serv.os_image} alt={serv.os_image}/>
                              </figure>
                              <div className="card-body">
                                 <p className="card-text">{serv.os_title}
                                 </p>
                              </div>
                           </div>
                        </div>
                         )                     
                        })}     

                  
                     </div>
                  </div>
                  <div className="col-12 my-5 custom-mar">
                     <h2 className="custom-service-pad wow fadeInUp  animated">Call us now to book <br/>
                        in for a service
                     </h2>
                     <a href="tel:01512713907"><p className="call-ico-bot mt-4 wow fadeInUp  animated">0151 271 3907  </p></a>
                  </div>
               </div>
            </section>
         </div>
      </div>
      </div>
        
  )
}