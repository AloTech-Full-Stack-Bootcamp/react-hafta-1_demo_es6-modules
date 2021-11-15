// getDate default olarak export edilmiş durumda, diğer örnek için:
// MyModule-default-exportsuz.js dosyasına bakınız

export default getDate = () => {
  const prefix = "Bugün: ";
  return prefix + Date.now();
};

// ES6 arrow function'ı bu şekilde kısaltabiliriz:
//const getDateKisa = () => "Bugün: " + Date.now();

// Template Literals
//const getDateKisa = () => `Bugün: ${Date.now()}`;

const getANumber = () => Math.random();

const CURRENCIES = ["USD", "EUR", "TRY"];

export { getANumber, CURRENCIES };
