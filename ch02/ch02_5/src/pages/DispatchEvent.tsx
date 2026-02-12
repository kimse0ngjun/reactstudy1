// export default function DispatchEvent() {
//   const onCallDispatchEvent = () => {
//     console.log('onCallDispatchEvent') // 사용자 event
//     document
//       .getElementById('root')
//       ?.dispatchEvent(new Event('click', {bubbles: true}))
//     //?.dispatchEvent(new Event('click', {bubbles: false}))
//   }
//   const onCallClick = () => {
//     console.log('onCallClick') // 일반 event
//     document.getElementById('root')?.click()
//   }

//   return (
//     <div>
//       <p>DisPatchEvent</p>
//       <button onClick={onCallDispatchEvent}>call dispatchevent</button>
//       <button onClick={onCallClick}>call click</button>
//     </div>
//   )
// }

export default function DispatchEvent() {
  const onCallDispatchEvent = () => {
    const event = new Event('click', {bubbles: true})

    const rootElement = document.getElementById('root')
    rootElement?.addEventListener(
      'click',
      e => {
        e.stopPropagation()
        console.log('bubbling stop')
      },
      {once: true}
    )

    document.getElementById('root')?.dispatchEvent(event)
  }

  return (
    <div onClick={() => console.log('부모 태그')}>
      <p>DisPatchEvent</p>
      <button onClick={onCallDispatchEvent}>call dispatchevent</button>
    </div>
  )
}
