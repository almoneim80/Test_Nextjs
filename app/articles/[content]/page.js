import React from "react";

export default function Content(props) {
  console.log(props);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
        flexDirection: "column",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h1>
        This is My first article about AI.
        <span>bla bla bla bla</span>
      </h1>

      <h1>{props.params.content}</h1>
    </div>
  );
}
