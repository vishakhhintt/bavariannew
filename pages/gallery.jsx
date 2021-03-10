import React from 'react'

export async function getStaticProps(context) {
   

    const res = await fetch(`https://liverpoolbavarian.com/admBenz/get_gallery`)
    const data = await res.json()
    
       if(!data)
       {
          return {
             props : {
                loaded:false,
                gallery:null,
          }};
          
       }
       else
       {
          return {
             props : {

             gallery:data    

          }};
          
       }
    }

export default function gallery(props) {
  return (
    <div>

        <section className="justify-content-center gallery-banner">
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
                            
                            <h2 className="text-center wow fadeIn animated ">Gallery
                            </h2>
                            
                        
                        <div className="col-12">
                            <div className="row">
                                {
                            
                                props.gallery.map((serv,k)=>{ 
                            
                                
                                return (  

                                <div key="gly" className={"col-12 col-md-4 wow cust-mt-1 fadeInUp animated scrvice-hover"} style={{"marginTop":"30px"}}>
                                    <div className="card card-service">
                                        <figure>
                                            <img className="card-img-top" src={serv.gal_image} alt={serv.gal_image} />
                                        </figure>
                                    
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