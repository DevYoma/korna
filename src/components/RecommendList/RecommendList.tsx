import styled from "styled-components";

const RecommendContainer = styled.div`
  padding: 24px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bolder;
  color: #242424;
  margin-bottom: 16px;
`;

const TopicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TopicTag = styled.a`
  text-decoration: none;
  color: #242424;
  background-color: #f2f2f2;
  padding: 8px 16px;
  border-radius: 100px;
  font-size: 14px;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const SeeMore = styled.a`
  display: block;
  margin-top: 16px;
  color: #6b6b6b;
  text-decoration: none;
  font-size: 13px;

  &:hover {
    text-decoration: underline;
  }
`;

const topics = [
  "Data Science",
  "React",
  "Coding",
  "Mental Health",
  "UX",
  "Python",
  "Productivity",
];

const RecommendList = () => {
  return (
    <RecommendContainer>
      <Title>Recommended topics</Title>
      <TopicsContainer>
        {topics.map((topic) => (
          <TopicTag key={topic} href={`/topic/${topic.toLowerCase()}`}>
            {topic}
          </TopicTag>
        ))}
      </TopicsContainer>
      <SeeMore href="/topics">See more topics</SeeMore>
    </RecommendContainer>
  );
};

export default RecommendList;
