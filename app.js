document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid")
  const scoreDisplay = document.getElementById("score")
  const width = 28 //28 * 28 = 784 cuadros
  let score = 0



  // disposicion de la cuadrícula y que hay en los cuadrados.

  const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
  4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
  1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
  1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
  1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
  1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
  1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
  1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
  1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1

  ]

  //Aqui toca definirlo el squares ya que nos ha dado varios errores por lo ponerlo.

  const squares = []

  // leyenda
  // 0 - pac-dot
  // 1 - pared
  // 2 - guarida del fantasma
  // 3 - vida
  // 4 - Vacio

  //dibujar la cuadrilla y renderizarla.

function createBoard() {
for (let i= 0; i< layout.length; i++) {
  const square = document.createElement("div")
  grid.appendChild(square)
  squares.push(square)

// añadir el diseño al tablero.
if (layout[i] === 0) {
  squares [i].classList.add("pac-dot")
} else if (layout [i]=== 1) {
  squares[i].classList.add("wall")
} else if ( layout [i] === 2) {
  squares[i].classList.add("ghost-lair")
}else if (layout [i] === 3) {
  squares[i].classList.add("power-pellet")
}


}

}
createBoard()

// la posicion de pac man

let pacmanCurrentIndex = 490

squares [ pacmanCurrentIndex].classList.add("pac-man")

//Posicion del enemigo

let hunterCurrentIndex = 197
squares  [hunterCurrentIndex].classList.add("hunter")

//Hacer que hunter tenga las coordenadas de pacman

function getCoordinates(index) {
  return [index % width, Math.floor(index/ width)]
}

console.log(getCoordinates(490))


//Mover a hunter

function moveHunter () {
  const directions = [-1,+1, +width, -width]
  let direction = directions[Math.floor(Math.random() * directions.length)]

  let ghostTimerId = NaN

  ghostTimerId = setInterval

  ghostTimerId = setInterval(function() {
    if (!squares [hunterCurrentIndex + direction].classList.contains("wall")){

      // quitarle la clase de ghost
      squares [hunterCurrentIndex].classList.remove("hunter")

      // mirar si el nuevo espacio esta mas cerca

      const [hunterX, hunterY] = getCoordinates(hunterCurrentIndex)
      const [pacmanX, pacmanY] = getCoordinates(pacmanCurrentIndex)
      const [hunterNewX, hunterNewY] = getCoordinates(hunterCurrentIndex + direction)

      function isXCoorCloser() {
        if ((hunterNewX - pacmanX) >(hunterX - pacmanX)) {
          return true
        } else return false
      }
      function isYCoorCloser() {
        if((hunterNewY - pacmanY) > (hunterY - pacmanY)){
        return true
      } else return false
      }

      if(isXCoorCloser() || isYCoorCloser()) {
        hunterCurrentIndex += direction
        squares[hunterCurrentIndex].classList.add("hunter")
      } else {
        squares[hunterCurrentIndex].classList.add("hunter")
        direction = directions[Math.floor(Math.random()* directions.length)]
      }

      squares [hunterCurrentIndex].classList.add("hunter")
    } else direction = directions[Math.floor(Math.random()* directions.length)]

    //Game over de Hunter
    if (squares [hunterCurrentIndex].classList.contains("pac-man")) {
      scoreDisplay.innerHTML = "Te han cazado"
    }

  }, 300)
}
moveHunter()

function movePacman(e) {
  squares[pacmanCurrentIndex].classList.remove("pac-man")

  switch(e.keyCode) {
    case 37:
    if(pacmanCurrentIndex % width !== 0 && !squares[pacmanCurrentIndex -1].classList.contains("wall") && !squares [pacmanCurrentIndex - 1].classList.contains("ghost-lair")) pacmanCurrentIndex -=1

    //Checkear si Pacman esta en la salida de la izquierda y sale por el otro lado

    if ( squares [pacmanCurrentIndex - 1] === squares[363]) {
      pacmanCurrentIndex = 391
    }

    break
    case 38:
    if ( pacmanCurrentIndex - width >=0 && !squares[pacmanCurrentIndex - width].classList.contains ("wall") && !squares [pacmanCurrentIndex - width].classList.contains("ghost-lair")) pacmanCurrentIndex -= width
    break
    case 39:
    if ( pacmanCurrentIndex % width <width -1 && !squares[pacmanCurrentIndex + 1].classList.contains("wall") && !squares [ pacmanCurrentIndex + 1].classList.contains("ghost-lair")) pacmanCurrentIndex +=1

    // hacer que pacman vaya a la derecha y se transporte al otro lado

    if ( squares [pacmanCurrentIndex + 1] === squares [392]) {
      pacmanCurrentIndex = 364
    }
    break
    case 40:
    if ( pacmanCurrentIndex +width < width * width && !squares [pacmanCurrentIndex + width].classList.contains("wall") && !squares [pacmanCurrentIndex + width].classList.contains("ghost-lair")) pacmanCurrentIndex +=width
    break
  }

  squares[pacmanCurrentIndex].classList.add("pac-man")

  pacDotEaten()
  powerPelletEaten()
  checkForGameOver()
  checkForWin()


}

document.addEventListener("keyup", movePacman)

// Que pasa cuando Pacman se come un punto?

function pacDotEaten() {
  if (squares [pacmanCurrentIndex].classList.contains ("pac-dot")) {
    score ++ // eso hace que suba a puntuacion.
    scoreDisplay.innerHTML = score
    squares [pacmanCurrentIndex].classList.remove("pac-dot")
  }
}

//que pasa cuando comer un punto de poder

function powerPelletEaten() {
  if(squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
    score+= 10
    ghosts.forEach(ghost => ghost.isScared = true)
    // El tiempo que estara asustado el Fantasma
    setTimeout(unScareGhosts, 10000)
    squares[pacmanCurrentIndex].classList.remove("power-pellet")
  }
}

// hacer que el fantasma se deje de ver como azul cuando deje de estar asustado

function unScareGhosts() {
  ghosts.forEach(ghost => ghost.isScared = false)
}

// Crear el Fantasma template

class Ghost {
  constructor(className, startIndex, speed) {
    this.className = className
    this.startIndex = startIndex
    this.speed = speed
    this.currentIndex = startIndex
    this.timeId = NaN
    this.isScared= false
  }
}
// Todos mis fantasmas

ghosts = [
  new Ghost("Solair", 348, 250),
  new Ghost ("Kirby", 376, 400),
  new Ghost ("Snake", 351, 300),
  new Ghost ("Sekiro", 379, 500)
]

//Dibujar al ghost

ghosts.forEach (ghost=> {
  squares[ghost.currentIndex].classList.add(ghost.className)
  squares[ghost.currentIndex].classList.add("ghost")
})

// mover el ghost de manera random

ghosts.forEach(ghost => moveGhost(ghost))

// escribir la función para mover al fantasma
function moveGhost(ghost) {
  const directions = [-1,+1, width, -width]
  let direction = directions[Math.floor(Math.random()* directions.length)]

  ghost.timerId = setInterval(function() {

    // si el siguiente intervalo donde quiere el ghost no tiene una cuadrilula o un fantasma, puede ir.

    if (!squares[ghost.currentIndex + direction].classList.contains("wall") && !squares[ghost.currentIndex + direction].classList.contains("ghost")) {

      //Puede ir en esta dirección.
      // quitar todas las clases relacionadas con los ghost
      squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost")
      // cambiar el actual index por un safesquare

      ghost.currentIndex +=direction
      // cambiar el index actual por el nuevo espacio seguro
      squares[ghost.currentIndex].classList.add(ghost.className, "ghost")


      // o puede ir en esta direccion.

  } else direction = directions [Math.floor(Math.random() * directions.length)]

  // si el fantasma esta asustado. funcion.

  if (ghost.isScared) {
    squares[ghost.currentIndex].classList.add("scared-ghost")
  }

  // Si el fantasma esta asustado y Pacman esta encima de el.

  if ( ghost.isScared && squares [ghost.currentIndex].classList.contains("pac-man")) {
    squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost")
    ghost.currentIndex = ghost.startIndex
    score +=1000
    squares[ghost.currentIndex].classList.add(ghost.className, "ghost")
  }

}, ghost.speed)
}

// Cuando se produce el Game over

function checkForGameOver() {
  if (squares [pacmanCurrentIndex].classList.contains("ghost") && !squares[pacmanCurrentIndex].classList.contains("scared-ghost")) {
    ghosts.forEach(ghost => clearInterval (ghost.timerId))
    document.removeEventListener("keyup", movePacman)
    // setTimeout(function(){alert("Game Over");
    // }, 500)
    scoreDisplay.innerHTML= "Game Over"
  }
}

function checkForWin() {
  if (score === 274) {
    ghosts.forEach(ghost => clearInterval(ghost.timerId))
    document.removeEventListener("keyup", movePacman)
    scoreDisplay.innerHTML = "Ganaste!"
  }
}



})
