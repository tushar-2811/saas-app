import Logo from '@/assets/images/logo.svg'
import Image from 'next/image';
import Link from 'next/link';

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return( 
    <section className='py-16'>
       <div className="container">
         <div className='flex flex-col md:flex-row md:justify-between items-center gap-6'>
             <div>
                <Image src={Logo} alt='logo'/>
             </div>
             <div>
                <nav className='flex gap-6'>
                {
                    footerLinks.map(footer => (
                        <Link className='text-white/50 text-sm' href={footer.href}>
                            {footer.label}
                        </Link>
                    ))
                }
                </nav>
               
             </div>
         </div>
       </div>
    </section>
);
}
