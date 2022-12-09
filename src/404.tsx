import Image from 'next/image';
import styles from '../styles/404.module.css';
import logoLoginImg from '../../public/LogoBuilderBlack.png';
import Head from 'next/head';


export default function NotFound(){

   return(
      <>
      <Head>
         <title>404 não existe - Builder Seu Negócio Online</title>
      </Head>
      <div className={styles.containerCenter}>
         <Image src={logoLoginImg} width={440} height={150} alt="Logo Builder Seu Negocio Online" />

         <div className={styles.login}>
            <h1>DESCULPE ESSA PÁGINA NÃO EXISTE!!!</h1>
         </div>

      </div>
      </>
   )
}