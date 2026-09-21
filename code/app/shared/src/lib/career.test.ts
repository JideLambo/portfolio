import { careerEntries } from '@shared/lib/career'
import { describe, expect, it } from 'vitest'

describe('career', () => {
  it('keeps the parked Career facts for a later placement', () => {
    expect(careerEntries.map(entry => entry.name)).toEqual([
      'Wonderstand',
      'TokiApp',
      'Nordcloud',
      'BCaster',
      'GTBank',
    ])
    expect(careerEntries.map(entry => entry.text).join('\n')).toMatch(
      /BMW Public Cloud Platform/,
    )
    expect(careerEntries.map(entry => entry.text).join('\n')).toMatch(/GTWorld/)
  })
})
