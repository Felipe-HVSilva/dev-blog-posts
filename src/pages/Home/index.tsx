import { PrismicRichText, usePrismicDocuments } from "@prismicio/react"
import { Post } from "../../components/Post"
import { HomeContainer, PostsContainer } from "./styles"

export function Home() {
  const [document] = usePrismicDocuments()
  console.log(document)

  return (
    <HomeContainer>
      <h1>DevPosts - Blog</h1>

      <PostsContainer>
        {document?.results.map((post) => (
          <Post img={post.data.img} key={post.data.uid}>
            <PrismicRichText field={document.results[0].data.title} />
            <PrismicRichText field={document.results[0].data.about} />
          </Post>
        ))}
      </PostsContainer>
    </HomeContainer>
  )
}
