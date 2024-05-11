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
      title: "Kejriwal offers prayers at Delhi’s Hanuman Mandir day after getting interim bail",
      description:
        "Delhi CM and AAP chief Arvind Kejriwal offered prayers at Hanuman Mandir in Delhi's Connaught Place on Saturday, with a video of the same surfacing online. This comes a day after Kejriwal walked out of Tihar jail after he was granted interim bail in liquor policy case. Kejriwal was accompanied by his wife Sunita Kejriwal and Punjab CM Bhagwant Mann.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCscaPVo9BuB-UAoTKqaMXea-eOdyzOFTMZZMurjTgqQ&s",
      timeStamp: "3 hours ago",
    },
  
    {
        id: 2,
        title: "Kylian Mbappé announces he is leaving PSG",
        description: "French forward Kylian Mbappé announced on Saturday that he will leave PSG at the end of the season. He released a video on social media, wherein he said, 'I will not extend [my contract] and the adventure will come to an end in a few weeks.' Mbappé, who is PSG's record goalscorer, had joined the club in 2017.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwpJ1WRSvdnDSRh65M0tcvX3CYSnBWn1w4m_CPFDH0g&s",
        timeStamp: "3 hours",
      }
      ,
    {
      id: 3,
      title:
        "Neeraj Chopra finishes 2nd in Doha Diamond League, misses top spot by 0.02 metres",
      description:
        "India's Olympic gold medal-winning javelin thrower Neeraj Chopra finished second in Doha Diamond League on Friday. The 26-year-old world champion recorded a best throw of 88.36 metres to take the second position, 0.02 metres behind Czech Republic's Jakub Vadlejch (88.38 metres). Indian javelin thrower Kishore Jena finished ninth with a best throw of 76.31 metres.",
  
      image:
        "https://sc0.blr1.cdn.digitaloceanspaces.com/article/194732-pbekehbilq-1696510051.jpg",
      timeStamp: "4 hours",
    },
    {
      id: 4,
      title:
        " Padma Shri awardee and Punjabi poet Dr Surjit Patar dies aged 79",
      description:
        "Renowned Punjabi poet and Padma Shri awardee Dr Surjit Patar passed away aged 79 at his residence in Ludhiana. Patar's family said he passed away in his sleep. The late poet's works include 'Hawa Vich Likhe Harf', 'Hanere Vich Sulagdi Varanmala' and 'Patjhar Di Pazeb'. He had earlier served as the President of Punjab Arts Council and Punjabi Sahit Akademi.",
  
      image:
        "https://staticimg.amarujala.com/assets/images/2023/12/03/da-sarajata-patara_1701542400.jpeg?w=414",
      timeStamp: "10 hours",
    },
    {
      id: 5,
      title:
        " Billionaire mathematician and investor Jim Simons passes away at 86",
      description:
        "Billionaire mathematician and investor Jim Simons, who founded Renaissance Technologies hedge fund has passed away aged 86 on Friday in New York City. The cause of his death has not been disclosed. He had a net worth of over $31 billion at the time of his death. During the Vietnam War, he had worked as a codebreaker for US intelligence.",
  
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZTq_8V1yWPJ9Zr0L6XNqrDPSyr7b5Xlw7JDwHxpkecQ&s",
      timeStamp: "12 hours",
    },
    {
      id: 6,
      title:
        "Delhi traffic alert: Uprooted tree on Anuj Nayyar Marg",
      description:
        "An uprooted tree on Captain Anuj Nayyar Marg in Janak Puri disrupted traffic flow in Delhi. Commuters are urged to avoid the area as authorities work to clear the obstruction. Traffic police were deployed to manage congestion. Patience and caution is advised for safer travel during the disruption.",
  
      image:
"https://media.geeksforgeeks.org/wp-content/uploads/20230619180656/Traffic-Signal-Lights.webp",
      timeStamp: "10 hours",
    }
  
  ];





  export default  function Business() {

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