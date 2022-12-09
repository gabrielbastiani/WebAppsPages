import { FormEvent, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../recover/Recover.module.css'
import logoLoginImg from '../../../public/LogoBuilderBlack.png'
import { toast } from 'react-toastify'
import Router from 'next/router'
import { useRouter } from '../../../node_modules/next/router'
import { apiPostagens } from '../../services/apiPostagens';
import { Button } from '../../components/Button'


export default function Recover() {

   const router = useRouter()

   const [newPassword, setNewPassword] = useState('')
   const [password, setPassword] = useState('');


   async function handleRecovery(event: FormEvent) {
      event.preventDefault();

      try {

         if (newPassword != password) {

            toast.error('Senhas diferentes')

            return;
        }

         const recovery_id = router.query.recovery_id

         await apiPostagens.put(`/recoverPassword?recovery_id=${recovery_id}`, { password })

         toast.success('Senha atualizada com sucesso.')

         Router.push('/recoverSuccess')

      } catch (err) {
         console.log(err);
         toast.error('Erro ao atualizar a sua senha')
      }

   }


   return (
      <>
         <Head>
            <title>Recuperar minha senha - Builder Seu Negócio Online</title>
         </Head>
         <div className={styles.containerCenter}>
            <Image src={logoLoginImg} width={440} height={150} alt="Logo Builder Seu Negocio Online" />

            <div className={styles.login}>
               <form onSubmit={handleRecovery}>

                  <input
                     placeholder='Digite nova senha'
                     type='password'
                     value={newPassword}
                     onChange={(e) => setNewPassword(e.target.value)}
                  />

                  <input
                     placeholder='Repetir a nova senha'
                     type='password'
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />

                  <Button
                     type="submit"
                  >
                     Alterar senha
                  </Button>

               </form>

            </div>
         </div>
      </>
   )
}