import { Typography } from '@/lib/mixin';
import { cn } from '@/lib/utils';

const Header = () => {
  return (
    <header className='fixed w-full bg-[#1990FF] bg-transparent'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8'
        aria-label='Global'>
        <h1 className={cn(Typography.HEADING_1, 'text-white')}>건강해짐</h1>
      </nav>
    </header>
  );
};

export default Header;
