import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Footer from "@/components/Footer/page";
export default function HomePage(){

    return (
   
    <>
    <div className="min-h-screen bg-gray-900">
      <header className="flex items-center justify-between px-4 py-3 text-white ">
        <Link className="flex items-center gap-2" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">News App</span>
        </Link>
  
        <Button className="px-6 py-4 text-sm font-medium rounded-md bg-blue-600" >
        <Link  href="/auth/login">
             Login
              </Link>
        </Button>
      </header>
      <main>
        <section className=" text-white py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                alt="News Article"
                className="rounded-xl"
                height="310"
                
                src={`https://cdn.dribbble.com/users/4042800/screenshots/18000250/media/9c17efbcd4d3fcef0e12db6e0f1aefd0.jpg`} 
                style={{
                  aspectRatio: "550/310",
                  objectFit: "cover",
                }}
                width="580"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block bg-gray-800 px-3 py-1 text-sm rounded-md">Breaking News</div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                Groundbreaking Discovery in Quantum Physics
              </h1>
              <p className="text-gray-400 md:text-xl">
                Scientists have made a major breakthrough in understanding the fundamental nature of the universe. This
                discovery could lead to revolutionary new technologies.
              </p>
              <Link className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400" href="/auth/login">
                Read More
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-gray-800 text-white py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <img
                alt="News Article"
                className="rounded-xl"
                height="310"
                src="https://cdn.dribbble.com/userupload/5511849/file/original-471fe6384b838e10b3f4135f32ac9dab.png?resize=1024x768"
                style={{
                  aspectRatio: "550/310",
                  objectFit: "cover",
                }}
                width="550"
              />
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <div className="inline-block bg-gray-700 px-3 py-1 text-sm rounded-md">Technology</div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">The Future of Artificial Intelligence</h2>
              <p className="text-gray-400 md:text-xl">
                Experts discuss the potential impact of AI on various industries and how it will shape the world of
                tomorrow.
              </p>
        
            </div>
          </div>
        </section>
        <section className="bg-gray-900 text-white py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                alt="News Article"
                className="rounded-xl"
                height="310"
                src="https://cdn.dribbble.com/users/2655691/screenshots/19296660/media/0378de6f4952e96fe7d25b7a35588526.png?resize=1000x750&vertical=center"
                style={{
                  aspectRatio: "550/310",
                  objectFit: "cover",
                }}
                width="550"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block bg-gray-800 px-3 py-1 text-sm rounded-md">Environment</div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">The Fight Against Climate Change</h2>
              <p className="text-gray-400 md:text-xl">
                Governments and organizations around the world are taking action to address the pressing issue of
                climate change.
              </p>
        
            </div>
          </div>
        </section>
        <section className="bg-gray-800 text-white py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                alt="News Article"
                className="rounded-xl"
                height="310"
                src="https://cdn.dribbble.com/users/10554864/screenshots/19345182/media/b42d0550be186169f9dca2ad7eaea7bd.jpg?resize=1000x750&vertical=center"
                style={{
                  aspectRatio: "550/310",
                  objectFit: "cover",
                }}
                width="550"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block bg-gray-800 px-3 py-1 text-sm rounded-md">Health</div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Advancements in Medical Research</h2>
              <p className="text-gray-400 md:text-xl">
                Discover the latest breakthroughs and innovations in the field of healthcare and medical science.
              </p>
              <Link className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400" href="#">
                Read More
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      </div>
    </>
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
  