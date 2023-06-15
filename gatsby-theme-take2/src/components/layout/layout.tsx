import styled from "@emotion/styled";
import React from "react";
import "@/assets/styles/reset.css";

const LayoutContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
  background-color: rgb(248 250 252);
`;

const HeadContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  background-color: white;
`;

const BodyContainer = styled.div`
  height: calc(100vh - 60px);
`;

interface ILayoutProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children, content }) => {
  return (
    <LayoutContainer>
      <HeadContainer>{content}</HeadContainer>
      <BodyContainer>{children}</BodyContainer>
    </LayoutContainer>
  );
};

export default Layout;
