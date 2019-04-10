module.exports = {
  succeed,
  fail,
  repair,
  get,
  honest,
  add
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}

function honest() {
  return true;
}

//basic one shot function
// function add(a = 0, b = 0) {
//   return a + b;
// }

//collection of parameters to output one value
function add(args) {
  //Array is an array so it will just go foward to args on reducer.  If not it will create array and use args
  const numbers = Array.isArray(args) ? args : Array.from(arguments);

  return numbers.reduce((sum, number) => {
    //each iteration will formulate this return of sum 0+value+next value(number)
    return sum + number;
    //(1)value starts at 0(the number placed after code block) first run through, then the next available value for sum.
    //(2)second param is number from the collection of inputted numbers.
  }, 0);
}



