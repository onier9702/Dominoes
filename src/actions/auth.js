
import Swal from "sweetalert2";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { types } from "../types/types";
import { finishLoadingPage, startLoadingPage } from "./ui";
import { loadingPlayersList } from "./players";

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
                dispatch( loadingPlayersList(user.uid) );
                dispatch(finishLoadingPage());
                setTimeout(() => {
                    dispatch(login(user.uid, name));
                }, 2500);

                // console.log(name);
            })
            .catch((error) => {
                console.log(error.message);
                Swal.fire('Error','Introduce correctamente su Data','error');
                dispatch(finishLoadingPage());
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
                dispatch(listPlayersStoreCleanLogout());
            })
            .catch(err => {
                console.log(err);
            })
    }
};

export const logout = () => ({
    type: types.authLogout,
})
export const listPlayersStoreCleanLogout = () => ({

    type: types.playerLogout,
});



// Swal.fire( {
//     title: 'Uploading...',
//     text: 'Please wait...',
//     allowOutsideClick: false,
//     didOpen: () => {
//       Swal.showLoading();
//     }
//   } );

// Swal.close();


