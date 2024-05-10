import Link from 'next/link';
export default function Footer(){
    return (
        <>

<footer className="bg-gray-900 text-white py-6 text-center">
        <div className=" mx-auto px-6">
          <div className=" items-center">
          <h1>See the latest news with ads free,no popups and hasle free news in your tips.</h1>
          <Link className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400" href="/auth/login">
                Check Now.
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            <p className="text-sm mb-4 ">© 2024 News Website. All rights reserved.</p>
            
          </div>
        </div>
        
      </footer>
        </>
    )
}
function ArrowRightIcon(props:any) {
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
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    )
  }
  