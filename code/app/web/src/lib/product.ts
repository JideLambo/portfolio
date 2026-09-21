export const Product = {
  Firstdistro: 'firstdistro',
  Gre: 'gre',
  Personal: 'personal',
  Sinch: 'sinch',
  Uselay: 'uselay',
} as const

export type Product = (typeof Product)[keyof typeof Product]

export const productValues = Object.values(Product) as [Product, ...Product[]]

export const getProductLabel = (product: Product): string => {
  switch (product) {
    case Product.Firstdistro:
      return 'FirstDistro'
    case Product.Gre:
      return 'GRE'
    case Product.Personal:
      return 'Personal'
    case Product.Sinch:
      return 'Sinch'
    case Product.Uselay:
      return 'UseLay'
    default: {
      const exhaustive: never = product
      throw new Error(`Unknown product: ${exhaustive}`)
    }
  }
}
