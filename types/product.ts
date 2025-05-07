export interface ProductType {
  id: string
  name: string
  shortDescription: string
  fullDescription: string
  price: number
  mainImage: string
  additionalImages: string[]
  items: string[]
  isNew?: boolean
  colors?: {
    primary: string
    secondary: string
    tertiary: string
    quaternary?: string
    background: string
    gradient: string
    textGradient: string
  }
}
