// Entendiendo a usar el useReducer

const initialState = [
  {
    id: 1,
    todo: "comprar pan",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  if (action?.type === "agregar") {
    return [...state, action.payload];
  }

  return state;
};

let ejecutar = todoReducer();

const todoTwo = {
  id: 2,
  todo: "comprar leche",
  done: false,
};

const agregarTodoAction = {
  type: "agregar",
  payload: todoTwo,
};

ejecutar = todoReducer(initialState, agregarTodoAction);

console.log(ejecutar);
