import styled from "@emotion/styled";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React, { useEffect, useMemo, useRef, useState } from "react";
const Container = styled.div`
  position: relative;
  height: 100%;
`;

const ImageContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  height: 100%;
  filter: brightness(0.75);
`;

const PlayerContainer = styled(motion.div)`
  box-sizing: border-box;
  position: absolute;
  bottom: 30px;
  width: 100%;
  padding: 0 24px;
`;

const PlayerItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  height: 64px;
  button {
    color: rgba(255, 255, 255, 0.5);
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

const InfoContainer = styled(motion.div)`
  box-sizing: border-box;
  position: absolute;
  bottom: 100px;
  padding: 0 24px;
`;

interface GetNextCurrentParam {
  current: number;
  len: number;
  int: number;
}

function getNextCurrent(param: GetNextCurrentParam): number {
  const { current, len, int } = param;
  let nextCurrent = current + int;

  if (nextCurrent < 0) {
    nextCurrent = len - 1;
  } else if (nextCurrent >= len) {
    nextCurrent = 0;
  }

  return nextCurrent;
}

interface IMediaListPlayerProps {
  imageList?: IGatsbyImageData[];
  children?: React.ReactElement;
}

const MediaListPlayer: React.FC<IMediaListPlayerProps> = ({
  imageList,
  children,
}) => {
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [hidenInfo, setHidenInfo] = useState(false);
  const invRef = useRef<any>();

  const imageCount = useMemo(() => imageList?.length || 0, [imageList]);

  useEffect(() => {
    clearInterval(invRef.current);
    if (!autoPlay) return;
    invRef.current = setInterval(() => {
      setIndex((i) => getNextCurrent({ current: i, len: imageCount, int: 1 }));
    }, 3000);

    return () => {
      clearInterval(invRef.current);
    };
  }, [autoPlay]);

  return (
    <Container>
      {imageList?.map((img, i) => (
        <ImageContainer
          animate={{
            opacity: i === index ? 1 : 0,
            filter: !hidenInfo ? "brightness(0.75)" : "brightness(1)",
          }}
          transition={{ duration: 0.5 }}
          onClick={() => {
            setHidenInfo((h) => !h);
          }}
        >
          <GatsbyImage image={img} alt="1" style={{ height: "100%" }} />
        </ImageContainer>
      ))}

      <PlayerContainer
        animate={{ y: hidenInfo ? 100 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <PlayerItem>
          <IconButton
            onClick={() => {
              setIndex((i) =>
                getNextCurrent({ current: i, len: imageCount, int: -1 })
              );
            }}
          >
            <KeyboardDoubleArrowLeftIcon fontSize="large" />
          </IconButton>
          {autoPlay && (
            <IconButton
              onClick={() => {
                setAutoPlay(false);
              }}
            >
              <StopIcon fontSize="large" />
            </IconButton>
          )}
          {!autoPlay && (
            <IconButton
              onClick={() => {
                setAutoPlay(true);
              }}
            >
              <PlayArrowIcon fontSize="large" />
            </IconButton>
          )}

          <IconButton
            onClick={() => {
              setIndex((i) =>
                getNextCurrent({ current: i, len: imageCount, int: 1 })
              );
            }}
          >
            <KeyboardDoubleArrowRightIcon fontSize="large" />
          </IconButton>
        </PlayerItem>
      </PlayerContainer>
      <InfoContainer
        animate={{ x: hidenInfo ? "-100%" : 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </InfoContainer>
    </Container>
  );
};

export default MediaListPlayer;
