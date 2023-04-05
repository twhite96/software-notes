import React from "react";
import Reference from "gatsby-theme-garden/src/components/reference";

import "gatsby-theme-garden/src/components/references-block.css";

const ReferencesBlock = ({ references }) => {
  const footer = (
    <React.Fragment>
      <p>
        If you enjoy these notes,{" "}
        <a href="mailto:tiff@omg.lol">send me a message</a>! Otherwise you can browse through{" "}
        <a href="https://tiffany.lol">my bio</a> to find other ways to connect
        with me.
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