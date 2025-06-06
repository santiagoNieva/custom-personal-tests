// public/firebase.js
// ——————
// 1) Importa solo las partes que necesitas desde la CDN:
import { initializeApp }
    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics }
    from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import { getFirestore }
    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged }
    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAzq0_jv7sD2n-ycisPr38PH0jimrhlgmQ",
    authDomain: "custom-personal-tests.firebaseapp.com",
    projectId: "custom-personal-tests",
    storageBucket: "custom-personal-tests.firebasestorage.app",
    messagingSenderId: "867531255359",
    appId: "1:867531255359:web:bc7537c8ee2d3807ca128a",
    measurementId: "G-7Y2ZRT1K1J"
};

// 3) Inicializa la app y exporta DB + Auth:
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// 4) Función utilitaria para logueo con Google:
export async function loginWithGoogle() {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user; // { uid, displayName, email, … }
}

// 5) Función para detectar cambios en el estado de autenticación:
export function onAuthChange(callback) {
    onAuthStateChanged(auth, user => callback(user));
}
