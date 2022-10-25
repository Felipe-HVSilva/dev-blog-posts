import { PrismicRichText, PrismicText } from "@prismicio/react"
import { ReactNode } from "react"
import { prismicImage, prismicText } from "../../@types/prismic"
import { PostContainer, PostInfo } from "./styles"

interface PostProps {
  img: prismicImage
  children: ReactNode
}

export function Post({ img, children }: PostProps) {
  return (
    <PostContainer>
      <img src={img.url} alt="" />

      <PostInfo>
        {children}
        <a href="">Leia mais</a>
      </PostInfo>
    </PostContainer>
  )
}
