import React from "react";

import { Link } from "gatsby";
import styled from "@emotion/styled";
import { List, ListItemButton } from "@mui/material";
import Card from "@mui/material/Card";
import { IClinicInfo } from "@/constanst/clinic";
const TitleContainer = styled.div`
  padding: 16px 0px;
`;

const Title = styled.div`
  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem; /* 28px */
  font-weight: 600;
`;

const ItemContainer = styled.div`
  padding: 8px 16px;
`;

interface IClinicListProps {
  clinics: IClinicInfo[];
}

const ClinicList: React.FC<IClinicListProps> = ({ clinics }) => (
  <div style={{ padding: "0px 16px" }}>
    <TitleContainer>
      <Title>诊所列表</Title>
    </TitleContainer>
    <List>
      {clinics.map((clinic) => (
        <Link to={`${clinic.id}`}>
          <Card style={{ marginBottom: 8 }}>
            <ListItemButton>
              <ItemContainer key={clinic.id}>
                <strong>{clinic.name}</strong>
                <br />
                {clinic.address}
              </ItemContainer>
            </ListItemButton>
          </Card>
        </Link>
      ))}
    </List>
  </div>
);

export default ClinicList;
