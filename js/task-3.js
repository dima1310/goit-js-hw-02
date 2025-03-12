function checkForSpam(message) {
  // Приводим строку к нижнему регистру для корректного поиска
  const lowerCaseMessage = message.toLowerCase();

  // Проверяем наличие запрещенных слов
  return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}

//Проверка функции
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
