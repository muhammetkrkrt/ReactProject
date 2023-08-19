import React from "react";

function Aboutme(props) {
  return <section>
    <h2>{props.aboutme.title}</h2>
      <article>
        <h3>{props.aboutme.h[0]}</h3>
        <p>{props.aboutme.discreption[0]}</p>
      </article>
      <article>
        <h3>{props.aboutme.h[1]}</h3>
       <p>{props.aboutme.discreption[1]}</p>
      </article>
  </section>;
}

export default Aboutme;
