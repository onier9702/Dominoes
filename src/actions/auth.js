
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { types } from "../types/types";

export const startRegister = ( name, email, password  ) => {

    return (dispatch) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                // updateProfile(auth, { displayName: name } ).then(() => console.log('Profile updated'));
                dispatch(startLogin(name,email,password));
            })
            .catch((error) => {
                console.log(error.message);
            });

    }

};

export const startLogin = ( name ,email, password ) => {

    return (dispatch) => {

        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(login(user.uid, name));

                // console.log(name);
            })
            .catch((error) => {
                console.log(error.message);
            });


    };
};


export const login = (uid, displayName) => ({

    type: types.authLogin,
    payload: {
        uid,
        displayName,
    }
});

export const startLogout = () => {

    return (dispatch) => {
        signOut(auth)
            .then((user) => {
                // console.log('Log out');
                dispatch(logout());
            })
            .catch(err => {
                console.log(err);
            })
    }
};

export const logout = () => ({
    type: types.authLogout,
})








