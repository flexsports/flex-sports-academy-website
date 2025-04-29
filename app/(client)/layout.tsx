import ClientHeader from '@/components/layouts/ClientHeader';
import Footer from '@/components/layouts/Footer';
import FloatingButton from '@/components/common/FloatingButton';
import MobileFloatingButton from '@/components/common/MobileFloatingButton';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClientHeader />
      <main className='pt-[95px] min-h-screen'>{children}</main>
      <div className='mt-[10vh]'>
        <Footer />
      </div>
      <div className='hidden md:block'>
        <FloatingButton />
      </div>
      <div className='block md:hidden'>
        <MobileFloatingButton />
      </div>
    </>
  );
}
