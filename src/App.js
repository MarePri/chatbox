import React, {useState} from 'react';
import useInterval from '@use-it/interval'
import { animate, motion } from 'framer-motion';
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
  const [messageToShow, setMessageToShow] = useState(0);

  useInterval(() => {
    setMessageToShow(messageToShow => messageToShow + 1);
  }, 2000)

  return (
    <div className="app">
      <div className="walkthrough">
        {messages.map((message, index) => {
          const even = index % 2 ===0;

          if (messageToShow + 1 === index) {
            return <Typing key={index} even={even} />;
          }


          if (index > messageToShow) return <div key={index} />





          return (
            <Message key={index} message={message}/>
          );
        })}
      </div>
    </div>
  );
}


function Typing({even}) {
  return (
    <div className={`typing ${even ? 'is-left' : 'is-right' }`}>
      <div className="dots">
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}

function Message({message}) {

  return(
    <motion.div className="message" initial={{scale: 0.2}} animate={{scale:1}}>
              <div className='avatar'>🌸 </div>
              <div className='text'>{message.text}</div>
              <div className='avatar'>😊 </div>
            </motion.div>
  )
}