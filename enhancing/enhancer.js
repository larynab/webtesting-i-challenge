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

function add(a, b) {
  return a + b;
}

