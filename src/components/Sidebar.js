import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { MdPlaylistPlay } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { MdOutlineMovie } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { MdOutlineNewspaper } from "react-icons/md";
import { IoTrophyOutline } from "react-icons/io5";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { GiHanger } from "react-icons/gi";
import { MdOutlinePodcasts } from "react-icons/md";
import { IoIosTrendingUp } from "react-icons/io";
import { useSelector } from "react-redux";

const sidebarItem = [
  {
    icons: <IoMdHome size={20} />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size={20} />,
    title: "Shorts",
  },
  {
    icons: <MdOutlineSubscriptions size={20} />,
    title: "Subscription",
  },
  {
    icons: <LuHistory size={20} />,
    title: "History",
  },
  {
    icons: <MdPlaylistPlay size={20} />,
    title: "Playlists",
  },
  {
    icons: <GoVideo size={20} />,
    title: "Your videos",
  },
  {
    icons: <MdOutlineWatchLater size={20} />,
    title: "Watch later",
  },
  {
    icons: <AiOutlineLike size={20} />,
    title: "like videos",
  },
  {
    icons: <IoIosTrendingUp size={20} />,
    title: "Trending",
  },

  {
    icons: <IoMusicalNotesOutline size={20} />,
    title: "Music",
  },
  {
    icons: <MdOutlineMovie size={20} />,
    title: "Movies",
  },
  {
    icons: <MdLiveTv size={20} />,
    title: "Live",
  },
  {
    icons: <SiYoutubegaming size={20} />,
    title: "Gaming",
  },
  {
    icons: <MdOutlineNewspaper size={20} />,
    title: "News",
  },
  {
    icons: <IoTrophyOutline size={20} />,
    title: "Sports",
  },
  {
    icons: <LiaGraduationCapSolid size={20} />,
    title: "Courses",
  },
  {
    icons: <GiHanger size={20} />,
    title: "Fashion",
  },
  {
    icons: <MdOutlinePodcasts size={20} />,
    title: "Podcasts",
  },
];

const Sidebar = () => {
  const open = useSelector((store) => store.app.open);

  return (
    <div
      className={`relative left-0 ${
        open ? "w-[20%]" : "w-[6%]"
      } p-5 h-[calc(100vh-4.625rem)] bg-white overflow-y-scroll overflow-x-hidden`}
    >
      {sidebarItem.map((item, index) => {
        return (
          <div key={index} className="flex my-3 ml-2">
            {item.icons}
            <p className={`ml-5 ${open ? "" : "hidden"}`}>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
