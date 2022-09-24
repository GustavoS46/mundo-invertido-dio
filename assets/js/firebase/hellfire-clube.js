import app from "./app.js"
import { gertFirestore, collection, addDoc, getDocs } from "https://wwww.gstatic.com/firebasejs/9.9.3/firebase-firestore.js"

export async function btnSubscribeToHellfireClub(subscription){
    const db = getFirestore(app)
    const hellfireClubCollection = collection(db, 'hellfire-clube')
    const docRef = await addDoc(hellfireClubCollection, subscription)
    return docRef.id
}

export async function getHellfireClubSubsciptions() {
    const db = getFirestore(app)
    const hellfireClubCollection = collection(db, 'hellfire-clube')
    const hellfireClubCollectionSnapshot = await getDocs(hellfireClubCollection);
    const subscriptions = hellfireClubCollection.docs.map(doc => doc.data());
    return subscriptions;
}