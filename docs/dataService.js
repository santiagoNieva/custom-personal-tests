// docs/dataService.js
import { db, auth } from "./firebase.js";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    where,
    limit,
    setDoc,
    arrayUnion
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

/**
 * Ejemplo básico: lee todas las preguntas en consola
 */
export async function debugListAllQuestions() {
    const snap = await getDocs(collection(db, "preguntas"));
    console.log("Todas las preguntas:", snap.docs.map(d => ({ id: d.id, ...d.data() })));
}

/**
 * Lee progreso (IDs resueltas) de un usuario para un proyecto+categoría concreto
 */
export async function getProgress(uid, proyecto, categoria) {
    const progRef = doc(db, "usuarios", uid, "progreso", `${proyecto}_${categoria}`);
    const progSnap = await getDoc(progRef);
    if (!progSnap.exists()) {
        return [];
    }
    return progSnap.data().resueltas || [];
}

/**
 * Escribe nuevas preguntas resueltas en el progreso del usuario
 * `newIds` es un array de strings (IDs de Firestore)
 */
export async function saveProgress(uid, proyecto, categoria, newIds) {
    const progRef = doc(db, "usuarios", uid, "progreso", `${proyecto}_${categoria}`);
    await setDoc(
        progRef,
        { resueltas: arrayUnion(...newIds) },
        { merge: true }
    );
}

/**
 * Trae hasta 55 preguntas **no resueltas** para este usuario (simplificado)
 * Por ahora, si el usuario no tiene progreso, devuelve las primeras 55.
 * MÁS ADELANTE agregaremos el filtro "not-in".
 */
export async function fetch55(uid, proyecto, categoria) {
    // 1) Obtén progresos previos
    const resueltas = await getProgress(uid, proyecto, categoria);

    // 2) Si no hay resueltas, simplemente pedimos 55 de la colección:
    if (resueltas.length === 0) {
        const q = query(
            collection(db, "preguntas"),
            where("proyecto", "==", proyecto),
            where("categoria", "==", categoria),
            limit(55)
        );
        const snap = await getDocs(q);
        return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    }

    // 3) Si ya hay resueltas, hacemos una consulta "not-in" (hasta 10 IDs por fragmento)
    //    -- simplificaremos pidiendo 55 ignorando las primeras 10 resueltas.
    const chunk = resueltas.slice(0, 10);
    const q2 = query(
        collection(db, "preguntas"),
        where("proyecto", "==", proyecto),
        where("categoria", "==", categoria),
        where("__name__", "not-in", chunk), // __name__ es el ID de doc en Firestore
        limit(55)
    );
    const snap2 = await getDocs(q2);
    return snap2.docs.map(d => ({ id: d.id, ...d.data() }));
}
