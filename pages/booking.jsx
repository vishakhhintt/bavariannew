import React, { useState }  from 'react';
import Link from 'next/link';

import Card from "@material-ui/core/Card";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

import axios from "axios"; 
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

function booking() 
{

   const [startDate, setStartDate] = useState(new Date());

   const [newId, setNewId] = useState('');

   const state1 = {
      startDate: new Date(),
       fields: {},
       errors: {},
       name: '',
       email: '',
       phone:'',
       servdate:'',
       service:'',
       message: '',
       options: {
         'zIndex': 9999,
         'position' : 'absolute',
         }
   }

   


      const options = [
         { value: '1', label: 'Manufacturer Specific Servicing' },
         { value: '2', label: 'Tyres' },
         { value: '3', label: 'Vehicle Diagnosis & Electrical faults' },
         { value: '4', label: 'Air Conditioning' },
         { value: '5', label: 'Brake/Clutch/Gearbox' },
         { value: '6', label: 'Timing belts /chains' },
         { value: '7', label: 'DPF related faults' },
         { value: '8', label: 'Carbon manifold cleaning' },
         { value: '9', label: 'MOT' },
         { value: '10', label: 'National Warranty' },
         { value: '11', label: 'Brake pads for life' },
         
      ];
        
    
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        email:'',
        message:'',
        
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
        formData.append('inputChooseservice', contact.service);
        formData.append('inputDate', startDate);
      //   console.log(contact.service);
        axios({
            method: 'post',
            url: "https://liverpoolbavarian.com/admBenz/addbookOnlinew_v",
            data: formData,
            })
            .then ((response) => {
               console.log(response);
              if(response.data.data['rs'] ==0)
              {
               // console.log(response.data.data['errors'].inputName);
                toast.error(response.data.data['errors'].inputName) 
                toast.error(response.data.data['errors'].inputEmail) 
                toast.error(response.data.data['errors'].inputPhone) 
                toast.error(response.data.data['errors'].inputMessage)
                toast.error(response.data.data['errors'].inputChooseservice) 
                toast.error(response.data.data['errors'].inputDate) 
              
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
         <section className="justify-content-center book-banner">
            <div className="container">
               <div className="col-12 col-lg-8 col-md-8 col-sm-9 py-5 my-2 services-title">
                  <p className="wow fadeInUp animated animated animated" ></p>
               </div>
            </div>
         </section>
        
         <div className="container-fluid">
            <div className="col-12 why-choose-img px-0">
            <form name="contactform" className="contactform" onSubmit={handleFormSubmit}>
               <section className="bott-img">
                  <div className="container">
                     <div className="row">
                        <div className="col-12 col-xl-7 col-lg-8 col-md-8 pb-4 mt-5 book-form-mar m-auto">
                           <div className="col-12">
                              <div className="form-group wow fadeInUp animated">
                                 <input type="text" onChange={handleInputChange} value={contact.name} className="form-control rounded-0 custom-form-control" maxLength="100" id="name" name="name" placeholder="Name"  />
                                 
                              </div>
                           </div>
                          
                           <div className="col-12">
                              <div className="row">
                              <div className="col-12 col-sm-6">
                           <div className="form-group wow fadeInUp animated">
                              <input type="text" onChange={handleInputChange} value={contact.email} className="form-control rounded-0 custom-form-control" maxLength="100" id="email" name="email" placeholder="Email"  />
                              
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                           <div className="form-group wow fadeInUp animated">
                              <input type="text" onChange={handleInputChange} value={contact.phone} className="form-control rounded-0 custom-form-control" maxLength="20" id="phone" name="phone" placeholder="Phone"  />
                              
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 rounded-0 wow fadeInUp animated">
                           <select onChange={handleInputChange} className="custom-select rounded-0" id="service" name="service"  value={contact.service}  >
                              <option value="0">Choose service</option>
                              
                              {
                                       (options || [] ).map((o, index1)=>{
                                         
                                          
                                          return (
                                             state1.fields["service"] && state1.fields["service"]==o.value?   
                                             <option selected key={o.value}  value={o.value}>{o.label}</option> 
                                             :
                                             <option key={o.value} value={o.value}>{o.label}</option> 
                                                
                                             );
                                          
                                          
                                          
                              })} 
                            </select>
                            
                        </div>
                       
                        <div className="col-12 col-sm-6">
                           <Card>
                           
                           <DatePicker onChange={handleInputChange} value={contact.servdate} selected={startDate}  onChange={date => setStartDate(date)} className="form-control rounded-0 custom-form-control"
                              id="servdate" name="servdate" 
                              dateFormat="yyyy-MM-dd" min={moment().format("YYYY-MM-DD")}/>
                              
                           </Card>
                        </div>
                             
                          </div>
                       </div>
                     
                       
                       <div className="col-12">
                          <div className="form-group wow fadeInUp animated">
                         
                           <textarea className="form-control rounded-0" onChange={handleInputChange} value={contact.message} id="message" style={{"zIndex":"0"}} name="message" rows="4" placeholder="Message"   ></textarea>
                           
                       </div>
                       <div className="col-12 text-center">
                       <span id="spinner" style={{display: "none"}}><i className="fa fa-spin fa-spinner"></i></span>
                       <button type="submit" name="submit" className="btn btn-primary btn-submit rounded-0 py-2 px-5  wow fadeInUp animated cont-btn">BOOK NOW</button>
                        </div>
                     </div>
                        </div>
                        <div className="col-12 my-5 custom-mar">
                           <h2 className="mob-mp wow fadeInUp  animated">Call us now to book <br/>
                              in for a service
                           </h2>
                           <a href="tel:01512713907"><p className="call-ico-bot mt-4 wow fadeInUp  animated">0151 271 3907  </p></a>
                        </div>
                     </div>
                  </div>
               </section>
               </form>
            </div>
         </div>
        
    
        
         </div>
      )
        
    
}



export default booking;