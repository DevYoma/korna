// import Tabs from "../components/Tabs/Tabs";
import NewsFeed from "../components/NewsFeed/NewsFeed";
import styled from "styled-components";
import StaffList from "../components/StaffList/StaffList";
import Pic1 from "../assets/issue.png"

const HomeMain = styled.main`
  display: flex;
  // border: 2px dotted blue;
  width: 80%;
  // max-width: 1440px;
  margin-left:auto;
  padding: 20px;
  // gap: 2rem;
  overflow-x: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NewsfeedSection = styled.section`
  flex: 0 0 70%;
  // max-width: 70%;

  @media (max-width: 768px) {
    flex: 1;
    max-width: 100%;
  }
`;

const StaffPicksSection = styled.section`
  // border: 2px dotted red;
  flex: 0 0 30%;
  // max-width: 30%;

  @media (max-width: 768px) {
    flex: 1;
    max-width: 100%;
  }
`;

interface FeedItem {
  author: string;
  title: string;
  subtitle: string;
  category: string;
  timeAgo: string;
  views: string;
  comments: number;
  image: string;
  clapped?: boolean;
}

const feedItems: FeedItem[] = [
  {
    author: "John Doe",
    title: "Understanding React Hooks",
    subtitle:
      "A deep dive into the world of React Hooks and how they can simplify your code.",
    category: "React",
    timeAgo: "2 hours ago",
    views: "1.2k",
    comments: 34,
    image: Pic1,
    clapped: true,
  },
  {
    author: "Jane Smith",
    title: "TypeScript Best Practices in 2025",
    subtitle:
      "Learn how to write better TypeScript code with these modern patterns.",
    category: "TypeScript",
    timeAgo: "4 hours ago",
    views: "2.3k",
    comments: 45,
    image: Pic1,
  },
  {
    author: "Mike Johnson",
    title: "The Future of Web Development",
    subtitle: "Exploring upcoming trends and technologies in web development.",
    category: "Web Dev",
    timeAgo: "6 hours ago",
    views: "3.4k",
    comments: 56,
    image: Pic1,
    clapped: true,
  },
  {
    author: "Sarah Wilson",
    title: "Mastering CSS Grid Layout",
    subtitle: "A comprehensive guide to building modern layouts with CSS Grid.",
    category: "CSS",
    timeAgo: "8 hours ago",
    views: "1.8k",
    comments: 23,
    image: Pic1,
  },
  {
    author: "David Brown",
    title: "Next.js vs Remix: A 2025 Comparison",
    subtitle:
      "Comparing two popular React frameworks for modern web applications.",
    category: "Frameworks",
    timeAgo: "10 hours ago",
    views: "4.2k",
    comments: 67,
    image: Pic1,
    clapped: true,
  },
];


const Home = () => {
  return (
    <HomeMain style={{}}>
      <NewsfeedSection>
        {feedItems.map((item, index) => (
          <NewsFeed
            key={index}
            author={item.author}
            title={item.title}
            subtitle={item.subtitle}
            category={item.category}
            timeAgo={item.timeAgo}
            views={item.views}
            comments={item.comments}
            image={item.image}
            clapped={item.clapped}
          />
        ))}
      </NewsfeedSection>
      <StaffPicksSection>
        <StaffList />
      </StaffPicksSection>
    </HomeMain>
  );
};

export default Home;