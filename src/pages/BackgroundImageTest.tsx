import {Title, Div, Subtitle} from '../components'
import * as D from '../data'

const src = D.randomImage(1200, 400)
export default function CopyMe() {
  return (
    <section className="mt-4">
      <Title>BackgroundImageTest</Title>
      <Div className="mt-4 bg-gray-300 h-80 py-40" width="1200" height="400" src={src}>
        <Subtitle className="text-gray-500">Some Text here</Subtitle>
      </Div>
    </section>
  )
}
