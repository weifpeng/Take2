import { Layout, TitleWithReback } from "@/components";
import { IClinicInfo } from "@/constanst/clinic";
import ClinicPage from "@/module/clinic";
import WestIcon from "@mui/icons-material/West";
import { graphql, navigate } from "gatsby";
import React, { useMemo } from "react";

export const query = graphql`
  query ($clinicId: Int!) {
    mdx(frontmatter: { id: { eq: $clinicId } }) {
      frontmatter {
        id
        address
        name
        phone
        images {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const ClinicTemplate = ({ data: { mdx } }: any) => {
  const info: IClinicInfo = useMemo(() => {
    return {
      ...mdx.frontmatter,
      images: mdx.frontmatter.images.map(
        (image: any) => image.childImageSharp.gatsbyImageData
      ),
    };
  }, [mdx]);

  return (
    <Layout
      content={
        <TitleWithReback
          title={mdx.frontmatter.name}
          icon={<WestIcon />}
          onClick={() => {
            navigate(-1);
          }}
        />
      }
    >
      <ClinicPage info={info} />
    </Layout>
  );
};

export const Head = ({ data: { mdx } }: any) => (
  <title>Take2 - {mdx.frontmatter.name}</title>
);

export default ClinicTemplate;
