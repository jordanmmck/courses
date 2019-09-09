import { createStore } from 'redux';

// action generators
const incrementCount = ({ amount = 1 } = {}) => ({
  type: 'INCREMENT',
  amount,
});

const decrementCount = ({ amount = 1 } = {}) => ({
  type: 'DECREMENT',
  amount,
});

const setCount = ({ amount } = {}) => ({
  type: 'SET',
  amount,
});

const reset = () => ({
  type: 'RESET',
});

// reducers
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.amount,
      };
    case 'DECREMENT':
      return {
        count: state.count - action.amount,
      };
    case 'RESET':
      return {
        count: 0,
      };
    case 'SET':
      return {
        count: action.amount,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.info(store.getState());
});

store.dispatch(setCount({ amount: 9999 }));
store.dispatch(incrementCount());
store.dispatch(incrementCount({ amount: 101 }));
store.dispatch(decrementCount({ amount: 10 }));
store.dispatch(reset());

unsubscribe();
