import Button from "@/components/Button";

export default function Hero() {
    return <section className="py-24">
          <div className="container">

            <div className="flex justify-center"> 
                {/* to center this div */}
              <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                ✨ $2.5M seed round raised
              </div>
            </div>

            <h1 className="text-6xl font-medium text-center mt-6">
                Impactful design, created effortlessly
            </h1>
            <p className="text-xl text-white/50 text-center mt-8">
                Design tools shouldn't slow you down. Layers combines powerful features with an intutive
                interface that keeps you in your creative flow.
            </p>

            <form className="flex border border-white/15 rounded-full p-2">
                <input type="email" placeholder="enter your email" />
                <button >Sign Up</button>
            </form>
          </div>
    </section>;
}
