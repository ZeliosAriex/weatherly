import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Header } from '@/components/navigation'

describe('Header component', () => {
  it('Should render the app logo correctly', async () => {
    // Setup
    render(<Header />)
    const titleElement = screen.getByText('Weatherly')

    // Expectations
    expect(titleElement).toBeInTheDocument()
  })
})
