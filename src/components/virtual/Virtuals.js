import React from "react";
import css from "./virtual.module.css";
import Shade from "../../assets/shade.png";
import ReactCompareImage from "react-compare-image";
import Before from "../../assets/before.png";
import After from "../../assets/after.png";

const Virtuals = () => {
  return (
    <div className={css.virtual}>
      <div className={css.left}>
        <span>Virtual Try-on</span>
        <span>NEVER BUY THE WRONG SHADE AGAIN!</span>
        <span>Try Now!</span>
        <img src={Shade} alt=""></img>
      </div>
      <div className={css.right}>
        <div className={css.wrapper}>
          <ReactCompareImage leftImage={Before} rightImage={After} />
        </div>
      </div>
    </div>
  );
};

export default Virtuals;