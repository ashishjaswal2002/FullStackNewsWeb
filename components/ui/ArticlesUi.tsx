import React from "react";
import Image from "next/image";



interface data {
  id: number;
  title: string;
  timeSt: string;
  src: string;
  desc: string;
  cat: string;
}

export default function Articlesui({
  src,
  desc,
  timeSt,
  title,
  cat,
  id,
}: data) {
  return (

    <div className="flex flex-col space-y-2 md:space-y-3">
      <h1 className="text-2xl font-bold leading-tighter">{title}</h1>
      <p className="text-gray-500 dark:text-gray-400">{timeSt}</p>
      <div className="">


        <Image src={src} alt={cat} layout="responsive" height="0" width="0" className="w-full h-full top-0 left-0 object-cover rounded-2xl" />

      </div>
      <p className="text-gray-500 dark:text-gray-400">{desc}</p>
    </div>

  );
}
