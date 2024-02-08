export async function connected(userToken) {
  try {
      let url = process.env.REACT_APP_API_URL + 'utilisateurs/connecte';
      let response = await fetch(url, {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${userToken}`,
              'Content-Type': 'application/json',
          },
      });

      if (response.ok) {
          let data = await response.json();
          return data.data;
      } else {
          console.error('Erreur de la requête:', response);
          throw new Error('Error fetching user data');
      }
  } catch (error) {
      console.error('Erreur inattendue :', error);
      throw error;
  }
}


export async function getUtilisateurById(idUser, userToken) {
    if(idUser != null){
        try {
            let url = process.env.REACT_APP_API_URL + 'utilisateurs/' + idUser;
            let response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${userToken}`,
                    'Content-Type': 'application/json',
                },
            });
      
            if (response.ok) {
                let data = await response.json();
                return data.data;
            } else {
                console.error('Erreur de la requête:', response);
                throw new Error('Error fetching user data');
            }
        } catch (error) {
            console.error('Erreur inattendue :', error);
            throw error;
        }
    }
  
}

export async function getCategories(){
    try {
        let url = process.env.REACT_APP_API_URL + 'categories';
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
  
        if (response.ok) {
            let data = await response.json();
            return data.data;
        } else {
            console.error('Erreur de la requête:', response);
            throw new Error('Error fetching user data');
        }
    } catch (error) {
        console.error('Erreur inattendue :', error);
        throw error;
    }
}

export async function getMarques(){
    try {
        let url = process.env.REACT_APP_API_URL + 'marques';
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
  
        if (response.ok) {
            let data = await response.json();
            return data.data;
        } else {
            console.error('Erreur de la requête:', response);
            throw new Error('Error fetching user data');
        }
    } catch (error) {
        console.error('Erreur inattendue :', error);
        throw error;
    }
}

export async function getEnergies(){
    try {
        let url = process.env.REACT_APP_API_URL + 'energies';
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
  
        if (response.ok) {
            let data = await response.json();
            return data.data;
        } else {
            console.error('Erreur de la requête:', response);
            throw new Error('Error fetching user data');
        }
    } catch (error) {
        console.error('Erreur inattendue :', error);
        throw error;
    }
}

export async function getCouleurs(){
    try {
        let url = process.env.REACT_APP_API_URL + 'couleurs';
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
  
        if (response.ok) {
            let data = await response.json();
            return data.data;
        } else {
            console.error('Erreur de la requête:', response);
            throw new Error('Error fetching user data');
        }
    } catch (error) {
        console.error('Erreur inattendue :', error);
        throw error;
    }
}

export async function getBoites(){
    try {
        let url = process.env.REACT_APP_API_URL + 'boites';
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
  
        if (response.ok) {
            let data = await response.json();
            return data.data;
        } else {
            console.error('Erreur de la requête:', response);
            throw new Error('Error fetching user data');
        }
    } catch (error) {
        console.error('Erreur inattendue :', error);
        throw error;
    }
}


