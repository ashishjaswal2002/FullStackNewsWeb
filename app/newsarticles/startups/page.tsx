

const arr: data[] = [
    {
        id: 14,
        title: "India is a sleeping giant of entrepreneurship: VC Hemant Taneja",
        description: "US VC firm General Catalyst CEO Hemant Taneja said India is \"a sleeping giant of entrepreneurship\" and it's waking up. Indian market has grown and so has the quality of entrepreneurs, he said. Stating that entrepreneurs believe the next set of great companies will get built in India, he added that his firm is excited to invest in the country.",
        image: "https://res.cloudinary.com/peloton-cycle/image/fetch/c_fill,dpr_1.0,w_1200,h_630,x_357,y_414/f_auto/q_auto/https://images.ctfassets.net/6ilvqec50fal/zffGu8GgAueFI4rh3or7g/e39cacf9973a18d04711ff2a7ecbe3dc/sleeping-in-01.jpg",
        timeStamp: "10:29 pm on Friday, 10 May, 2024"
      },
      {
        id: 15,
        title: "Venturi Partners buys stake worth $27M in K12 Techno from Navneet",
        description: "Consumer sector-focused venture capital firm Venturi Partners has acquired a 5.12% stake worth $27 million in Bengaluru-based edtech startup K12 Techno Services through a secondary share sale. The Singapore-based firm purchased the stake from Navneet Learning, a subsidiary of Navneet Education Limited. It provides full stack education-related services to over 800 private educational institutions.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD6WkmxWiy7egdp-VMT7JjYInJBPmTB8jfwespDgFTNw&s",
        timeStamp: "08:56 pm on Friday, 10 May, 2024"
      },
      {
        id: 16,
        title: "Broken TV customer built ₹36,000 crore startup after bad service",
        description: "Frustrated by bad customer support, Girish Mathrubootham discovered a Hacker News comment, sparking a startup idea. Despite a comfortable job, he took a leap of faith, quitting to pursue his vision. With determination, Freshdesk was born, offering user-friendly cloud-based customer support. Renamed Freshworks, it went public in 2021 with a $3.43 billion market cap. It has 58,000 customers today.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIX70mh7XKu0GtxtMh5pnLmATsuqPllVmLCJBqralL4g&s",
        timeStamp: "06:01 pm on Friday, 10 May, 2024"
      },
      {
        id: 17,
        title: "Freshers makeup 53% of startup jobs: Foundit Insights Tracker",
        description: "The latest Foundit Insights Tracker on hiring trends reveals that April saw a 9% increase in overall hiring activity, both month over month and year over year, suggesting a rebound in job possibilities. According to the Foundit (formerly Monster APAC & ME) tracker for April 2024, the hiring index increased from 276 in March to 300 last month.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUq9fqXmsK4xkcC0rRiq5w9yFCVtGciUOhxm5HIneleQ&s",
        timeStamp: "05:51 pm on Friday, 10 May, 2024"
      },
      {
        id: 18,
        title: "Go Digit General Insurance to open its IPO on May 15",
        description: "Go Digit General Insurance, a general insurance company backed by Prem Watsa's Fairfax Group, announced that its initial public offering (IPO) will open on Wednesday (May 15) and it will end on Friday, May 17. Its IPO price band has been fixed in the range of ₹258 to ₹272 per equity share, with a face value of ₹10.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN0dmvXoxQznVZ_HSYdWpQrlNsfjPO5ojzfBw32ksqKA&s",
        timeStamp: "05:31 pm on Friday, 10 May, 2024"
      },
      {
        id: 19,
        title: "TVS Holdings to acquire 80.74% in Home Credit India",
        description: "The Board of directors of TVS Holdings Limited have approved the acquisition of 80.74% equity stake in Home Credit India Finance Private Limited (HCIFPL) for Rs 554 crore, said a statement by the company. The remaining 19.26% equity stake will be purchased by Premji Invest and other associates.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4gzq16tj45H-fWvGgjVq4vdJZgxQnRDRonNLDWqa7Hw&s",
        timeStamp: "05:04 pm on Friday, 10 May, 2024"
      }
  
  ];


  import { Navbar } from "@/components/navbar";
  import Articlesui from "@/components/ui/ArticlesUi";
  
  
  
  interface data {
      id: number;
      title: string;
    
      description: string;
      image: string;
      timeStamp: string;
    }
    
 
  
  
  
  
  
    export default  function Startups() {
  
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