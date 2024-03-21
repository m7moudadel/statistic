import React from 'react'
import { UserRoundCog ,CalendarDays ,Users, UserRoundCheck ,Trello ,PoundSterling} from 'lucide-react';
import statisticsCss from './statistics.module.css'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Statistics() {
  return<>
  <div className="container py-5">
<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">

<Card className="w-[300px] max-sm:w-[100%] max-md:w-[100%] shadow-lg  transition ease-in-out delay-150 hover:-translate-y-2 duration-400">
<div className={statisticsCss.cardEmployee}>
<CardHeader>
    <CardTitle>Employee</CardTitle>
  </CardHeader>
  <CardContent className='flex justify-between items-center'>
  <h3> 31.k</h3>
    <span className={statisticsCss.iconEmployee}>  <UserRoundCog /></span>
  </CardContent>
<div className="flex justify-around items-center">
<span className=' text-gray-400'>14-Apr</span>
  <span className=' text-gray-400'>2024</span>
</div>
</div>
</Card>


<Card className="w-[300px] max-sm:w-[100%] max-md:w-[100%] shadow-lg transition ease-in-out delay-150 hover:-translate-y-2 duration-400">
<div className={statisticsCss.cardBooking}>
<CardHeader>
    <CardTitle>Booking</CardTitle>
  </CardHeader>
  <CardContent className='flex justify-between items-center'>
  <h3> 5</h3>
    <span className={statisticsCss.iconBooking}>  <CalendarDays /></span>
  </CardContent>
  <div className="flex justify-around items-center">
<span className=' text-gray-400'>14-Apr</span>
  <span className=' text-gray-400'>2024</span>
</div>
</div>
</Card>

<Card className="w-[300px] max-sm:w-[100%] max-md:w-[100%] shadow-lg transition ease-in-out delay-150 hover:-translate-y-2 duration-400">
<div className={statisticsCss.cardRooms}>
<CardHeader>
    <CardTitle>Rooms</CardTitle>
  </CardHeader>
  <CardContent className='flex justify-between items-center'>
  <h3> 5</h3>
    <span className={statisticsCss.iconRooms}>  <Trello /></span>
  </CardContent>
  <div className="flex justify-around items-center">
<span className=' text-gray-400'>14-Apr</span>
  <span className=' text-gray-400'>2024</span>
</div>
</div>
</Card>


<Card className="w-[300px] max-sm:w-[100%] max-md:w-[100%] shadow-lg transition ease-in-out delay-150 hover:-translate-y-2 duration-400">
<div className={statisticsCss.cardActiveClients}>
<CardHeader>
    <CardTitle>Active Clients</CardTitle>
  </CardHeader>
  <CardContent className='flex justify-between items-center'>
  <h3> 5</h3>
    <span className={statisticsCss.iconActiveClients}>  <UserRoundCheck /></span>
  </CardContent>
  <div className="flex justify-around items-center">
<span className=' text-gray-400'>14-Apr</span>
  <span className=' text-gray-400'>2024</span>
</div>
</div>
</Card>

<Card className="w-[300px] max-sm:w-[100%] max-md:w-[100%] shadow-lg lg:col-start-2 transition ease-in-out delay-150 hover:-translate-y-2 duration-400">
<div className={statisticsCss.cardClients}>
<CardHeader>
    <CardTitle>Clients</CardTitle>
  </CardHeader>
  <CardContent className='flex justify-between items-center'>
  <h3>20.k</h3>
    <span className={statisticsCss.iconClients}>  <Users  /></span>
  </CardContent>
  <div className="flex justify-around items-center">
<span className=' text-gray-400'>14-Apr</span>
  <span className=' text-gray-400'>2024</span>
</div>
</div>
</Card>

<Card className="w-[300px] max-sm:w-[100%] max-md:w-[100%] shadow-lg transition ease-in-out delay-150 hover:-translate-y-2 duration-400">
<div className={statisticsCss.cardClients}>
<CardHeader>
    <CardTitle>Income</CardTitle>
  </CardHeader>
  <CardContent className='flex justify-between items-center'>
  <h3>20.k</h3>
    <span className={statisticsCss.iconIncome}>  <PoundSterling  /></span>
  </CardContent>
  <div className="flex justify-around items-center">
<span className=' text-gray-400'>14-Apr</span>
  <span className=' text-gray-400'>2024</span>
</div>
</div>
</Card>


</div>









  </div>
  </>
}
