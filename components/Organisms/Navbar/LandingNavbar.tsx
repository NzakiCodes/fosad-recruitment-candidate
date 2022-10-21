import Link from "next/link";
import Container from "../../Atoms/Container";
import { NavLink } from "../../Atoms/NavLink";

const LandingNavbar = () => {
  return (
    <div className="bg-secondary text-white py-5 fixed top-0 left-0 z-40 w-full">
      <Container className="flex justify-between flex-row py-2 ">
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
            <rect width="30" height="30" rx="6" fill="#98CBFF" />
            <path
              d="M10.0977 22V7.45455H20.3249V10.6364H14.0465V13.1364H19.6999V16.3182H14.0465V22H10.0977Z"
              fill="#002D5B"
            />
          </svg>
          <span className="font-bold">FosadRecruit</span>
        </NavLink>
        <button className="lg:hidden">
          <svg
            width="20"
            height="13"
            viewBox="0 0 20 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 10.5H1C0.734784 10.5 0.48043 10.6054 0.292893 10.7929C0.105357 10.9804 0 11.2348 0 11.5C0 11.7652 0.105357 12.0196 0.292893 12.2071C0.48043 12.3946 0.734784 12.5 1 12.5H11C11.2652 12.5 11.5196 12.3946 11.7071 12.2071C11.8946 12.0196 12 11.7652 12 11.5C12 11.2348 11.8946 10.9804 11.7071 10.7929C11.5196 10.6054 11.2652 10.5 11 10.5ZM1 2.5H19C19.2652 2.5 19.5196 2.39464 19.7071 2.20711C19.8946 2.01957 20 1.76522 20 1.5C20 1.23478 19.8946 0.98043 19.7071 0.792893C19.5196 0.605357 19.2652 0.5 19 0.5H1C0.734784 0.5 0.48043 0.605357 0.292893 0.792893C0.105357 0.98043 0 1.23478 0 1.5C0 1.76522 0.105357 2.01957 0.292893 2.20711C0.48043 2.39464 0.734784 2.5 1 2.5ZM19 5.5H1C0.734784 5.5 0.48043 5.60536 0.292893 5.79289C0.105357 5.98043 0 6.23478 0 6.5C0 6.76522 0.105357 7.01957 0.292893 7.20711C0.48043 7.39464 0.734784 7.5 1 7.5H19C19.2652 7.5 19.5196 7.39464 19.7071 7.20711C19.8946 7.01957 20 6.76522 20 6.5C20 6.23478 19.8946 5.98043 19.7071 5.79289C19.5196 5.60536 19.2652 5.5 19 5.5Z"
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
        </button>
        <nav className="lg:flex lg:flex-row lg:gap-x-10 items-center hidden">
          <NavLink href="">Small Business</NavLink>
          <NavLink href="#">Enterprise</NavLink>
          <div className="btn-group">
            <NavLink noOpacity className="btn" href="/login">
              Log in
            </NavLink>
            <NavLink noOpacity className="btn" href="#">
              Sign up
            </NavLink>
          </div>
          <NavLink className="btn btn-primary" href="#">
            Post a job
          </NavLink>
        </nav>
      </Container>
    </div>
  );
};

export default LandingNavbar;
