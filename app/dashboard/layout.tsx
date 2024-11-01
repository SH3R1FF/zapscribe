import SideNav from "./_components/SideNav";
import Header from "./_components/Header"
import { Toaster } from "@/components/ui/toaster";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className="bg-slate-100 h-full">
            <div className="md:w-64 hidden md:block fixed">
                <SideNav />
            </div>
            <div className="md:ml-64">
                <Header/>
                {children}
            </div>
            <Toaster />
        </div>
      
  );
}
