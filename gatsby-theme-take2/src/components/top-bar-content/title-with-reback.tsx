import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import React from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
  }
`;

interface ITitleWithRebackProps {
  title: string;
  icon: React.ReactElement;
  onClick?: () => void;
}

const TitleWithReback: React.FC<ITitleWithRebackProps> = ({
  title,
  icon,
  onClick,
}) => {
  return (
    <Container>
      <IconButton onClick={onClick}>{icon}</IconButton>
      <h1>{title}</h1>
    </Container>
  );
};

export default TitleWithReback;
