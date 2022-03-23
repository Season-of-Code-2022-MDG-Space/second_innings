import React from 'react'
import  {useEffect, useState} from "react";
import ScrollToBottom from 'react-scroll-to-bottom';


function Chat({socket, username, room }) {
    const [currentMessage, setCurrentMessage] = useState("");
    const [msgList, setMsgList] = useState([]);

    const sendMessage = async () => {
        if(currentMessage !=="") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time:
                 new Date(Date.now()).getHours() +
                 ":" + 
                 new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send_message", messageData);
            setMsgList((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    };
    

    useEffect(() => {
        socket.on("receive_message", (data) => {
           setMsgList((list) => [...list,data]);

        });
    }, [socket]);
    return (
        <div className="chat-window">
            <div className="chat-header">
                <p>Contact Name(db se import)</p>
            </div>
            <div className="chat-body"> 
                <ScrollToBottom className = "message-container">
                {msgList.map((messageContent) =>{
                  return <div className="message"
                   id={username === messageContent.author ? "other" : "you"}> 
                  <div> 
                      <div className="message-content">
                          <p>{messageContent.message}</p>
                      </div>
                      <div className="message-meta">
                          <p id="time" >{messageContent.time}</p>
                          <p id="author">{messageContent.author}</p>
                      </div>
                  </div>
                  </div>;
                })}
                </ScrollToBottom>
            </div>
            <div className="chat-footer">
                <input type="text" 
                value = {currentMessage}
                placeholder="Type a Message..."
                 onChange = {(event) => {
                    setCurrentMessage(event.target.value);
                  }} 
                  onKeyPress={(event) => {event.key === "Enter" && sendMessage();
                }}
                  />
                <button onClick={sendMessage}>&#10148;</button>
                </div>
        </div>
    )
}

export default Chat