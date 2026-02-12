import {Component, ReactNode} from 'react'

export default class ClassComponent extends Component {
  render(): ReactNode {
    return (
      <li>
        <a href="http://www.google.com" target="_blank">
          <p>go to google</p>
        </a>
      </li>
    )
  }
}
