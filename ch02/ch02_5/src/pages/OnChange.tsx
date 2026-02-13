import {ChangeEvent} from 'react'

export default function OnChange() {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation() // 상위태그에 영향을 미치지 못하게 하는 함수
    e.preventDefault() // 브라우저의 기본 동작을 멈추고 React에서 값을 제어 (useState 사용)
    console.log('onChangeValue', e.target.value)
  }
  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    console.log('onChangeChecked', e.target.checked)
  }
  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    console.log('onChangeFiles', e.target.files)
  }

  return (
    <div>
      <p>OnChange</p>
      <input
        type="text"
        onChange={onChangeValue}
        placeholder="type some text"
        defaultValue="Hello"></input>
      <input type="checkbox" onChange={onChangeChecked} defaultChecked></input>
      <input
        type="file"
        onChange={onChangeFiles}
        multiple
        accept="image/*"></input>
    </div>
  )
}
