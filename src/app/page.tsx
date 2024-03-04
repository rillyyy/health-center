'use client';
import HeaderComponent from '@/components/common/HeaderComponent';
import Link from 'next/link';
import styles from '@/styles/header.module.scss';
import { SlBookOpen, SlTag, SlCompass  } from 'react-icons/sl';

export default function Home() {
  return (
    <>
      <HeaderComponent
        rightElements={[
          <button
            key="share"
            className={styles.box}
            onClick={() => {
              alert('지도공유');
            }}
          >
            <SlCompass />
          </button>,
          <Link key="feedback" href="/feedback" className={styles.box}>
            
            <SlTag />
          </Link>,
          <Link key="about" href="/about" className={styles.box}>
            <SlBookOpen />
          </Link>,
        ]}
      />
      <main>테스트</main>
    </>
  );
}