import Unsplash from 'unsplash-js';

console.log(process.env.GATSBY_UNSPLASH_KEY);
console.log(process.env);
const unsplash = new Unsplash({
  accessKey: process.env.GATSBY_UNSPLASH_KEY,
});

export default unsplash;
