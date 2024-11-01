import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-neutral-900 h-screen ">
      <Header/>
      <div className=" p-5 relative mt-20">
            <h1 className="text-[78px] md:text-[148px] md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,#f97300)] text-transparent bg-clip-text text-center">
            
              Zapscribe
            </h1>

            <p className="text-lg md:text-xl max-w-xl mx-auto text-neutral-600 mt-10 text-center ">
            {/* Generate high-quality, unique content instantly with AI—perfect for all your writing needs! */}
            Generate tailored AI-driven content effortlessly with our app. From engaging posts to detailed articles, create high-quality content in seconds!
            </p>

            <div className="flex justify-center py-10 gap-4">
              <Link href="/sign-up">
                <Button className="w-full md:w-auto bg-white/85 text-black rounded-full px-3 py-2 flex flex-row justify-between items-center gap-2" variant={'secondary'}>
                  Join Stacksage
                  <ChevronRight className='h-4 w-4 text-gray-500 ' />  
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button className="w-full md:w-auto bg-orange-200 text-black rounded-full px-3 py-2 flex flex-row justify-between items-center gap-2" variant={'secondary'}>
                  Go to dashboard
                  <ChevronRight className='h-4 w-4 text-gray-500 ' />  
                </Button>
              </Link>
            </div>


          </div>

    </div>
  );
}
