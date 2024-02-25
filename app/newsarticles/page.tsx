import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TypographyH2 } from "@/components/ui/TypographyH2";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import Articlesui from "@/components/ui/ArticlesUi";

interface data {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  timeStamp: string;
}

const arr: data[] = [
  {
    id: 1,
    title: "Person did this to this.",

    category: "Sports",
    description:
      "A man from india raises a $500 million startup and it rises and rises",
    image:
      "https://images.unsplash.com/photo-1601968679094-897531317de1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timeStamp: "2 hours", //some logic here
  },
  {
    id: 2,
    title: "lorem ipsum erihoi king of the internet cty",
    description:
      "Since Next.js does not have access to remote files during the build process, you'll need to provide the width, height and optional blurDataURL props manually.",
    category: "Tech",
    image:
      "https://plus.unsplash.com/premium_photo-1661724104424-8d88e7d98958?q=80&w=1195&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timeStamp: "3 hours",
  },
  {
    id: 3,
    title: "Loe kfdn askn of the king of the lore asdf",
    description:
      "The red planet has been a source of fascination for generations, but the question of whether we should attempt to make it our second home is a matter of hot debate among scientists and space enthusiasts.",
    category: "Politics",
    image:
      "https://images.unsplash.com/photo-1601968679094-897531317de1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timeStamp: "3 housr",
  },
];
export default function NewsArticles() {
  return (
    <>
      <main className="">
        <div>
          <Card>
            <CardHeader>
              <TypographyH2 />
              <h4 className="text-center scroll-m-20 text-xl font-normal tracking-tight">
                Top trending news articles
              </h4>
            </CardHeader>

            <CardContent>

              <div className="bg-gray-50 dark:bg-gray-900">
                <div className="container px-4 py-6 space-y-6 md:space-y-10">
                  <div className="grid gap-6 md:gap-8">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-4 md:gap-6">
                        {arr &&
                          arr.map(
                            (result: {
                              id: number;
                              title: string;
                              description: string;
                              category: string;
                              image: string;
                              timeStamp: string;
                            }) => (
                              <li key={result.id} className="list-none">
                                <Articlesui
                                  src={result.image}
                                  desc={result.description}
                                  timeSt={result.timeStamp}
                                  title={result.title}
                                  cat={result.category}
                                  id={result.id}
                                />
                              </li>
                            )
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
