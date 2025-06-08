import json

questions = [
    {
        "proyecto": "Defensoría",
        "categoria": "procesal_cc",
        "dificultad": "facil",
        "pregunta": "Según la Ley Procesal Civil y Comercial de Tucumán, ¿qué establece el Artículo 1 respecto al objeto del Código?",
        "respuestas": [
            {"texto": "Regular los procedimientos civiles y comerciales", "validez": True},
            {"texto": "Determinar las competencias penales", "validez": False},
            {"texto": "Regular únicamente la materia de familia", "validez": False},
            {"texto": "Establecer sanciones administrativas", "validez": False}
        ],
        "explicacion": "El Artículo 1 dispone que el Código tiene por objeto regular el proceso civil y comercial en la provincia."
    },
    {
        "proyecto": "Defensoría",
        "categoria": "procesal_cc",
        "dificultad": "facil",
        "pregunta": "¿En qué artículo de la Ley Procesal Civil y Comercial de Tucumán se define el ámbito de aplicación territorial?",
        "respuestas": [
            {"texto": "Artículo 2", "validez": True},
            {"texto": "Artículo 5", "validez": False},
            {"texto": "Artículo 10", "validez": False},
            {"texto": "Artículo 15", "validez": False}
        ],
        "explicacion": "El Artículo 2 establece el ámbito territorial de aplicación del Código en toda la provincia de Tucumán."
    },
    {
        "proyecto": "Defensoría",
        "categoria": "procesal_cc",
        "dificultad": "mediano",
        "pregunta": "Según la Ley Procesal Civil y Comercial de Tucumán, ¿qué regula el Artículo 15 sobre audiencias preliminares?",
        "respuestas": [
            {"texto": "La convocatoria y el desarrollo de la audiencia preliminar", "validez": True},
            {"texto": "La ejecución de la sentencia", "validez": False},
            {"texto": "La apelación de sentencias definitivas", "validez": False},
            {"texto": "Los plazos de caducidad de acciones", "validez": False}
        ],
        "explicacion": "El Artículo 15 describe cómo se debe convocar y conducir la audiencia preliminar en el proceso."
    },
    {
        "proyecto": "Defensoría",
        "categoria": "procesal_cc",
        "dificultad": "mediano",
        "pregunta": "¿Cuál es el propósito de la audiencia de conciliación según el Artículo 17 de la Ley Procesal Civil y Comercial de Tucumán?",
        "respuestas": [
            {"texto": "Facilitar el acuerdo voluntario entre las partes", "validez": True},
            {"texto": "Recaudar pruebas documentales", "validez": False},
            {"texto": "Determinar el valor de la condena", "validez": False},
            {"texto": "Declarar la nulidad del proceso", "validez": False}
        ],
        "explicacion": "El Artículo 17 impone la audiencia de conciliación como etapa para intentar la resolución amigable de conflictos."
    },
    {
        "proyecto": "Defensoría",
        "categoria": "procesal_cc",
        "dificultad": "facil",
        "pregunta": "Según la Ley Procesal Civil y Comercial de Tucumán, ¿qué dispone el Artículo 30 sobre los plazos procesales?",
        "respuestas": [
            {"texto": "Los plazos se cuentan en días hábiles", "validez": True},
            {"texto": "Se cuentan en días corridos", "validez": False},
            {"texto": "No hay plazos establecidos", "validez": False},
            {"texto": "Se cuentan en meses", "validez": False}
        ],
        "explicacion": "El Artículo 30 establece que todos los plazos se computan en días hábiles judiciales."
    },
    {
        "proyecto": "Defensoría",
        "categoria": "procesal_cc",
        "dificultad": "dificil",
        "pregunta": "¿Qué formalidad exige el Artículo 45 de la Ley Procesal Civil y Comercial de Tucumán para la práctica de prueba pericial?",
        "respuestas": [
            {"texto": "Dictamen escrito y fundamentado por el perito", "validez": True},
            {"texto": "Oral solamente", "validez": False},
            {"texto": "Consentimiento de todas las partes", "validez": False},
            {"texto": "Resolución del juez sin fundamentación", "validez": False}
        ],
        "explicacion": "El Artículo 45 exige que la prueba pericial se acompañe de un dictamen por escrito con su fundamentación."
    },
    {
        "proyecto": "Defensoría",
        "categoria": "procesal_cc",
        "dificultad": "mediano",
        "pregunta": "Según la Ley Procesal Civil y Comercial de Tucumán, ¿qué regula el Artículo 50 sobre la prueba testimonial?",
        "respuestas": [
            {"texto": "La forma de citar y recibir testigos", "validez": True},
            {"texto": "La ejecución de sentencias", "validez": False},
            {"texto": "La prestación de fianzas", "validez": False},
            {"texto": "El régimen disciplinario", "validez": False}
        ],
        "explicacion": "El Artículo 50 establece cómo deben ser citados, juramentados y escuchados los testigos."
    },
    {
        "proyecto": "Defensoría",
        "categoria": "procesal_cc",
        "dificultad": "facil",
        "pregunta": "¿Qué plazo fija el Artículo 60 de la Ley Procesal Civil y Comercial de Tucumán para interponer recurso de apelación?",
        "respuestas": [
            {"texto": "5 días", "validez": False},
            {"texto": "10 días", "validez": True},
            {"texto": "15 días", "validez": False},
            {"texto": "30 días", "validez": False}
        ],
        "explicacion": "El Artículo 60 prevé un plazo de diez días hábiles para apelar las sentencias de primera instancia."
    },
    {
        "proyecto": "Defensoría",
        "categoria": "procesal_cc",
        "dificultad": "dificil",
        "pregunta": "Según la Ley Procesal Civil y Comercial de Tucumán, ¿qué dispone el Artículo 80 sobre medidas precautorias reales?",
        "respuestas": [
            {"texto": "Requisitos de urgencia y proporcionalidad", "validez": True},
            {"texto": "Solo aval financiero", "validez": False},
            {"texto": "Auto sin fundamentos", "validez": False},
            {"texto": "Acuerdo previo de partes", "validez": False}
        ],
        "explicacion": "El Artículo 80 establece que las medidas precautorias deben fundarse en urgencia y proporcionalidad."
    },
    {
        "proyecto": "Defensoría",
        "categoria": "procesal_cc",
        "dificultad": "mediano",
        "pregunta": "¿Qué prescribe el Artículo 95 de la Ley Procesal Civil y Comercial de Tucumán sobre las sentencias motivadas?",
        "respuestas": [
            {"texto": "Deben ser fundadas por escrito", "validez": True},
            {"texto": "Pueden ser orales", "validez": False},
            {"texto": "No requieren explicación", "validez": False},
            {"texto": "Son confidenciales", "validez": False}
        ],
        "explicacion": "El Artículo 95 obliga a que todas las sentencias contengan una fundamentación clara y por escrito."
    },
    {
        "proyecto": "Defensoría",
        "categoria": "procesal_cc",
        "dificultad": "facil",
        "pregunta": "¿Qué norma introduce la Ley Procesal Civil y Comercial de Tucumán en el Artículo 100 acerca de audiencias orales?",
        "respuestas": [
            {"texto": "Prioriza la oralidad en las audiencias", "validez": True},
            {"texto": "Prohíbe las audiencias orales", "validez": False},
            {"texto": "Exige audiencia escrita", "validez": False},
            {"texto": "Solo permite videoconferencia", "validez": False}
        ],
        "explicacion": "El Artículo 100 consagra la oralidad como regla general para la celebración de audiencias."
    },
    {
        "proyecto": "Defensoría",
        "categoria": "procesal_cc",
        "dificultad": "dificil",
        "pregunta": "Según la Ley Procesal Civil y Comercial de Tucumán, ¿qué regla fija el Artículo 120 para la valoración de la prueba?",
        "respuestas": [
            {"texto": "Libre apreciación motivada del juez", "validez": True},
            {"texto": "Valor preferente a prueba documental", "validez": False},
            {"texto": "Exclusividad de la prueba pericial", "validez": False},
            {"texto": "Sistematicidad de pruebas electrónicas", "validez": False}
        ],
        "explicacion": "El Artículo 120 establece que el juez valora libremente la prueba, siempre motivando su decisión."
    },
    {
        "proyecto": "Defensoría",
        "categoria": "procesal_cc",
        "dificultad": "mediano",
        "pregunta": "¿Qué introduce el Artículo 150 de la Ley Procesal Civil y Comercial de Tucumán respecto al procedimiento sumario?",
        "respuestas": [
            {"texto": "Trámite abreviado para asuntos sencillos", "validez": True},
            {"texto": "Juzgamiento sin audiencia", "validez": False},
            {"texto": "Suspensión del juicio", "validez": False},
            {"texto": "Investigación penal previa", "validez": False}
        ],
        "explicacion": "El Artículo 150 permite un procedimiento sumario para casos de menor complejidad con plazos reducidos."
    },
    {
        "proyecto": "Defensoría",
        "categoria": "procesal_cc",
        "dificultad": "facil",
        "pregunta": "En la Ley Procesal Civil y Comercial de Tucumán, el Artículo 160 regula:",
        "respuestas": [
            {"texto": "La ejecución de sentencias", "validez": True},
            {"texto": "La apertura del juicio oral", "validez": False},
            {"texto": "La mediación previa", "validez": False},
            {"texto": "La apelación", "validez": False}
        ],
        "explicacion": "El Artículo 160 describe el procedimiento y requisitos para la ejecución de sentencias."
    },
    {
        "proyecto": "Defensoría",
        "categoria": "procesal_cc",
        "dificultad": "dificil",
        "pregunta": "¿Qué procedimiento especial establece el Artículo 175 de la Ley Procesal Civil y Comercial de Tucumán?",
        "respuestas": [
            {"texto": "Nulidad por vicios de motivación", "validez": True},
            {"texto": "Recurso de amparo directo", "validez": False},
            {"texto": "Proceso penal unificado", "validez": False},
            {"texto": "Suspensión de plazos", "validez": False}
        ],
        "explicacion": "El Artículo 175 contempla la nulidad de resoluciones afectadas por vicios graves de motivación."
    },
    {
        "proyecto": "Defensoría",
        "categoria": "procesal_cc",
        "dificultad": "mediano",
        "pregunta": "Según la Ley Procesal Civil y Comercial de Tucumán, ¿qué tema aborda el Artículo 200 relativo a la acumulación de autos?",
        "respuestas": [
            {"texto": "Unificación de procesos conexos", "validez": True},
            {"texto": "Señalamiento de audiencias", "validez": False},
            {"texto": "Prueba documental", "validez": False},
            {"texto": "Ejecutoria inmediata", "validez": False}
        ],
        "explicacion": "El Artículo 200 regula la acumulación de autos cuando existan causas conexas para evitar sentencias contradictorias."
    }
]

# Write to JSON file
output_path = 'defensoria_procesal_cc_20.json'
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)

output_path