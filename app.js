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
  squares[i].classList.add("power-pallet")
}


}

}
createBoard()

// la posicion de pac man

let pacmanCurrentIndex = 490

squares [ pacmanCurrentIndex].classList.add("pac-man")

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
  // powerPelletEaten()
  // checkForGameOver()
  // checkForWin()


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

// Crear el Fantasma template

class Ghost {
  constructor(className, startIndex, speed) {
    this.className = className
    this.startIndex = startIndex
    this.spedd = speed
    this.currentIndex = startIndex
    this.timeId = NaN
  }
}

ghost = [
  new Ghost("Solair", 348, 250),
  new Ghost ("Kirby", 376, 400),
  new Ghost ("Snake", 351, 300),
  new Ghost ("Sekiro", 379, 500)
]

//Dibujar al ghost

ghost.forEach (ghost=> {
  squares[ghost.currentIndex].classList.add(ghost.className)
  squares[ghost.currentIndex].classList.add("ghost")
})

// mover el ghost de manera random

ghost.forEach(ghost => moveGhost(ghost))

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

}, ghost.speed)
}



})
