"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BsArrowLeft } from "react-icons/bs";

interface NavigationProps {
  showBack?: boolean;
  title?: string;
}

export function Navigation({ showBack = true, title }: NavigationProps) {
  const pathname = usePathname();
  
  const getBreadcrumbs = () => {
    const paths = pathname.split('/').filter(Boolean);
    return paths.map((path, index) => ({
      name: path.charAt(0).toUpperCase() + path.slice(1),
      href: '/' + paths.slice(0, index + 1).join('/'),
      current: index === paths.length - 1
    }));
  };

  const breadcrumbs = getBreadcrumbs();

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
              <BsArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>
        )}
        
        {title && (
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">
            {title}
          </h1>
        )}
      </div>

      {breadcrumbs.length > 1 && (
        <nav className="hidden sm:flex items-center space-x-2 text-sm text-gray-400">
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={breadcrumb.href} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              {breadcrumb.current ? (
                <span className="text-emerald-400 font-medium">
                  {breadcrumb.name}
                </span>
              ) : (
                <Link
                  href={breadcrumb.href}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {breadcrumb.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      )}
    </div>
  );
} 