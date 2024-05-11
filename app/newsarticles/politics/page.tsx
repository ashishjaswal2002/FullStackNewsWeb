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
        id: 8,
        title: "Rahul Gandhi travels in Hyderabad bus, interacts with passengers",
        description: "Congress leader Rahul Gandhi and Telangana chief minister Revanth Reddy recently took a ride on a state-owned Road Transport Corporation (RTC) bus in Hyderabad. During the journey, Rahul inquired about the free bus travel facility for women on the RTC buses. He also distributed 'Panch Nyay' brochures among passengers.",
        timeStamp: "11:39 am on Saturday, 11 May, 2024",
        image: "https://www.financialexpress.com/wp-content/uploads/2024/04/Rahul-gandhi-file.jpg"
      },
      {
        id: 9,
        title: "77% in Singapore want death penalty for drug trafficking: Minister",
        description: "K Shanmugam, Minister for Home Affairs and Minister for Law in Singapore, said on Wednesday that 77 percent people agree or strongly agree to death penalty as a form of punishment for drug traffickers. The minister made the statement on Wednesday at the national Parliament while talking about the Singaporean approach to deal with the crime.",
        timeStamp: "11:36 am on Saturday, 11 May, 2024",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEfdmRdgn1yS0ZAerQMG_20QEIn5744jvtRnNyy73Q_w&s"
      },
      {
        id: 10,
        title: "'Join us,' PM Modi tells Sharad Pawar; latter says 'No'",
        description: "Without naming NCP (SP) chief Sharad Pawar, PM Narendra Modi asked him to join hands with Ajit Pawar. He said, 'A big leader...says...after June 4, smaller parties will merge with Congress...But instead of dying by merging with the Congress, come to Ajit Pawar and Eknath Shinde.' Pawar replied he can't ally with a 'party that doesn't believe in parliamentary democracy'.",
        timeStamp: "10:51 am on Saturday, 11 May, 2024",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavyK2h_l-VZ8rRX9MpOn4sD_AJIx2cEtwBchossOpeg&s"
      },
      {
        id: 11,
        title: "Delhi court orders framing of charges against Brij Bhushan Singh",
        description: "A Delhi court on Friday, 10 May, ordered the framing of charges against former Wrestling Federation of India chief and BJP MP Brij Bhushan Sharan Singh in a sexual harassment case lodged by six female wrestlers. It also ordered the framing of charges against co-accused and former WFI assistant secretary Vinod Tomar. It will formally frame charges on 21 May.",
        timeStamp: "10:31 am on Saturday, 11 May, 2024",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuC4KCna-UMZSAKamvj5F3fHj4GdSBWYIe3XkwmRmj2A&s"
      },
      {
        id: 12,
        title: "Naidu tears copies of passbook, land title act",
        description: "Telugu Desam chief Nara Chandrababu Naidu, in a dramatic move, tore photocopies of a Pattadar Passbook and the AP Land Title Act at a public event. Naidu expressed concern over the display of photo of Chief Minister YS Jagan Mohan Reddy on the passbook and vowed to scrap the act once he is elected to power.",
        timeStamp: "09:01 am on Saturday, 11 May, 2024",
        image: "https://bsmedia.business-standard.com/_media/bs/img/article/2019-11/21/full/1574274944-2539.jpg?im=FeatureCrop,size=(826,465)"
      },
      {
        id: 13,
        title: "Delhi Court charges Brij Bhushan Singh in sexual harassment case",
        description: "The Rouse Avenue court in Delhi has issued orders for the framing of charges against former Wrestling Federation of India (WFI) chief and BJP Member of Parliament, Brij Bhushan Sharan Singh. The decision comes in the wake of a prolonged legal battle stemming from allegations levied by six female wrestlers against Bhushan.",
        timeStamp: "08:44 am on Saturday, 11 May, 2024",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLk8jBiHuYbN82tKoWTuIrQSCrrVFP9Tzb1gwEJyOFA&s"
      }
      
   
  
  ];





  export default  function Politics() {

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