import { signOut } from "@/auth"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Link from "next/link"

export const Navbar =  async() =>{

  return (
    <>
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6 fixed" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link className="flex items-center gap-2" href="/newsarticles">
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-bold mt-2">News App</span>
          </Link>
          <nav className="mt-6 grid gap-4">
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              href="#"
            >
             India
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              href="#"
            >
              Business
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              href="#"
            >
             Politics
            </Link>
            <Link
              className={`flex items-center gap-2 rounded-md px-3 py-2 text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 `}
              href="/newsarticles/sports"
            >
             Sports
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              href="#"
            >
           Science
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              href="#"
            >
             Startups
            </Link>
            <form action={async()=>{
    "use server"
    await signOut();

    
    }}>

            <button className="px-3 text-white py-2 text-sm font-medium border-2 w-[6rem] ml-2 bg-gray-500 rounded-sm hover:bg-gray-800" type="submit"  >
      
      Logout
   
 </button>
 </form>
          </nav>
        </SheetContent>
      </Sheet>

    </header>
    </>
  )
}

function MenuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
