import { NavLink } from "react-router";
import { BiHomeAlt2 } from "react-icons/bi";
import { CiClock2 } from "react-icons/ci";
import { TfiStatsUp } from "react-icons/tfi";
const NavBar = () => {
    const Links=<>
                    <li className="font-normal text-[16px] text-[#64748B]">
        <NavLink className={({isActive}) => `flex gap-0 items-center ${isActive ? 'bg-[#244D3F] text-white':'bg-none'} `} to={'/'}>
            <BiHomeAlt2 />Home
        </NavLink></li>
      <li className="font-noram text-[16px] text-[#64748B]">
        <NavLink className={({isActive}) => `flex gap-0 items-center ${isActive ? 'bg-[#244D3F] text-white':'bg-none'} `} to={'/timeline'}>
            <CiClock2/>Timeline
        </NavLink>
        </li>
        {/*  */}
      <li className="font-normal text-[16px] text-[#64748B]">
        <NavLink 
        className={({isActive}) => `flex gap-0 items-center ${isActive ? 'bg-[#244D3F] text-white':'bg-none'} `} to={'/state'}>
            <TfiStatsUp />Stats
        </NavLink>
    </li>    



                </>;
    return (
        <div className="navbar bg-base-100 my-4 w-10/12 mx-auto">
  <div className="flex-1">
    <a className="font-bold text-2xl text-[#244D3F]"><span className="text-[#1F2937]">Keen</span>Keeper</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      {Links}
    </ul>
  </div>
</div>
    );
};

export default NavBar;