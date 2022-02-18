// import Image from "next/image"
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline"
import HeaderItems from "./HeaderItems"

function Header() {
  return (
    <header className=" flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItems title="HOME" Icon={HomeIcon}/>
        <HeaderItems title="TRENDING" Icon={LightningBoltIcon}/>
        <HeaderItems title="VERIFIED" Icon={BadgeCheckIcon}/>
        <HeaderItems title="COLLECTIONS" Icon={CollectionIcon}/>
        <HeaderItems title="SEARCH" Icon={SearchIcon}/>
        <HeaderItems title="ACCOUNT" Icon={UserIcon}/>
        </div>
        <div className="">
        <h1 className="text-2xl font-bold ">Movie App</h1>
        </div>
        {/* <Image 
        className="object-contain"
        src="/poster.jpg"
        width={200}
        height={100}
        alt=""
        /> */}
    </header>
  )
}

export default Header