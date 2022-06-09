import React from "react";
import Modal from "../UI/Modal/Modal";
import styles from "../Category/Category.module.css";
const topCategories = [
  "Included with prime",
  "Amazon Originals",
  "Movies",
  "TV",
  "Kids",
];
const otherCategories = [
  "Drama",
  "Action and Adventure",
  "Romantic",
  "Comedy",
  "Suspense",
  "Horror",
  "Award Winner",
];
const audioLanguages = [
  "Hindi",
  "English",
  "Tamil",
  "Telugu",
  "Kannada",
  "Malayalam",
  "Punjabi",
  "Bengali",
  "Marathi",
  "Gujarati",
];
// const url =
//   "	https://m.media-amazon.com/images/G/01/digital/video/web_cats/Amazon-Originals.png";
const Category = (props) => {
  return (
    <Modal onClick={props.onHideCategory}>
      <div className={styles.categoryContainer}>
        <div>
          <h3
            className={styles.heading}
            style={{ marginLeft: "100px", marginBottom: "20px" }}
          >
            Top categories
          </h3>
          <div className={styles.leftCategoryContainer}>
            {topCategories.map((topCategorie, index) => (
              <div
                key={index}
                className={styles.topCategories}
                style={{
                  backgroundImage:
                    "url(https://m.media-amazon.com/images/G/01/digital/video/web_cats/Amazon-Originals.png)",
                  backgroundSize: "cover",
                }}
              >
                {topCategorie}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.rightCategoryContainer}>
          <div>
            <h3
              className={styles.heading}
              style={{ marginLeft: "40px", marginBottom: "20px" }}
            >
              Audio languages
            </h3>
            <div className={styles.audioContainer}>
              {audioLanguages.map((audio, index) => (
                <div key={index} className={styles.fronts}>
                  {audio}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className={styles.heading} style={{marginBottom: "20px" }}>Other Category</h3>
            <div className={styles.otherCategoryContainer}>
              {otherCategories.map((categorie, index) => (
                <div key={index} className={styles.fronts}>
                  {categorie}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Category;
