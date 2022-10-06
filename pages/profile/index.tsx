import React, { ReactElement } from 'react'
import DashboardLayout from '../../components/Layouts/Dashboard';

function Profile() {
  return (
    <div className='py-10'>
        Profile
    </div>
  )
}

Profile.getLayout = function getLayout(page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>;
  };

export default Profile