import type { NextPage } from 'next'
import Container from '../components/Atoms/Container'
import LandingHeader from '../components/Organisms/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <LandingHeader />
      <Container>
        <div className='text-center py-24 max-w-[779px] mx-auto'>
          <h2 className='font-bold text-[34px] leading-[41px] text-secondary'>With a personal recruiter, you’ll get matched to roles that are right for you.</h2>
        </div>
        <div className='flex justify-between mb-10'>
          <div className='border w-1/2 p-10'>
            <div>A</div>
          </div>
          <div className='border w-1/2'>
            <div>B</div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home
