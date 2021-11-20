let div1 = document.createElement('div');
div1.className = 'demo';

document.body.appendChild(div1);

let dragging = false;
let lastX;
let lastY;

div1.onmousedown = (e) => {
  lastX = e.clientX;
  lastY = e.clientY;
  dragging = true;
};
console.log(1);
document.onmousemove = (e) => {
  if (dragging === true) {
    let deltaX = e.clientX - lastX;
    let deltaY = e.clientY - lastY;
    let top = parseInt(div1.style.top) || 0;
    let left = parseInt(div1.style.left) || 0;
    let resultY = top + deltaY;
    let resultX = left + deltaX;
    if (resultY < 0) {
      resultY = 0;
    }
    if (resultX < 0) {
      resultX = 0;
    }
    div1.style.top = resultY + 'px';
    div1.style.left = resultX + 'px';
    lastX = e.clientX;
    lastY = e.clientY;
  }
};

document.onmouseup = (e) => {
  dragging = false;
};

