import { icons } from "lucide-react"
import Link from "next/link"
import {FaGithub, FaLinkedin, FaYoutube , FaTwitter} from "react-icons/fa"
const socials =[
    {icon:<FaGithub/>, path:''},
    {icon:<FaLinkedin/>, path:''},
    {icon:<FaYoutube/>, path:''},
    {icon:<FaTwitter/>, path:''},
]
const Socials = ({containerStyle, iconStyle}) => {
  return (
    <div className="containerStyle">
      {socials.map((item, index)=>{
        return (
        <Link key={index} href={item.path} className="iconStyle">{item.icon}</Link>
    );
      })}
    </div>
  )
}

export default Socials
