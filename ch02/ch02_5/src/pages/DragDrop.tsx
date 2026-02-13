import {DragEvent} from 'react'

export default function DragDrop() {
  const onDragStart = (e: DragEvent<HTMLElement>) =>
    console.log('onDragStart', e.dataTransfer) // 객체 드래그되는 동안 데이터 저장
  const onDragEnd = (e: DragEvent<HTMLElement>) =>
    console.log('onDragEnd', e.dataTransfer)

  const onDragOver = (e: DragEvent) => e.preventDefault() // 브라우저의 드래드 동작을 막고 리액트 드래그 이벤트를 적용
  const onDrop = (e: DragEvent) => {
    e.preventDefault()
    console.log('onDrop', e.dataTransfer)
  }

  return (
    <div>
      <p>DragDrop</p>
      <div draggable onDragStart={onDragStart} onDragEnter={onDragEnd}>
        <h1>Drag Me</h1>
      </div>
      <div onDrop={onDrop} onDragOver={onDragOver}>
        <h1>Drop Over Me</h1>
      </div>
    </div>
  )
}
