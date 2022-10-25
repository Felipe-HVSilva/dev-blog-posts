import styled from "styled-components"

export const PostContainer = styled.article`
  img {
    width: 100%;
    vertical-align: middle;
  }
`

export const PostInfo = styled.div`
  background: linear-gradient(
    228.89deg,
    ${({ theme }) => theme.color["blue-700"]} 26.7%,
    ${({ theme }) => theme.color["blue-500"]} 96.19%
  );
  text-align: left;
  padding: 23px 19px;

  h2 {
    font-weight: bold;
    font-size: 1.37rem;
    line-height: 28px;
    color: ${({ theme }) => theme.color.white};
  }

  p {
    color: ${({ theme }) => theme.color.white};
    margin-top: 13px;
  }

  a {
    display: inline-block;
    text-align: center;
    margin-top: 2.87rem;

    color: ${(props) => props.theme.color.white};

    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.4);
    padding: 15px 0;
    transition: backgroud 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`
