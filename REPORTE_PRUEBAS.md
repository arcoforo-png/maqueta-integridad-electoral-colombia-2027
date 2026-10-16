# Reporte de pruebas

Fecha: 16 de octubre de 2026. Versión: 1.0.0. Solo se usaron datos ficticios, incluidas las respuestas de prueba.

## Resultado

El recorrido de las nueve etapas se completó mediante automatización del navegador de Codex sobre una vista previa local. Se verificaron 400 publicaciones disponibles después del pico, seis publicaciones únicas revisadas, ocho calificaciones, cinco decisiones éticas y respuestas de cosecha exportables. Se introdujo deliberadamente un desacuerdo: el informe mostró 50 % de acuerdo sobre dos pares y 394 publicaciones pendientes del ejercicio.

Las 12 pruebas automatizadas de lógica incluidas en `tests/core.test.cjs` pasan. Se ejecutan con `node --test tests/core.test.cjs` y no requieren paquetes adicionales.

## Comprobaciones automáticas reproducibles

| Comprobación | Resultado |
| --- | --- |
| Agenda de 120 minutos y siete componentes en cinco tarjetas | Pasa |
| Dataset de 400 registros, semilla fija, IDs únicos y catálogo de actores ficticios | Pasa |
| Regeneración igual a la copia JSON entregada | Pasa |
| Filtros por actor, plataforma, periodo y palabras alternativas sin tildes | Pasa |
| Consulta sin resultados | Pasa |
| Capacidad basada en jornada ficticia, sin depender del reloj del taller | Pasa |
| Doble revisión por personas distintas y consumo de dos calificaciones | Pasa |
| Muestreo reproducible y priorización de mujeres en política | Pasa |
| Separación de calificaciones y publicaciones únicas, acuerdo sin pares y con desacuerdo | Pasa |
| Denominadores de precisión y coincidencia; desactivación al editar libro | Pasa |
| Informe vacío o completo siempre con limitaciones | Pasa |
| Narrativas vinculadas a publicaciones revisadas | Pasa |
| Recuperación de respaldo y rechazo de esquemas, IDs o calificaciones inconsistentes | Pasa |
| Independencia de objetos de sesión y copias de respaldo | Pasa |
| CSV con comillas, saltos y prevención de fórmulas | Pasa |
| Ausencia de llamadas de red y dependencias remotas en la aplicación | Pasa |

## Comprobaciones mediante automatización de interfaz

Se ejecutaron acciones en formularios y controles visibles, sin precargar un estado terminado:

1. Apertura y avance al libro de códigos; registro de regla sobre crítica legítima.
2. Consulta de término inexistente con resultado vacío; estimación de «presupuesto» de 25 publicaciones sobre 200; vuelta a consulta amplia de 200 resultados.
3. Registro del dilema de consulta y activación del pico: 400 resultados. Cambio a cuatro horas ficticias: 64 calificaciones de capacidad; retorno a ocho horas: 128.
4. Selección guiada: seis publicaciones y ocho asignaciones. Cumplimentación de los ocho formularios, con un desacuerdo deliberado en segunda revisión.
5. Registro de decisiones de bienestar y violencia de género; generación del informe y registro de decisión de escalamiento y gobernanza.
6. Descarga de informe JSON y calificaciones CSV. Lectura de los archivos descargados para verificar métricas, cinco reglas y ocho filas de revisión.
7. Registro de síntesis, tres respuestas de experiencia, escala de claridad y compromiso, todos como datos de prueba.
8. Descarga de cosecha CSV y respaldo JSON. Verificación de su contenido; recarga y conservación del estado.
9. Recuperación del respaldo mediante selector de archivo y confirmación de reemplazo; mensaje visible «Respaldo recuperado» y datos conservados.
10. Verificación visual de escritorio y pantalla móvil configurada a 390 × 844. El documento no presentó desbordamiento horizontal global en la vista móvil del informe; el menú permite desplazamiento horizontal propio.
11. Verificación del foco con teclado en el botón de recuperación y de la carga de las cinco plantillas imprimibles.
12. Consola sin advertencias ni errores al revisar el informe final.

Se corrigieron durante la verificación una diferencia del estado inicial de respaldo, la visibilidad accidental del selector de archivo y el acceso con teclado al control de recuperación.

## Pendientes y límites

- **Apertura directa mediante doble clic:** el paquete utiliza recursos locales clásicos y no depende de servidor; la prueba de navegador con protocolo `file://` fue bloqueada por la política del navegador de automatización. No se declara verificada su apertura directa en ese navegador. Debe comprobarse en el navegador de los equipos del taller.
- **Computador limpio:** no se dispone de ese entorno; no verificado.
- **GitHub y Pages:** repositorio público y publicación verificados tras autorización expresa del usuario. Dirección: `https://arcoforo-png.github.io/maqueta-integridad-electoral-colombia-2027/`. Configuración: rama `main`, raíz, HTTPS. En el sitio publicado se verificaron carga de interfaz, consulta amplia, pico de 400 resultados, muestra de seis publicaciones, ocho calificaciones, acuerdo de 50 % sobre dos pares e informe con limitaciones. Se descargó y se comprobó el informe JSON. La consola no mostró errores ni advertencias durante esta comprobación. El despliegue inicial fue confirmado por GitHub Pages mediante el flujo `38928558455`.
- **Duración y aprendizaje:** agenda configurada a 120 minutos; comprensión, ritmo real y suficiencia de la muestra pendientes de validación presencial. No se realizó un taller real ni se simuló esa validación como si hubiera ocurrido.
- **Accesibilidad:** estructura semántica, etiquetas, foco visible, navegación por teclado básica y adaptación móvil comprobadas en el alcance descrito. No es una auditoría completa con lector de pantalla ni una certificación WCAG.
- **Impresión:** plantillas cargadas y estilos de impresión incluidos; no se ha certificado la paginación de todos los modelos de impresora o tamaños de papel.
- **Contenido sintético:** generado a partir de plantillas y actores identificados como ficticios; las pruebas no demuestran ausencia absoluta de cualquier coincidencia accidental con la realidad.
- **Multilingüe:** interfaz entregada en español. Plantillas de pantalla separadas en `ui-es.js` y contenidos en `content.js`; una traducción completa requiere adaptar también rótulos estáticos y mensajes del controlador.

La evidencia local de interfaz y los archivos de prueba no forman parte de los datos iniciales de la maqueta. Ninguna respuesta de prueba se incluye como respuesta de una mesa real.
