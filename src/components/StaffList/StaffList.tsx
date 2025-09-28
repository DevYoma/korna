import styled from "styled-components";
import Kakashi from "../../assets/kakashi.jpg";

interface StaffPickItem {
  id: string;
  title: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  source?: string;
  sourceName?: string;
}

const StaffListContainer = styled.div`
  padding: 24px 0;
`;

const StaffListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 0 24px;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: #242424;
`;

const SeeFullList = styled.a`
  font-size: 13px;
  color: #6b6b6b;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const StaffItem = styled.div`
  padding: 12px 24px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`;

const SourceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 13px;
  color: #6b6b6b;
`;

const StaffTitle = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: #242424;
  text-decoration: none;
  line-height: 20px;
  margin-bottom: 8px;
  display: block;

  &:hover {
    color: #1a8917;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

const Avatar = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const AuthorName = styled.span`
  font-size: 13px;
  color: #242424;
  font-weight: 500;
`;

const TimeStamp = styled.span`
  font-size: 13px;
  color: #6b6b6b;
`;

const staffPicks: StaffPickItem[] = [
  {
    id: "1",
    title:
      "How this brand strategist uses Medium to explore ideas, repurpose content, and land clients",
    author: {
      name: "Jud Brewer MD PhD",
      avatar: Kakashi
    },
    publishedAt: "2d ago",
    source: "The Medium Handbook",
    sourceName: "Zulie @ Medium",
  },
  {
    id: "2",
    title:
      'From "I Have To" to "I Get To": How One Word Change Rewires Your Brain',
    author: {
      name: "Jud Brewer MD PhD",
      avatar: Kakashi
    },
    publishedAt: "5d ago",
  },
  {
    id: "3",
    title: "Golden Design Lessons from Tokyo Metro",
    author: {
      name: "Linh Nguyen",
      avatar: Kakashi
    },
    publishedAt: "Sep 3",
  },
];

const StaffList = () => {
  return (
    <StaffListContainer>
      <StaffListHeader>
        <Title>Staff Picks</Title>
        {/* <SeeFullList href="/staff-picks">See the full list</SeeFullList> */}
      </StaffListHeader>
      {staffPicks.map((pick) => (
        <StaffItem key={pick.id}>
          {pick.source && (
            <SourceInfo>
              In <a href={`/${pick.source.toLowerCase()}`}>{pick.source}</a> by{" "}
              {pick.sourceName}
            </SourceInfo>
          )}
          <StaffTitle href={`/post/${pick.id}`}>{pick.title}</StaffTitle>
          <AuthorInfo>
            <Avatar src={pick.author.avatar} alt={pick.author.name} />
            <AuthorName>{pick.author.name}</AuthorName>
            <TimeStamp>· {pick.publishedAt}</TimeStamp>
          </AuthorInfo>
        </StaffItem>
      ))}
      <StaffListHeader>
        <SeeFullList href="/staff-picks">See the full list</SeeFullList>
      </StaffListHeader>
    </StaffListContainer>
  );
};

export default StaffList;
