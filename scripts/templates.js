
function makeGrid(num){
  let table = document.querySelector('table')
  for(let j = 0; j < num; j ++){
    let row = document.createElement('tr')
    table.append(row)
      for(let k = 0; k < num * 2; k ++){
        let col = document.createElement('td')
        row.append(col)
      }
  }
}

makeGrid(30)

module.exports = makeGrid
