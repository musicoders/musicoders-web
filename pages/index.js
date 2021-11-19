import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <div className={styles.container}>
      <h1>{t('message')}</h1>
    </div>
  )
}

// Seguí la documentación de next-i18next y tenía que agregar esto para que la traducción funcionara. 
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}
