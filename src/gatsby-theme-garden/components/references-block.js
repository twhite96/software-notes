import React from "react";
import Reference from "gatsby-theme-garden/src/components/reference";

import "gatsby-theme-garden/src/components/references-block.css";

const ReferencesBlock = ({ references }) => {
  const footer = (
    <React.Fragment>
      <p>
        Have anything to add?{" "} You can reach out to me by {" "}
        <a href="mailto:tiffany@tiffanywhite.dev">email</a> or{" "}
        You can find more of my stuff on my{" "} <a href="https://links.tiffanywhite.dev">links page</a>.
      </p>
    </React.Fragment>
  )

  if (!references.length) {
    return <div className="references-block">{footer}</div>;
  }

  return (
    <div className="references-block">
      <h3>Links to this note</h3>
      <div>
        {references.map((ref) => (
          <Reference node={ref} key={ref.id} />
        ))}
      </div>
      <hr />
      {footer}
    </div>
  );
};

export default ReferencesBlock;