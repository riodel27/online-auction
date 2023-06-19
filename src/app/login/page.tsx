import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LoginForm } from './form';

export default async function LoginPage() {
  return (
    <main className='w-full p-10 md:grid  md:place-items-center'>
      <div className='md:w-6/12 lg:w-5/12'>
        <h1 className='mb-5 text-3xl font-medium'>Login</h1>
        <LoginForm />
        <div className='grid place-items-center'>
          <Button variant='link'>
            <Link href='/register'>Register</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}