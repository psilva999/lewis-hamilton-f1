const styleElem = document.head.appendChild(document.createElement('style'))

export function showFirstDetail() {
  styleElem.innerHTML = `.menu li:nth-child(1)::after {
    animation:show-detail .5s forwards;
  }`
}

export function hidesFirstDetail() {
  styleElem.innerHTML = `.menu li:nth-child(1)::after {
    animation:hides-detail .5s forwards;
  }`
}

export function showSecondDetail() {
  styleElem.innerHTML = `.menu li:nth-child(2)::after {
    animation:show-detail .5s forwards;
  }`
}

export function hidesSecondDetail() {
  styleElem.innerHTML = `.menu li:nth-child(2)::after {
    animation:hides-detail .5s forwards;
  }`
}

export function showThirdDetail() {
  styleElem.innerHTML = `.menu li:nth-child(3)::after {
    animation:show-detail .5s forwards;
  }`
}

export function hidesThirdDetail() {
  styleElem.innerHTML = `.menu li:nth-child(3)::after {
    animation:hides-detail .5s forwards;
  }`
}
