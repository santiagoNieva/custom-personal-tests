// docs/ui/ResultModal.js
export function showResultsModal(allQuestions, userSelections) {
    // allQuestions: array de objetos { id, respuestas[], explicacion }
    // userSelections: { [idPregunta]: índiceSeleccionado, … }

    const modal = document.getElementById("resultsModal");
    modal.innerHTML = ""; // lo limpiamos

    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    const content = document.createElement("div");
    content.className = "modal-content";

    allQuestions.forEach(q => {
        const userSel = userSelections[q.id];
        // Encuentra la opción correcta:
        const correctIndex = q.respuestas.findIndex(r => r.validez === true);

        const p = document.createElement("p");
        p.innerHTML = `<strong>Pregunta:</strong> ${q.pregunta}<br>
                   <strong>Tú elegiste:</strong> 
                   <span style="color: ${userSel === correctIndex ? "green" : "red"}">
                     ${q.respuestas[userSel]?.texto || "sin respuesta"}
                   </span><br>
                   <strong>Correcta:</strong> ${q.respuestas[correctIndex].texto}<br>
                   <strong>Explicación:</strong> ${q.explicacion}
                  `;
        p.style.marginBottom = "1em";
        content.appendChild(p);
    });

    // Botón para cerrar
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Cerrar";
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
    content.appendChild(closeBtn);

    overlay.appendChild(content);
    modal.appendChild(overlay);
    modal.style.display = "block";
}
