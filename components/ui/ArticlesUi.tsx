
import Image from "next/image";




interface data {
  id: number;
  title: string;
  timeSt: string;
  src: string;
  desc: string;

}

export default function Articlesui({
  src,
  desc,
  timeSt,
  title,
  

}: data) {
  return (

  
<>
     
         {/* <div className="flex flex-col gap-3 items-center">
     
         <Image src={src} alt={title}     width={400} height={400}unoptimized  />

        <div className="">
          <h3 className="text-2xl font-bold mb-2">
          {title}
          </h3>
          <p className="text-sm text-gray-500 mb-4">{timeSt}</p>
          <p className="text-gray-700">
           {desc}
          </p>
          </div>
        
        </div> */}

<div className="max-w-[24rem] sm:max-w-[26rem] mx-auto flex items-center  flex-col  gap-3 ">
   <div className="bg-white rounded-lg shadow-md overflow-hidden">
     <Image
       
       className="w-full h-48 object-cover"
       
       style={{
         aspectRatio: "300/200",
         objectFit: "cover",
        }}
     
        src={src} alt={title}     width={400} height={450}unoptimized 
        />
     <div className="p-4">
       <h3 className="text-lg font-bold mb-2">
         {title}
       </h3>
       <p>Posted {timeSt} ago.</p>
       <p className="text-gray-600 ">
    {desc}
       </p>
     </div>
   </div>
   </div>


        
  
        </>

  

  );
}


