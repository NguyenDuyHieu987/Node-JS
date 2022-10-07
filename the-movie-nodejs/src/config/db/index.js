const mongoose = require('mongoose');

async function connect() {
  try {
    const URL =
      'mongodb+srv://admin:hieusen123@cluster0.h6ko2rq.mongodb.net/movie_web_dev?retryWrites=true&w=majority';
    // const URL = 'mongodb://localhost:27017/movie_web_dev';

    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (e) {
    console.log('Connected failed', e.message);
  }
}

module.exports = { connect };
