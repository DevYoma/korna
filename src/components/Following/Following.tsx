import styled from "styled-components";
import Kakashi from "../../assets/kakashi.jpg";
import Minato from "../../assets/minato.jpg";

interface FollowSuggestion {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  isPublication?: boolean;
}

const FollowingContainer = styled.div`
  padding: 24px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bolder;
  color: #242424;
  margin-bottom: 16px;
`;

const SuggestionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SuggestionItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

const AvatarAndInfo = styled.div`
  display: flex;
  gap: 12px;
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;

const PublicationAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 4px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

const Info = styled.div`
  flex: 1;
`;

const Name = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #242424;
  margin-bottom: 4px;
`;

const Bio = styled.p`
  font-size: 13px;
  color: #6b6b6b;
  line-height: 1.4;
`;

const FollowButton = styled.button`
  padding: 6px 16px;
  border-radius: 99px;
  border: 1px solid #242424;
  background: transparent;
  color: #242424;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const SeeMore = styled.a`
  display: block;
  margin-top: 20px;
  color: #6b6b6b;
  text-decoration: none;
  font-size: 13px;

  &:hover {
    text-decoration: underline;
  }
`;

const suggestions: FollowSuggestion[] = [
  {
    id: "1",
    name: "Dr. Derek Austin 🥳",
    avatar: Minato,
    bio: "AI Context Engineer · I teach LLMs to think · Full...",
  },
  {
    id: "2",
    name: "ITNEXT",
    avatar: "X",
    bio: "ITNEXT is a platform for IT developers & software...",
    isPublication: true,
  },
  {
    id: "3",
    name: "Oliver Foster",
    avatar: Kakashi,
    bio: "Primarily proficient in the Java programming...",
  },
];

const Following = () => {
  return (
    <FollowingContainer>
      <Title>Who to follow</Title>
      <SuggestionList>
        {suggestions.map((suggestion) => (
          <SuggestionItem key={suggestion.id}>
            <AvatarAndInfo>
              {suggestion.isPublication ? (
                <PublicationAvatar>X</PublicationAvatar>
              ) : (
                <Avatar src={suggestion.avatar} alt={suggestion.name} />
              )}
              <Info>
                <Name>{suggestion.name}</Name>
                <Bio>{suggestion.bio}</Bio>
              </Info>
            </AvatarAndInfo>
            <FollowButton>Follow</FollowButton>
          </SuggestionItem>
        ))}
      </SuggestionList>
      <SeeMore href="/suggestions">See more suggestions</SeeMore>
    </FollowingContainer>
  );
};

export default Following;
