import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Form from './Form'

describe('Form', () => {
  it('starts with a disabled button', () => {
    render(<Form />)
    expect(screen.getByRole('button')).toBeDisabled()
  })
  it('has only enabled when both inputs are filled', () => {
    render(<Form />)
    userEvent.type(screen.getByLabelText(/name/i), 'John')
    expect(screen.getByRole('button')).toBeDisabled()
    userEvent.type(screen.getByLabelText(/e-?mail/i), 'John@john.de')
    expect(screen.getByRole('button')).toBeEnabled()
  })
  it('sends onSubmit with a data object', () => {
    const callback = jest.fn()
    render(<Form onSubmit={callback} />)
    userEvent.type(screen.getByLabelText(/name/i), 'John')
    userEvent.type(screen.getByLabelText(/e-?mail/i), 'John@john.de')
    userEvent.click(screen.getByRole('button'))

    expect(callback).toHaveBeenCalledWith({
      name: 'John',
      email: 'John@john.de',
    })
  })
})
