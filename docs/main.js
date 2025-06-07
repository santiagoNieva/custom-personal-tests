// docs/main.js
import { loginWithGoogle, onAuthChange, auth } from "./firebase.js";
import { fetch55, saveProgress, getProgress } from "./dataService.js";
import { renderQuestionCard } from "./ui/QuestionCard.js";
import { showResultsModal } from "./ui/ResultModal.js";

// Referencias a elementos del DOM
const loginBtn = document.getElementById("loginBtn");
const userStatus = document.getElementById("userStatus");
const selectors = document.getElementById("selectors");
const proyectoSelect = document.getElementById("proyecto");
const categoriaSelect = document.getElementById("categoria");
const cargarBtn = document.getElementById("cargarPreguntasBtn");
const quizContainer = document.getElementById("quizContainer");
const resultsModal = document.getElementById("resultsModal");

// Estado global en este módulo
let currentUser = null;
let loadedQuestions = [];     // array de objetos pregunta
let userSelections = {};      // { [idPregunta]: índiceSeleccionado }

loginBtn.addEventListener("click", async () => {
    console.log("Login button clicked");
    try {
        const user = await loginWithGoogle();
        console.log("User logged in:", user.uid);
    } catch (err) {
        console.error("Error en login:", err);
    }
});

// Monitorea cambios en auth
onAuthChange(user => {
    if (user) {
        currentUser = user;
        userStatus.textContent = `Conectado como ${user.email}`;
        selectors.style.display = "block";
    } else {
        currentUser = null;
        userStatus.textContent = `No autenticado`;
        selectors.style.display = "none";
        quizContainer.innerHTML = "";
    }
});

// Al hacer click en “Cargar 55 preguntas”:
cargarBtn.addEventListener("click", async () => {
    if (!currentUser) return alert("Primero entra con Google.");

    // Limpio estados previos
    quizContainer.innerHTML = "";
    userSelections = {};
    loadedQuestions = [];

    const proyecto = proyectoSelect.value;
    const categoria = categoriaSelect.value;
    const n = parseInt(numInput.value, 10) || 1;

    try {
        // 1) Fetch preguntas no resueltas
        const preguntas = await fetchRandomN(proyecto, categoria, n);
        if (preguntas.length === 0) {
            quizContainer.textContent = "¡No hay preguntas nuevas en esta categoría!";
            return;
        }

        // 2) Almaceno globalmente
        loadedQuestions = preguntas;

        // 3) Renderizo cada QuestionCard
        preguntas.forEach(preg => {
            const card = renderQuestionCard(preg);
            // Cuando el usuario seleccione una radio, guardo en userSelections
            const inputs = card.querySelectorAll("input[type=radio]");
            inputs.forEach(input => {
                input.addEventListener("change", e => {
                    userSelections[preg.id] = parseInt(e.target.value);
                });
            });
            quizContainer.appendChild(card);
        });

        // 4) Creo un botón “Chequear” al final
        const btnChequear = document.createElement("button");
        btnChequear.textContent = "Chequear respuestas";
        btnChequear.addEventListener("click", () => {
            showResultsModal(loadedQuestions, userSelections);

            // Guardamos los IDs respondidos (para estadísticas o futuro uso)
            const answeredIds = loadedQuestions.map(p => p.id);
            saveProgress(currentUser.uid, proyecto, categoria, answeredIds)
                .catch(err => console.error(err));
        });
        quizContainer.appendChild(btnChequear);

    } catch (err) {
        console.error("Error al cargar preguntas:", err);
        quizContainer.textContent = "Hubo un error al traer las preguntas.";
    }
});
