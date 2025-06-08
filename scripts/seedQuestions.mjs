// scripts/seedQuestions.mjs
import fs from "fs/promises";
import path from "path";
import admin from "firebase-admin";

// 1) Inicializa firebase-admin
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
});
const db = admin.firestore();

async function main() {
    // 2) Lee el JSON
    const data = await fs.readFile(path.resolve(".", "defensoria_procesal_cc_20.json"), "utf8");
    const preguntas = JSON.parse(data);

    // 3) Prepara un batch
    const batch = db.batch();
    preguntas.forEach((p, i) => {
        const ref = db.collection("preguntas").doc();  // ID auto
        batch.set(ref, p);
    });

    // 4) Ejecuta
    await batch.commit();
    console.log(`✅ Se subieron ${preguntas.length} preguntas.`);
}

main().catch(err => {
    console.error("❌ Error:", err);
    process.exit(1);
});
