//import { HeaderCustom } from '../components/header'
import ExampleHeader from '../components/example-header'

export function HomePage() {

  return (
    <>
      <ExampleHeader/>
      {/*<HeaderCustom/>*/}
      <section className='py-3 md:py-8 max-w-4xl mx-auto'>
        <h1 className="text-3xl font-bold">
          ¡Acarreos Appa!
        </h1>
      </section>
    </>
  )
}