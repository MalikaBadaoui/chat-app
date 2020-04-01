import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact 
        name = 'Chester Nelson'
        avatar = 'https://randomuser.me/api/portraits/men/26.jpg'
        online 
      />
      <Contact 
        name = 'Jayden Owens'
        avatar = 'https://randomuser.me/api/portraits/men/20.jpg'
      />
      <Contact 
        name = 'Catherine Bailey'
        avatar = 'https://randomuser.me/api/portraits/women/95.jpg'
        online  
      />
    </div>
  );
}

export default App;