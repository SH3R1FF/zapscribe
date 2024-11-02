import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import Link from "next/link";
import { BookOpenCheck, ChevronRight, LayoutPanelTop, MessagesSquare, SwatchBook } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import MobileNav from "./dashboard/_components/MobileNav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-neutral-900 h-screen ">

      {/* <Header/> */}

      <div className='px-8 max-sm:px-5 py-5 shadow-sm border-2 border-zinc-800 flex justify-between items-center bg-neutral-900'>
            <div className='flex justify-center rounded-lg'>
                <Link href="/" className='flex gap-2 items-center p-2'>
                    <Image src={'/logo.svg'} alt='logo' width={32} height={32}/>
                    <span className='font-extrabold text-2xl text-white '>ZAPSCRIBE</span>
                </Link>   
            </div>
        
            <div className='flex gap-2 items-center'>
                <h2 className='bg-orange-200 p-2 rounded-full text-xs text-neutral-900 font-semibold  px-2 max-sm:hidden'>
                    Join Membership at just for $9.99 ✨
                </h2>
                <SignedIn>
                    <UserButton 
                    // afterSignOutUrl="/"            
                    />
                    <MobileNav/>
                </SignedIn>
            </div>
      </div>


      <div className="p-5 relative mt-20">

                <div className="flex h-8 justify-center items-center w-full">
                  <h2 className=' bg-white/85  flex justify-center items-center gap-2 rounded-full  text-neutral-900 font-semibold px-4 py-2'> 
                    <p>
                      Latest updates on the way
                    </p>
                    <p className=" bg-zinc-400/50 py-1 px-2 rounded-full">
                      <ChevronRight className='h-4 w-4 text-gray-800 ' />  
                    </p>
                  </h2>
                </div>

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
                <Button className="w-full md:w-auto bg-orange-200 text-black rounded-full px-3 py-2 flex flex-row justify-between items-center gap-2 hover:bg-orange-300" variant={'secondary'}>
                  Go to dashboard
                  <ChevronRight className='h-4 w-4 text-gray-500 ' />  
                </Button>
              </Link>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10 pt-24">

            <div className='p-10 bg-neutral-900 flex flex-col text-white border-none border-zinc-800 gap-2 rounded-lg'>
                <div className="flex justify-center items-center bg-orange-500 rounded-xl w-fit p-2">
                  <LayoutPanelTop className=""/>
                </div>
                <div className="font-bold text-lg pt-4">
                    25+ Templates
                </div>
                <div className="text-neutral-500 font-medium">
                    Responsive, and mobile-first project on the web
                </div>

                <div className="flex items-center py-2 text-neutral-50">
                  <p className="text-orange-400">
                    Learn more
                  </p>
                   <ChevronRight className="h-4 w-4 ml-4"/>
                </div>

            </div>
            <div className='p-10 bg-neutral-900 flex flex-col text-white border-none border-zinc-800 gap-2 rounded-lg'>
                <div className="flex justify-center items-center bg-orange-500 rounded-xl w-fit p-2">
                <SwatchBook />
                </div>
                <div className="font-bold text-lg pt-4">
                    Customizable
                </div>
                <div className="text-neutral-500 font-medium">
                    Components are easily customized and extendable
                </div>

                <div className="flex items-center py-2 text-neutral-50">
                  <p className="text-orange-400">
                    Learn more
                  </p>
                   <ChevronRight className="h-4 w-4 ml-4"/>
                </div>

            </div>
            <div className='p-10 bg-neutral-900 flex flex-col text-white border-none border-zinc-800 gap-2 rounded-lg'>
                <div className="flex justify-center items-center bg-orange-500 rounded-xl w-fit p-2">
                  <BookOpenCheck />
                </div>
                <div className="font-bold text-lg pt-4">
                    Free to Use
                </div>
                <div className="text-neutral-500 font-medium">
                    Every components and plugin is well documented
                </div>

                <div className="flex items-center py-2 text-neutral-50">
                  <p className="text-orange-400">
                    Learn more
                  </p>
                   <ChevronRight className="h-4 w-4 ml-4"/>
                </div>

            </div>
            <div className='p-10 bg-neutral-900 flex flex-col text-white border-none border-zinc-800 gap-2 rounded-lg'>
                <div className="flex justify-center items-center bg-orange-500 rounded-xl w-fit p-2">
                  <MessagesSquare />  
                </div>
                <div className="font-bold text-lg pt-4">
                    24/7 Support
                </div>
                <div className="text-neutral-500 font-medium">
                    Contact us 24 hours a day, 7 days a week
                </div>

                <div className="flex items-center py-2 text-neutral-50">
                  <p className="text-orange-400">
                    Learn more
                  </p>
                   <ChevronRight className="h-4 w-4 ml-4"/>
                </div>

            </div>
            
          </div>

        </div>

        <Footer/>
    </div>
  );
}
