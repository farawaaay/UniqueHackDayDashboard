import { delay } from 'redux-saga';
// edit the user's info
import { take, fork, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import Message from 'antd/es/message';
import * as TYPE from '../actions';

function* infoChange() {
  while (true) {
    yield take(TYPE.DETAIL_FORM_SUBMIT.OK);
    Message.success('编辑成功');
    yield delay(100);
    yield put(push('/'));
  }
}

function* resetSuccess() {
  while (true) {
    yield take(TYPE.RESET_PWD_FORM_SUBMIT.OK);
    Message.success('重置密码成功');
    delay(100);
    yield put(push('/'));
  }
}

function* joinTeamSuccess() {
  while (true) {
    yield take(TYPE.JOIN_TEAM_FORM_SUBMIT.OK);
    window.location.reload();
  }
}

export default function*() {
  yield fork(infoChange);
  yield fork(resetSuccess);
  yield fork(joinTeamSuccess);
}
