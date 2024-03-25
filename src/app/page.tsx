import { About, Footer, Navigation, Expertise } from '@/components';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center w-full h-scren'>
      <Navigation />
      <h1 className='pt-5 text-3xl'>PAGE IN PROGRESS</h1>

      <About />
      <Expertise />
      {/* Projects */}
      {/* Hobbies */}
      <Footer />
    </main>
  );
}
