import { put, takeEvery } from 'redux-saga/effects';

function* setDataAsync(action) {
  yield put({ type: 'SET_DATA', payload: action.payload });
}

function* rootSaga() {
  yield takeEvery('SET_DATA_ASYNC', setDataAsync);
}

export default rootSaga;