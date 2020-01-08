import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  accessKey: process.env.UNSPLASH_KEY,
});

export default unsplash;
