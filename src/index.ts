const classNames = {
  profile:
    '.x1lliihq.x1plvlek.xryxfnj.x1n2onr6.x193iq5w.xeuugli.x1fj9vlw.x13faqbe.x1vvkbs.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.x1i0vuye.x1ms8i2q.xo1l8bm.x5n08af.x10wh9bi.x1wdrske.x8viiok.x18hxmgj',
  classNamesFollowedList: '._ab8y._ab94._ab97._ab9f._ab9k._ab9p._abcm',
}

function nodeHasBeenInjected(node: HTMLElement) {
  return node.dataset.injected === 'yes'
}

function markNodeAsInjected(node: HTMLElement) {
  node.dataset.injected = 'yes'
}

function main() {
  let result = ''

  Object.keys(classNames).forEach((key) => {
    const className = classNames[key]
    const elements = document.querySelectorAll<HTMLElement>(className)

    for (let i = 0; i < elements.length; i++) {
      const isText = elements[i].childNodes[0]?.nodeType === Node.TEXT_NODE
      const node = elements[i]
      if (isText && !nodeHasBeenInjected(node)) {
        markNodeAsInjected(node)
        const newSpan = document.createElement('span')
        const text = document.createTextNode(' - test')
        newSpan.appendChild(text)
        node.appendChild(newSpan)
        result += `\n ${key} => ${node.childNodes[0].textContent} (node type is text ${isText}) (${node.childNodes.length})`
      }
    }
  })
  if (result) console.log('result', result)
}

setInterval(main, 1000)
