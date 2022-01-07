import React from 'react';
import './App.css';

const messages = [
  { text: 'How do I get better at React?' },
  { text: 'Just build something!' },
  { text: 'OK! What should I build?' },
  { text: 'Iono. Just Google it?' },
  { text: 'Oh! This course looks cool!' },
  { text: 'Send me the link?!' },
  { text: '20ReactApps.com!' },
];

export default function App() {
  return (
    <div className="app">
      <div className="walkthrough">
        {messages.map((message, index) => {
          return (
            <div key={index} className="message">
              <div className='avatar'>🌸 </div>
              <div className='text'>{message.text}</div>
              <div className='avatar'>😊 </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
