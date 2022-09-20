import React from "react";
import styles from "../styles/Card.module.css";
const Placeholder = () => {
  const arr = Array(9).fill(1);
  return (
    <div className="row row-cols-auto" style={{ placeContent: "center" }}>
      {arr.map((item, index) => {
        return (
          <div className={styles.card} aria-hidden="true" key={index}>
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-12 bg-secondary"></span>
            </h5>
            <p className="placeholder-glow">
              <span className="placeholder col-12 bg-secondary"></span>{" "}
            </p>
            <div className={styles.statSection}>
              <div className={styles.stats}>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-4 bg-secondary"></span>
                  <span className="placeholder col-4 bg-secondary"></span>
                </p>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-4 bg-secondary"></span>
                  <span className="placeholder col-4 bg-secondary"></span>
                </p>
              </div>
              <div className={styles.stats}>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-4 bg-secondary"></span>
                  <span className="placeholder col-4 bg-secondary"></span>
                </p>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-4 bg-secondary"></span>
                  <span className="placeholder col-4 bg-secondary"></span>
                </p>
              </div>
            </div>
            {/* <p className="card-text placeholder-glow">
                    <span className="placeholder col-5 bg-secondary"></span>
                    <span className="placeholder col-5 bg-secondary"></span>
                </p> */}
            <p className="card-text placeholder-glow">
              <span className="placeholder col-12 bg-secondary"></span>
              <span className="placeholder col-12 bg-secondary"></span>
              <span className="placeholder col-12 bg-secondary"></span>
              <span className="placeholder col-12 bg-secondary"></span>
            </p>
            <div className="row">
              <div className="col">
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-12 bg-secondary"></span>
                </p>
              </div>
              <div className="col">
                <p className="card-text placeholder-glow">
                  <a
                    href="#"
                    className="btn btn-primary disabled placeholder col-12 bg-primary"
                  ></a>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Placeholder;
