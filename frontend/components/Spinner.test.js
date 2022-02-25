// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react';
import {render} from '@testing-library/react'

import Spinner from './Spinner';

test('sanity', () => {
  expect(true).toBe(true)
})

test('renders without errors', () => {
  render(<Spinner />)
})

test('renders ON without errors', () => {
  render(<Spinner on={true} />)
})

test('renders OFF without errors', () => {
  render(<Spinner on={false} />)
})
