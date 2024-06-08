import { useState } from "react";
import Button from '@mui/material/Button';
import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';
import CreateModal from "@/components/modal/CreateModal";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SpatialTrackingIcon from '@mui/icons-material/SpatialTracking';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';

const Appbar = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const openCreateModal = () => {
    setShowCreateModal(true);
  };
  const closeCreateModal = () => {
    setShowCreateModal(false);
  };


  return (
    <div className='border-b flex justify-between items-center h-12'>
        <div>
          <Link href={'/'}> <h2 className='text-lg md:text-2xl font-bold'> Remote<span className='text-[#1A237E]'>Kitchen</span></h2></Link>
        </div>

        <div className="flex justify-center gap-2 md:gap-4 lg:gap-6">

<Link href={'https://github.com/Aahmed-Hossain'} target="_blank"> 
<GitHubIcon sx={{color: '#1A237E'}}/>
</Link>
<Link href={'https://ahmed-portfolio.vercel.app'} target="_blank"> 
<LanguageIcon sx={{color: '#1A237E'}}/>
</Link>
        </div>


        <div>
        <Button onClick={openCreateModal} variant="contained" sx={{ backgroundColor: '#1A237E'}}> <AddIcon/> <span className="hidden md:block">Add New Food</span>
        </Button>
        {showCreateModal && <CreateModal closeCreateModal={closeCreateModal} />}

        </div>
    </div>
  )
}

export default Appbar