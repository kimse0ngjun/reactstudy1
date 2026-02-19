import {Div, Title} from '../components'
import * as D from '../data'

const sentense = D.randomSentence(10)
export default function PaddingTest() {
  return (
    <section className="mt-4">
      <Title>PaddingTest</Title>
      <Div className="p-8">
        <Div className="text-white bg-sky-500">
          <p>{sentense}</p>
        </Div>
        <Div className="p-8 text-white bg-orange-600">
          <p>{sentense}</p>
        </Div>
      </Div>
    </section>
  )
}
