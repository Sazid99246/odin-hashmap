import { HashMap } from "./HashMap.js";

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

test.set('apple', 'green');
test.set('dog', 'dark brown');

console.log(test.length());

test.set('moon', 'silver');

console.log(test.length());
console.log(test.capacity);

// Other methods
console.log(test.get('moon'));
console.log(test.has('lion'));
console.log(test.remove('kite'));
console.log(test.keys());
console.log(test.values());
console.log(test.entries());

test.clear();
console.log(test.length());
