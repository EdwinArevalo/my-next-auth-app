import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { SignInSection } from '@/components/SignInSection';
import { redirect } from 'next/navigation';

export default async function LoginPage() {

    const session = await getServerSession(authOptions);
    console.log(session);
    if (session) 
    {
        redirect("/dashboard");
    }
  
  return (
    <div>
       <SignInSection/>
    </div>
  );
}