import styled from "styled-components"

export const HomeContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin-top: 4.875rem;
    font-weight: bold;
    font-size: 2rem;
  }
`

export const PostsContainer = styled.main`
  width: 100%;
  margin: 2.81rem;

  padding: 0 25px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.68rem 1.87rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
