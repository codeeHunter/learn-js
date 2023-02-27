// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

const checkSpam = (str) => {
  if (str.toLowerCase().includes("viagra") || str.toUpperCase().includes("XXX"))
    return true;

  return false;
};
