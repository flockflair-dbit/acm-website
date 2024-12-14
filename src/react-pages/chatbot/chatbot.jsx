import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false); // State to toggle chatbot visibility
  const [buttonColor, setButtonColor] = useState('#000'); // Initial button color

  const toggleChatbot = () => {
    setIsOpen(!isOpen); // Toggle the chatbot open/close state
    console.log("Clicked");
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };

    // Add user message to the state
    setMessages((prev) => [...prev, userMessage]);

    // Get bot response
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
    }, 500); // Add delay for bot response for better UX

    setInput('');
  };

  const getBotResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase();
  
    if (lowerCaseMessage.includes('acm')) {
      return 'ACM (Association for Computing Machinery) is the world’s largest educational and scientific computing society. Would you like to know about membership benefits?';
    } else if (lowerCaseMessage.includes('membership')) {
      return (
        <>
          ACM membership gives you access to exclusive resources, events, and networking opportunities.
          <br/>
          <br /> Standard Membership Fee:
          <li>1 year - Rs. 200</li>
          <li>3 years - Rs. 500</li> 
          <br /> Group of three:
          <li>3 years - Rs. 1200</li>
        
        </>
      );
    } else if (lowerCaseMessage.includes('events')) {
      return (<>Our upcoming events include tech talks, hackathons, and workshops. <br/> <a href='https://dbit.acm.org/events/'>Check the Events section for more details!</a> <br/> <a href='https://dbit.acm.org/gallery/'>Check the Gallery for past events images</a> <br/><a href='https://teknack.in/gallery/'>Check out past Teknack images</a></>);
    } else if (lowerCaseMessage.includes('courses')) {
      return (<>ACM provides a wide variety of courses. <br/><a style={{textDecoration:'none' }} href='https://dbit.acm.org/courses/'>Check the courses section for more details </a> </>);
    } 
    else if(lowerCaseMessage.includes('teknack')){
      return(
        <>
        Teknack is ACM DBIT's very own gaming studio and gaming event.<br/> <a style={{textDecoration:'none' }} href='https://teknack.in/'>Click to know more about Teknack </a>
        </>
      );
    }
    else {
      return 'Hello I\'m here to help with all things ACM be it Events, Membership, or Teknack. Try asking about one of these topics!';
    }
  };

  return (
    <div>
      {/* Chatbot Icon */}
      {!isOpen &&
      <button
        onClick={toggleChatbot}
        onMouseEnter={() => setButtonColor('#4c1864')} // Change color on hover
        onMouseLeave={() => setButtonColor('#000')} // Reset color on mouse leave
        style={{
          position: 'fixed',
          bottom: '50%',
          right: '20px',
          width: '50px',
          height: '50px',
          background: buttonColor,
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          zIndex: 100000,
        }}
      >
        💬 {/* Chat Icon */}
      </button>
      }

      {/* Chatbot Window */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '300px',
            
            borderRadius: '20px',
            background: '#fff',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: '#000',
              color: '#fff',
              padding: '10px',
              textAlign: 'center',
              borderRadius: '10px 10px 0 0',
            }}
          >
            ACM Assistant
            <button onClick={toggleChatbot}
            style={{
              position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'transparent',
                color: '#fff',
                border: 'none',
                fontSize: '16px',
                cursor: 'pointer',
            }}
            >X</button>
          </div>
          <div style={{ height: '300px', overflowY: 'auto', padding: '10px' }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  textAlign: msg.sender === 'user' ? 'right' : 'left',
                  margin: '5px 0',
                }}
              >
                <span
                  style={{
                    background: msg.sender === 'user' ? '	#E0B0FF' : '#CF9FFF',
                    color:'white',
                    padding: '10px',
                    borderRadius: '5px',
                    display: 'inline-block',
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', borderTop: '1px solid #ddd' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e)=> {
                if (e.key === 'Enter'){
                  handleSendMessage();
                }
              }}
              placeholder="Ask me something..."
              style={{
                flex: 1,
                padding: '10px',
                border: 'none',
                outline: 'none',
              }}
            />
            <button
              onClick={handleSendMessage}
              
              style={{
                background:'#4c1864',
                color: '#fff',
                border: 'none',
                padding: '10px',
                cursor: 'pointer',
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
