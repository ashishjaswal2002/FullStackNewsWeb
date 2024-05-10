import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TypographyH2 } from "@/components/ui/TypographyH2";

import { auth, signOut } from "@/auth";
import Articlesui from "@/components/ui/ArticlesUi";
import { Navbar } from "@/components/navbar";


interface data {
  id: number;
  title: string;

  description: string;
  image: string;
  timeStamp: string;
}

const arr: data[] = [
  {
    id: 1,
    title: "Massive Dust Storm Hits Delhi-NCR",
    description:
      "A massive dust storm hit Delhi-NCR on Friday, leading to complete power shutdown in some areas. Social media users shared videos and expressed concern about the severe weather and its impact on air quality.",
    image:
      "https://media.gettyimages.com/id/1233782540/photo/new-delhi-india-workers-during-a-dust-storm-near-india-gate-on-july-2-2021-in-new-delhi-india.jpg?s=612x612&w=gi&k=20&c=lCthLNWczF6QBIP3kptbGqelqQDedxRQ1NfpXN61YNQ=",
    timeStamp: "2 hours ago",
  },

  {
    id: 2,
    title: "Go Digit General Insurance to open its IPO on May 15",
    description:
      "Go Digit General Insurance, a general insurance company backed by Prem Watsa's Fairfax Group, announced that its initial public offering (IPO) will open on Wednesday (May 15) and it will end on Friday, May 17. Its IPO price band has been fixed in the range of ₹258 to ₹272 per equity share, with a face value of ₹10.",
    image:
      "https://assets.entrepreneur.com/content/3x2/2000/1715341795-Untitleddesign2.png?format=pjeg&auto=webp&crop=16:9&width=400&height=225",
    timeStamp: "3 hours",
  },
  {
    id: 3,
    title:
      "How can the first severe geomagnetic storm in 20 years affect Earth",
    description:
      "A severe geomagnetic storm warning has been issued for Friday evening for the first time in 20 years. Geomagnetic storms, caused by coronal mass ejections directed towards Earth, pose significant risks to infrastructure in near-Earth orbit and the surface. The storm is a potential risk to power grids, communication networks and satellite and low-frequency radio navigation systems, including GPS.",

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMAIGfxokLAA1GBsgoHhUuZGGJoPxmtcuCkXB7otqaJg&s",
    timeStamp: "10 hours",
  },
  {
    id: 4,
    title:
      "UK exits recession",
    description:
      "The United Kingdom exited recession with stronger-than-expected growth in first quarter of 2024, official data showed on Friday. The Office for National Statistics said GDP expanded by 0.6% in the three months to March, the strongest expansion since the fourth quarter of 2021 when it grew by 1.5%. This development gives a boost to PM Rishi Sunak before the elections.",

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUvWBz-DQmeFHdrB9EtaAFM123kR6FqpR-lWE8MB3zKw&s",
    timeStamp: "10 hours",
  },
  {
    id: 5,
    title:
      "Video of LSG owner Sanjiv Goenka confronting head coach Justin Langer goes viral",
    description:
      "A video of LSG owner Sanjiv Goenka confronting head coach Justin Langer has gone viral. In the video, KL Rahul can be seen moving away from Langer and Goenka. A video of Goenka publicly scolding Rahul had also gone viral. Goenka confronted Rahul and Langer after SRH chased down 166-run target in 58 deliveries against LSG.",

    image:
      "https://images.indianexpress.com/2024/05/SANJIV-GOENKA-KL-RAHUL-CROP.jpg?w=414",
    timeStamp: "10 hours",
  },
  {
    id: 6,
    title:
      "Colin Munro announces his retirement from international cricket",
    description:
      "Colin Munro has made the immediate decision to retire from international cricket. He has accumulated over 3000 runs in international matches and has been absent from the national team for the past four years. Despite his achievements, Munro has been focusing on franchise cricket and cited his absence from the 2024 T20 WC squad as the reason for his retirement.",

    image:
      "https://www.crictracker.com/_next/image/?url=https%3A%2F%2Fmedia.crictracker.com%2Fmedia%2Ffeatureimage%2FColin-Munro-3.jpg&w=1200&q=75",
    timeStamp: "10 hours",
  },

];
export default async function NewsArticles() {
  const session = await auth();
  return (
    <>
      <main className=" ">
        <Navbar />

        <CardHeader>
          <TypographyH2 />
        </CardHeader>

        <ul className="flex flex-col gap-8 mb-10">
          {arr &&
            arr.map(
              (result: {
                id: number;
                title: string;
                description: string;

                image: string;
                timeStamp: string;
              }) => (
                <li key={result.id} className="list-none  ">
                  <Articlesui
                    src={result.image}
                    desc={result.description}
                    timeSt={result.timeStamp}
                    title={result.title}
                    id={result.id}
                  />
                </li>
              )
            )}
        </ul>
      </main>
    </>
  );
}
