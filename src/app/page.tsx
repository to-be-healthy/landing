import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import { Typography } from '@/lib/mixin';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex min-h-screen flex-col items-center justify-between'>
        <section className='h-screen w-full bg-[#1990FF] pt-16'>
          <div className='px-[150px] py-20'>
            <h2
              className={cn(
                Typography.TITLE_1,
                'whitespace-pre-wrap text-left text-[56px] font-extrabold text-white'
              )}>{`피트니스 센터, 트레이너와\n회원을 위한 필수 앱`}</h2>
            <div className='flex gap-3'>
              <Button variant='secondary'>Google</Button>
              <Button variant='secondary'>Apple</Button>
            </div>
          </div>
          <img
            src='/images/landing-section-01.png'
            alt='section-01'
            className='absolute bottom-0 w-fit sm:right-1/2 sm:translate-x-[50%] lg:right-[10vw] lg:translate-x-0'
          />
        </section>
        <section className='h-[750px] w-full bg-[#EEF7FF]'>
          <img src='/images/landing-section-02.png' alt='section-02' />
          <span>
            <img
              src='calendar.svg'
              alt='section-01'
              className='absolute bottom-0 w-fit sm:right-1/2 sm:translate-x-[50%] lg:right-[10vw] lg:translate-x-0'
            />
          </span>
          <h2>자유롭고 간편한 스케줄 관리</h2>
          <p>
            복잡한 스케줄 관리를 자동화하여 일정 예약, 변경, 취소 등 스케줄을 쉽게
            관리해요!
          </p>
        </section>
        <section className='h-[750px] w-full bg-[#FFFAF2]'>123</section>
        <section className='h-[750px] w-full bg-[#EEF7FF]'>123</section>
        <section className='h-[750px] w-full bg-white'>123</section>
        <section className='h-[750px] w-full bg-[#EEF7FF]'>123</section>
      </main>
      <footer>footer</footer>
    </>
  );
}
