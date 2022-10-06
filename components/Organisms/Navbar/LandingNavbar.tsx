import Link from "next/link"
import Container from "../../Atoms/Container"
import { NavLink } from "../../Atoms/NavLink"

const LandingNavbar = () => {
    return (
        <div className='bg-secondary text-white py-5 fixed top-0 left-0 z-40 w-full'>
            <Container className='flex justify-between flex-col lg:flex-row py-2 '>
                <NavLink noOpacity href={"/"} className='font-bold text-[22px] flex  gap-x-2 items-center'>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="30" height="30" rx="6" fill="#98CBFF" />
                        <path d="M10.0977 22V7.45455H20.3249V10.6364H14.0465V13.1364H19.6999V16.3182H14.0465V22H10.0977Z" fill="#002D5B" />
                    </svg>
                    <span className="font-bold">FosadRecruit</span>
                </NavLink>
                <nav className='lg:flex lg:flex-row lg:gap-x-10 items-center hidden'>
                    <NavLink href=''>
                        Small Business
                    </NavLink>
                    <NavLink href="#">
                        Enterprise
                    </NavLink>
                    <div className="btn-group">
                        <NavLink noOpacity className="btn" href="#">
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
    )
}

export default LandingNavbar;