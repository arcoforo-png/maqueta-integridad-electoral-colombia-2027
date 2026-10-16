# Composición del universo de publicaciones

Versión 1.1.0, conjunto de datos 2. El universo contiene **400 textos distintos**, todos sintéticos, generados a partir de 80 formulaciones y cinco temas locales. El tono incorpora mensajes breves, mayúsculas, burlas, preguntas, abreviaturas, hashtags y emojis. Una muestra de publicaciones aportada para el ejercicio se utilizó como referencia de estilo y problemas de clasificación, sin incorporarla al repositorio ni copiar sus textos, nombres, cuentas, enlaces o acusaciones particulares.

## Plataformas simuladas

| Nombre | Publicaciones | Formato mostrado |
| --- | ---: | --- |
| AFacebook | 100 | Publicación de comunidad |
| BX | 100 | Respuesta breve |
| CTikTok | 100 | Comentario en un video ficticio |
| DInstagram | 100 | Comentario en una imagen ficticia |

Los nombres evocan plataformas conocidas para orientar el ejercicio. No existe conexión, afiliación ni acceso a ninguna de ellas. No se incluyen videos, imágenes, cuentas o publicaciones reales; se simula el texto y su contexto de publicación. Los formatos son convenciones del escenario, no una reproducción de interfaces o algoritmos reales.

## Casos

| Familia de situaciones | Cantidad | Categoría de referencia |
| --- | ---: | --- |
| Crítica argumentada a propuestas | 50 | Expresión legítima |
| Descalificación personal y hostilidad | 50 | Comunicación tóxica |
| Deslegitimación por ser mujer | 50 | Violencia de género en política |
| Rumores sobre procedimientos del escenario | 50 | Posible desinformación |
| Fragmentos, citas y acusaciones sin contexto suficiente | 50 | Requiere contexto |
| Humor sobre promesas y propaganda | 50 | Expresión legítima |
| Exclusión por una identidad enteramente inventada | 50 | Discurso de odio |
| Agenda e información neutral | 50 | No aplica |

Cada familia tiene diez formulaciones y cinco variaciones temáticas: transporte del barrio, empleo local, educación pública, presupuesto del agua y seguridad del territorio. Cada tema aparece en 80 registros. Esta distribución asegura material para conversar sobre todas las situaciones, sin estimar su frecuencia real en redes.

Se conservan cinco roles: candidata, candidato, periodista, medio local y autoridad electoral. Los textos usan descripciones genéricas. Los códigos ficticios de actores aparecen solo en metadatos y controles para poder filtrar. Los casos de género se refieren a la candidata; los de procedimientos, a la autoridad ficticia. Otras familias usan roles compatibles con su redacción.

## Decisiones pedagógicas y cuidado

Los casos tóxicos usan burla, descalificación y estigmatización sin repetir amenazas gráficas o acusaciones identificables. Los casos de género muestran exclusión y estereotipos reconocibles sin reproducir violencia sexual explícita. Los de odio emplean un colectivo inventado y un aviso dentro del caso para no trasladar el ataque a grupos reales.

No se heredan automáticamente las etiquetas acumuladas de la muestra de referencia, ni sus indicadores de toxicidad. La maqueta usa una categoría principal para simplificar el formulario; en la realidad podrían coexistir varias y requerir adjudicación. Las etiquetas de referencia son criterios pedagógicos, susceptibles de discusión, y no un dictamen jurídico ni una validación automática.

Los rumores se contrastan con una ficha exclusivamente ficticia. Los fragmentos ambiguos no cuentan con contexto suficiente y pueden quedar pendientes. La presencia de una palabra fuerte no determina por sí sola una categoría.

## Buscar y observar exclusiones

Las consultas buscan coincidencias en el texto de las publicaciones. Las palabras separadas por espacios o comas funcionan como alternativas. Las fichas de contexto no se incluyen en la búsqueda.

En el universo completo, `presupuesto` recupera 88 publicaciones; `horario`, 5; `show`, 10; `voto`, 5. En las 200 disponibles al principio: 48, 5, 5 y 0, respectivamente. Ninguno de esos términos representa por sí solo toda la conversación relevante. Una consulta sin términos recupera lo que cumplen sus otros filtros.

La semilla fija `20271031` reproduce textos, actores, plataformas y fechas. Los textos únicos se verifican por igualdad exacta: 400 textos distintos no equivalen a 400 situaciones semánticamente independientes, porque se combinan formulaciones y temas.

## Sesiones anteriores

Cambiar los textos invalida la comparación con revisiones guardadas de la versión anterior. Por eso la aplicación usa un espacio de sesión nuevo y respaldos de versión 2; no borra el almacenamiento anterior ni reasigna sus calificaciones. Los respaldos de versión 1 solo pueden abrirse con el código anterior. El historial de GitHub conserva esa versión.
