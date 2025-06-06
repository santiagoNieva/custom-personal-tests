// public/ui/QuestionCard.js
export function renderQuestionCard(preguntaObj) {
    // preguntaObj = { id, dificultad, pregunta, respuestas: [{texto,validez},…], explicacion }
    const { id, dificultad, pregunta, respuestas } = preguntaObj;

    // Crea un contenedor
    const card = document.createElement("div");
    card.className = "question-card";
    card.dataset.id = id;

    // Texto de la pregunta
    const qText = document.createElement("p");
    qText.textContent = `(${dificultad.toUpperCase()}) ${pregunta}`;
    card.appendChild(qText);

    // Lista de respuestas como radios
    const form = document.createElement("form");
    respuestas.forEach((resp, idx) => {
        const label = document.createElement("label");
        label.style.display = "block";

        const input = document.createElement("input");
        input.type = "radio";
        input.name = `resp-${id}`; // para que sea un grupo
        input.value = idx;         // índice en el array respuestas
        label.appendChild(input);

        const span = document.createElement("span");
        span.textContent = resp.texto;
        label.appendChild(span);

        form.appendChild(label);
    });
    card.appendChild(form);

    return card;
}
