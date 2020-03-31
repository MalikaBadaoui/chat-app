import React from 'react';
import './Contact.css';

const name = "April Garza"
const image = 'https://randomuser.me/api/portraits/women/56.jpg'



function log (online){
    if (online) {
        return "onLine"
    } else {
        return "offLine"
    }
}; 


const on = log(true);
// const off = log(false)  //<!-- <div className = "status-offline"> {off} </div> -->

function Contact () {
    return (

            <section className="Contact" >
                <img className="avatar" src={image} alt="avatar" />
                    <div>
                        <h4 className="name"> {name} </h4>
                            <div className="status"> 
                                <div className="status-online">  
                                </div>
                                <p className="status-text"> {on} </p>
                                
                            </div>
                            
                    </div>

            </section>

        )
    };
export default Contact;
