import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import StrategyCard from './StrategyCard'
import { Strategy } from '../data/strategies'

describe('StrategyCard', () => {
  it('renders strategy information correctly', () => {
    const strategy: Strategy = {
      id: 'test-strategy',
      title: 'Test Strategy',
      description: 'Test Description',
      category: 'Farming',
      season: 'Spring',
      initialInvestment: 1000,
      potentialReturn: 5000,
      timeToReturn: '2 weeks',
      riskLevel: 'Low',
      financialConcept: 'Passive Income',
      tips: ['Tip 1', 'Tip 2']
    }

    render(<StrategyCard strategy={strategy} />)

    expect(screen.getByText('Test Strategy')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
    expect(screen.getByText('Spring')).toBeInTheDocument()
    expect(screen.getByText('1000g')).toBeInTheDocument()
    expect(screen.getByText('Low')).toBeInTheDocument()
    expect(screen.getByText('5000g')).toBeInTheDocument()
    expect(screen.getByText('Tip 1')).toBeInTheDocument()
    expect(screen.getByText('Tip 2')).toBeInTheDocument()
  })
}) 