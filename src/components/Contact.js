import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


function Contact(props){
    return (
        
        <section className="Contact">
            <img className="avatar" src = {props.avatar} alt ="avatar"></img>
            <div>    
                <h4 className="name"> {props.name} </h4>
                <div className="status">
                    
                    <div className= {props.online ? 'status-online' : 'status-offline'} ></div>
                    <p className="status-text"> {props.online ? 'online' : 'offline'} </p>
                </div>
            </div>        
        </section>
    )
};

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool
  };

export default Contact;
