import * as actions from './actionTypes';

// Sign up action creator
export const signUp = (data) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore },
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  dispatch({ type: actions.AUTH_START });
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);
    console.log(res.user.uid);
  } catch (err) {}
};
