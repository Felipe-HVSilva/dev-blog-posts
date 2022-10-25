export interface prismicImage {
  dimension?: {
    width: number
    height: number
  }
  alt?: string
  url: string
}

export interface prismicText {
  type: string
  text: string
}
