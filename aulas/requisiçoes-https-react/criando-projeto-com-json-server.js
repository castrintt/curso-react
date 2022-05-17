// Json server

//o JSON server é um pacote npm

// ele sumila uma API, e isso nos possibilita fazer requisições HTTP

//vamos aprender a integrar este recurso com react

// podemos entender isso como uma etapa de preparação para API's reais

// ou seja, atingir o mesmo resultado mas sem precisar de uma estrutura no back-end

//para instalar basta digitar no terminal --> npm install json-server

//dentro do arquivo package.json vamos na area de scripts e vamos criar um script para iniciar um servidor local

//ex --> o arquivo json com react e o json-server está assim

{
    "name": "aulas",
    "private": true,
    "version": "0.0.0",
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "preview": "vite preview",

    },
    "dependencies": {
      "json-server": "^0.17.0",
      "react": "^18.0.0",
      "react-dom": "^18.0.0"
    },
    "devDependencies": {
      "@types/react": "^18.0.0",
      "@types/react-dom": "^18.0.0",
      "@vitejs/plugin-react": "^1.3.0",
      "vite": "^2.9.9"
    }
  }
  

//vamos configurar assim

{
  "name": "aulas",
  "private": true,
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "new": "json-server --watch data/db.json"
  },
  "dependencies": {
    "json-server": "^0.17.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "@vitejs/plugin-react": "^1.3.0",
    "vite": "^2.9.9"
  }
}

//dessa forma criamos um script com a chamada "new"
// se usarmos o terminal e digitarmos --> npm run new  --> ele executa o servidor back end pra gente (na verdade simula um back end)


// basicamente ele abre uma visualização de uma porta (normalmente 3000) com todos os dados da api que criamos no db.json

// que é o arquivo onde o script new esta observando (diretorio depois de --watch)

//que contem o seguinte codigo



{
    "results": [
      {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "Earth (C-137)",
          "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
          "name": "Citadel of Ricks",
          "url": "https://rickandmortyapi.com/api/location/3"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "url": "https://rickandmortyapi.com/api/character/1",
        "created": "2017-11-04T18:48:46.250Z"
      },
      {
        "id": 2,
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "unknown",
          "url": ""
        },
        "location": {
          "name": "Citadel of Ricks",
          "url": "https://rickandmortyapi.com/api/location/3"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        "url": "https://rickandmortyapi.com/api/character/2",
        "created": "2017-11-04T18:50:21.651Z"
      },
      {
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",
        "origin": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        "url": "https://rickandmortyapi.com/api/character/3",
        "created": "2017-11-04T19:09:56.428Z"
      },
      {
        "id": 4,
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",
        "origin": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        "url": "https://rickandmortyapi.com/api/character/4",
        "created": "2017-11-04T19:22:43.665Z"
      },
      {
        "id": 5,
        "name": "Jerry Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        "url": "https://rickandmortyapi.com/api/character/5",
        "created": "2017-11-04T19:26:56.301Z"
      },
      {
        "id": 6,
        "name": "Abadango Cluster Princess",
        "status": "Alive",
        "species": "Alien",
        "type": "",
        "gender": "Female",
        "origin": {
          "name": "Abadango",
          "url": "https://rickandmortyapi.com/api/location/2"
        },
        "location": {
          "name": "Abadango",
          "url": "https://rickandmortyapi.com/api/location/2"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
        "url": "https://rickandmortyapi.com/api/character/6",
        "created": "2017-11-04T19:50:28.250Z"
      },
      {
        "id": 7,
        "name": "Abradolf Lincler",
        "status": "unknown",
        "species": "Human",
        "type": "Genetic experiment",
        "gender": "Male",
        "origin": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
          "name": "Testicle Monster Dimension",
          "url": "https://rickandmortyapi.com/api/location/21"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
        "url": "https://rickandmortyapi.com/api/character/7",
        "created": "2017-11-04T19:59:20.523Z"
      },
      {
        "id": 8,
        "name": "Adjudicator Rick",
        "status": "Dead",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "unknown",
          "url": ""
        },
        "location": {
          "name": "Citadel of Ricks",
          "url": "https://rickandmortyapi.com/api/location/3"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
        "url": "https://rickandmortyapi.com/api/character/8",
        "created": "2017-11-04T20:03:34.737Z"
      },
      {
        "id": 9,
        "name": "Agency Director",
        "status": "Dead",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
        "url": "https://rickandmortyapi.com/api/character/9",
        "created": "2017-11-04T20:06:54.976Z"
      },
      {
        "id": 10,
        "name": "Alan Rails",
        "status": "Dead",
        "species": "Human",
        "type": "Superhuman (Ghost trains summoner)",
        "gender": "Male",
        "origin": {
          "name": "unknown",
          "url": ""
        },
        "location": {
          "name": "Worldender's lair",
          "url": "https://rickandmortyapi.com/api/location/4"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
        "url": "https://rickandmortyapi.com/api/character/10",
        "created": "2017-11-04T20:19:09.017Z"
      }
    ]
  }