// 1

// export default function App() {
//   return (
//     <ul>
//       <li>
//         <a href="http://www.google.com" target="_blank">
//           <p>go to google</p>
//         </a>
//       </li>
//     </ul>
//   )
// }

// 2

// import {Component, ReactNode} from 'react' // 컴포넌트 가져옴

// export default class App extends Component {
//   render(): ReactNode {
//     const isLoading = true
//     if (isLoading) return <p>loading...</p>

//     return (
//       <ul>
//         <li>
//           <a href="http://www.google.com">
//             <p>go to google</p>
//           </a>
//         </li>
//       </ul>
//     )
//   }
// }

// 3

// import {Component} from 'react'

// export default class App extends Component {
//   render() {
//     const isLoading = true
//     // const isLoading = false
//     const children = (
//       <li>
//         <a>
//           <p>go to Google</p>
//         </a>
//       </li>
//     )

//     return (
//       <div>
//         {isLoading && <p>loading...</p>}
//         {!isLoading && <ul>{children}</ul>}
//       </div>
//     )
//   }
// }

import {Component, ReactNode} from 'react'

interface ClassComponentProps {
  href: string
  text: string
}

export default class ClassComponent extends Component<ClassComponentProps> {
  render(): ReactNode {
    const {href, text} = this.props
    return (
      <li>
        <a href={href}>{text}</a>
      </li>
    )
  }
}
