import Image from "next/image"
import Link from "next/link"
import { formatearFecha } from '../utils/helpers'
import styles from '../styles/blog.module.css'

export default function Post({post}) {
  // VERIFICAMOS SI ESTA PASANDO CORRECTAMENTE
  // console.log(post)

  const { contenido, imagen, titulo, url, publishedAt } = post

  return (
    <article>
        {/* ESTO SOLO FUNCION PARA IMAGEN SIMPLE  */}
        <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`imagen blog ${titulo}`} />

        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.resumen}>{contenido}</p>
            <Link legacyBehavior href={`/blog/${url}`}>
                <a className={styles.enlace}>
                    Leer Post
                </a>
            </Link>
        </div>
    </article>
  )
}
