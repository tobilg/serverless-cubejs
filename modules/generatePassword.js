module.exports.get = () => {
  return `${[...Array(40)].map(() => Math.random().toString(36)[2]).join('')}`;
};
