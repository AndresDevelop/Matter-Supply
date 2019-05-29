import React from 'react';

import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Modal from '../components/message/message';

describe('Render modal', () => {
  it('it should not render the modal', () => {
    const { queryByTestId } = render(<Modal />);

    const modal = queryByTestId('modal');
    expect(modal).not.toBeInTheDocument();
  });
});

describe('Render modal', () => {
  it('it should render the modal when there is a messagge', () => {
    const { queryByTestId } = render(<Modal message />);

    const modal = queryByTestId('modal');
    expect(modal.firstChild).toHaveClass('is-active');
    const button = queryByTestId('button-modal');
    fireEvent.click(button);
    expect(modal.firstChild).not.toHaveClass('is-active');
  });
});
