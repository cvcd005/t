import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import { getListAction } from "../../Store/actions";
import Loader from "../../components/Loader";
import LiteCard from "../../components/LiteCard";
import { RequestState, IAstr, IList } from "../../Store/types";
import styles from "./Root.module.scss";

interface IProps {
  list: IList;
  getList: () => void;
}

const RootPage: React.FC<IProps> = ({ getList, list }: IProps) => {
  useLayoutEffect(() => {
    getList();
  }, [getList]);

  return (
    <div className={styles.root}>
      <h1 className={styles.root__title}>Astronaut list</h1>
      <div className={styles.root__content}>
        {list.requestState === RequestState.ERROR && (
          <div>сервер сломался :(</div>
        )}
        {list.requestState === RequestState.LOADING && <Loader />}
        {list.requestState === RequestState.SUCCESS &&
          list.data.map((el: IAstr) => (
            <LiteCard
              key={el.id}
              name={el.name}
              url={el.profile_image}
              id={el.id}
            />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getList: () => dispatch(getListAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootPage);
