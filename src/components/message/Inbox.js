import React from 'react';

function Inbox(props){
    const{messages} = props

    return(
        <>
            <div className="px-4 d-none d-md-block">
                <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                        <input type="text" className="form-control my-3" placeholder="Search..." />
                    </div>
                </div>
            </div>

            {messages.map(message => (
                <div className="d-flex flex-row justify-content-between p-2 border-bottom mb-2" key={message.id}>
                    <div className="d-flex justify-content-center" style={{width: '30%'}}>
                        <img 
                            src="https://bootdey.com/img/Content/avatar/avatar5.png" 
                            className="rounded-circle" 
                            alt="Vanessa Tucker" 
                            width={40} 
                            height={40} />
                    </div>
                    <div className="flex-grow-1">
                        <strong> {message.username} </strong>
                        <div className="small text-muted">
                            {message.last}
                        </div>
                    </div>
                </div>
            ))}
            <hr className="d-block d-lg-none mt-1 mb-0" />
        </>
    )
}
export default Inbox