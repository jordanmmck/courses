import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '12345' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '12345',
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('12345', { note: 'note' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '12345',
    updates: { note: 'note' },
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'rent',
    amount: 109500,
    createdAt: 1000,
    note: 'note',
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: { ...expenseData, id: expect.any(String) },
  });
});

test('should setup add expense action object with default values', () => {
  const expenseData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0,
  };
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: { ...expenseData, id: expect.any(String) },
  });
});
