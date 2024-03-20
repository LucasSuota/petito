// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  User,
  getAuth,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import {
  StorageReference,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
if (typeof window !== "undefined") getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const getUser = async () => {
  const user = onAuthStateChanged(auth, (user) => {
    return user;
  });
};

export const getCurrentUser = () => {
  if (auth.currentUser) {
    const user = auth.currentUser;
    return user;
  }
};

export const userPhotoUpdate = async (fileRef: StorageReference) => {
  const url = await getDownloadURL(fileRef);
  await updateProfile(getCurrentUser() as User, {
    photoURL: url,
  });
};

export const handlePhotoUpload = async (
  file: File,
  user: User,
  progressCallback: (progress: number) => void
) => {
  try {
    const imageRef = ref(
      storage,
      "user/" + user.uid + "/profilePicture" + ".png"
    );
    const uploadTask = uploadBytesResumable(imageRef, file);
    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      progressCallback(parseInt(progress.toFixed(0)));
    });
    userPhotoUpdate(imageRef);
  } catch (error) {
    console.error(error);
  }
};

export const handleAnimalPhotoUpload = async (
  file: File,
  animalName: string,
  user: User,
  progressCallback: (progress: number) => void
) => {
  try {
    const imageRef = ref(
      storage,
      "user/" + `${user.uid}/` + `${animalName}/` + `${animalName}.png`
    );
    const uploadTask = uploadBytesResumable(imageRef, file);
    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      progressCallback(parseInt(progress.toFixed(0)));
    });
  } catch (error) {
    console.error(error);
  }
};

export const userSignOut = () => {
  signOut(auth);
};
