import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import FloatingButton from '@/components/common/FloatingButton';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <div className='mt-[10vh]'>
        <Footer />
      </div>
      <FloatingButton />
    </>
  );
}
