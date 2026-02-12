// import {FC, ReactNode} from 'react'

// export type PProps = {
//   children?: ReactNode
// }

// const P: FC<PProps> = props => {
//   const {children} = props
//   return <p>children={children}</p>
// }

// export default P

import {FC, PropsWithChildren} from 'react'

export type PProps = {}

const P: FC<PropsWithChildren<PProps>> = props => {
  return <p {...props}></p>
}

export default P
