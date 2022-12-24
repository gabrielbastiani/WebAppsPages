import React from 'react'
import Head from "next/head"
import styles from './Postagens.module.css';
import { useRouter } from 'next/router'
import Router from 'next/router'
import { toast } from 'react-toastify'
import { apiPostagens } from '../../services/apiClient';


export default function UserAuthenticatedPostagens() {

    const router = useRouter()

    async function handleAuthenticated() {

        try {
        
            const user_id = router.query.user_id

            await apiPostagens.put(`/authenticated?user_id=${user_id}`)

            toast.success('Seu cadastro esta ativo para acessar a rede social.')

            Router.push('/authenticated')

        } catch (err) {

            toast.error('Ops erro ao se autenticar seu cadastro!')

        }

    }


    return (
        <>

            <Head>
                <title>Autenticar - Postagens Builder Seu Negócio Online</title>
            </Head>

            <main className={styles.container}>

                <section className={styles.containerContent}>

                    <h2>Confirme aqui, seu cadastro junto a rede social Builder Seu Negócio Online para poder acessar!</h2>

                    <button
                        className={styles.buttonUpdate}
                        onClick={() => handleAuthenticated()}
                    >
                        Confirmar
                    </button>

                </section>

            </main>
        </>
    )
}