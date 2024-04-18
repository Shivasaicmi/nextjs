'use client';

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";


import React from 'react'

function PrivateRoute({children}) {
    const {data:session} = useSession();

    // if(!session&&!session?.user){
    //     redirect('/api/auth/signin');
    // }

  return (
    <>
    {children}</>
  )
}

export default PrivateRoute;