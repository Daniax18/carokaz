import React from 'react';

function Inbox(props){
    const{messages, onMessageClick} = props

    const handleClick = (id) => {
        console.log('Clicked message:', id);
        // Pass the clicked message ID to the parent component
        onMessageClick(id);
    };
    return(
        <>
            <div className="px-4 d-none d-md-block mb-2">
                <div className="d-flex align-items-center">
                  <h5 className='text-muted'> Votre inbox : </h5>
                </div>
            </div>

            {messages.map(message => (
                <div 
                    className="d-flex flex-row justify-content-between p-2 border-bottom mb-2" 
                    key={message.username}
                    onClick={() => handleClick(message.otherId)}
                >
                    <div className="d-flex justify-content-center" style={{width: '30%'}}>
                        <img 
                            src="/img/pdp.png" 
                            className="rounded-circle" 
                            alt="Vanessa Tucker" 
                            width={40} 
                            height={40} />
                    </div>
                    <div className="flex-grow-1">
                        <strong> {message.username} </strong>
                        <div className="small text-muted">
                            {message.sender + message.lastMessage}
                        </div>
                    </div>
                </div>
            ))}
            <hr className="d-block d-lg-none mt-1 mb-0" />
        </>
    )
}
export default Inbox