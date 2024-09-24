'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icon';
import { appConfig } from '@/config';

const PlayStoreButton = () => {
  return (
    <Button variant='secondary' asChild>
      <Link
        href={appConfig.playStoreLink}
        passHref={true}
        target='_blank'
        className='flex h-[52px] w-[152px] gap-2 rounded-xl lg:h-[80px] lg:w-[220px]'>
        <Icons.googlePlayLogo className='h-[22px] w-[22px] lg:h-9 lg:w-9' />
        <div className='flex flex-col items-start gap-1'>
          <p
            className='text-[7.867px] lg:text-[12.857px]'
            style={{
              color: '#666',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              letterSpacing: '-0.386px',
              textTransform: 'uppercase',
            }}>
            GET IT ON
          </p>
          <Icons.googlePlayText className='h-[14px] w-auto lg:h-6' />
        </div>
      </Link>
    </Button>
  );
};

const AppStoreButton = () => {
  return (
    <Button variant='secondary' asChild>
      <Link
        href={appConfig.appStoreLink}
        passHref={true}
        target='_blank'
        className='flex h-[52px] w-[152px] gap-2 rounded-xl lg:h-[80px] lg:w-[220px]'>
        <Icons.appstoreLogo className='h-9 w-9' />
        <div className='flex flex-col items-start gap-1'>
          <p
            className='text-[7.867px] lg:text-[12.857px]'
            style={{
              color: '#666',
              fontFamily: 'Helvetica Neue',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              letterSpacing: '0.257px',
            }}>
            Download on the
          </p>
          <Icons.appstoreText className='h-[14px] w-auto lg:h-6' />
        </div>
      </Link>
    </Button>
  );
};

export { AppStoreButton, PlayStoreButton };
