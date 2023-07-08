import React from 'react'
import './HomeStyle.css'
import { Footer } from '../../components/Footer'
import NavBar from '../../components/NavBar';
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="App">
        <main>
          <section id="banner">
            <h2>Bienvenido a nuestra empresa almacenadora</h2>
            <p>Somos especialistas en el almacenamiento de productos y en la logística de distribución. Confíe en nosotros para almacenar y distribuir sus productos de manera eficiente y segura.</p>
            <img src="https://www.tecny-stand.com/wp-content/uploads/2021/01/MG_4635_corte.jpg" alt="Imagen de presentación de la empresa" />
          </section>

          <section id="services">
            <h2>Nuestros servicios</h2>
            <ul>
              <li>
                <h3>Almacenamiento seguro</h3>
                <p>Nuestras instalaciones de almacenamiento cuentan con la más alta seguridad para garantizar la integridad de sus productos.</p>
              </li>
              <li>
                <h3>Distribución eficiente</h3>
                <p>Contamos con un equipo de expertos en logística para que sus productos lleguen a su destino de manera eficiente y en el plazo acordado.</p>
              </li>
              <li>
                <h3>Inventario en línea</h3>
                <p>Le ofrecemos la posibilidad de acceder a su inventario en línea para que pueda conocer el estado de sus productos en todo momento.</p>
              </li>
            </ul>
          </section>

          <div className="comentarios">
            <h2>Comentarios de nuestros clientes</h2>
            <div className="comentario">
              <div className="autor">
                <img className='imga' src="https://scontent.faqb1-2.fna.fbcdn.net/v/t39.30808-6/240106446_1233739563738166_3103690008017064789_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-rqI8GrnlE4AX_u3GQQ&_nc_ht=scontent.faqb1-2.fna&oh=00_AfCU8a6xYa0NLi2PrK-YutzH1gWLrLSKL61ZpNbWjQkMxQ&oe=64549252" alt="Avatar" />
                <p>Ian Monterroso</p>
              </div>
              <p className="texto">Excelente servicio, siempre he confiado en esta empresa para el almacenamiento de mis productos. ¡Muy recomendable!</p>
            </div>
            <div className="comentario">
              <div className="autor">
                <img className='imga' src="https://scontent.faqb1-1.fna.fbcdn.net/v/t39.30808-6/242173491_1491958747844999_752665536030090750_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=12p4ia-GpBIAX8s7dGy&_nc_ht=scontent.faqb1-1.fna&oh=00_AfBNM2VF0KevUUhpq8GKeznkMDhFopUycZisdFSxHQ-v8g&oe=64540798" alt="Avatar" />
                <p>José Peralta</p>
              </div>
              <p className="texto">He utilizado los servicios de esta empresa durante varios años y siempre han sido muy confiables y eficientes. ¡Muy contento con su trabajo!</p>
            </div>
          </div>
        </main>
      </div>

      <Footer></Footer>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

      <script src="js/scripts.js"></script>

      <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>

    </>
  )
}