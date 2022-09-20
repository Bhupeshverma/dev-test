import React from "react";
import Image from "next/image";
import styles from "../styles/Card.module.css";
import { FaCheck, FaArrowRight } from "react-icons/fa";

const Card = ({ product }) => {
  const parseUrl = (url) => {
    return `https:${url}`;
  };
  return (
    <div className={styles.card} key={product.uuid}>
      <div className={styles.cardHeader}>{product.name}</div>
      <hr />
      <div className={styles.statSection}>
        <div className={styles.stats}>
          <p className={styles.statText} style={{ margin: 0 }}>
            Advertised rate
          </p>
          <div className={styles.statRate}>{product.advertisedRate}%</div>
        </div>
        <div className={styles.vl}></div>
        <div className={styles.stats}>
          <p className={styles.statText} style={{ margin: 0 }}>
            Comparison rate
          </p>
          <div className={styles.statRate}>{product.comparisonRate}%</div>
        </div>
      </div>
      <hr />
      <div className={styles.listSection}>
        {product.pros.slice(0, 4).map((item, index) => {
          return (
            <div className={styles.listItem} key={index}>
              <p>
                <FaCheck /> {item}
              </p>
            </div>
          );
        })}
        <div className="text-end">
          <a
            href={product.productUrl}
            target="_blank"
            className={styles.cardLink}
            rel="noreferrer"
          >
            more information
          </a>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <Image
            src={parseUrl(product.companyLogo)}
            width={100}
            height={40}
            alt="company logo"
          />
          {/* <img src={"https:" + product.companyLogo} class="rounded mx-auto d-block" alt="..." /> */}
        </div>
        <div className="col">
          <a
            href={product.gotoSiteUrl}
            target="_blank"
            rel="noreferrer"
            style={{ width: "inherit" }}
            className="btn btn-success"
          >
            Go to Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
