import { About, Footer, Navigation, Expertise } from '@/components';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center w-full h-scren'>
      <Navigation />
      <About />
      <Expertise />
      {/* Projects */}
      {/* Hobbies */}
      <Footer />
    </main>
  );
}
