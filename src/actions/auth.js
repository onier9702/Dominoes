
import Swal from "sweetalert2";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { types } from "../types/types";
import { finishLoadingPage, startLoadingPage } from "./ui";

export const startRegister = ( name, email, password  ) => {

    return (dispatch) => {

        dispatch( startLoadingPage() );
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                // updateProfile(auth, { displayName: name } ).then(() => console.log('Profile updated'));
                dispatch(finishLoadingPage());
                dispatch(startLogin(name,email,password));
            })
            .catch((error) => {
                console.log(error.message);
            });

    }

};

export const startLogin = ( name ,email, password ) => {

    return (dispatch) => {
        dispatch(startLoadingPage());
        
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(finishLoadingPage());
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




// Swal.fire( {
//     title: 'Uploading...',
//     text: 'Please wait...',
//     allowOutsideClick: false,
//     didOpen: () => {
//       Swal.showLoading();
//     }
//   } );

// Swal.close();


