type Todo = Readonly<{
  id: number;
  text: string;
  done: boolean;
  place?: Place;
}>;

type CompletedTodo = Todo & {
  readonly done: true;
};

type Place = "home" | "work" | {custom: string}


function completeAll(todos: readonly Todo[]): CompletedTodo[] {
  return todos.map((todo) => ({ ...todo, done: true }));
}

const placeToString(place: Place): string{

}


console.log(
  completeAll([
    { id: 1, text: "foo", done: false },
    { id: 2, text: "bar", done: true },
  ])
);
export {};
