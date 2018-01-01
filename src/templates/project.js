import React from "react";

export default ({ data }) => {
  const { title, image } = data.markdownRemark.frontmatter
  return (
    <div>
      <h1>{title}</h1>
      <p>{image}</p>      
    </div>
  );
};

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image
      }
    }
  }
`;