import { Layout, Take2Logo } from "@/components";
import { IClinicInfo } from "@/constanst/clinic";
import ClinicListPage from "@/module/clinic-list";
import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";

const ClinicListTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              name
              address
              id
            }
          }
        }
      }
    }
  `);

  const clinics: IClinicInfo[] = useMemo(() => {
    return data.allMdx.edges.map((e: any) => e.node.frontmatter);
  }, [data]);
  return (
    <Layout content={<Take2Logo style={{ padding: "0 16px" }} />}>
      <ClinicListPage clinics={clinics} />
    </Layout>
  );
};

export const Head = ({ data: { mdx } }: any) => <title>Take2 - 诊所列表</title>;

export default ClinicListTemplate;
