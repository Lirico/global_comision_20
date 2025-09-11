<p align="center">
  <img src="https://globalacademyoficial.com/_next/static/media/logo_ga.b3948337.svg" alt="Propital" />
</p>

# Bienvenidos al repositorio de la comisión 20

## Instructivo para descargar el repositorio

Antes de comenzar asegurate tener instalado GIT en la computadora. Para revisar escribe en el buscador
de Windows o del sistema operativo que tengas el programa GIT BASH. Si lo tienes está instalado correctamente.

1. Escribir en el buscador de windows el siguiente comando y luego dar Enter.
```bash
    cmd
```
2. Hacer click en el boton verde que dice "Code" del repositorio y copiar el enlace que allí figura.

3. Ir a la terminal que abrieron con el cmd y escribir el siguiente comando. 
Nota: Revisen bien en que carpeta van a ejecutar el comando para luego poder encontrar el archivo
que se genera.
```bash
    git clone pegar_enlace_extraido_del_boton_Code
```
4. Una vez que ejecutan ese comando se debería crear una carpeta en la ubicación que figura en la terminal.
Una vez que la carpeta se genera ya pueden arrastrarla al ícono de Visual Studio Code.

## Comandos para recorrer en terminal
1. Moverte a un archivo/carpeta (directorio) interno de la carpeta actual (directorio actual).
```bash
    cd nombre_archivo
```
2. Regresar al directorio anterior.
```bash
    cd ..
```
3. Revisar todos los archivos del directorio actual
```bash
    dir
```
4. Crear una nueva carpeta
```bash
    mkdir nombre_carpeta
```
5. Limpiar terminal
```bash
    cls
```
6. Cerrar terminal
```bash
    exit
```


## COMANDOS GIT

- git init: inicializa git en un proyecto.
- git remote add origin [enlace repo]: Conecta un proyecto con un repositorio.
- git remote set-url origin [enlace nuevo repo]: Desvincula el proyecto de un repo, y lo vinculo al nuevo.

### Preparamos nuestros cambios para ser enviados al repositrio.
- git add [nombre achivo]: Registra un archivo para ser enviado al repo.
- git add . : Registra todos los archivos.

### Preparamos el backup
- git commit -m [nombre commit]: Prepara una version segura a la cual podemos volver (un backup).

### Enviamos las actualizaciones al repo
- git push: Envia las actualizaciones a una rama generica
- git push origin [nombre rama]: Envia las actualizacions a una rama origen (default)

### Para revisar informacion
- git status: Revisamos que esta registrado y que no. (rojo: no registrado. Verde: Registrado)
- git log: revisamos la lista de commits realizados. (El que tiene el HEAD es el ultimo y apunta a la rama en la cual se realizó.)

### Descargar de repo a PC
- git clone [enlace repo]: Clona el proyecto del repo a la PC

### Cambiar de rama
- git checkout [nombre rama]

### Actualizar el proyecto de repo a PC
- git pull: Arrastra cambios que existen en el repo pero no en la PC, del repo a la PC.

### Establecer tus datos de username e email
- git config --global user.email "aldanacapoble@gmail.com"
- git config --global user.name "Aldana Capoble"

## Dar colaborador
Entran al repo -> Settings -> Collaborators -> Add people -> Buscan a "lirico" (Matias Dominguez) avatar de atomo.
