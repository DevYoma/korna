import styled from "styled-components";
import { BsBookmark } from "react-icons/bs";

const ReadingListContainer = styled.div`
  padding: 24px;
  border-top: 1px solid #e5e5e5;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: bolder;
  color: #242424;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #6b6b6b;
  line-height: 1.4;
  margin-bottom: 24px;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
`;

const FooterLink = styled.a`
  font-size: 13px;
  color: #6b6b6b;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ReadingList = () => {
  return (
    <ReadingListContainer>
      <Title>
        <BsBookmark size={16} />
        Reading list
      </Title>
      <Description>
        Click the <BsBookmark size={12} /> on any story to easily add it to your
        reading list or a custom list that you can share.
      </Description>
      <FooterLinks>
        <FooterLink href="/help">Help</FooterLink>
        <FooterLink href="/status">Status</FooterLink>
        <FooterLink href="/about">About</FooterLink>
        <FooterLink href="/careers">Careers</FooterLink>
        <FooterLink href="/blog">Blog</FooterLink>
        <FooterLink href="/privacy">Privacy</FooterLink>
        <FooterLink href="/terms">Terms</FooterLink>
        <FooterLink href="/text-to-speech">Text to speech</FooterLink>
      </FooterLinks>
    </ReadingListContainer>
  );
};

export default ReadingList;
