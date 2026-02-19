import {Div, Icon, Title, Subtitle} from '../components'

export default function DivTest() {
  return (
    <section className="mt-4">
      <Title>DivTest</Title>
      <Div className="text-center text-blue-100 bg-blue-500" height="6rem">
        <Icon name="home" className="text-3xl" />
        <Subtitle>Home</Subtitle>
      </Div>
    </section>
  )
}
