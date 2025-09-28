import React, { useState } from "react";
import styled from "styled-components";

const TabsContainer = styled.div`
  display: flex;
  gap: 2rem;
  border-bottom: 1px solid #e0e0e0;
  margin: 2rem 0;
`;

const Tab = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  font-size: 1.1rem;
  font-weight: ${({ active }) => (active ? "600" : "400")};
  color: ${({ active }) => (active ? "#000" : "#666")};
  cursor: pointer;
  padding-bottom: 0.5rem;
  border-bottom: ${({ active }) =>
    active ? "2px solid #000" : "2px solid transparent"};
  transition: color 0.3s ease, border-bottom 0.3s ease;

  &:hover {
    color: #000;
  }
`;

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"forYou" | "featured">("forYou");

  return (
    <TabsContainer>
      <Tab
        active={activeTab === "forYou"}
        onClick={() => setActiveTab("forYou")}
      >
        For You
      </Tab>
      <Tab
        active={activeTab === "featured"}
        onClick={() => setActiveTab("featured")}
      >
        Featured
      </Tab>
    </TabsContainer>
  );
};

export default Tabs;
