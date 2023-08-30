import { fork } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';

export default function* rootSaga() {
  yield fork([auth, user]);
}
