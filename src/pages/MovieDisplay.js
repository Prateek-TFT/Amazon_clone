import React from "react";
import styles from "../styles/MovieDisplay.module.css";
import playbutton from "../assets/logo/play.png";
export const MovieDisplay = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}></div>
      <div className={styles.subContainer1}>
        <h1 className={styles.heading}>House of Gucci</h1>
        <div className={styles.subcontainer1detailsDiv}>
          <div className={styles.imdb}>
            <p>IMDb</p>
          </div>
          <p>6.6</p>
          <p>2 h 38 min</p>
          <p>2021</p>
          <div className={styles.imdb}>
            <p>X-Ray</p>
          </div>
          <div className={styles.imdb}>
            <p>U/A 13+</p>
          </div>
        </div>
        <div className={styles.Subcontainerdiv}>
          <img className={styles.Subcontainer1buttonImage} src={playbutton} />
          <button className={styles.Subcontainer1button}>Play</button>
          <div className={styles.Subcontainerdiv2}>
            <div className={styles.Subcontainerdiv2icons}>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <title>Trailer</title>
                <path
                  d="M4.078 3.319c-.2-.116-.078-.186-.078.045v17.272c0 .231-.123.16.078.045l15.03-8.641c.197-.115.197.034 0-.08L4.077 3.32z"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                ></path>
              </svg>
            </div>
            <div className={styles.Subcontainerdiv2icons}>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <title>Add</title>
                <path
                  d="M3 12h18m-9 9V3"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                ></path>
              </svg>
            </div>
            <div className={styles.Subcontainerdiv2icons}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <title>Watch Party</title>
                <g
                  fill="none"
                  fill-rule="evenodd"
                  transform="rotate(45 13.621 11.293)"
                >
                  <polygon
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                    points="7.362 15.985 12.862 27.985 18.362 15.985"
                  ></polygon>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.20520683,12.8786797 C7.9841616,11.0305625 7.19297531,10.0986243 6.20520683,9.87867966"
                  ></path>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.8890873,12.6109127 C20.4469968,9.53071743 18.8646243,7.97748706 16.8890873,7.6109127"
                    transform="matrix(-1 0 0 1 37.778 0)"
                  ></path>
                  <circle
                    cx="3.316"
                    cy="7.49"
                    r="1"
                    fill="currentColor"
                  ></circle>
                  <circle
                    cx="20.657"
                    cy="11.879"
                    r="1"
                    fill="currentColor"
                  ></circle>
                  <circle
                    cx="3.316"
                    cy="11.732"
                    r="1"
                    fill="currentColor"
                  ></circle>
                  <circle
                    cx="1.195"
                    cy="9.611"
                    r="1"
                    fill="currentColor"
                  ></circle>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M12.557293,13.0753788 C14.5891901,10.5746233 14.5891901,4.94159902 11.0953579,4.94159902 C8.22476933,4.94159902 8.63047547,8.5284102 10.8269766,8.5284102 C13.5809029,8.5284102 16.0116573,2.4313965 11.751917,0.0753787975"
                  ></path>
                </g>
              </svg>
            </div>
            <div className={styles.Subcontainerdiv2icons}>
              <svg
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class=""
              >
                <g fill-rule="nonzero" fill="none">
                  <path
                    class="_3VjO1A"
                    stroke="#F2F4F6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.997 18.087v4.972h18.03v-4.972"
                  ></path>
                  <path
                    class="_3VjO1A"
                    d="M12 5v12M7.5 12.5L12 17M16.5 12.5L12 17"
                    stroke="#F2F4F6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <p className={styles.description}>
          Inspired by the true story of the family behind the Italian fashion
          empire. When Patrizia Reggiani marries into the Gucci family, her
          unbridled ambition begins to unravel the family legacy and triggers a
          spiral of betrayal, decadence, and murder.
        </p>
        <div className={styles.castDetailDiv}>
          <div className={styles.castDetailleftsubdiv}>
            <p>Directors</p>
            <p>Starring</p>
            <p>Genres</p>
            <p>Subtitles</p>
            <p>AudioLanguages</p>
          </div>
          <div className={styles.castDetailrightsubdiv}>
            <p className={styles.castDetailrightsubdivblue}>Ridley Scott</p>
            <p className={styles.castDetailrightsubdivblue}>
              Lady Gaga, Adam Driver, Jared Leto
            </p>
            <p className={styles.castDetailrightsubdivblue}>Drama,Suspense</p>
            <p>Dansk [CC] , English [CC]</p>
            <p>Français (Canada) , Español (España) ,</p>
          </div>
        </div>
      </div>
      <div className={styles.subContainer2}>
        <p>
          By clicking play, you agree to our{" "}
          <p className={styles.castDetailrightsubdivblue}>Terms of Use.</p>
        </p>
        <div className={styles.subContainer2otherbox}>
          <div className={styles.subContainer2othersubbox}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <title>Share</title>
              <path
                d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm12-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-3-4l-7-3m7-7l-7 3"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
              ></path>
            </svg>
            <p>Share</p>
          </div>
          <div className={styles.subContainer2othersubbox}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <title>Edit</title>
              <g
                fill="none"
                fill-rule="evenodd"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.87 3L3 17v4h4L22 7.09z"
                ></path>
                <path d="M15 7l3 3"></path>
              </g>
            </svg>
            <p>Feedback</p>
          </div>
          <div className={styles.subContainer2othersubbox}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <title>Help</title>
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M11 18v-2h2v2h-2zm1-12c3.401 0 4 1.757 4 2.925 0 1.47-.627 1.88-1.4 2.38-.774.485-1.438 1.061-1.6 1.954l-.072.741H11v-.846c.108-1.32.681-1.716 1.4-2.186.703-.469 1.6-1.013 1.6-1.83 0-.925-1.046-1.454-2-1.454-1.296 0-1.982 1.03-2 2.105H8C8.054 7.623 9.372 6 12 6z"
                  fill="currentColor"
                ></path>
                <circle
                  stroke="currentColor"
                  stroke-width="2"
                  cx="12"
                  cy="12"
                  r="9"
                ></circle>
              </g>
            </svg>
            <p>Get Help</p>
          </div>
        </div>
      </div>
      <div className={styles.subContainer3}></div>
      <div className={styles.subContainer4}></div>
    </div>
  );
};
