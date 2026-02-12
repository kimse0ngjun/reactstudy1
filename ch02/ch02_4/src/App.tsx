// 1

// import {text} from 'stream/consumers'

// export default function App() {
//   const texts = [<p key={1}>hello</p>, <p key={2}>world</p>]
//   return <div>{texts}</div>
// }

// 2

// import {text} from 'stream/consumers'

// export default function App() {
//   const texts = ['hello', 'world'].map((text, index) => (
//     <p key={index}>{text}</p>
//   ))
//   return <div>{texts}</div>
// }

// 3
// import P from './P'

// export default function App() {
//   const texts = ['hello', 'world'].map((text, index) => (
//     <P key={index} children={text}></P>
//     // <p key={index} children={text}></p>
//   ))
//   return <div children={texts}></div>
// }

// 4
import P from './P'

export default function App() {
  return <P>Hello World</P>
}
