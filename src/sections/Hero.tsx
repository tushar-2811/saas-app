import Button from "@/components/Button";
import designExample1 from "@/assets/images/design-example-1.png";
import designExample2 from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
    return <section className="py-24 overflow-x-clip">
          <div className="container relative">

            {/* adding images at absolute position */}
            <div className="absolute -left-32 top-16 hidden lg:block">        
                <Image 
                    src={designExample1} 
                    alt="design example one"/>
            </div>

            <div className="absolute -right-64 -top-16 hidden lg:block">        
                <Image 
                    src={designExample2} 
                    alt="design example one"/>
            </div>

            <div className="absolute left-56 top-96 hidden lg:block">
              <Pointer fullName="Tushar"/>
            </div>

            <div className="absolute right-80 -top-4 hidden lg:block">
              <Pointer fullName="Bryan" color="red"/>
            </div>

            <div className="flex justify-center"> 
                {/* to center this div */}
              <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                ✨ $2.5M seed round raised
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                Impactful design, created effortlessly
            </h1>
            <p className="text-xl text-white/50 text-center mt-8 max-w-2xl mx-auto">
                Design tools shouldn't slow you down. Layers combines powerful features with an intutive
                interface that keeps you in your creative flow.
            </p>

            <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                <input type="email" 
                       placeholder="enter your email" 
                       className="bg-transparent px-4 md:flex-1 "/>
                <Button variant="secondary" size="sm" >Sign Up</Button>
            </form>
          </div>
    </section>;
}
