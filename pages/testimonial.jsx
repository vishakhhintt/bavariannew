import React from 'react'

export async function getStaticProps(context) {
   

   const res = await fetch(`https://liverpoolbavarian.com/admBenz/get_testimonial`)
   const data = await res.json()
   
      if(!data)
      {
         return {
            props : {
               loaded:false,
               testmnl:null,
         }};
         
      }
      else
      {
         return {
            props : {

               testmnl:data    

         }};
         
      }
   }


export default function testimonial(props) {
  return (
    <div>  
        <section className="justify-content-center testi-banner">
            <div className="container">
                <div className="col-12 col-lg-8 col-md-8 col-sm-9 py-5 my-2 services-title">
                <p className="wow fadeInUp animated" ></p>
                </div>
            </div>
        </section>
      <div className="container-fluid">
         <div className="col-12 px-0">
            <section className="testi-sec">
               <div className="container">
                     <div className="row">
                        <div className="col-12">
                           <h2 className="my-4 text-center  wow fadeIn animated">What people say</h2>
                        </div>
                        <div className="col-12">
                           <div className="card-columns">
                           {
                           props.testmnl.map((tstmnl,k)=>{ 
                           return ( 
                              <div className="card mb-4" key="tstmnl">
                                 <div className="card-body">
                                    <blockquote className=" ">
                                       <i className="fa fa-quote-right fa-2x text-muted pull-right mt-3 mb-3 wow fadeIn animated" aria-hidden="true"></i>
                                       <p className=" m-0 text-muted wow fadeIn animated">
                                         {tstmnl.t_message}
                                       </p>
                                       <footer className="blockquote-footer small p-1">
                                          <span className="small wow fadeIn animated"> {tstmnl.t_author}
                                          {/* <cite className="font-weight-bold wow fadeIn animated">COMPANY NAME</cite> */}
                                          </span>
                                       </footer>
                                    </blockquote>
                                 </div>
                              </div>
                               ) 
                    
                           })}  

                              
                           </div>
                        </div>
                     </div>
                  <div className="col-12 my-5 custom-mar">
                     <h2 className="wow fadeInUp  animated">Call us now to book <br/>
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