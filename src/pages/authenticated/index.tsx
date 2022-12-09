import Head from 'next/head'
import Image from 'next/image'
import styles from './Authenticated.module.css'
import logoLoginImg from '../../../public/LogoBuilderBlack.png'


export default function Authenticated(){

   return(
      <>
      <Head>
         <title>Builder Seu Negócio Online</title>
      </Head>
      <div className={styles.containerCenter}>
         <Image src={logoLoginImg} width={440} height={150} alt="Logo Builder Seu Negocio Online" />

         <div className={styles.login}>
            <h1>PARABÉNS!!!</h1>
            <p>Agora acesse seu aplicativo e realize o login com os dados que cadastrou.</p>
         </div>

      </div>
      </>
   )
}