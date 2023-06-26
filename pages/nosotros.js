import Link from 'next/link'
import Layout from "../components/layout";

export default function Nosotros() {
  return (
    <div>
        <Layout
            title='Nosotros'
            description='Sobre nosotros, tienda de musica '
        >
            <h1>INICIO</h1>
            <Link href='/'>Nosotros</Link>
        </Layout>
      
    </div>
  )
}
