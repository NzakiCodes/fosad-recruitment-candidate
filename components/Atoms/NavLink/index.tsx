import React, { ReactElement, ReactNode } from 'react'
import Link from 'next/link';


type NavLinkType = { href: string, children: ReactElement | ReactNode | string; className?: string; noOpacity?:boolean }
export const NavLink = (props: NavLinkType) => {
    const { href, children, className, noOpacity=false } = props;
    return (
        <Link {...props} href={`${href ? href : "#"}`}>
            <a className={`font-medium text-white ${!noOpacity?"hover:opacity-80 transition-opacity hover:transition-opacity":""}  ${className ? className : ""}`}>{children}</a>
        </Link>)
}