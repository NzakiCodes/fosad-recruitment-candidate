import { ReactElement } from "react";
import Container from "../../Atoms/Container";
import Icon from "../../Atoms/Icon";
import { NavLink } from "../../Atoms/NavLink";
import Avatar from "../../Atoms/Avatar";

export default function Navbar() {
  return (
    <div className="bg-secondary text-white py-5 fixed top-0 left-0 z-40 w-full">
      <Container className="flex justify-between items-center flex-col lg:flex-row py-2 ">
        <NavLink
          noOpacity
          href={"/"}
          className="font-bold text-[22px] flex  gap-x-2 items-center"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="30" height="30" rx="6" fill="#FFFFFF" />
            <path
              d="M10.0977 22V7.45455H20.3249V10.6364H14.0465V13.1364H19.6999V16.3182H14.0465V22H10.0977Z"
              fill="#002D5B"
            />
          </svg>
          <span className="font-bold">FosadRecruit</span>
        </NavLink>
        <nav className="lg:flex lg:flex-row lg:gap-x-6 items-center hidden">
          <NavLink href="">
            <IconButton hasBadge icon={<Icon icon="inbox" />} />
          </NavLink>
          <NavLink href="">
            <IconButton hasBadge icon={<Icon icon="notification" />} />
          </NavLink>
          <ProfileButton />
        </nav>
      </Container>
    </div>
  );
}

const IconButton = ({
  icon,
  hasBadge,
}: {
  icon: ReactElement;
  hasBadge?: boolean;
}) => {
  return (
    <button className="border relative flex justify-center items-center border-[#E4E8EE4D] rounded-full w-11 h-11">
      {icon}
      {hasBadge && (
        <svg
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0"
        >
          <circle cx="6" cy="6.5" r="6" fill="#D34B4B" />
        </svg>
      )}
    </button>
  );
};

const ProfileButton = () => {
  return (
    <button className="flex items-center gap-x-2">
      <Avatar size="medium" source="/assets/images/user-1.png" />
      <Icon icon="arrowDown" />
    </button>
  );
};
