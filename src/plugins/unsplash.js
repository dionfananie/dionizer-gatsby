import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  accessKey: process.env.GATSBY_UNSPLASH_KEY,
});

export default unsplash;
