import Image from "next/image"
import styles from '../../styles/guitarras.module.css'
import Layout from "../../components/layout"

// EL COMPONENTE GUITARRA LO LLAMA 
export default function Producto({guitarra}) {

    const { nombre, descripcion, imagen, precio } = guitarra[0].attributes

    return (
        <Layout
            title={`Guitarra ${nombre}`}
        >
            <div className={styles.guitarra}>
                <Image src={imagen.data.attributes.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />

                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>
                </div>
            </div>
        </Layout>
    )
}

// ESTA OPCION ES MEJOR POR QUE PUEDE HABER 400 RUTAS Y SOLO SE GENERA UNA SOLA VEZ Y SE LO MUESTRAR 
// NOS TRAE SOLAMENTE LAS RUTAS
export async function getStaticPaths() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const { data } = await respuesta.json()

    // SACAMOS TODAS LAS URL DEL JSON 
    const paths = data.map(guitarra => ({
        params: {
            url: guitarra.attributes.url
        }
    }))
    return {
        paths, 
        // fallback AL VISITAR UNA PAGINA QUE NO EXISTE GERERA PAGINA 404
        fallback: false
    }
}
// {params: { url }} es una propiedad podemos verlo en console.log(data)
// ES OBLIGATORIO DEFINIR getStaticPaths
export async function getStaticProps({params: { url }}) {
    // console.log(url)
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const { data: guitarra } = await respuesta.json()
    // console.log(guitarra)
    return {
        props: {
            guitarra
        }
    }
}

// export async function getServerSideProps({query: { url }}) {
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
//     const { data: guitarra } = await respuesta.json()
//     return {
//         props: {
//             guitarra
//         }
//     }
// }