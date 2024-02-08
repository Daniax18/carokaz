const annonces = [
  {
    idAnnonce: 0,
    dateAnnonce: '2022-12-12',
    price: 200,
    description : "Une voiture élégante aux lignes épurées, dotée de technologies de pointe et d'une performance remarquable, offrant une expérience de conduite immersive et confortable. Son design moderne et ses fonctionnalités innovantes en font un choix de premier plan pour les amateurs de conduite sophistiqués.",
    voiture: {
      idVoiture: 'v1',
      nomModele: 'Q7 Audi',
      img:['https://bootdey.com/img/Content/avatar/avatar3.png', 'https://bootdey.com/img/Content/avatar/avatar1.png'],
      place : '3',
      energie : 'Diesel',
      kilometrage : '1500',
      consommation : '10',
      boite : 'Manuelle',
      porte : '5',
      couleur: 'Rouge',
      marque: 'BMW',
      categorie: 'SUV'
    },
  },
  {
    idAnnonce: 1,
    dateAnnonce: '2022-12-12',
    price: 400,
    description : "Une voiture élégante aux lignes épurées, dotée de technologies de pointe et d'une performance remarquable, offrant une expérience de conduite immersive et confortable. Son design moderne et ses fonctionnalités innovantes en font un choix de premier plan pour les amateurs de conduite sophistiqués.",
    voiture: {
      idVoiture: 'v1',
      nomModele: 'Q8 Audi',
      img:['https://bootdey.com/img/Content/avatar/avatar3.png', 'https://bootdey.com/img/Content/avatar/avatar1.png'],
      place : '3',
      energie : 'Diesel',
      kilometrage : '1500',
      consommation : '10',
      boite : 'Manuelle',
      porte : '5',
      couleur: 'Rouge',
      marque: 'BMW',
      categorie: 'SUV'
    },
  },
  {
    idAnnonce: 2,
    dateAnnonce: '2022-12-12',
    price: 400,
    description : "Une voiture élégante aux lignes épurées, dotée de technologies de pointe et d'une performance remarquable, offrant une expérience de conduite immersive et confortable. Son design moderne et ses fonctionnalités innovantes en font un choix de premier plan pour les amateurs de conduite sophistiqués.",
    voiture: {
      idVoiture: 'v1',
      nomModele: 'Q8 Audi',
      img:['https://bootdey.com/img/Content/avatar/avatar3.png', 'https://bootdey.com/img/Content/avatar/avatar1.png'],
      place : '3',
      energie : 'Diesel',
      kilometrage : '1500',
      consommation : '10',
      boite : 'Manuelle',
      porte : '5',
      couleur: 'Rouge',
      marque: 'BMW',
      categorie: 'SUV'
    },
  },
  {
    idAnnonce: 3,
    dateAnnonce: '2022-12-12',
    price: 400,
    description : "Une voiture élégante aux lignes épurées, dotée de technologies de pointe et d'une performance remarquable, offrant une expérience de conduite immersive et confortable. Son design moderne et ses fonctionnalités innovantes en font un choix de premier plan pour les amateurs de conduite sophistiqués.",
    voiture: {
      idVoiture: 'v1',
      nomModele: 'Q8 Audi',
      img:['https://bootdey.com/img/Content/avatar/avatar3.png', 'https://bootdey.com/img/Content/avatar/avatar1.png'],
      place : '3',
      energie : 'Diesel',
      kilometrage : '1500',
      consommation : '10',
      boite : 'Manuelle',
      porte : '5',
      couleur: 'Rouge',
      marque: 'BMW',
      categorie: 'SUV'
    },
  }
];

const marques = [
    {
        id : 1 ,
        nom : 'Mercedes'
    },
    {
        id : 2 ,
        nom : 'AUDI'
    }
]

const boites = [
  {
      id : 1 ,
      nom : 'Manuelle'
  },
  {
      id : 2 ,
      nom : 'Automatique'
  }
]

const energie = [
  {
      id : 1 ,
      nom : 'Gasoil'
  },
  {
      id : 2 ,
      nom : 'Essence'
  }
]

const categories = [
  {
      id : 1 ,
      nom : 'SUV'
  },
  {
      id : 2 ,
      nom : 'Citadine'
  },
  {
    id : 3 ,
    nom : 'Test'
}
]

const modeles = [
  {
      id : 1 ,
      nom : 'Q7'
  },
  {
      id : 2 ,
      nom : 'Q5'
  }
]

const couleurs = [
  {
      id : 1 ,
      nom : 'Rouge'
  },
  {
      id : 2 ,
      nom : 'Vert'
  }
]

export default {annonces, marques, boites, energie, modeles, couleurs, categories};