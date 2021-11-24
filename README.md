## DOCUMENTACIÓN MUSICODERS

En este repositorio se encuentra el proyecto de la página web oficial de Musicoders, un grupo de desarrolladores front end que comparten tanto amistad como una trayectoria musical además de amar la tecnología y la programación. 

Como la idea es trabajar lo más organizado posible y darle la oportunidad a todos los musicoders de poder aportar su granito de arena en este proyecto, se van a detallar muchos paso a paso, para que todos los niveles puedan seguir esta guía y poder codear sin problemas.

#### STACK TECNOLÓGICO

Para este proyecto, nos propusimos aprender nuevas tecnologías, y el stack elegido fue el siguiente:

- **React.js**
- **Next.js**
- **Chakra UI**
- **Framer Motion**
- **next-i18next**

#### HERRAMIENTAS

Las herramientas que nos van a ayudar a desarrollar este proyecto son las siguientes:

- **Jira** --> https://musicoders.atlassian.net/
  - Vamos a utilizar un tablero muy sencillo que contiene 3 columnas: TODO, IN PROGRESS y DONE. Se crearán tareas concretas y breves y se utilizarán sus nombres para crear ramas de Git para concretarlas.

- **Figma** --> https://www.figma.com/file/1RhjbbHsGActwcFsooyP7a/Musicoders?node-id=0%3A1
  - En Figma vamos a poder ver el diseño planteado para la página, la estética a seguir y la paleta de colores para poder realizar el proyecto.

- **Visual Studio Code** --> https://code.visualstudio.com/download
  - El editor de texto recomendado es Visual Studio Code, al cual pueden instalarse las siguientes extensiones para poder trabajar más cómodamente:
    - [**Auto Close Tag**](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
    - [**Auto Rename Tag**](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
    - [**Bracket Pair Colorizer**](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
    - [**ES7 React/Redux/GraphQL/React-Native snippets**](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

- **Node.js** --> https://nodejs.org/es/download/
  - Necesitamos tener instalado Node.js para poder manejar e instalar todas las dependencias que vamos a necesitar para el proyecto.

- **Git** --> https://git-scm.com/downloads
  - ***"Primero Git, luego existo"***. Es súper importante que tengamos Git instalado, así vamos a poder trabajar colaborativamente en el código.

- **GitHub** --> https://github.com/musicoders/musicoders-web
  - Vamos a mantener nuestro repositorio remoto en GitHub, donde vamos a poder mantener el código actualizado, compartirlo y aprender a trabajar colaborativamente de manera remota.

- **La Terminal** --> recomendada: https://cmder.net/
  - La terminal es nuestra mejor amiga. ¡Nunca lo olviden! :)
  Nos va a ayudar a instalar dependencias, a movernos entre carpetas, abrir nuestro código en la carpeta deseada, hacer nuestros commits de Git, entre otras cosas muy pero muy maravillosas.



### ARRANCAR EL PROYECTO
### Inicializar el proyecto por primera vez
  - Si todavía no clonaste el repositorio en tu computadora, vas a abrir la terminal y te vas a posicionar en la carpeta donde querés guardar una copia del repo (¿no sabés o no te acordás cómo usar la terminal? [Acá va un tutorial para refrescar esa memoria](https://www.youtube.com/watch?v=W6434nulBu8)), y vas a utilizar el siguiente comando de Git para hacer el clon:

    ```bash
    git clone https://github.com/musicoders/musicoders-web.git
    ```

    ---
    **MUY IMPORTANTE RECORDAR**

    El ```git clone``` lo vamos a utilizar **UNA ÚNICA VEZ** para crearnos una copia del repositorio a nivel local. Si ya tenemos esta copia, no volveremos a utilizar más este comando.

    ---

  - Una vez clonado el repo, nos vamos a parar sobre la carpeta del proyecto ```musicoders-web```. Para movernos a esa carpeta después de haber hecho el clon, hay que usar este simple comando:

    ```bash
    cd musicoders-web
    ```
  - Ahora bien, antes de levantar el proyecto, necesitamos **instalar todas las dependencias** que necesita el proyecto para funcionar. ¿Cómo sé cuáles son estas dependencias?  Si tengo curiosidad de saber cuáles son, puedo ir a chusmear el archivo ```package.json```, donde me muestra en formato de JSON, todas las dependencias y otras cositas importantes de mi proyecto.

    **¿Cómo hago para instalarlas?** Se instalan todas juntas utilizando el siguiente comando:

      ```bash
      npm install
      ```
    ---
    **¡RECORDAR!**

    Se tira este comando con la terminal posicionada en la carpeta ```musicoders-web```, donde tenemos nuestro repositorio y se tiene acceso al archivo ```package.json```, si no, no va a funcionar.

    Si tiramos el comando en el lugar correcto, vamos a ver que se empiezan a instalar muchas cositas. ¡Vamos bien! :).
    
    Esto puede llevar varios minutos, así que paciencia.

    ---

  - Ahora sí, con todas nuestras dependiencias instaladas, podemos ya proceder a **"levantar nuestro proyecto"** (haremos correr el servidor de desarrollo de manera local). Para ello, hay que usar el siguiente comando:

    ```bash
    npm run dev
    ```
  
    Este proceso puede tardar un poquito. Una vez finalizado, para ver nuestra página andando, abrir http://localhost:3000 en el navegador.

    Para terminar con la ejecución, podemos utilizar ```Ctrl + C``` dos veces.

    ---
    **A TENER EN CUENTA:**

    El ```npm run dev``` va a mantener levantado el proyecto mientras nuestra terminal esté abierta o mantenga en ejecución la compilación. Si cerramos esa terminal donde se está ejecutando, o usamos el ```Ctrl + C``` para "matar la ejecución", entonces nuestro servidor local no va a estar más levantado y no vamos a poder ver nuestra página.

    Esto quiere decir que cada vez que prendemos la computadora para trabajar, hay que utilizar este comando de nuevo.

    ---
  
### Inicializar el proyecto después de ya tenerlo localmente

- Si ya hicimos el ```git clone``` y también el ```npm install``` una vez, es suficiente, ahora ya no necesitamos usar más esos comandos. Lo que hay que hacer para ver el proyecto andando, es simplemente posicionarse sobre la carpeta ```musicoders-web``` en la terminal y tirar el comando:

  ```bash
  npm run dev
  ```
  y vamos a ver nuestra página andando en http://localhost:3000.

### TRABAJAR CON GIT Y GITHUB

Git es un controlador de versiones que nos permite trabajar en desarrollo colaborativamente. Cada persona tendrá una copia del repositorio en su computadora, hará sus cambios y los subirá al repositorio remoto que tenemos almacenado en GitHub: https://github.com/musicoders/musicoders-web.

GitHub es el servicio que vamos a utilizar para almacenar nuestro repositorio a nivel remoto.

### COMANDOS FUNDAMENTALES

Los comandos de Git que vamos a estar utilizando en el día a día están enlistados a continuación:

- ```git status```
  - Me permite ver el estado de mis cambios. La terminal me mostrará mensajes dependiendo de mi estado: si está todo limpio y no hay nada para commitear, si tengo archivos modificados que esperan ser guardados, si ya tengo archivos en el staging area, etc.

    ---
    **IMPORTANTE TIRAR ESTE COMANDO ¡SIEMPRE!**

    Es buena costumbre utilizar ```git status``` antes de proceder a hacer cualquier cosa, porque me notifica, justamente, el estado de mi trabajo.

    - Antes de decidir hacer un ```git add ruta/de/mi-archivo.js```, PRIMERO hago ```git status``` Y LEO QUÉ ME DICE LA TERMINAL.

    - Antes de hacer un ```git commit -m "Mi mensaje"```, PRIMERO hago un ```git status``` Y LEO QUÉ ME DICE LA TERMINAL, reviso que los archivos que están en el staging area son los que quiero commitear.

    - Antes de hacer un ```git push```, PRIMERO hago un ```git status``` Y LEO QUÉ ME DICE LA TERMINAL, me cercioro de que está todo clean y que no hay nada para commitear, por ende, puedo subir mis cambios.

    - Antes de hacer un ```git pull```, PRIMERO hago un ```git status``` Y LEO QUÉ ME DICE LA TERMINAL, me cercioro de que está todo clean y que no hay nada para commitear, por ende, puedo bajar los cambios.

    - Y así, y así, y así... por los siglos de los siglos,  ```git status``` FOREVER!

    ---

- ```git checkout rama-a-la-que-me-quiero-mover```
  - Me permite moverme de una rama a otra. Es importante que el working area esté clean, es decir, no tengo que tener ningún cambio sin guardar para poder moverme sin problemas.

    **¿Cómo sé si está mi working directory limpio?** Tiro un ```git status``` y leo qué me dice la terminal.

    A la rama donde más nos vamos a estar moviendo es ```develop```, por lo que el comando se vería así:

    ```bash
    git checkout develop
    ```
  
- ```git checkout -b nombre-de-mi-nueva-rama```
  - Este comando hace un mágico combo y me permite hacer dos cosas a la vez: es una combinación entre los comandos ```git checkout``` y ```git branch```.
    - El ```checkout```, como ya vimos, me permite moverme entre ramas.
    - El ```-b``` me permite crear una nueva rama.

    ---
    **NOTA**:

      Esto tranquilamente se puede hacer con los dos comandos por separado: utilizar ```git branch nombre-de-mi-nueva-rama``` y después para posicionarme en ella, hacer un ```git checkout nombre-de-mi-nueva-rama```. Pero la verdad es que, por lo general, cuando nos estamos creando una nueva rama es porque queremos empezar a trabajar en ella, por ende, siempre nos vamos a querer posicionar sobre ella, así que queda mucho más cómodo resolverlo en un solo comando.

    ---

- ```git add ruta/de/mi-archivo.js```
  - Me permite pasar un archivo del working directory (lugar donde estoy trabajando y haciendo cambios) al staging area (siguiente etapa en Git, donde mis archivos están listos para ser commiteados, pero todavía no los guardé).

    **¿Y cómo sé cuál es la ruta de un archivo?** Para eso es importante hacer antes el ```git status```, porque me muestra una lista con las rutas de todos los archivos que tuvieron cambios, y de ahí puedo sacar la ruta específica que necesito.

- ```git add -A```
  - Me permite pasar al staging area **todos los archivos** que el ```git status``` me muestra en sus diferentes listas: lista de archivos modificados ***(modified files)***, lista de archivos sin seguimiento ***(untracked files)*** y lista de eliminados ***(deleted files)***.

- ```git commit -m "Acá va mi mensaje descriptivo sobre de qué se tratan mis cambios"```
  - Este comando es el que finalmente va a guardar mis cambios. Si después de hacerlo, tiro un ```git status```, si salió todo bien, voy a ver que la terminal me muestra un mensaje como este:

    ```bash
    nothing to commit, working tree clean
    ```

- ```git push -u origin nombre-de-mi-rama```
  - Este comando es el que me va a permitir **subir mis cambios** al repositorio remoto **por primera vez**. En nuestro caso, lo va a subir al repositorio que tenemos almacenado en GitHub.

    **¿Por qué necesito hacerlo así la primera vez, en vez de utilizar directamente el ```git push```?** Porque creaste tu rama a nivel local, en tu computadora, por ende, todavía no tiene una referencia de que exista en el repositorio remoto en GitHub. Lo que hacen ```-u``` y ```origin``` es crearme esa referencia y dejar hecho un *caminito* para que mis cambios locales suban al remoto cada vez que uso ```git push``` solito.

    ---
    **IMPORTANTE**:

      Sigo insistiendo con **la importancia de utilizar** ```git status``` **antes de cualquier otro comando**. Para el caso del ```git push```, me permite saber si es que tengo todo lo que quiero guardado antes de pushear.

    ---

- ```git pull```
  - Me permite **traerme los cambios** que se hayan hecho en la rama sobre la que estoy. Por lo general, donde más vamos a utilzar este comando es sobre la rama ```develop```, ya que es la rama donde vamos a ir subiendo los cambios de todas las personas musicoders y donde va a ser casi seguro que siempre tengamos nuevos cambios esperando a ser pulleados.




