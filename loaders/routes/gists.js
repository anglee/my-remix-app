module.exports = () => {
  console.log("test 1234");
  return fetch("https://api.github.com/gists");
};