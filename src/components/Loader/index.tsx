import React from "react";

import styles from "./loader.module.scss";

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__content} />
    </div>
  );
};

export default Loader;
