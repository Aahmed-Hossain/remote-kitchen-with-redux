"use client"
import Appbar from '../components/appbar/Appbar'
import Foods from '../components/foods/Foods'

export default function Home() {
  return (
<div className='px-2 md:px-8'>
<Appbar/>
<Foods/>
</div>
  );
}
