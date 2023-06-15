import { MediaListPlayer } from "@/components";
import { IClinicInfo } from "@/constanst/clinic";
import { IBaseProps } from "@/constanst/types";
import styled from "@emotion/styled";
import React from "react";

const InfoContainer = styled.div`
  color: white;
  margin-bottom: 20px;
  border-left: 4px solid #f2512d;
  padding-left: 8px;
`;

interface IClinicProps extends IBaseProps {
  info: IClinicInfo;
}

const ClinicPage: React.FC<IClinicProps> = ({ info }) => {
  return (
    <MediaListPlayer imageList={info.images}>
      <InfoContainer>
        <div>{info?.phone}</div>
        <div>{info?.address}</div>
      </InfoContainer>
    </MediaListPlayer>
  );
};

export default ClinicPage;
