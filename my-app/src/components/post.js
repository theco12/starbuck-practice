import React from "react";
import styled from "styled-components";

const Post = () => {
  // 가데이터 생성
  const posts = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `토스 프론트엔드 개발자들이 더 이상 문서를 찾지 않는 이유 ${index + 1}`,
    content:
      "토스 프론트엔드 팀은 이제 문서를 찾아 헤매지 않아요. 문서와 AI로 개발자의 질문에 바로 답변해주는 환경을 만들고 있거든요. 개발에만 온전히 집중할 수 있는 새로운 문서 시스템, 어떻게 만들었는지 알려드려요",
    date: `2024.11.${String(index + 1).padStart(2, "0")}`,
    imgSrc: "/img/cover-ai.png",
  }));

  return (
    <PostList>
      {posts.map((post) => (
        <PostContainer key={post.id}>
          <PostContent>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <span>{post.date}</span>
          </PostContent>
          <PostImage>
            <img src={post.imgSrc} alt={`Post ${post.id}`} />
          </PostImage>
        </PostContainer>
      ))}
    </PostList>
  );
};

const PostList = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PostContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
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
  padding: 20px;
  img {
    width: 130px;
    height: 90px;
    border-radius: 12px;
  }
`;

export default Post;
