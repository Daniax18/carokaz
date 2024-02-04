import React, { useEffect, useState } from 'react';
import { getMainConversation } from '../../views/message/utilMessage';
import Loader from '../loader/Loader';
import LoaderMessage from '../loader/message/LoaderMessage';

function Dialogue(props){
    // const{conversations} = props
    const{userMainId, idOther, inboxes} = props
    const token = localStorage.getItem('token');
    const [loading, setLoading] = useState(true);
    const [data, setData]=useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true);
            setData(await getMainConversation(userMainId, idOther, inboxes, token));
    
          } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
          } finally {
            setLoading(false);
          }
        };
        fetchData();
      }, [token, idOther]);

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
                            <div key={message.dateMessage} className={'pb-4 ' + (message.idUtilisateur1 === userMainId ? 'chat-message-right' : 'chat-message-left')}>
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
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Type your message" />
                            <button className="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </>
            )
        }
        </div>
    )
}
export default Dialogue