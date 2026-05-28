import { FiArchive } from "react-icons/fi";
import { RiDeleteBin5Line, RiNotificationSnoozeLine } from "react-icons/ri";
import { useLoaderData, useParams } from "react-router";
import Call from "../../../../assets/call.png";
import Video from "../../../../assets/video.png";
import Text from "../../../../assets/text.png";
const CardDetails = () => {
    const {friendId} =useParams();
    //console.log(id)
    const AllFriends=useLoaderData();
    const myFriend=AllFriends.find(friend=> friend.id==friendId);
    //console.log(myFriend);
    const {picture,name,status,tags,bio,email,days_since_contact,goal,next_due_date
}=myFriend;
  console.log(myFriend);
//   const card=<>
//                     <div className="card shadow py-3 text-center">
//                 <div className="text-[32px] font-semibold text-[#244D3F]">{days_since_contact}</div>
//                 <div className="text-[#64748B] text-[18px font-regular]">Days Since Contact</div>
//             </div>
           
//            <div className="card shadow py-3 text-center">
//                 <div className="text-[32px] font-semibold text-[#244D3F]">{goal}</div>
//                 <div className="text-[#64748B] text-[18px font-regular]">Goal (Days)</div>
//             </div>
           
//            <div className="card shadow py-3 text-center">
//                 <div className="text-[32px] font-semibold text-[#244D3F]">{next_due_date}</div>
//                 <div className="text-[#64748B] text-[18px font-regular]">Next Due</div>
//             </div>
           
//                </>
  



    return (
        <>
        <div className="grid md:grid-cols-5 md:grid-rows-7 w-10/12 mx-auto gap-3">
       
        <div className="space-y-2 col-span-2 row-span-7">
        <div className="card text-center shadow-lg  space-y-2 py-2">
             <img src={picture} alt={name} className="w-25 mx-auto"/>
            <h2 className="text-[#1F2937] font-bold">{name}</h2>
            <span className={`${status==='active'?'bg-[#EFAD44]':status==='on-track'?'bg-[#244D3F]':'bg-[#EF4444]'} rounded-2xl px-1.5 py-0.5 text-white mx-auto badge`} >{status}</span>
            <div>
                { 
                    tags.map(tag=><span key={tag.id} className="badge bg-green-200 rounded-2xl">{tag}</span>)
                }
            </div>
                <p className="text-[#64748B]">"{bio}"</p>
                <p className="text-[#64748B]">{email}</p> 
         
        </div>
        <button className="btn text-[#1F2937] w-full"><RiNotificationSnoozeLine className="inline-block"/>Snooze 2 weeks</button>
        <button className="btn text-[#1F2937] w-full"><FiArchive className="inline-block"/> Archive</button>
        <button className="btn text-[#EF4444] w-full"> <RiDeleteBin5Line className="inline-block" />Delete</button>
        </div>
       
        <div className="row-span-2">
            <div className="card shadow py-3 text-center">
                <div className="text-[32px] font-semibold text-[#244D3F]">{days_since_contact}</div>
                <div className="text-[#64748B] text-[18px font-regular]">Days Since Contact</div>
            </div>
        </div>
       
        <div className="row-span-2">
                <div className="card shadow py-3 text-center">
                <div className="text-[32px] font-semibold text-[#244D3F]">{goal}</div>
                <div className="text-[#64748B] text-[18px font-regular]">Goal (Days)</div>
            </div>
        </div>
       
        <div className="row-span-2">
                <div className="card shadow py-3 text-center">
                <div className="text-[32px] font-semibold text-[#244D3F]">{next_due_date}</div>
                <div className="text-[#64748B] text-[18px font-regular]">Next Due</div>
            </div>
        </div>
       
        <div className="row-span-2 col-span-3 card shadow-sm p-2">
            <div className="flex justify-between items-center">
                <h2 className="text-[#244D3F] text-[20px] font-medium">Relationship Goal</h2>
                <button className="btn text-[18px] text-[#64748B]">Edit</button>
            </div>
            <p>Connect every {goal} days</p>
        </div>
        <div className="row-span-3 col-span-3">
             <div className="card shadow py-3 text-center">
                <div>
                    <img src={Call} alt="" />
                </div>
                <div className="text-[#64748B] text-[18px font-regular]">Call</div>
            </div>
             <div className="card shadow py-3 text-center">
                <div>
                    <img src={Text} alt="" />
                </div>
                <div className="text-[#64748B] text-[18px font-regular]">Text</div>
            </div>
             <div className="card shadow py-3 text-center">
                <div>
                    <img src={Video} alt="" className="mx-auto w-25 block" />
                </div>
                <div className="text-[#64748B] text-[18px font-regular]">Video</div>
            </div>
            
        </div>
        
        </div>
        
        </>
    );
};

export default CardDetails;