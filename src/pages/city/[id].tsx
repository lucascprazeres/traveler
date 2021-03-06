import { FiAlertCircle, FiCalendar, FiCamera, FiCoffee } from 'react-icons/fi'
import { Header } from '../../components/Header'
import styles from '../../styles/City.module.css'

export default function City() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.banner} />
      <main>
        <section className={styles.overview}>
          <article className={styles.description}>
            <h1>Belém</h1>

            <p>
              Certas coisas não falham na capital paraense. Fazem parte da rotina o calor sem trégua, a chuva ao fim da tarde, o vaivém dos barcos na Baía do Guajará, as ruas sombreadas pelas mangueiras e a beleza ...
            </p>

            <small>
              É famosa pelas suas praias, incluindo estâncias turísticas populares como a Praia dos Ingleses na extremidade norte da ilha.
            </small>
          </article>
          <article className={styles.summary}>
            <div className={styles.card}>
              <header>
                <FiCamera size={40} color="#F25D27" />
              </header>

              <footer>
                <strong>67</strong>
                <span>Pontos Turísticos</span>
              </footer>
            </div>
            <div>
              <div className={styles.card}>
                <header>
                  <FiCoffee size={40} color="#F25D27" />
                </header>

                <footer>
                  <strong>20</strong>
                  <span>Comida e bebida</span>
                </footer>
              </div>
            </div>

            <div>
              <div className={styles.card}>
                <header>
                  <FiCalendar size={40} color="#F25D27" />
                </header>

                <footer>
                  <strong>11</strong>
                  <span>Eventos organizados</span>
                </footer>
              </div>
            </div>
          </article>
        </section>

        <section className={styles.topRatings}>
          <h2>Top avaliados</h2>
          <ul>
            
          </ul>

          <article className={styles.cityHighlight}>
            <div className={styles.highlightDescription}>
              <span>
                <FiAlertCircle size={16} color="#fff"/>
                Destaque
              </span>
              <h3>Ver o Peso</h3>
              <p>Uma parte do paraíso na terra. Frequentemente com águas
                claras em tons verdes e azuis. Um dos locais mais preferidos
                por turistas e viajantes.</p>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Ver-oPeso-Belem.jpg" alt="" />
          </article>
        </section>
      </main>
    </div>
  )
}