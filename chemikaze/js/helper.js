function elt(name, className, id) {
  // element creation assist
  var elt = document.createElement(name);
  if (className) {
    elt.className = className;
  }
  if (id) {
    elt.id = id;
  }
  return elt;
}

function eltNS(name, className, id) {
  // element creation assist
  var elt = document.createElementNS("http://www.w3.org/2000/svg",name);
  if (className) {
    elt.setAttribute("class", className);
  }
  if (id) {
    elt.setAttribute("id", id);
  }
  return elt;
}
