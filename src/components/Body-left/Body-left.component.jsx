import "./Body-left.styles.scss";

import React, { Component } from "react";
import { Fragment } from "react";

export default class BodyLeft extends Component {
  render() {
    const { state } = this.props;
    const { img, name, description } = state;
    return (
      <div className="body-left">
        <div className="card text-white bg-primary">
          {img !== "" && name !== "" && description !== "" ? (
            <Fragment>
              <div className="card-top">
                <img
                  className="card-img-top"
                  src="/img/model.jpg"
                  alt="Title"
                />
                <img className="glass-img" src={img} alt="..." />
              </div>
              <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">{description}</p>
              </div>{" "}
            </Fragment>
          ) : (
            <Fragment>
              <div className="card-top">
                <img
                  className="card-img-top"
                  src="/img/model.jpg"
                  alt="Title"
                />
                <img className="glass-img" src="./img/v1.png" alt="..." />
              </div>
              <div className="card-body">
                <h4 className="card-title">GUCCI G8850U</h4>
                <p className="card-text">
                  Light pink square lenses define these sunglasses, ending with
                  amother of pearl effect tip.
                </p>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}
