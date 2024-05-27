import Image from "next/image";
import React from "react";
import logo from "../../../public/remote-kitchen-logo.jpg";
import Link from "next/link";
import { Divider } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SpatialTrackingIcon from '@mui/icons-material/SpatialTracking';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
const Footer = () => {
  return (
    <div className="my-4 bg-slate-50">
      <div>
        <div className="flex flex-col md:flex-row gap-3 justify-between">
          <Link href={"/"} className="flex items-center justify-center gap-3">
            <Image src={logo} width={50} height={50} alt="logo" />
            <h2 className="text-lg md:text-xl font-bold">
              {" "}
              Remote<span className="text-[#1A237E]">Kitchen</span>
            </h2>
          </Link>

          <div className="flex items-center justify-center gap-6">
            <p className="text-[#1A237E] font-semibold hover:underline hover:cursor-pointer">
              About us
            </p>
            <p className="text-[#1A237E] font-semibold hover:underline hover:cursor-pointer">
              Contact us
            </p>
            <p className="text-[#1A237E] font-semibold hover:underline hover:cursor-pointer">
              Career
            </p>
          </div>
        </div>

        <Divider  className="my-4"/>

        <div className="flex flex-col md:flex-row justify-between gap-3">
          <p className="text-[#1A237E] text-center">© 2024 Ahmed Hossain. All rights reserved.</p>

<p className="flex justify-center gap-6">
<Link href={'https://github.com/Aahmed-Hossain'} target="_blank"> 
<GitHubIcon sx={{color: '#1A237E'}}/>
</Link>
<Link href={'https://ahmed-portfolio.vercel.app'} target="_blank"> 
<LanguageIcon sx={{color: '#1A237E'}}/>
</Link>
<Link href={'https://www.linkedin.com/in/ahmed-hossain-57aab42a8'} target="_blank"> 
<LinkedInIcon sx={{color: '#1A237E'}}/>
</Link>
<Link href={'https://discord.com/users/1185772452031238311'} target="_blank"> 
<SpatialTrackingIcon sx={{color: '#1A237E'}}/>
</Link>
<Link href={'mailto:ahmed.hsn.404@gmail.com'} target="_blank"> 
<AttachEmailIcon sx={{color: '#1A237E'}}/>
</Link>
</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
