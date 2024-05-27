import { useState } from "react";
import Button from '@mui/material/Button';
import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';
import CreateModal from "@/components/modal/CreateModal";

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
        <div>
        <Button onClick={openCreateModal} variant="contained" sx={{ backgroundColor: '#1A237E'}}> <AddIcon/> <span className="hidden md:block">Add New Food</span>
        </Button>
        {showCreateModal && <CreateModal closeCreateModal={closeCreateModal} />}

        </div>
    </div>
  )
}

export default Appbar