import * as Prismic from "@prismicio/client"

export const client = Prismic.createClient(
  `${import.meta.env.VITE_PRISMIC_ENVIROMENT}`,
  {
    accessToken: `${import.meta.env.VITE_KEY_PRISMIC}`,
  }
)
