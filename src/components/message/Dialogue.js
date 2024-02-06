import React, { useEffect, useState } from 'react';
import { getMainConversation } from '../../views/message/utilMessage';
import LoaderMessage from '../loader/message/LoaderMessage';

function Dialogue(props){
    // const{conversations} = props
    const{idUtilisateur1, idUtilisateur2, inboxes } = props
    const token = localStorage.getItem('token');
    const [loading, setLoading] = useState(true);
    const [data, setData]=useState([]);
    const [localValue, setLocalValue] = useState('')
    const [newMessage, setNewMessage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true);
            setData(await getMainConversation(idUtilisateur1, idUtilisateur2, inboxes, token));
    
          } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
          } finally {
            setLoading(false);
          }
        };
        fetchData();
      }, [token, idUtilisateur2]);

    function formatDate(isoDateString) {
        const dateObject = new Date(isoDateString);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };
        return dateObject.toLocaleString('en-US', options);
    }


    async function sendMessage(newMessage){
        try {
            let url = process.env.REACT_APP_API_URL + 'messages';
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newMessage),
            });
    
            if (response.ok) {
                let data = await response.json();
                return data;
            } else {
                console.error('Erreur de la requête:', response);
                throw new Error('Error sending message');
            }
        } catch (error) {
            console.error('Erreur inattendue sur get Conversations :', error);
            throw error;
        }
    }

    const handleSubmit = async (e) => { 
        e.preventDefault();
        const newMessage = {
            idUtilisateur1: idUtilisateur1,
            idUtilisateur2: idUtilisateur2 ? idUtilisateur2 : data.user.idUtilisateur,
            dateMessage: new Date().toISOString(),
            contenu: localValue
        };
        try {
            const response = await sendMessage(newMessage);
            setNewMessage(newMessage);
            console.log('Message sent successfully:', response);
            // Clear the input field after sending the message
            setLocalValue('');
            setData(prevState => ({
                ...prevState,
                data: prevState.data ? [newMessage, ...prevState.data] : [newMessage]
            }));
        } catch (error) {
            console.error('Error sending message:', error);
        }
    }

    const handleChange = (e) => {
        setLocalValue(e.target.value); // Update local state
    }

    return(
        <div>
            {loading ? (
                // Loader component or message while loading
                <LoaderMessage />
            ) : (
            <>
                <div className="border border-2 p-3 shadow">
                    <div className="py-2 px-4 border-bottom d-none d-lg-block">
                        <div className="d-flex align-items-center py-1">
                            <div className="position-relative">
                                <img 
                                    src="/img/pdp.png" 
                                    className="rounded-circle mr-1" 
                                    alt="Sharon Lessman" 
                                    width={40} 
                                    height={40} 
                                />
                            </div>
                            <div className="flex-grow-1 pl-3">
                                <strong className="mx-2">
                                    {data.user ? data.user.prenom + ' ' +data.user.nom : ''}
                                </strong>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative mt-3">
                        {data.data ? data.data.slice().reverse().map(message => (
                                <div key={message.dateMessage} className={'pb-4 ' + (message.idUtilisateur1 === idUtilisateur1 ? 'chat-message-right' : 'chat-message-left')}>
                                    <div>
                                        <img 
                                            src="/img/pdp.png" 
                                            className="rounded-circle mr-1" 
                                            alt="Chris Wood" 
                                            width={40} height={40} 
                                        />
                                    </div>
                                    <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3 mx-2">
                                        {message.contenu}
                                        <p className='text-sm text-muted mt-2' style={{fontSize: '10px'}}> 
                                        {formatDate(message.dateMessage)}            
                                        </p>
                                    </div>
                                </div>
                            )) : '' }
                    </div>
                    <div className="flex-grow-0 py-3 px-4 border-top">
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={localValue}
                                    onChange={handleChange}
                                />
                                <button type="submit" className="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
            )
        }
        </div>
    )
}
export default Dialogue