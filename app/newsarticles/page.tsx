import updateTime from "@/utils/updateTime"
import { Card, CardHeader, } from "@/components/ui/card"
import { TypographyH2 } from "@/components/ui/TypographyH2"

const exactTime = updateTime()
const arr = [{
  id: 1,
  title: "Person did this to this",
  description: "A man from india raises a $500 million startup and it rises and rises",
  image: "",
  timeStamp: "2 hours",//some logic here


}]
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
          </Card>

          <p>{exactTime}</p>

        </div>
      </main>
    </>
  )
}
