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
        className='flex h-[80px] w-[220px] gap-2 rounded-xl'>
        <Icons.googlePlayLogo className='h-9 w-9' />
        <div className='flex flex-col items-start gap-1'>
          <p
            style={{
              color: '#666',
              fontFamily: 'Roboto',
              fontSize: '12.857px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              letterSpacing: '-0.386px',
              textTransform: 'uppercase',
            }}>
            GET IT ON
          </p>
          <Icons.googlePlayText className='h-6' />
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
        className='flex h-[80px] w-[220px] gap-2 rounded-xl'>
        <Icons.appstoreLogo className='h-9 w-9' />
        <div className='flex flex-col items-start gap-1'>
          <p
            style={{
              color: '#666',
              fontFamily: 'Helvetica Neue',
              fontSize: '12.857px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              letterSpacing: '0.257px',
            }}>
            Download on the
          </p>
          <Icons.appstoreText className='h-6' />
        </div>
      </Link>
    </Button>
  );
};

export { AppStoreButton, PlayStoreButton };
