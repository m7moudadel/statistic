import React from 'react'
import { LoginForm } from './loginForm'
import { Toaster } from '@/components/ui/toaster'
// import { useToast } from "@/components/ui/use-toast"

export default function page() {
  return<>
<div className='flex flex-1 justify-center items-center'>
<LoginForm/>
<Toaster />
</div>
  </>
}
