import React from "react";
import { Link } from "react-router-dom";

import styles from "./LiteCard.module.scss";

interface IProps {
  name: string;
  url: string;
  id: number;
}

const Card: React.FC<IProps> = ({ name, url, id }: IProps) => {
  return (
    <div className={styles.card}>
      <Link to={`/${id}`}>
        <img alt={`фото ${name}`} src={url} className={styles.card__img} />
        <p>{name}</p>
      </Link>
    </div>
  );
};

export default Card;
