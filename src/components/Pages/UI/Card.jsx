import { NavLink } from "react-router";

const Card = ({friend}) => {
    //console.log(friend.id);
    //const {picture,name,days_since_contact,tags,status}=friend;
    return (
        <NavLink to={`/carddetails/${friend.id}`}>
        <div className="card shadow-sm text-center py-5">
            <img src={friend.picture} alt={name}  className="w-25 h-25 rounded-full mx-auto"/>
            <div className="space-y-2">
            <h2 className="text-[20px] font-semibold text-[#1F2937]">{friend.name}</h2>
            <p className="text-[#64748B] text-[12px] font-normal">{friend.days_since_contact}d ago</p>
            
            {/* <span className="badge bg-green-200 ">{friend.tags[0]}</span>
            <br /> */}
            <div className="flex items-center justify-center gap-2">
                {
                friend.tags.map((tag,i)=>{
                    return (
                        <span key={i} className="badge bg-green-200 rounded-2xl">{tag}</span>
                    );
                })
                }
            </div>
            <span 
            className={`${friend.status==='active'?'bg-[#EFAD44]':friend.status==='on-track'?'bg-[#244D3F]':'bg-[#EF4444]'} rounded-2xl px-1.5 py-0.5 text-white`} >
            
                {friend.status}
            </span>
            </div>
        </div>
        </NavLink>
    );
};

export default Card;