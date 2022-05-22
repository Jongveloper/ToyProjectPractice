import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('counter는 0부터 시작합니다.', () => {
  render(<App />);
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent('0');
})

test('minus-button엔 - 텍스트가 포함되어있습니다.', () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId('minus-button');
  expect(minusButtonElement).toHaveTextContent('-');
})

test('plus-button엔 + 텍스트가 포함되어있습니다.', () => {
  render(<App />);
  const plusButtonElement = screen.getByTestId('plus-button');
  expect(plusButtonElement).toHaveTextContent('+');
})

test('plus-button을 누르면 counter는 1이 됩니다.', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('plus-button');
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId('counter')
  expect(counterElement).toHaveTextContent('1');
})

test('minus-button을 누르면 counter는 -1이 됩니다.', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('minus-button');
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent('-1');
})