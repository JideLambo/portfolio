import { enumValueToText } from '@shared/lib/enum'
import { describe, expect, it } from 'vitest'
import { getTagLabel, Tag, tagLabels, tagValues } from '@/lib/tag'

describe('tag', () => {
  it('exposes stable enum values for the content schema', () => {
    expect(tagValues).toContain(Tag.Architecture)
    expect(tagValues).toContain(Tag.Design)
    expect(tagValues).toContain(Tag.SoftwareEngineering)
  })

  it('derives display labels from tag values', () => {
    expect(getTagLabel(Tag.Design)).toBe('Design')
    expect(getTagLabel(Tag.LargeLanguageModels)).toBe('Large language models')
  })

  it('covers every tag with a derived label', () => {
    for (const tag of tagValues) {
      expect(tagLabels[tag]).toBe(enumValueToText(tag))
    }
  })
})
