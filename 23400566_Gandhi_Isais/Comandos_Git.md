# Comandos Git 

## 1. git init
- Crea un nuevo repositorio Git o reinicia uno existente.
- Acabas de crear una carpeta vacía en tu computadora para un nuevo proyecto de software y quieres empezar a registrar sus cambios desde cero.

## 2. git status
- Descarga un repositorio existente desde GitHub a tu computadora.
- Te unes a un nuevo equipo de trabajo y necesitas descargar todo el código de la aplicación (alojado en GitHub) a tu computadora para empezar a programar.

## 3. git config
- Configura variables de usuario, como tu correo electrónico y nombre
- Es la primera vez que instalas Git en una computadora nueva y necesitas registrar tu nombre y correo para que tus aportes lleven tu firma.
  
## 4. git status
- Muestra el estado actual de tus archivos (cuáles están modificados, sin seguimiento o listos para guardar).
- Regresas de almorzar, no recuerdas qué archivos habías editado por la mañana y necesitas ver qué está pendiente por guardar.

## 5. git add <archivo> 
- Agrega archivos específicos al área de preparación (staging area).
- Modificaste cinco archivos, pero solo quieres guardar los cambios de uno solo (index.html) porque los otros corresponden a una tarea diferente.

## 6. git add
- Agrega todos los archivos modificados o nuevos al área de preparación de una sola vez.
- Terminaste una función completa que requirió maquetación, estilos y lógica, y quieres preparar todos los archivos modificados juntos.

## 7. git commit -m "Mensaje"
- Guarda los cambios preparados en el historial local con un mensaje descriptivo.7
- Terminaste de arreglar el botón de inicio de sesión y quieres congelar ese avance en el historial con la etiqueta "Fix: corregido error en botón de login".

## 8. git push origin <rama>
-  Sube tus confirmaciones (commits) locales al repositorio remoto en GitHub.
- Terminaste tu jornada de trabajo en tu computadora local y subes tus commits a GitHub para que tus compañeros puedan ver tu código o desplegarlo a internet.

## 9. git pull 
- Descarga e integra los últimos cambios del repositorio remoto en tu rama actual.
- Inicias tu día de trabajo y necesitas descargar los cambios que tus compañeros de equipo subieron a GitHub la noche anterior para no trabajar con código desactualizado.

## 10. git branch
- Lista todas las ramas locales de tu proyecto.
- Quieres crear una nueva función pero no recuerdas si estás parado en la rama principal (main) o en la de desarrollo (develop).

## 11. git checkout -b <nombre-rama>
- Crea una nueva rama y cambia a ella inmediatamente.
- Tu jefe te pide agregar una pasarela de pagos con PayPal y creas una rama aislada llamada feature-paypal para trabajar sin romper el código que ya funciona.

## 12. git switch <nombre-rama>
- Cambia de una rama a otra de forma rápida y segura.
- Estás programando una nueva pantalla, pero surge un error urgente en producción; usas este comando para saltar rápido a la rama main y arreglar el fallo.

## 13. git merge <rama>
- Fusiona los cambios de una rama específica en tu rama actual.
- Probaste la pasarela de pagos en tu rama aislada, todo funciona perfecto y ahora quieres fusionar ese código dentro de la rama principal (main).

## 14. git branch -d <nombre-rama>
- Elimina una rama local una vez que su trabajo ha sido fusionado
- Ya fusionaste tu código de PayPal a la rama principal, por lo que esa rama temporal ya no es necesaria y la borras para mantener limpio tu espacio de trabajo.

## 15. git log 
- Muestra el historial de confirmaciones (commits) en tu rama actual.
- La aplicación se rompió tras el último cambio y necesitas revisar la lista de los últimos commits para ver quién hizo la última modificación y qué código tocó.

## 16. git diff
- Muestra exactamente qué líneas de código han cambiado pero aún no han sido preparadas con add.
- Modificaste un archivo de configuración hace una hora, la app da un error extraño y quieres ver línea por línea qué escribiste mal antes de guardarlo.

## 17. git reset <archivo> 
- Saca un archivo del área de preparación sin perder los cambios realizados en él.
- Agregaste por error un archivo con contraseñas secretas (.env) al área de preparación con git add . y necesitas sacarlo urgentemente antes de hacer el commit.

## 18. git stash
- Guarda temporalmente los cambios en los que estás trabajando sin hacer un commit, útil para cambiar de rama.
- Estás a mitad de una tarea compleja con código a medio terminar (que no puedes guardar en un commit todavía) pero necesitas cambiar de rama urgentemente para ayudar a un compañero. Este comando "guarda en un cajón temporal" tus cambios y te deja limpio el directorio. 

## 19. git remote -v 
- Muestra las URLs de los repositorios remotos que están vinculados a tu proyecto local.
- Quieres verificar si tu repositorio local está apuntando al repositorio de la empresa en GitHub o a tu cuenta personal para no subir el código al lugar equivocado.

## 20. git fetch
- Descarga toda la información y confirmaciones más recientes del repositorio remoto sin fusionarlas aún con tus archivos locales.
- Quieres ver si tus compañeros han subido nuevas ramas o cambios a GitHub, pero solo quieres inspeccionar la estructura del repositorio remoto sin alterar ni mezclar nada de tu código local todavía.
- Descarga toda la información y confirmaciones más recientes del repositorio remoto sin fusionarlas aún con tus archivos locales.
