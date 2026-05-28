import { FaPlus } from "react-icons/fa6";
import { NavLink } from "react-router";
import AllFriends from "../Pages/Home/AllFriends/AllFriends";
const FixedCard = () => {
    const card=<>
                    <div className="card shadow py-3 text-center">
                <div className="text-[32px] font-semibold text-[#244D3F]">10</div>
                <div className="text-[#64748B] text-[18px font-regular]">Total Friends</div>
            </div>
           
           <div className="card shadow py-3 text-center">
                <div className="text-[32px] font-semibold text-[#244D3F]">3</div>
                <div className="text-[#64748B] text-[18px font-regular]">On Track</div>
            </div>
           
           <div className="card shadow py-3 text-center">
                <div className="text-[32px] font-semibold text-[#244D3F]">6</div>
                <div className="text-[#64748B] text-[18px font-regular]">Need Attention</div>
            </div>
           
           <div className="card shadow py-3 text-center">
                <div className="text-[32px] font-semibold text-[#244D3F]">12</div>
                <div className="text-[#64748B] text-[18px font-regular]">Interactions This Month</div>
            </div>
           
               </>
    return (
        <div className="space-y-5 w-10/12 mx-auto">
        <div className="text-center mt-8 space-y-5">
            <h2 className="text-5xl font-bold text-[#1F2937]">Friends to keep close in your life</h2>
            <p className="text-[#64748B] font-normal text-[16px]">Your personal shelf of meaningful connections. Browse, tend, and nurture the
             <br /> relationships that matter most.</p>
             <NavLink className={({isActive}) => 
                `btn ${isActive ? 'bg-[#244D3F] text-white':''}`}><FaPlus className="inline-block " />Add a Friend</NavLink>
        </div>
        <div className="grid md:grid-cols-4 gap-3">
            {card}
        </div>
        <AllFriends></AllFriends>
        </div>
    );
};

export default FixedCard;