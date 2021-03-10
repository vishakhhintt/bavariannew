import React, { useState }  from 'react';
import Link from 'next/link';
import axios from "axios"; 
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

function Contact() 
{
    
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        email:'',
        message:''
          }); 
    const [response, setResponse] = useState({
            submitted: false,
          });
    const handleInputChange = e =>
       setContact({  ...contact,[e.target.name]: e.target.value });
    const handleFormSubmit = async event => {
        setResponse({submitted: true});
        
        var formData = new FormData();
        formData.append('inputName',contact.name);
        formData.append('inputEmail',contact.email);
        formData.append('inputPhone', contact.phone);
        formData.append('inputMessage', contact.message);
        axios({
            method: 'post',
            url: "https://liverpoolbavarian.com/admBenz/insert_contactw_v",
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
                toast.error(response.data.data['errors'].inputMessage) 
              
                setResponse({submitted: false});
                
              }
              else
              {
                
                toast.success(response.data.data['msg']) 
                setContact({
                    name: '',
                    email: '',
                    phone:'',
                    message:''
                      });
                
               
                      setResponse({submitted: false});
              }
  
            })
            .catch(function (response) {
                //handle error
                console.log(response)
            });
      
              event.preventDefault();
      }
	
        return(
   <div>
      <section className="justify-content-center contact-banner">
            <div className="container">
               <div className="col-12 col-lg-8 col-md-8 col-sm-9 py-5 my-2 services-title">
               </div>
            </div>
      </section>
      
      <section className="contact-info">
         <div className="container">
            <div className="row">
               <div className="col-12 col-md-6">
                  <div className="col-12">
                     <p className="call-ico info-ico wow fadeInUp animated">
                        <a href="tel:0151 271 3907">0151 271 3907</a>
                        <a href="tel:07902629444 ">0790 262 9444 </a>
                      </p>
                  </div>
                  <div className="col-12">
                     <p className="mail-info info-ico wow fadeInUp animated"><a href="mailto:liverpoolbavarian@hotmail.com">liverpoolbavarian@hotmail.com</a></p>
                  </div>
               </div>
               <div className="col-12 col-md-6">
                  <div className="col-12">
                     <p className="location-ico info-ico wow fadeInUp animated"> Liverpool Bavarian LTD <br/>
                        82-84 Vauxhall Rd,<br/>
                        Liverpool L3 6DL,<br/>
                        United Kingdom </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      
      
      <div className="container-fluid">
         <div className="col-12 px-0">
      
            <section className="contact-fields">
               <div className="container">
                  <div className="col-12 m-nopad">
                     <div className="row">
                        <div className="col-12 col-md-6 m-nopad wow fadeInLeft animated">                                 
                           <form name="contactform" className="contactform" onSubmit= {handleFormSubmit}>
                           <fieldset>
                              <h2 className="pb-3">Contact Us for Auto <br/>
                              Repair and Services</h2>

                              <div className="form-group wow fadeInUp animated">
                                 <input type="text" onChange={handleInputChange} value={contact.name} className="form-control rounded-0 custom-form-control" maxLength="100" id="#" name="name" placeholder="Name"  />
                                
                              </div>

                              <div className="form-group wow fadeInUp animated">
                                 <input type="text" onChange={handleInputChange} value={contact.email} className="form-control rounded-0 custom-form-control" id="#" name="email" maxLength="100" placeholder="Email"  />
                                 
                              </div>

                              <div className="form-group wow fadeInUp animated">
                                 <input type="text" onChange={handleInputChange} value={contact.phone} className="form-control rounded-0 custom-form-control" id="#" name="phone" maxLength="20" placeholder="Phone"  />
                                 
                              </div>

                              <div className="form-group wow fadeInUp animated">
                                 <textarea onChange={handleInputChange} value={contact.message} className="form-control rounded-0" id="message" name="message" rows="4" placeholder="Message"  ></textarea>
                                 
                              </div>
                              
                              <span id="spinner" style={{display: "none"}}><i className="fa fa-spin fa-spinner"></i></span>

                              <button type="submit" name="submit" className="btn btn-primary btn-submit rounded-0 py-2 px-5  wow fadeInUp animated cont-btn">SEND</button>
                           </fieldset>
                           </form>
                        </div>
                             
                        <div className="col-12 col-md-6 m-nopad wow fadeInRight animated">
                           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9512.188757955699!2d-2.9890277!3d53.4139822!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6af36f1d3306dcf4!2sBenz%20and%20Bavarian%20LTD!5e0!3m2!1sen!2sin!4v1602569673473!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{ "border":0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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



export default Contact;