import React from "react";
import styled from "styled-components";

const Post = () => {
  return (
    <PostContainer>
      <PostContent>
        <h3>토스 프론트엔드 개발자들이 더 이상 문서를 찾지 않는 이유</h3>
        <p>
          토스 프론트엔드 팀은 이제 문서를 찾아 헤매지 않아요. 문서와 AI로 개발자의 질문에 바로
          답변해주는 환경을 만들고 있거든요. 개발에만 온전히 집중할 수 있는 새로운 문서 시스템,
          어떻게 만들었는지 알려드려요
        </p>
        <span>2024.11.01</span>
      </PostContent>
      <PostImage>
        <img src="/img/cover-ai.png" alt="Post" />
      </PostImage>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const PostContent = styled.div`
  flex: 4;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  text-align: left;
  white-space: normal;
`;

const PostImage = styled.div`
  flex: 1;
  width: 100%;
  img {
    width: 130px;
    height: 90px;
    border-radius: 12px;
  }
`;

export default Post;
