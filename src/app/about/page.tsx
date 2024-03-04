import HeaderComponent from '@/components/common/HeaderComponent';
import React from 'react';
import styles from "@/styles/header.module.scss"
import Link from 'next/link';

const About = ():JSX.Element => {
  return (
  <>
    <HeaderComponent rightElements={[
          <Link key="feedback" href="/feedback" className={styles.box}>피드백</Link>,
          <Link key="feedback" href="/about" className={styles.box}>서비스소개</Link>,
    ]}/>
    <main>서비스 소개입니다.</main>
  </>
  );
};

export default About;