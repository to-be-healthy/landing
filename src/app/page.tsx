import { Button } from '@/components/ui/button';
import { Typography } from '@/lib/mixin';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <p className={cn(Typography.HEADING_1, 'text-red-500')}>도레미파솔라시도</p>
      <Button className={cn(Typography.BODY_1)}>Button</Button>
    </main>
  );
}
