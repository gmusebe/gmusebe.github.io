import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

test('renders the home introduction', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  )

  expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
    /open-source intelligence/i
  )
  expect(screen.getByRole('link', { name: /view work/i })).toBeInTheDocument()
})
