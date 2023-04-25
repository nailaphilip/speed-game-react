const startGame = () => {
    if (rounds >= 10) {
      return endGame()
    }
    
    const nextActive = pickNew(active)
  
  
    active = nextActive
  
    timer = setTimeout(startGame, pace)
  
    pace -= 10
    rounds++
    function pickNew (active) {
      const nextActive = getRndInt(0, 3)
      if (nextActive !== active
      ) {
        return nextActive
      }
      return pickNew(active)
    }
  }


  const endGame = () => {
    clearTimeout(timer)
  }