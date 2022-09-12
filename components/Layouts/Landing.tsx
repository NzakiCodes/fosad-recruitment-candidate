import React, { ReactNode } from 'react';
import Head from 'next/head';
import { LandingNavbar } from '../Organisms/Navbar';

declare type LandingLayoutType = {
    children: ReactNode;
}

function Landing({ children }: LandingLayoutType) {
    return (
        <>
            <Head>
                <title>Fosad Recruit - Explore & discover the perfect job for you!.</title>
                <meta name="description" content="Fosad Recruit - Explore & discover the perfect job for you!.qqqqqqqqqqq" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LandingNavbar />
            <div className='mt-24 '>
                {children}
            </div>
        </>
    )
}

export default Landing