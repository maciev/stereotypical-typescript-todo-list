"use strict";
exports.__esModule = true;
function toggleTodo(todo) {
  return {
    id: todo.id,
    text: todo.text,
    done: !todo.done,
  };
}
var foo = {
  id: 1,
  text: "...",
  done: true,
};
console.log(foo);
