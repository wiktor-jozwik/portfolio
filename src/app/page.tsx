import {
  About,
  Footer,
  Navigation,
  Expertise,
  Projects,
  Hobbies,
} from '@/components';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center w-full h-scren'>
      <Navigation />
      <About />
      <Expertise />
      <Projects />
      <Hobbies />
      <Footer />
    </main>
  );
}
