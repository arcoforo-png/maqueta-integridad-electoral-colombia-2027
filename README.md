# Del dato al informe

[Abrir la maqueta publicada](https://arcoforo-png.github.io/maqueta-integridad-electoral-colombia-2027/) · [Repositorio público](https://github.com/arcoforo-png/maqueta-integridad-electoral-colombia-2027) · [Descargar ZIP para uso local](https://github.com/arcoforo-png/maqueta-integridad-electoral-colombia-2027/archive/refs/heads/main.zip)

Maqueta pedagógica de integridad de la información electoral para un taller presencial de **120 minutos**, con grupos de 5–8 personas y un dispositivo por mesa. Reconstruye libro de códigos → consultas → material bruto → asignación → calificación humana → informe. Enseña cuellos de botella y dilemas mediante decisiones breves con consecuencias visibles.

Todos los actores, plataformas, publicaciones y fichas de contexto son ficticios. Está inspirada en sistemas de monitoreo electoral; no replica eMonitor+ ni utiliza su marca. No recolecta redes reales, no usa IA remota y no verifica hechos reales.

**Versión 1.1:** AFacebook, BX, CTikTok y DInstagram evocan plataformas conocidas dentro de la simulación. El nuevo banco tiene 400 textos distintos, con lenguaje más cercano a publicaciones y comentarios, sin nombres, cuentas ni enlaces de personas reales. Consulte [la composición y los criterios del banco](BANCO_PUBLICACIONES.md). No hay conexión ni afiliación con las plataformas evocadas.

## Abrir sin instalar

1. Descargue y descomprima el paquete completo.
2. Abra `index.html` con doble clic en un navegador moderno.
3. Configure participantes y revisores; siga las nueve etapas.
4. Guarde un respaldo antes de cerrar. La persistencia de archivos `file://` depende del navegador; el respaldo JSON permite recuperar la sesión.

Todos los recursos necesarios están incluidos. No es necesario instalar Node, ejecutar un servidor ni estar conectado. La versión publicada en GitHub Pages necesita conexión para cargar inicialmente; para trabajar sin conexión use el paquete descargado. No se promete caché PWA.

Cada mesa debe usar su propio dispositivo o un perfil de navegador separado. Dos pestañas del mismo origen y perfil comparten el mismo almacenamiento: no son mesas independientes. Los dispositivos distintos no sincronizan datos.

Los campos son anónimos por defecto. Evite ingresar datos personales. La aplicación no contiene llamadas de red, rastreadores, cuentas ni envío de respuestas. GitHub Pages, al visitarse en línea, sirve los archivos según las condiciones de ese servicio; las respuestas del taller permanecen en el dispositivo. El facilitador acuerda con las mesas si se recogerán archivos y cuándo se eliminarán. «Nueva sesión» reemplaza los datos locales; los archivos descargados se administran aparte.

Al actualizar desde la versión 1.0 se inicia una sesión independiente de versión 2. Los datos anteriores no se borran ni se reasignan a los textos nuevos. Los respaldos antiguos requieren la aplicación anterior, disponible en el historial del repositorio; el programa los rechaza expresamente para evitar mezclarlos con el nuevo universo.

En el libro de códigos se incluye un objetivo del laboratorio editable por cada mesa. Se guarda con la sesión, el respaldo y el informe JSON. Los respaldos de versión 2 anteriores a este campo conservan sus respuestas y reciben el objetivo inicial al recuperarse.

## Preparar el taller

Consulte `GUIA_FACILITADOR.md`. Abra `imprimibles.html` para libro de códigos, formulario, informe, cosecha y diseño posterior de monitor local. La impresión del informe se hace desde su etapa; el navegador permite guardarlo como PDF. Todos los bloques suman 120 minutos, sin descanso programado. El reloj se inicia y pausa manualmente; no bloquea la navegación.

La coordinación selecciona hasta seis publicaciones por diversidad de plataformas, antigüedad o prioridad a mujeres en política. Con al menos dos revisores se añaden dos segundas revisiones: hasta ocho asignaciones. El bloque de 25 minutos representa una jornada ficticia inicial de ocho horas. La cantidad de casos y el ritmo necesitan validación con participantes; no se exige revisar las 400 publicaciones.

## Exportar y recuperar

- **Guardar respaldo:** sesión completa, recuperable desde el control superior. No se incluye automáticamente en ningún servidor.
- **Informe JSON:** consulta, conteos, categorías, narrativas con IDs, calificaciones, reglas y limitaciones obligatorias.
- **Calificaciones CSV:** una fila por revisión; publicaciones con doble revisión tienen dos filas.
- **Decisiones JSON:** síntesis, reglas éticas y limitaciones.
- **Experiencia JSON o CSV:** respuestas anónimas, escalas voluntarias, preguntas posteriores y compromiso.

Los CSV escapan comillas y prefijan posibles fórmulas para evitar ejecución involuntaria al abrirlos en una hoja de cálculo. Un respaldo se valida antes de reemplazar el estado. Cambiar la consulta o los revisores puede invalidar revisiones: el programa solicita confirmación antes de borrarlas.

## Interpretar el tablero

El escenario contiene 400 publicaciones; al principio hay 200 disponibles. El pico libera las 200 restantes, y se vuelve a aplicar la consulta actual. Las palabras se interpretan como alternativas: basta encontrar cualquiera, sin distinguir tildes ni mayúsculas. No hay interpretación semántica.

La capacidad es `revisores × horas ficticias × calificaciones/hora-persona`, tasa configurable de 6 a 10. Es un parámetro pedagógico acordado, sin atribución institucional verificada. La segunda revisión consume otra calificación. El exceso frente a capacidad supone una revisión por publicación; los pendientes del ejercicio son recuperadas menos publicaciones únicas efectivamente revisadas. Son medidas distintas.

La cobertura compara relevantes recuperadas con relevantes del universo ficticio completo, según su referencia. Se consideran relevantes las categorías tóxica, odio, género y posible desinformación. El acuerdo compara el conjunto completo de categorías entre dos revisiones listas, con número de pares. La precisión de detección es relevantes de referencia / clasificadas como daño en primera asignación. La coincidencia exacta exige una sola categoría humana igual a la referencia del escenario. Ambas excluyen referencias ambiguas y decisiones «requiere contexto». No hay denominador suficiente cuando ninguna publicación cumple esos criterios.

Las etiquetas de referencia no son verdad universal. Modificar definiciones desactiva precisión y coincidencia; cobertura sigue describiendo la referencia inicial y así se rotula. Los resultados de una muestra pedagógica no estiman prevalencias y no permiten comparar mesas. No hay ranking ni puntaje agregado.

Las narrativas nuevas las escriben las personas revisoras en tres a seis palabras. Se agrupan textos idénticos de la primera revisión de publicaciones resueltas. Los respaldos anteriores conservan las narrativas del escenario con la indicación «Referencia anterior». El informe permite ver evidencia, actor, plataforma y segunda revisión. No es detección automática de campañas ni prueba de coordinación.

## Editar y regenerar

La aplicación no requiere dependencias de terceros. Para editar y probar se necesita Node.js con soporte para `node:test` (comprobado con el entorno incluido en Codex).

```text
node scripts/generate.cjs
node --test tests/core.test.cjs
node scripts/preview.cjs
```

El último comando abre un servidor opcional en `http://127.0.0.1:4173`. Sirve solo para desarrollo.

- `content.js`: agenda, definiciones, tarjetas y actores ficticios.
- `scenarios-es.js`: 80 formulaciones sintéticas, cinco temas y formatos de las cuatro plataformas simuladas. No incluye la muestra original de referencia.
- `ui-es.js`: plantillas y textos de las nueve pantallas, separados del controlador. Para traducir, adapte este archivo, `content.js`, los rótulos del HTML y los mensajes breves del controlador. No hay traducciones adicionales incluidas.
- `core.js`: generación, consultas, muestreo, capacidad, métricas, informes, validación y CSV.
- `dataset.js`: datos incluidos para apertura local; `dataset.json`: copia legible.
- `app.js`: pantallas, interacción y almacenamiento local.
- `styles.css`: estilo adaptable, estados de foco y reglas de impresión.
- `tests/core.test.cjs`: pruebas automatizadas de lógica y contratos de datos.

Semilla fija: `20271031`; 400 registros con 400 textos distintos, 100 por plataforma. La diversidad procede de 80 formulaciones combinadas con cinco temas, sin atribuir independencia semántica a cada combinación. Para cambiar definiciones base edite `CONTENT.codebook` en `content.js`, regenere y pruebe. Para ajustar solo la sesión use las definiciones editables de la pantalla. Si cambia el esquema de respaldo o sustituye los textos, cambie la versión y actualice su validador. No incluya muestras de redes reales ni exportaciones de participantes en el repositorio.

## Publicar en su repositorio de GitHub

1. Cree un repositorio propio, por ejemplo `maqueta-integridad-electoral-colombia-2027`. Un repositorio público facilita el uso de Pages en cuentas gratuitas; compruebe las opciones de su cuenta.
2. Suba el contenido de esta carpeta a la raíz de la rama `main`, sin incluir respaldos, cosechas, capturas ni archivos de participantes. No suba solo el ZIP.
3. En **Settings → Pages**, seleccione publicación desde rama, `main`, carpeta `/ (root)`.
4. Espere el despliegue y abra la URL que indique GitHub. Recorra la maqueta y pruebe una exportación en esa URL.
5. Para republicar un cambio, actualice los archivos de la misma rama. Las instrucciones y opciones actuales pueden consultarse en [la documentación de GitHub Pages](https://docs.github.com/es/pages/getting-started-with-github-pages/creating-a-github-pages-site).

La creación del repositorio y el despliegue no se consideran verificados hasta tener confirmación del servicio. Consulte `REPORTE_PRUEBAS.md` para el estado concreto de esta entrega.

## Fuentes y alcance normativo

Fuentes oficiales consultadas el 16 de octubre de 2026. Se incluyen como referencias contextuales, sin revisión jurídica en el taller:

- [Ley 1581 de 2012, Función Pública](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981): disposiciones generales de protección de datos personales.
- [Ley 1257 de 2008, Función Pública](https://www1.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=34054): prevención y atención de violencias contra las mujeres.
- [Circular única electoral de la Registraduría, versión de julio de 2024](https://www.registraduria.gov.co/IMG/pdf/20240708_circular-unica-electoral_v4.pdf): referencia a la regla del último domingo de octubre para elecciones territoriales. No se encontró en la consulta un calendario específico de 2027 que deba presentarse como confirmado. El escenario usa octubre de 2027, sin anunciar una fecha oficial de elección. Las fechas de publicaciones del 1 al 10 son ficticias.

La semilla numérica no es una afirmación sobre el calendario oficial. No se incluyen rutas institucionales concretas de remisión sin verificación territorial. La maqueta enseña a acordarlas con instituciones competentes.

## Licencias

Código (`core.js`, `app.js`, scripts, pruebas, estructura HTML y CSS): MIT, texto en `LICENSE-CODE.txt`. Contenidos educativos, plantillas, datos sintéticos y documentación: CC BY-SA 4.0, detalles en `LICENSE-CONTENT.md`. Atribución sugerida: «Del dato al informe, maqueta pedagógica de monitoreo electoral, 2026». No implica aval de ninguna institución.

## Límites de verificación

Las pruebas automatizadas comprueban comportamiento del programa; no validan comprensión de participantes ni que un taller real termine en 120 minutos. La validación presencial y la comprobación en un computador limpio quedan pendientes. Los actores usan identificadores ficticios, pero ningún detector automático garantiza por sí solo ausencia de cualquier coincidencia accidental con el mundo real.

Consultas permite elegir varias palabras de una lista desplegable o escribir otras. Las sugerencias aparecen en el banco ficticio; se buscan como alternativas sin distinguir mayúsculas ni tildes. Seleccionar no ejecuta la consulta: se conserva el botón «Ejecutar consulta».

## Formulario de revisión 1.2.0

Ocho campos con ayudas: clasificación múltiple, destinatario, formas del lenguaje, característica del ataque, expresiones de VBG, intensidad del odio (1–7, solo si aplica), narrativa y decisión. Nota opcional. Adaptación pedagógica de la capacitación suministrada por la persona facilitadora; el archivo original y sus ejemplos no forman parte del sitio.

Contexto y coordinación dejan una revisión pendiente. Toda revisión registrada consume capacidad. Guardar de nuevo la misma asignación no añade otra unidad en esta simplificación. Una publicación solo se cuenta como resuelta cuando todas sus revisiones asignadas están listas; los pendientes no inflan el informe. Los conteos de categorías pueden superar el número de publicaciones por la selección múltiple. El informe JSON y el CSV conservan todos los campos y estados.

Los respaldos de publicaciones v2 y las sesiones existentes conservan sus respuestas. Las revisiones anteriores mantienen intensidad y confianza originales sin convertirlas a la escala nueva. Sus muestras conservan el criterio histórico; las nuevas opciones se aplican al volver a seleccionar. Actualizar una revisión anterior exige completar los campos nuevos. Los respaldos del universo v1 siguen sin ser compatibles.

El bloque mantiene 25 minutos. El recorrido automatizado verifica funcionamiento, no el tiempo humano de lectura y deliberación. La duración necesita prueba con participantes.
