import React, { ReactElement } from "react";
import Icon from "../../Atoms/Icon";

const menuItems: MenuItemsProps[] = [
  {
    id: "overview",
    text: "Overview",
    icon: <Icon icon="overview" />,
  },
  {
    id: "work",
    text: "Work Experience",
    icon: <Icon icon="work" />,
  },
  {
    id: "education",
    text: "Education",
    icon: <Icon icon="education" />,
  },
  { id: "resume", text: "Resume", icon: <Icon icon="resume" />, href: "#" },
  { id: "skills", text: "Skills", icon: <Icon icon="skills" />, href: "#" },
  {
    id: "otherInfo",
    text: "OtherInfo",
    icon: <Icon icon="otherInfo" />,
  },
  {
    id: "account",
    text: "My Account",
    icon: <Icon icon="account" />,
  },
];

interface MenuItemsProps {
  id: string;
  text: string;
  href?: string;
  icon?: ReactElement;
}

function CandidateSidebar({ activeTabId,setActiveTab }: { activeTabId: string, setActiveTab:Function }) {
  return (
    <nav className="h-[60%] w-64 bg-white mr-4 rounded-lg overflow-hidden">
      <ul className="">
        {menuItems.map(({ id, text, icon }: MenuItemsProps) => (
          <button
          onClick={()=>setActiveTab(id)}
            className={`flex p-[10px] flex-row gap-x-4 px-6 py-4 transition-all hover:transition-all text-[#63748A] ${
              activeTabId === id ? "bg-[#E1EEFB] font-bold !fill-secondary !text-secondary" : ""
            }  hover:bg-[#E1EEFB]  items-center w-full`}
            key={id}
          >
            {icon}
            <a className="ml-2">{text}</a>
          </button>
        ))}
      </ul>
    </nav>
  );
}

export default CandidateSidebar;
