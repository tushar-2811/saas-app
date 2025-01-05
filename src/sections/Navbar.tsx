import logoImage from '@/assets/images/logo.svg';
import Image from 'next/image';

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return <section className="py-4">
        <div className="container">
             <div className="grid grid-cols-2 border border-white/15 rounded-full p-2 items-center">
                <div>
                  <Image src={logoImage} alt='layers logo' className='h-9 w-auto ml-2' />
                </div>

                <div className='flex justify-end mr-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
               </div> 

             </div>
        </div>
    </section>
}
