function getFirstSelector(selector) {
  let a = document.querySelector(selector)
  return a 
}

function nestedTarget() {
  let a = document
  .querySelector('#nested')
  .querySelector('.target')
  return a
}

function increaseRankBy(n) {
  let a = document
  .querySelectorAll('ul.ranked-list li')
  
  for (let i = 0; i<a.length; i++) {
    a[i].innerHTML = parseInt(a[i].innerHTML) + n
  }
  
}

function deepestChild() {
  let a = document
  .getElementById('grand-node')
  .querySelectorAll('div')
  
  }