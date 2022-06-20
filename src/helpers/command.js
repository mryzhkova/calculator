function add(x, y) { return +x + +y; };
function sub(x, y) { return +x - +y; };
function mul(x, y) { return +x * +y; };
function div(x, y) { return +x / +y; };
function rest(x, y) { return +x % +y; };

function Command(execute, value) {
  this.execute = execute;
  this.value = value;
};

function AddCommand(value) {
  return new Command(add, value);
};

function SubCommand(value) {
  return new Command(sub, value);
};

function MulCommand(value) {
  return new Command(mul, value);
};

function DivCommand(value) {
  return new Command(div, value);
};

function RestCommand(value) {
  return new Command(rest, value);
};

const culcReasult = (x, y, sign) => {
  switch(sign) {
    case '+':
      return +x + +y;
    case '-':
      return +x - +y;
    case '*':
      return +x / +y;
    case '/':
      return +x / +y;
    case '%':
      return +x % +y;
    default:
      return null;
  }
};

export const makeCommand = (sign, value) => {
  switch(sign) {
    case '+':
      return new AddCommand(value);
    case '-':
      return new SubCommand(value);
    case '*':
      return new MulCommand(value);
    case '/':
      return new DivCommand(value);
    case '%':
      return new RestCommand(value);
    default:
      return null;
  }
};

export const getResult = value => {
  const arr = value.split(' ').filter(v => v !== '');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '*' || arr[i] === '/' || arr[i] === '%') {
      const res = culcReasult(arr[i - 1], arr[i + 1], arr[i]);
      arr.splice(i - 1, 3, res);
      i-=1;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '+' || arr[i] === '-') {
      if (arr[i - 1]) {
        const res = culcReasult(arr[i - 1], arr[i + 1], arr[i]);
        arr.splice(i - 1, 3, res);
        i-=1;
      }
      else {
        const res = culcReasult(0, arr[i + 1], arr[i]);
        arr.splice(i, 2, res);
      }
    }
  }
  return parseFloat((+arr.toString()).toFixed(3));
};