import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// action generators
const addExpense = ({ description = '', note = '', amount = '', createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

const setStartDate = (date = undefined) => ({
  type: 'SET_START_DATE',
  date,
});

const setEndDate = date => ({
  type: 'SET_END_DATE',
  date,
});

// defaults
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};
const expensesReducerDefaultState = [];

// reducers
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id === action.id);
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        }
        return expense;
      });
    default:
      return state;
  }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount',
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date',
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.date,
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.date,
      };
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
      return 1;
    });
};

// store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.info(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: 'rent', amount: 1009, createdAt: -10000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: 'food', amount: 100, createdAt: -34300004 })
);
const expenseThree = store.dispatch(
  addExpense({ description: 'other', amount: 99100, createdAt: -34300004 })
);

// store.dispatch(setTextFilter('rent'));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
