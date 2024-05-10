
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
      id: 1,
      title: "Gill, Sudharsan record highest partnership by an Indian pair in IPL history",
      description:
        "GT openers Shubman Gill and Sai Sudharsan on Friday recorded the highest partnership by an Indian pair in IPL. Gill and Sudharsan shared a 210-run partnership for the first wicket against CSK to set the record. The previous record was held by KL Rahul and Mayank Agarwal, who shared 183-run stand for PBKS against RR in 2020.",
      image:
        "https://c.ndtvimg.com/2023-04/82slflu_gt_625x300_22_April_23.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605",
      timeStamp: "10 hours ",
    },
    {
        id: 2,
        title: "Sai Sudharsan becomes fastest Indian to score 1,000 runs in IPL, breaks Sachin's record",
        description:
          "GT batter Sai Sudharsan on Friday became the fastest Indian to score 1,000 runs in IPL. The 22-year-old achieved the feat during his 103-run knock against CSK in Ahmedabad on Friday. Sudharsan took 25 innings to reach 1,000 IPL runs. The previous record was held by Sachin Tendulkar and Ruturaj Gaikwad, who took 31 innings each to reach 1,000 runs.",
        image:
          "https://im.rediff.com/cricket/2022/may/03gt-sai-sudarshan.JPG?w=670&h=900",
        timeStamp: "2 hour ",
      },
      {
        id: 3,
        title: "James Anderson to retire from Test cricket this summer: Report",
        description:
          "James Anderson is set to call time on his 22-year-long international career at the end of the 2024 summer, according to a report in The Guardian. The report stated England head coach Brendon McCullum held face-to-face discussions with the veteran seamer to inform Anderson that England were looking to the future. Neither Anderson or the ECB have commented.",
        image:
          "https://images.news18.com/ibnlive/uploads/2021/12/james-anderson-toss-ball-ap-1600-16388430334x3.jpg",
        timeStamp: "3 hour ",
      },
      {
        id: 4,
        title: "Luka Dončić's post-game interview interrupted by moaning noises",
        description:
          "Slovenian basketball player Luca Dončić's sat down for his presser after a fantastic win for the Dallas Mavericks, but little did he anticipate what would happen in the following minutes. The 25-year-old NBA superstar was answering a journalist's question in the post-game interview when he was interrupted by apparent loud moaning noises.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREkF_-AWQzsY9h-SbjBaxc6f63YlwC4N7epzaFNA46Ig&s",
        timeStamp: "5 hour ",
      },
      {
        id: 5,
        title: "Daniel Ricciardo all set to make his way to Hollywood",
        description:
          "As per reports, Formula 1 driver, Daniel Ricciardo is all set to make his way to Hollywood. Ricciardo is set to work as an executive producer on a new Hulu show, 'Downforce', which is about F1. The plot revolves around the heiress of a family-run F1 team forced to return to the business and make some tough decisions.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIMaa5FbD8u1RTIPM5NE0HtwH39DxzeXmTktvwYPGSTQ&s",
        timeStamp: "6 hour ",
      },


]






export default async function Sports() {
    
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
  