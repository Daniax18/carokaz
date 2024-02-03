import React from 'react';

function Dialogue(props){
    const{conversations} = props

    return(
        <div className="col-12 col-lg-7 col-xl-9">
            <div className="py-2 px-4 border-bottom d-none d-lg-block">
                <div className="d-flex align-items-center py-1">
                    <div className="position-relative">
                        <img 
                            src="https://bootdey.com/img/Content/avatar/avatar3.png" 
                            className="rounded-circle mr-1" 
                            alt="Sharon Lessman" 
                            width={40} 
                            height={40} 
                        />
                    </div>
                    <div className="flex-grow-1 pl-3">
                        <strong className="mx-2">Sharon Lessman</strong>
                    </div>
                </div>
            </div>
            <div className="position-relative">
                <div className="chat-messages p-4">
                    <div className="chat-message-right pb-4">
                        <div>
                            <img 
                                src="https://bootdey.com/img/Content/avatar/avatar1.png" 
                                className="rounded-circle mr-1" 
                                alt="Chris Wood" 
                                width={40} height={40} />
                            <div className="text-muted small text-nowrap mt-2">2:33 am</div>
                        </div>
                        <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3 mx-2">
                            Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.
                        </div>
                    </div>
                    <div className="chat-message-left pb-4">
                        <div>
                            <img 
                                src="https://bootdey.com/img/Content/avatar/avatar3.png" 
                                className="rounded-circle mr-1" 
                                alt="Sharon Lessman" 
                                width={40} 
                                height={40} 
                            />
                            <div className="text-muted small text-nowrap mt-2">2:34 am</div>
                        </div>
                        <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                            Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
                        </div>
                    </div>
                    <div className="chat-message-right mb-4">
                        <div>
                            <img 
                                src="https://bootdey.com/img/Content/avatar/avatar1.png" 
                                className="rounded-circle mr-1" 
                                alt="Chris Wood" 
                                width={40} 
                                height={40}
                            />
                            <div className="text-muted small text-nowrap mt-2">2:35 am</div>
                        </div>
                        <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3 mx-2">
                            Cum ea graeci tractatos.
                        </div>
                    </div>
                    <div className="chat-message-left pb-4">
                        <div>
                            <img 
                                src="https://bootdey.com/img/Content/avatar/avatar3.png" 
                                className="rounded-circle mr-1" 
                                alt="Sharon Lessman" 
                                width={40} 
                                height={40} 
                            />
                            <div className="text-muted small text-nowrap mt-2">2:36 am</div>
                        </div>
                        <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                            Sed pulvinar, massa vitae interdum pulvinar, risus lectus porttitor magna, vitae commodo lectus mauris et velit.
                            Proin ultricies placerat imperdiet. Morbi varius quam ac venenatis tempus.
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-grow-0 py-3 px-4 border-top">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Type your message" />
                    <button className="btn btn-primary">Send</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogue