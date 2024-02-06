import { getUtilisateurById } from "../../my_util";





// CONVERSATIONS
export async function getMainConversation(userMain, other, inboxes, userToken) {
    try {
        let result = {};
        let temp = [];
        let otherDetail = '';

        if (other !== null) {
            // Concurrently fetch conversations and user details
            [temp, otherDetail] = await Promise.all([
                getConversations(userMain, other, userToken),
                getUtilisateurById(other, userToken)
            ]);
        } else {
            let otherId = inboxes && inboxes.length > 0 ? inboxes[inboxes.length - 1].otherId : '';
            if (otherId !== '') {
                // Concurrently fetch conversations and user details
                [temp, otherDetail] = await Promise.all([
                    getConversations(userMain, otherId, userToken),
                    getUtilisateurById(otherId, userToken)
                ]);
            }
        }

        result = {
            user: otherDetail,
            data: temp
        }

        return result;
    } catch (error) {
        console.error('Erreur inattendue sur main conversations:', error);
        return []; // or handle the error in a way that fits your requirements
    }
}

export async function getConversations(user1, user2, userToken) {
    try {
        let url = process.env.REACT_APP_API_URL + 'messages/' + user1 + '/' + user2;
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${userToken}`,
                'Content-Type': 'application/json',
            },
        });
  
        if (response.ok) {
            let data = await response.json();
            // console.log(url)
            // console.log(data)
            return data.data;
        } else {
            console.error('Erreur de la requête:', response);
            throw new Error('Error fetching user data');
        }
    } catch (error) {
        console.error('Erreur inattendue sur get Conversations :', error);
        throw error;
    }
}

// INBOX
export async function getMyInbox(userId, dataInbox, userToken) {
    try {
        const userMessages = await Promise.all(Object.values(dataInbox).map(async data => {
            let otherId = data.idUtilisateur1 === userId ? data.idUtilisateur2 : data.idUtilisateur1;
            let lastSender = data.idUtilisateur1 === userId ? 'Vous : ' : '';
            const user = await getUtilisateurById(otherId, userToken);
            return {
                otherId: otherId,
                username: user.prenom + ' ' + user.nom,
                sender: lastSender,
                lastMessage: data.lastMessage
            };
        }));

        // console.log(userMessages);

        return userMessages;
    } catch (error) {
        console.log('Erreur inattendue :', error);
        return []; // or handle the error in a way that fits your requirements
    }
}