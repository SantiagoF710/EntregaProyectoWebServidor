import mongoose from 'mongoose';

const urlDatabase = 'mongodb+srv://santi71043:orFWgLK4NxwAb6Wd@cluster0.q9d8z8m.mongodb.net/FrogDB?retryWrites=true&w=majority';

export const conectarDB = () => {
  return mongoose.connect(urlDatabase)
    .then(() => {
      console.log('Conectado a la DB!');
    })
    .catch((error) => {
      console.log('Error conectando a la DB: ', error);
    });
};


