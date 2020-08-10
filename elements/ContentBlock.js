import * as React from "react";
import style from "./content-block.module.css";

const ContentBlock = ({ children }) => (
  <div className={style.content}>{children}</div>
);

export default ContentBlock;
