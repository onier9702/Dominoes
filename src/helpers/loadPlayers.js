
import { collection, getDocs } from 'firebase/firestore';
import {db} from '../firebase/firebase-config';

export const loadPlayersFromFireStore = async(uid) => {

    const querySnapshot = await getDocs(collection(db, uid));

    const listPlayers = [];

    querySnapshot.forEach((doc) => {
        listPlayers.push({
            id: doc.id,
            ...doc.data(),
        })
    });

    // console.log(listPlayers);

    return listPlayers;
};

