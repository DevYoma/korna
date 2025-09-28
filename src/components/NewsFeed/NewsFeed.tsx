import React from "react";
import styled from "styled-components";
import {
  FiStar,
  FiEye,
  FiMessageCircle,
  FiMinus,
  FiBookmark,
  FiMoreHorizontal,
} from "react-icons/fi";

interface NewsFeedProps {
  category: string;
  author: string;
  title: string;
  subtitle: string;
  timeAgo: string;
  views: string;
  comments: number;
  image: string;
  clapped?: boolean;
}

const FeedContainer = styled.div`
  // border: 1px solid red;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem 0;
  border-bottom: 1px solid #e5e5e5;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const FeedContent = styled.div`
  flex: 1;
`;

const FeedHeader = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.4rem;

  span {
    color: #000;
    font-weight: 500;
  }
`;

const FeedTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #000;
  margin: 0.2rem 0;
  line-height: 1.4;
`;

const FeedSubtitle = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.8rem;
`;

const FeedMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 0.9rem;
  color: #777;
`;

const MetaLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconText = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const MetaRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;

  svg {
    cursor: pointer;
  }
`;

const FeedImage = styled.img`
  width: 150px;
  height: 100px;
  border-radius: 6px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 180px;
  }
`;

const NewsFeed: React.FC<NewsFeedProps> = ({
  category,
  author,
  title,
  subtitle,
  timeAgo,
  views,
  comments,
  image,
  clapped
}) => {
  return (
    <FeedContainer>
      <FeedContent>
        <FeedHeader>
          {clapped && <span>👏 DevYoma clapped</span>}
          {!clapped && (
            <>
              In <span>{category}</span> by {author}
            </>
          )}
        </FeedHeader>

        <FeedTitle>{title}</FeedTitle>
        <FeedSubtitle>{subtitle}</FeedSubtitle>

        <FeedMeta>
          <MetaLeft>
            <IconText>
              <FiStar size={16} color="#f0b90b" />
              {timeAgo}
            </IconText>

            <IconText>
              <FiEye size={16} />
              {views}
            </IconText>

            <IconText>
              <FiMessageCircle size={16} />
              {comments}
            </IconText>
          </MetaLeft>

          <MetaRight>
            <FiMinus size={16} />
            <FiBookmark size={16} />
            <FiMoreHorizontal size={16} />
          </MetaRight>
        </FeedMeta>
      </FeedContent>

      <FeedImage src={image} alt={title} />
    </FeedContainer>
  );
};

export default NewsFeed;
