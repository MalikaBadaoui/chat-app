import React from 'react'
import './Contact.css'
import PropTypes from 'prop-types';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: props.online,
        };
}
render() {
    return (
        <div className="contact" >
            <img className="avatar" src={this.props.avatar} alt={this.props.name} />
        <div>
            <p className="name">{this.props.name}</p>
            <div className="status" 
            onClick={event => {
                const newOnline = !this.state.online;
                this.setState({ online: newOnline});
            }}
            >
                <div className={this.props.online ? 'status-online' : 'status-offline'} />
                <p className="status-text">{this.props.online ? 'online' : 'offline' }</p>
           
            </div>
        </div>
    </div>

    )  
}   
}   

export default Contact;

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool
  };

/*
 Faire en sorte qu'un clic sur l'indicateur de statut 
 (ou sur la balise qui englobe l'indicateur et le texte 
 "Online/Offline") inverse l'attribut online dans le state.

• Faire le rendu conditionnel de l'indicateur de statut 
 et du texte associé, en fonction non pas de la prop online, 
  mais de la valeur stockée dans le state.

Comme on n'utilise plus la prop online 
dans le rendu du composant, tu peux te demander 
s'il ne faudrait pas tout simplement la supprimer.

On va introduire un "bonus" (optionnel), 
une petite variante sur tout ce qu'on a fait dans la quête : 
au lieu d'initialiser la valeur online du state à false 
dans le constructeur, initialise-la en utilisant props.online. 
De cette façon, au démarrage de l'application, certains contacts 
seront directement affichés comme "en ligne" et d'autres non, 
suivant la valeur de la prop online.

*/