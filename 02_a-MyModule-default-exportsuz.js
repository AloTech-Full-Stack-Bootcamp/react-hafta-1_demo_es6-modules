// getDate default olarak export edilmiş durumda:
const getDate = () => {
  const prefix = "Bugün: ";
  return prefix + Date.now();
};

// ES6 arrow function'ı bu şekilde kısaltabiliriz:
//const getDateKisa = () => "Bugün: " + Date.now();

// Template Literals
//const getDateKisa = () => `Bugün: ${Date.now()}`;

const getANumber = () => Math.random();

const CURRENCIES = ["USD", "EUR", "TRY"];

export { getDate, getANumber, CURRENCIES };
