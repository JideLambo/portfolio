import { enumValuesToRecord, enumValueToText } from '@shared/lib/enum'

export const Tag = {
  Architecture: 'ARCHITECTURE',
  Design: 'DESIGN',
  Efficiency: 'EFFICIENCY',
  LargeLanguageModels: 'LARGE_LANGUAGE_MODELS',
  SoftwareEngineering: 'SOFTWARE_ENGINEERING',
} as const

export type Tag = (typeof Tag)[keyof typeof Tag]

export const tagValues = Object.values(Tag) as [Tag, ...Tag[]]

export const tagLabels = enumValuesToRecord(tagValues, enumValueToText)

export const getTagLabel = (tag: Tag) => tagLabels[tag]
