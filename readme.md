# TAREAS

Bienvenidos a la sección de tareas! Aquí armaremos todo el instructivo tanto para descargar la tarea y llegar a ella como para subirla a su propio repositorio y que yo pueda corregir directamene en el código.

Empecemos!

## Descargar el repositorio

Para descargar el repositorio simplemente necesitan ir al boton verde de CODE y copiar el enlace que se encuentra en el cajoncito desplegable.

Luego van a la terminal de la computadora, se mueven hasta la carpeta deseada y escriben el siguiente comando:
```bash
  git clone enlace_repo
```
Solo necesitan reemplazar <i>enlace_repo</i> con el enlace que copiaron del boton CODE.

## Encontrar la tarea

Para ubicar la tarea solo necesitan moverse a la rama de tareas. Para ello, una vez que abran el proyecto en el Visual Studio Code, deben escribir el siguiente comando en terminal:
```bash
  git checkout tareas
```
Esto los posicionará en la rama tareas. Allí podrán ver la carpeta de tareas.

## Consigna de la tarea

La consigna se encuentra en un archivo <i>readme.md</i> Este tipo de archivo permite que lo que se escriba dentro se vea tanto en el repositorio de manera bella, como en el VSC si usamos el atajo adecuado. Por lo tanto, si prefieren ver la consigna en el VSC en lugar de en el repo, solo deben hacer click en el archivo readme en el VSC y luego, parados en él, usar el siguiente atajo de teclado:
```
  ctrl + shift + v
```
Esto abrirá una vista previa interna dentro del VSC. Luego les enseñaré como armar vistas partidas para ver la consigna y su hoja de codigo una al lado de la otra para más comodidad.

## Realizar la tarea.

Para realizar la tarea lo que deben hacer es crear una hoja de index.html dentro de la carpeta de la tarea correspondiente. Alli resolveran las consignas.

# Armado del repo personal

Lo primero y principal es que tengan una cuenta de github y que creen un repositorio personal. Una vez que eso esté listo sigan los pasos para vincular el proyecto con la tarea a su propio repositorio.

## Desvincular la tarea de mi repo y vincularla al suyo

Para poder subir la tarea a su propio repo es necesario que primero la desvinculen de mi repositorio. Para ello deben ir al boton CODE de SU repositorio y copiar el enlace del cajoncito desplegable.
Luego deben ir a la terminal del VSC y escribir el siguiente comando:
```
  git remote set-url origin enlace_repo
```
Nuevamente deben reemplazar donde dice <i>enlace_repo</i> por el enlace que copiaron del boton CODE. Una vez realizado eso pueden revisar que se vinculó correctamente con su repositorio utilizando el siguiente comando:
```
  git remote -v
```
Si les muestra el enlace a su repo en lugar de al mio lo hicieron correctamente.

## Enviar los cambios

Una vez vinculado, solo necesitan hacer un add -> commit -> push y ya tendrán su propia versión subida.

## Dar colaborador
Una vez que hayan terminado los pasos anteriores, deben darme colaborador para que yo pueda realizar cambios en su repo. Para ello sigan los siguientes pasos:
1. Ir a al repo
2. Ir a Settings (o configuracion si lo tienen en español)
3. Ir a la opción Collaborators (colaboradores)
4. Bajar hasta encontrar el titulo Manage Access (manejar acceso)
5. Clickear en el botón ADD PEOPLE
6. Cuando se abra la ventanita escibir <i>Lirico Matias Dominguez</i>
7. Aceptar

Una vez realizado esto me llegará un correo electronico para aceptar la invitación. Apenas pueda la aceptaré. Si no lo acepto en un plazo de 48 horas recuérdenmelo. Me caen muchos correos por día y puede que se me traspapele.

Una vez realizados todos estos pasos, hayan resuelto la tarea y la hayan pusheado, ya pueden pasarme el enlace del repo por telegram para que se los resuelva.

Cualquier duda me escriben por telegram.
