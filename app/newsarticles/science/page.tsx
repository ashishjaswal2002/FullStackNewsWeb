
import { Navbar } from "@/components/navbar";
import Articlesui from "@/components/ui/ArticlesUi";





interface data {
    id: number;
    title: string;
  
    description: string;
    image: string;
    timeStamp: string;
  }
  
  const arr: data[] = [

    {
        id: 20,
        title: "Northern lights seen across Europe after geomagnetic storm hits Earth, pics surface",
        description: "The Northern Lights, also known as the Aurora Borealis, made a rare appearance in parts of Europe after one of the strongest geomagnetic storms in 20 years hit Earth. Pictures of the phenomenon seen in UK, Netherlands, Poland, Romania, Germany and Northern Ireland surfaced online. The Northern Lights appear as bright, swirling curtains of lights in the night sky.",
       image:"https://cdn.mos.cms.futurecdn.net/k6okX2VVUg4qWoyxuNLsf7-1200-80.jpg",
        timeStamp: "09:59 am on Saturday, 11 May, 2024"
      },
      {
        id: 21,
        title: "US firm warns NASA against Boeing craft launch over risk of disaster",
        description: "US firm ValveTech warned NASA against second launch attempt of Boeing Starliner, which will fly Indian-origin astronaut Sunita Williams to space. \"A buzzing sound [from Starliner]...was [reportedly] noticed...minutes before launch. This...could indicate that [a] valve has passed its lifecycle,\" ValveTech said. \"NASA [must ensure] Starliner is safe before something catastrophic happens,\" it added.",
        image:"https://i.insider.com/5ce41206f2f4790e13533fd1?width=700", timeStamp: "08:53 am on Saturday, 11 May, 2024"
      },
      {
        id: 22,
        title: "Earth faces solar storm; Communication, power grids at risk",
        description: "The most powerful solar storm in two decades hit Earth, sparking stunning auroras from Tasmania to Britain. NOAA upgraded it to an \"extreme\" geomagnetic storm, the first since 2003. Social media flooded with aurora images. Precautions urged for satellites and power systems. Astronauts on the ISS may take shelter. Prepare for possible power outages.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGVoTO9LVOYDdIjhreaZrtRHDu7rJTUCZKyb6I3bHFbg&s",
        timeStamp: "07:55 am on Saturday, 11 May, 2024"
      },
      {
        id: 23,
        title: "How can the first 'severe geomagnetic storm' in 20 years affect Earth?",
        description: "A severe geomagnetic storm warning has been issued for Friday evening for the first time in 20 years. Geomagnetic storms, caused by coronal mass ejections directed towards Earth, pose significant risks to infrastructure in near-Earth orbit and the surface. The storm is a potential risk to power grids, communication networks and satellite and low-frequency radio navigation systems, including GPS.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzXcFkQUB0Yj7invbZHOG5GU_LAxk1WqmgNHfOQOgDVw&s",
        timeStamp: "05:30 pm on Friday, 10 May, 2024"
      },
      {
        id: 24,
        title: "What is lupus and what are its symptoms?",
        description: "Lupus is a disease that occurs when the body's immune system attacks tissues and organs (autoimmune disease). Inflammation caused by lupus can affect many different body systems, including joints, skin, kidneys, blood cells, brain, heart and lungs. The main symptoms include joint and muscle pain, extreme tiredness, butterfly-shaped rash on face, skin lesions, chest pain and dry eyes, among others.",
        image:"https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_135_16552696888293429.jpg",
        timeStamp: "04:54 pm on Friday, 10 May, 2024"
      },
      {
        id: 25,
        title: "First 'severe geomagnetic storm' in nearly 20 years hits Earth",
        description: "The US National Oceanic and Atmospheric Administration (NOAA) issued a severe geomagnetic storm warning for Friday evening, marking the first such alert in nearly two decades. \"We're monitoring the Sun following a series of solar flares and coronal mass ejections that began on May 8,\" NOAA said. \"Additional solar eruptions could cause geomagnetic storm...to persist through the weekend,\" it added.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJtFjgjpC3w7r4MWPu9dtt-78CHZ9lveRh2MH6wmuIPw&s",
        timeStamp: "04:23 pm on Friday, 10 May, 2024"
      }
]






export default async function Science() {
    
    return (
      <>
        <main className=" ">
          <Navbar />
  
         
  
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
  