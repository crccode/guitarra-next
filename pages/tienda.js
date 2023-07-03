
import Guitarra from "../components/guitarra";
import Layout from "../components/layout";

import styles from '../styles/grid.module.css'
export default function Tienda( {guitarras} ) {
  
  return (
    <div>
        <Layout
            title= {'Tienda virtual'}
            description='Tienda virtual, venta de guitarras, instrumento, GuitarraLA '
        >
            <main className="contenedor">
              <h2 className="header">Nuestra Coleccion</h2>
              
              <div className={styles.grid}>
                {guitarras?.map(guitarra => (
                    <Guitarra
                        key={guitarra.id}
                        guitarra={guitarra.attributes}
                    />
                ))}
              </div>
            </main>
        </Layout>
      
    </div>
  )
}
// NO SE REGENERA CON CADA VISITA DEL USUARIO
// EL VIEW QUE SE GENERA ESTA PACKAGE.JSON
// CADA VEZ QUE REALIZES ALGUN CAMBIO DEBES REALIZAR BUILD Y LUEGO SUBIRLO AL SERVER PARA QUE SE ACTUALIZE 
// EXPORTAR YA ESTA DISPONIBLE EN ESTE MISMO COMPONENTE

// export async function getStaticProps() {
//     const respuesta = await fetch(`http://127.0.0.1:1337/api/guitarras?populate=imagen`)
//     const {data: guitarras} = await respuesta.json() 
//     console.log(guitarras)
//     return {
//       props: {
//         guitarras
//       }
//     }
// }


// 2 OPCION
export async function getServerSideProps() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const {data: guitarras} = await respuesta.json() 
    console.log(guitarras)
    return {
      props: {
        guitarras
      }
    }
}