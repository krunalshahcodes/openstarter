import { Button } from "@openstarter/ui";
import { LuChevronRight } from "react-icons/lu";

const Hero = () => {
  return (
    <div className="py-24 sm:py-32 lg:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Open Source Next.js 14 SaaS Starter Kit
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Never pay for Starter Kits anymore. Save time on your business with
            this scalable OpenSource and production-ready SaaS boilerplate.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button>Get started</Button>
            <Button variant="ghost">
              <span>Learn more</span>
              <LuChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
