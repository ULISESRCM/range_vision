const digits = [3, 4, 3, 1, 5];

function range_vision(number) {
  let foundIndex = false;
  let leftRange = [];
  let rightRange = [];

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === number) {
      foundIndex = i;
      break;
    }
  }

  if (foundIndex === false) {
    return null; // El número no está presente en el array
  }

  for (let j = foundIndex - number; j < foundIndex; j++) {
    if (j >= 0) {
      leftRange.push(digits[j]);
    }
  }

  for (let k = foundIndex + 1; k <= foundIndex + number; k++) {
    if (k < digits.length) {
      rightRange.push(digits[k]);
    }
  }

  return {
    leftRange,
    rightRange,
  };
}

console.log(range_vision(3));
console.log(range_vision(4));
console.log(range_vision(3));
console.log(range_vision(1));
console.log(range_vision(5));

//nome quedo clarala consigna de "La función debe devolver un booleano: true cuando 
//un dígito 1 tiene el valor de vista más bajo en el número dado, false de lo contrario."
//entiendo que no cumple al 100%