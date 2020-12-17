import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { getAstr } from "../../Store/actions";
import { RequestState, ISAstr } from "../../Store/types";

import Loader from "../../components/Loader";

import styles from "./ItemPage.module.scss";

interface IProps extends RouteComponentProps {
  astr: { data: ISAstr; requestState: RequestState };
  getastr: (id: number) => void;
  match: {
    params: {
      id: string;
    };
  };
}

const ItemPage: React.FC<IProps> = ({ astr, match, getastr }: IProps) => {
  const { id } = match.params;

  useEffect(() => {
    getastr(+id);
  }, [getastr, id]);

  if (astr.requestState === RequestState.ERROR) {
    return <Redirect to="/" />;
  }

  if (astr.requestState !== RequestState.SUCCESS) {
    return <Loader />;
  }

  return (
    <div className={styles.item}>
      <img
        alt={`${astr.data?.name}`}
        src={astr.data?.profile_image}
        className={styles.item__img}
      />
      <p className={styles.item__name}>{astr.data?.name}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    astr: state.astr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getastr: (id: number) => dispatch(getAstr(id)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ItemPage)
);
