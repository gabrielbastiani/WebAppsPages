import Head from 'next/head'
import Image from 'next/image'
import styles from './Whait.module.css'
import logoLoginImg from '../../../public/LogoBuilderBlack.png'


export default function WhaitAuthenticated(){

   return(
      <>
      <Head>
         <title>Builder Seu Negócio Online</title>
      </Head>
      <div className={styles.containerCenter}>
         <Image src={logoLoginImg} width={440} height={150} alt="Logo Builder Seu Negocio Online" />

         <div className={styles.login}>
            <h1>ACESEE SUA CAIXA DE E-MAIL</h1>
            <p>Lá você vai encontrar um email onde terá que autenticar seu cadastro.</p>
         </div>

      </div>
      </>
   )
}