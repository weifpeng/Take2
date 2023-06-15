import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { IBaseProps } from "@/constanst/types";

const Take2Logo: React.FC<IBaseProps> = ({ className, style }) => {
  return (
    <div className={className} style={style}>
      <StaticImage
        alt="Take2"
        src="../../assets/images/take2_full_color.webp"
        width={100}
        height={27}
        objectFit="contain"
        backgroundColor="white"
      />
    </div>
  );
};

export default Take2Logo;
