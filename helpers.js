const generateId = () => {
  let id = Math.floor(Math.random() * 1000000);
  const numbers = persons.map(p => p.id);
  while (numbers.includes(id)) {
    id = Math.floor(Math.random() * 1000000);
  }
  return id;
};

const validatePerson = person => {
  if (
    !person.name ||
    !person.number ||
    person.name === '' ||
    person.number === ''
  ) {
    return false;
  }
  return true;
};

module.exports = {
  generateId,
  validatePerson,
};
