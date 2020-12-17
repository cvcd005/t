import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import {
  requestLoadList,
  requestSuccesList,
  setErrorList,
  requestLoadAstr,
  requestSuccesAstr,
  setErrorAstr,
} from "./actions";

function* fetchList(action) {
  try {
    yield put(requestLoadList());
    /* eslint-disable */
    const data = yield call((payload) => {
      return fetch(
        "https://ll.thespacedevs.com/2.1.0/astronaut/?limit=10&offset=0"
      ).then((res) => {
        switch (res.status) {
          case 200:
          case 201:
            return res.json();
          default:
            throw new Error("Required");
        }
      });
    }, action.payload);

    yield put(requestSuccesList(data.results));
  } catch (error) {
    yield put(setErrorList());
  }
}

function* fetchAst(action) {
  try {
    yield put(requestLoadAstr());
    const data = yield call((id: number) => {
      return fetch(`https://ll.thespacedevs.com/2.1.0/astronaut/${id}`).then(
        (res) => {
          switch (res.status) {
            case 200:
            case 201:
              return res.json();
            default:
              throw new Error("Required");
          }
        }
      );
    }, action.payload);
    yield put(requestSuccesAstr(data));
  } catch (error) {
    yield put(setErrorAstr());
  }
}

function* mySaga() {
  yield takeEvery("GET_LIST", fetchList);
}

function* mySaga2() {
  yield takeEvery("GET_ASTR", fetchAst);
}

export default function* rootSaga() {
  yield all([fork(mySaga), fork(mySaga2)]);
}
