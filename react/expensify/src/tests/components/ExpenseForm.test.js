import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'new desc';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('input')
    .at(0)
    .simulate('change', {
      target: { value },
    });
  expect(wrapper.state('description')).toBe(value);
});

test('should set note on text area change', () => {
  const value = 'new note';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: { value },
  });
  expect(wrapper.state('note')).toBe(value);
});

test('should set amount if invalid', () => {
  const value = '24.54';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: { value },
    });
  expect(wrapper.state('amount')).toBe(value);
});

test('should NOT set amount if invalid', () => {
  const value = '24.5444';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: { value },
    });
  expect(wrapper.state('amount')).toBe('');
});

test('should call onsubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });
  expect(wrapper.state('error')).toBe('');

  expect(onSubmitSpy).toHaveBeenLastCalledWith({});
});
