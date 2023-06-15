const fs = require("fs");

// Make sure the data directory exists
exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || `${__dirname}/data/`;

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || "/";
  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/clinic-list.tsx"),
  });

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              id
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panic("error loading clinics", result.errors);
    return;
  }

  const clinics = result.data.allMdx.edges.map((e) => e.node.frontmatter);
  clinics.forEach((clinic) => {
    const slug = clinic.id;
    actions.createPage({
      path: `${basePath}${slug}`,
      component: require.resolve("./src/templates/clinic.tsx"),
      context: {
        clinicId: clinic.id,
      },
    });
  });
};
