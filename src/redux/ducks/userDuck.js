import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { createAction } from '../../helpers/redux';

const SET_USER = 'userDuck/SET_USER';
const SIGN_OUT = 'userDuck/SIGN_OUT';

export const setUser = createAction(SET_USER);

const auth = getAuth();

export const login = (email, password) => async (dispatch) => {
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			dispatch({ type: SET_USER });
		})
		.catch((error) => console.log(error));
};

export const register = (email, password) => async (dispatch) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			dispatch({ type: SET_USER });
		})
		.catch((error) => console.log(error));
};

export const logout = (payload) => async (dispatch) => {
	signOut(auth).then(() => {
		dispatch({ type: SIGN_OUT });
	});
};

const initialState = {
	uid: '',
	email: '',
	accessToken: '',
};

const UserDuck = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_USER:
			return {
				...state,
				email: payload.email,
				accessToken: payload.accessToken,
				uid: payload.uid,
			};
		case SIGN_OUT:
			return {
				...state,
			};
		default:
			return state;
	}
};

export default UserDuck;
