import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'

import Card from "./Card"

describe('Card', () => {
    it('renders title and not subtitle by default', () => {
        render(<Card title='Hi' subtitle='Dude' />) 
        expect(screen.getByText(/Hi/i)).toBeInTheDocument()
        expect(screen.queryByText(/dude/i)).not.toBeInTheDocument()
    })
    it('renders subtitle if isTextVisible is true', () => {
        render(<Card isTextVisible title='Hi' subtitle='Dude' />) 
        expect(screen.getByText(/dude/i)).toBeInTheDocument()
    })
    it('calls onShowText on button click', () => {
        const onShowTextCallback = jest.fn()
        
        render(<Card onShowText={onShowTextCallback} title='Hi' subtitle='Dude' />) 
        const button = screen.getByRole('button', {name: /show text/i})
        userEvent.click(button)
        expect(onShowTextCallback).toHaveBeenCalled()
    })
})

// getBy -> element must exists (instant)
// findBy -> Jest waits if something shows up (asynch)
// queryBy -> returns null, if nothing is found (use it tot test if somthing is missing)
