import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1',
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should edit expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      description: 'new desc',
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe('new desc');
});

test('should not edit expenses if id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      description: 'new desc',
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe(expenses[1].description);
});

test('should add expense', () => {
  const expense = {
    id: '100',
    description: 'test',
    note: 'test',
    createdAt: 100,
    amount: 999,
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});
