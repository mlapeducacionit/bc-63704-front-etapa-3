import Card from '../components/Card'
import './Inicio.scss'

const Inicio = () => {
  return (
    <main>
      <section className="section-cards"> 
        <header className="section-cards__header">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>Se encontraron X productos</p>
        </header>

        <div className="cards-container">
          
          <Card />

        </div>

      </section>
    </main>
  )
}

export default Inicio