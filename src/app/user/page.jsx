import Users from '@/src/components/Users'
import React from 'react'

export const metadata = {
  title: "Page of users",
  description: "Page of users and display information of users"
}

function Page() {
  return (
    <div>
      <Users />
    </div>
  )
}

export default Page