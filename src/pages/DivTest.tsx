import {Title, Subtitle, Div, Icon} from '../components'

export default function DivTest() {
  return (
    <section className="mt-4">
      <Title>CopyMe</Title>
      <Div className="text-center text-blue-100 bg-blue-600" height="6rem">
        <Icon name="home" className="text-4xl" />
        <Subtitle>Home</Subtitle>
      </Div>
    </section>
  )
}
