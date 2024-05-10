import Image from "next/image";


interface data {

  title: string;

  description: string;
  image: string;
  timeStamp: string;
}


export function NewsUI({title,description,image,timeStamp}:data) {
  return (


    <div className="max-w-2xl mx-auto">
      <div className="space-y-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
        <Image src={image} alt={title} layout="responsive" height="0" width="0" className="w-full h-full top-0 left-0 object-cover rounded-2xl" />
         

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">
              {title}
            </h3>
            <p className="text-sm text-gray-500 mb-4">{timeStamp}</p>
            <p className="text-gray-500 dark:text-gray-400">{description}</p>
           
          </div>
        </div>
       
      </div>
    </div>
  )
}
