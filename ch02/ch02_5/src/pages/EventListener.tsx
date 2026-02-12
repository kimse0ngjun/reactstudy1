// export default function CopyMe() {
//   return <div>CopyMe</div>
// }

document.getElementById('root')?.addEventListener('click', (e: Event) => {
  const {isTrusted, target, bubbles} = e
  console.log('mouse click occurs.', {isTrusted, target, bubbles})
}) // 'mouse click occurs.' true <div id="root"></div> true

// ~ ('root)?. ~ -> undefined 처리
document.getElementById('root')?.addEventListener('click', (e: Event) => {
  const {isTrusted, target, bubbles} = e
  console.log('mouse click also occurs.', isTrusted, target, bubbles)
})

export default function EventListener() {
  return <div>EventListener</div>
}
