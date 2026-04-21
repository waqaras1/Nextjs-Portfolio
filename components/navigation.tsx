"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BiHome } from "react-icons/bi";

interface NavigationProps {
  showBack?: boolean;
  title?: string;
}

export function Navigation({ showBack = false, title }: NavigationProps) {
  const pathname = usePathname();
  
  // For one-page portfolio, we don't need breadcrumbs
  if (pathname === '/') {
    return null;
  }

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        {showBack && pathname !== '/' && (
          <Link href="/">
            <Button 
              variant="ghost" 
              className="hover:bg-black/50 hover:text-white rounded-full duration-300 transition-all"
              aria-label="Go back to home"
            >
              <BiHome className="mr-2 h-4 w-4" />
              Back to Menu
            </Button>
          </Link>
        )}
        
        {title && (
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">
            {title}
          </h1>
        )}
      </div>
    </div>
  );
} 