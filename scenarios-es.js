/* Banco de situaciones sintéticas. CC BY-SA 4.0. No contiene publicaciones originales. */
(function(root){'use strict';const bank={
 topics:['transporte del barrio','empleo local','educación pública','presupuesto del agua','seguridad del territorio'],
 actorLabels:{'FIC-CAND-01':'la candidata','FIC-CAND-02':'el candidato','FIC-PRENSA-01':'la periodista','FIC-MEDIO-01':'el medio local','FIC-AUTORIDAD-01':'la autoridad electoral'},
 formats:{AFacebook:'Publicación de comunidad',BX:'Respuesta breve',CTikTok:'Comentario en un video ficticio',DInstagram:'Comentario en una imagen ficticia'},
 kinds:[
 {kind:'critica',category:'legitima',intensity:1,narrative:'Discusión de propuestas locales',actors:['FIC-CAND-01','FIC-CAND-02'],texts:[
 'A {actor} le falta explicar cómo va a pagar lo que promete sobre {tema}. Pedir las cuentas NO es atacar.',
 'No me convence {actor}. En {tema} promete mucho y no pone fechas. ¿Dónde está el plan?',
 'Pregunta para {actor}: ¿cuánto cuesta la propuesta sobre {tema} y quién la va a ejecutar? #DebateLocal',
 'Vi la entrevista de {actor} sobre {tema}. La respuesta fue floja. Hay que discutir el fondo, sin insultos.',
 'El video de {actor} se ve bonito, pero sigo esperando los números de {tema}. La publicidad no reemplaza un presupuesto.',
 'Yo no apoyo a {actor}: no comparto su propuesta sobre {tema}. Eso no significa que quiera callarle la voz.',
 '¿Otra promesa de {actor} sobre {tema}? Primero expliquen qué pasó con los compromisos anteriores.',
 'Sobre {tema}, {actor} cambió de posición. Que explique por qué. Cuestionar esa decisión hace parte del debate.',
 'La gente puede aplaudir a {actor}; yo quiero leer la propuesta completa sobre {tema}. ¿Está disponible?',
 'No me gusta lo que plantea {actor} sobre {tema}. Voy a argumentar por qué, sin meterme con su vida personal.'
 ]},
 {kind:'ataque',category:'toxica',intensity:2,narrative:'Descalificación y estigmatización',texts:[
 'Qué PAYASADA la de {actor} hablando de {tema}. Puro show, cero ideas. Ya cansa.',
 '¿En serio siguen escuchando a {actor} sobre {tema}? Qué vergüenza de personaje. 🙄',
 'Jajaja, {actor} vuelve con el cuento de {tema}. Se cree brillante y solo hace el ridículo.',
 'A {actor} le queda grande hasta responder una pregunta de {tema}. Qué papelón, de verdad.',
 'NO NOS CREAN BOBOS. Lo de {actor} y {tema} es otra jugadita para hacerse la víctima.',
 'Qué pereza {actor} hablando de {tema}. Ese personaje es puro descaro, no merece que nadie lo escuche.',
 'Otra vez {actor} posando de salvador con {tema}. Gente así daña cualquier debate. #PuroShow',
 'Ese discurso de {actor} sobre {tema} es una tomadera de pelo. ¿No le da pena salir a decir eso?',
 'Vean a {actor} dando lecciones de {tema} 🤡. Mucha pose, poca cabeza.',
 'Ni vi completa la intervención de {actor} sobre {tema}. Con ese personaje ya sabemos: puro circo.'
 ]},
 {kind:'genero',category:'genero',intensity:2,narrative:'Deslegitimación por género',actors:['FIC-CAND-01'],texts:[
 '¿Ahora {actor} va a enseñarnos de {tema}? Eso es cosa de hombres, que deje de meterse donde no sabe.',
 'Que {actor} se ocupe de la casa y deje las decisiones sobre {tema} a los hombres. Así de sencillo.',
 '¿Votar por {actor} para decidir sobre {tema}? Después no se quejen: las mujeres se dejan llevar por las emociones.',
 'Hablan de las ideas de {actor} sobre {tema}, pero yo solo le miro la pinta. Para eso sí sirve, jajaja.',
 'NO gracias a {actor}. Para manejar {tema} se necesita mano de hombre, no una mujer haciendo campaña.',
 'A {actor} la pusieron a hablar de {tema} solo para cumplir la cuota. Una mujer no debería dirigir eso.',
 'Si {actor} quiere respeto, que deje de opinar de {tema}. Ese espacio de decisión no es para mujeres.',
 'Cuando {actor} exige que le respondan sobre {tema}, dicen que está histérica. Mejor que deje hablar a un hombre.',
 'La propuesta de {actor} sobre {tema} ni la voy a leer. Por ser mujer, seguro alguien tuvo que escribírsela.',
 'La propuesta de {actor} sobre {tema} me da igual; de una candidata importa con quién vive y si atiende su casa. ¿Para qué hablar de sus ideas?'
 ]},
 {kind:'horario',category:'desinformacion',intensity:2,narrative:'Rumores sobre procedimientos del escenario',actors:['FIC-AUTORIDAD-01'],requiresContext:true,contextNote:'Ficha ficticia de verificación: en este escenario NO se han cancelado ni trasladado jornadas, NO hay registro adicional, tarifa, cambio de horario, voto por comentario ni vínculo entre asistencia a foros y derecho a participar. La publicación contradice esa ficha. Ninguna de estas situaciones describe instrucciones electorales reales.',texts:[
 'OJO: por el foro sobre {tema}, {actor} cambió el horario del puesto del escenario. Abrirá dos horas más tarde. Me lo reenviaron.',
 'Dicen que {actor} canceló la jornada del escenario por la discusión sobre {tema}. ¿Ya avisaron en todos los grupos?',
 'ATENCIÓN: después del debate sobre {tema}, {actor} exige un registro extra para participar en el escenario. Pásenlo al grupo.',
 'Última hora: {actor} trasladó todos los puestos del escenario por el evento de {tema}. La imagen que circula dice que es oficial.',
 'Me llegó un audio: {actor} va a cobrar una tarifa para participar en la jornada del escenario. Lo relacionan con {tema}.',
 'Según este pantallazo sobre {tema}, {actor} permitirá votar dejando un comentario en esta publicación. Ya no haría falta ir.',
 'En el grupo de {tema} afirman que {actor} adelantó un día la jornada del escenario. Compartan para que nadie se quede sin participar.',
 'La cadena sobre {tema} dice que {actor} cerró los puestos del escenario por falta de personal. Nadie debería salir, según ese mensaje.',
 '¿Es cierto? En el video de {tema} aseguran que {actor} anuló de una vez todos los votos de la jornada del escenario.',
 'Circula un aviso sobre {tema}: {actor} solo dejará participar a quienes asistieron al foro del escenario. Lo están dando por confirmado.'
 ]},
 {kind:'cita',category:'contexto',intensity:1,narrative:'Fragmentos, citas y contexto pendiente',ambiguous:true,requiresContext:true,contextNote:'Contexto insuficiente: solo se conserva el fragmento, sin mensaje anterior, video completo ni evidencia externa. Puede ser denuncia, sátira, reproducción crítica o respaldo. No hay base para atribuir intención ni confirmar la acusación.',texts:[
 '«Son unos vendidos». Eso aparece junto a {actor} en un recorte sobre {tema}. ¿Lo dijo o está denunciando que se lo dijeron?',
 'En el video de {tema}, {actor} repite «que se vaya». El clip empieza a mitad de frase. Falta la pregunta anterior.',
 'Comparten un pantallazo de {actor} sobre {tema}: «no debería participar». No se alcanza a ver si está citando a otra persona.',
 'A {actor} le atribuyen «esto está arreglado» por el debate de {tema}. Solo hay un audio cortado, sin fecha ni contexto.',
 '«Esa gente no tiene derecho a opinar». La frase circula con la imagen de {actor} y el tema {tema}. ¿Es una denuncia o un respaldo?',
 'Dicen que {actor} recibió pagos por hablar de {tema}. Solo circula una captura sin origen. No encuentro el material completo.',
 'Reenvían una frase de {actor} sobre {tema} con emojis de risa. No sé si es literal, una parodia o una respuesta a un insulto.',
 'El hilo sobre {tema} acusa a {actor} de amenazar a alguien. La supuesta prueba es una línea aislada. ¿Dónde está la conversación?',
 'Se comparte un montaje de {actor} junto a una acusación sobre {tema}. La cuenta que lo publica dice «miren lo que están difundiendo».',
 'En el grupo de {tema} pegan un comentario atribuido a {actor}. Está recortado justo antes del «pero». Así no se entiende la intención.'
 ]},
 {kind:'satira',category:'legitima',intensity:1,narrative:'Humor sobre promesas y propaganda',actors:['FIC-CAND-01','FIC-CAND-02'],texts:[
 'La promesa de {actor} sobre {tema} viene con garantía: dura exactamente hasta el cierre de campaña 😂. #HumorElectoral',
 'Si {actor} cumple todo lo anunciado sobre {tema}, al día le van a tener que agregar otras ocho horas. Es un chiste, por si acaso.',
 'La propuesta de {actor} sobre {tema} incluye hasta solucionar los lunes. Ya solo falta el presupuesto para el martes. #Sátira',
 'Busco manual para guardar todas las promesas de {actor} sobre {tema}. Ya no caben en la memoria del celular. 😂',
 'En la publicidad de {actor}, {tema} se arregla con una sonrisa y dos filtros. Ojalá fuera así de fácil. #Humor',
 'Propongo que las promesas de {actor} sobre {tema} traigan fecha de vencimiento, como el yogur. Es una broma sobre la campaña.',
 'El plan de {actor} sobre {tema} es tan completo que también promete que el café no se enfríe. #ParodiaElectoral',
 '¿Alguien sabe si la propuesta de {actor} sobre {tema} se puede devolver si no funciona? Pregunto para mi barrio. #Sátira',
 'Si cada afiche de {actor} sobre {tema} fuera una solución, ya estaríamos exportando milagros. Humor de campaña, nada más.',
 'La campaña de {actor} dice que tiene todas las respuestas sobre {tema}. Ojalá también tenga las preguntas del examen. #HumorElectoral'
 ]},
 {kind:'exclusion',category:'odio',intensity:3,narrative:'Exclusión por identidad completamente ficticia',contextNote:'El Colectivo L es un grupo enteramente inventado para el ejercicio y no representa ninguna población real. Se examina la exclusión por pertenencia, sin reproducir insultos identitarios.',texts:[
 '[Colectivo L: identidad inventada] {actor} pertenece a ese colectivo. Por eso no debería poder participar en decisiones sobre {tema}.',
 '[Grupo enteramente ficticio] A quienes son del Colectivo L, como {actor}, hay que negarles la palabra en el foro de {tema}, solo por ser de ese grupo.',
 '[Identidad ficticia L] No importa qué proponga {actor} sobre {tema}: la gente de ese colectivo no merece los mismos derechos de participación.',
 '[Colectivo inventado L] ¿Invitar a {actor} a discutir {tema}? Por pertenecer a ese grupo habría que excluirle de cualquier espacio público.',
 '[Grupo ficticio L] Ningún integrante, tampoco {actor}, debería poder elegir o ser elegido cuando se decida sobre {tema}. Es por su pertenencia al colectivo.',
 '[Identidad totalmente inventada] En el debate de {tema}, quieren impedir que {actor} se exprese por ser del Colectivo L, sin evaluar sus argumentos.',
 '[Colectivo L: sin equivalente real] El mensaje exige quitar a {actor} derechos políticos por su identidad grupal y le cierra el debate de {tema}.',
 '[Grupo inventado L] Sobre {tema}, no discutamos la propuesta de {actor}: el mensaje pide expulsarle del espacio público por pertenecer al colectivo.',
 '[Identidad ficticia L] En este comentario se reclama que {actor} reciba menos derechos en el foro de {tema} únicamente por ser parte del colectivo.',
 '[Colectivo L: ficticio] El comentario no critica la gestión de {actor} sobre {tema}; exige prohibir su participación pública por su identidad grupal.'
 ]},
 {kind:'agenda',category:'no_aplica',intensity:1,narrative:'Agenda e información neutral',texts:[
 'En la agenda del escenario aparece {actor} en una conversación sobre {tema}. La relatoría estará disponible después del encuentro.',
 'Compartimos el resumen de la intervención de {actor} sobre {tema}. Este mensaje solo informa que hubo un conversatorio.',
 'El afiche de {actor} anuncia un foro sobre {tema}. La publicación no expresa apoyo ni rechazo a ninguna propuesta.',
 'Ya está la transcripción del espacio con {actor} sobre {tema}. La comunidad podrá leerla y formular preguntas.',
 'En el grupo están organizando las preguntas para {actor} sobre {tema}. Por ahora solo comparten la agenda.',
 'Terminó el conversatorio de {actor} sobre {tema}. Se recogieron propuestas y se acordó publicar una relatoría.',
 'La imagen muestra a {actor} en una mesa sobre {tema}. El pie de foto identifica el tema del encuentro, sin valorar a sus participantes.',
 'Recordatorio del escenario: hay un espacio de conversación con {actor} sobre {tema}. No es una instrucción electoral real.',
 'Un video resume las preguntas que recibió {actor} sobre {tema}. La publicación presenta el orden de las intervenciones.',
 'El mensaje de {actor} enumera los asuntos tratados en el foro de {tema}. No contiene afirmaciones sobre otras personas.'
 ]}
 ]};if(typeof module!=='undefined'&&module.exports)module.exports=bank;else root.SCENARIOS=bank;
})(typeof window!=='undefined'?window:globalThis);
