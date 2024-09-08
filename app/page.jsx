import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"
const Home = () => {
  return (
    <section className="h-full">
      <div className="contaniner mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span>Software Engineer</span>
            <h1>Hello I'm <br /><span>Ali Rashid</span></h1>
         </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  )
}

export default Home
