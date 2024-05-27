import React from 'react'
import Button from '@mui/material/Button';
import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';
const Appbar = () => {
  return (
    <div className='border-b flex justify-between items-center h-12'>
        <div>
          <Link href={'/'}> <h2 className='text-2xl font-bold'> Remote<span className='text-[#1976D2]'>Kitchen</span></h2></Link>
        </div>
        <div>
        <Button variant="contained"><AddIcon/>  Add New Food</Button>
        </div>
    </div>
  )
}

export default Appbar