function subtract(arg1, arg2) {
  return arg1 - arg2;
}

function divide(arg1, arg2) {
  return arg1 / arg2;
}

function calc(type, arg1, arg2) {
    let result = 0;
    switch (type) {
        case '+':
        case '-':
		result = subtract(arg1,arg2);
        case '*':
        case '/':
		result = divide(arg1,arg2);
        default:
            result = 0;
    }

    return result;
}