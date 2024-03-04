import HeaderComponent from '@/components/common/HeaderComponent';
import React from 'react';

const Feedback = ():JSX.Element => {
  return (

    <>
        <HeaderComponent rightElements={[
            <button key="feedback">피드백</button>,
            <button key="about">서비스 소개</button>,
        ]}/>
        <main>서비스 소개입니다.</main>
    </>
  )
};

export default Feedback;