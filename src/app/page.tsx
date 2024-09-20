/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

import { AppStoreButton, PlayStoreButton } from '@/components/app-download-button';
import Header from '@/components/header';
import { Icons } from '@/components/ui/icon';
import { appConfig } from '@/config';
import { Typography } from '@/lib/mixin';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex min-h-screen flex-col items-center justify-between'>
        <section className='flex h-screen w-full items-center justify-center bg-[#1990FF] pt-16'>
          <div className='relative m-auto h-full w-full max-w-[1140px]'>
            <div className='flex flex-col gap-14 py-20'>
              <h2
                className={cn(
                  Typography.TITLE_1,
                  'whitespace-pre-wrap text-left text-[56px] font-extrabold text-white'
                )}>{`피트니스 센터, 트레이너와\n회원을 위한 필수 앱`}</h2>
              <div className='flex gap-3'>
                <PlayStoreButton />
                <AppStoreButton />
              </div>
            </div>
            <img
              src='/images/landing-section-01.png'
              alt='section-01'
              className='absolute bottom-0 right-0 w-fit'
            />
          </div>
        </section>
        <section className='h-[750px] w-full bg-[#EEF7FF]'>
          <div className='m-auto flex h-full max-w-[1140px] items-end justify-between'>
            <img src='/images/landing-section-02.png' alt='section-02' />
            <div className='mb-[200px]'>
              <span className='mb-[30px] block'>
                <Icons.calendar />
              </span>
              <h2 className='mb-[20px] text-[48px] font-bold text-black'>
                자유롭고 간편한
                <br /> 스케줄 관리
              </h2>
              <p className='text-[24px] font-medium text-[#4C4E52]'>
                복잡한 스케줄 관리를 자동화하여 일정 예약,
                <br /> 변경, 취소 등 스케줄을 쉽게 관리해요!
              </p>
            </div>
          </div>
        </section>
        <section className='h-[750px] w-full bg-[#FFFAF2]'>
          <div className='m-auto flex h-full max-w-[1140px] items-center justify-between'>
            <div className='mt-[-80px]'>
              <span className='mb-[30px] block'>
                <Icons.xCircle />
              </span>
              <h2 className='mb-[20px] text-[48px] font-bold text-black'>
                당일 일정 변경, <br />
                노쇼 방지
              </h2>
              <p className='text-[24px] font-medium text-[#4C4E52]'>
                예약 정책에 따른 사전 취소 없이 결석할 경우, <br />
                시스템을 통해 횟수가 자동으로 차감돼요.
              </p>
            </div>
            <img src='/images/landing-section-03.png' alt='section-03' />
          </div>
        </section>
        <section className='h-[750px] w-full bg-[#EEF7FF]'>
          <div className='m-auto flex h-full max-w-[1140px] items-center justify-between'>
            <img src='/images/landing-section-04.png' alt='section-04' />
            <div className='mt-[-10px]'>
              <span className='mb-[30px] block'>
                <Icons.documentPerson />
              </span>
              <h2 className='mb-[20px] text-[48px] font-bold text-black'>
                체계적인 회원 관리
              </h2>
              <p className='text-[24px] font-medium text-[#4C4E52]'>
                회원별 진행 상황을 한눈에 파악하고,
                <br />
                수강권 이용 내역까지 간편하게 관리해요.
              </p>
            </div>
          </div>
        </section>
        <section className='h-[750px] w-full bg-white'>
          <div className='m-auto flex h-full max-w-[1140px] items-center justify-between'>
            <div className='mt-[-20px]'>
              <span className='mb-[30px] block'>
                <Icons.documentPencil />
              </span>
              <h2 className='mb-[20px] text-[48px] font-bold text-black'>
                회원별 피드백
              </h2>
              <p className='text-[24px] font-medium text-[#4C4E52]'>
                건강해짐 하나로 수업일지, 식단, <br />
                운동기록까지! 체계적으로 관리해요.
              </p>
            </div>
            <img src='/images/landing-section-05.png' alt='section-05' />
          </div>
        </section>
        <section className='h-[750px] w-full bg-[#EEF7FF]'>
          <div className='m-auto flex h-full max-w-[1140px] items-center justify-between'>
            <img src='/images/landing-section-06.png' alt='section-06' />
            <div className='mt-[10px]'>
              <span className='mb-[30px] block'>
                <Icons.coinPoint />
              </span>
              <h2 className='mb-[20px] text-[48px] font-bold text-black'>
                리워드 시스템과
                <br />
                회원 간 연결
              </h2>
              <p className='text-[24px] font-medium text-[#4C4E52]'>
                포인트 리워드 제도와 우리 헬스장만의 <br />
                커뮤니티로 회원 간 유대감과 장기적인 <br />
                고객 충성도를 높여요.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className='h-[500px] w-full bg-white pb-[100px] pt-[100px]'>
        <div className='m-auto mt-[30px] w-[1140px]'>
          <Icons.logo className='mb-4 h-[60px] w-[60px]' />
          <p className='mb-[36px] text-[20px] font-bold text-black'>건강해짐</p>
          <dl className='mb-[36px]'>
            <dt className='mb-[6px] text-[15px] font-medium text-[#4C4E52]'>고객센터</dt>
            <dd className='text-[16px] font-medium text-black'>{appConfig.csEmail}</dd>
          </dl>
          <div>
            <Link
              href={appConfig.termsLink}
              passHref={true}
              target='_blank'
              className='text-[15px] font-medium text-[#86888D] underline'>
              서비스 이용약관
            </Link>
            <Link
              href={appConfig.privacyLink}
              passHref={true}
              target='_blank'
              className='ml-[12px] text-[15px] font-medium text-[#86888D] underline'>
              개인정보 처리방침
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
