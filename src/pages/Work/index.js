import React, { Component } from "react";
import Gallery from "components/Gallery";
import "./Work.css";

class Work extends Component {

  render() {
    return (
      <section className="page container">
        <Gallery className="work"></Gallery>
      </section>
    )
  }
}

export default Work;
