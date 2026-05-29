import { FiArchive } from "react-icons/fi";
import { RiDeleteBin5Line, RiNotificationSnoozeLine } from "react-icons/ri";
import { Link, useLoaderData, useParams } from "react-router";
import Call from "../../../../assets/call.png";
import Video from "../../../../assets/video.png";
import Text from "../../../../assets/text.png";
import { useContext } from "react";
import { FriendContext } from "../../../Context/FriendContext";

const CardDetails = () => {
    const {handleCallButton,handleTextButton,handleVideoButton}=useContext(FriendContext);
    const {friendId} =useParams();
    const AllFriends=useLoaderData();
    const myFriend=AllFriends.find(friend=> friend.id==friendId);
    //console.log(myFriend);
    const {picture,name,status,tags,bio,email,days_since_contact,goal,next_due_date}=myFriend;
  
  
const Buttons=<>
<button className="btn text-[#1F2937] w-full bg-white"><RiNotificationSnoozeLine className="inline-block"/>Snooze 2 weeks</button>
        <button className="btn text-[#1F2937] w-full bg-white"><FiArchive className="inline-block"/> Archive</button>
        <button className="btn text-[#EF4444] w-full bg-white"> <RiDeleteBin5Line className="inline-block" />Delete</button>
        
</>

    return (
        <>
<div className="bg-gray-200 card mp-3">
        <div className="grid md:grid-rows-4 md:grid-cols-5 w-10/12 mx-auto gap-3">
            <div className="row-span-4 col-span-2 p-3 ">


                <div className="card text-center shadow-lg  space-y-2 py-2 px-1 bg-white">
                <img src={picture} alt={name} className="w-25 mx-auto rounded-full"/>
                <h2 className="text-[#1F2937] font-bold">{name}</h2>
                <span className={`${status==='active'?'bg-[#EFAD44]':status==='on-track'?'bg-[#244D3F]':'bg-[#EF4444]'} rounded-2xl px-1.5 py-0.5 text-white mx-auto badge`} >{status}</span>
                <div>
                    { 
                        tags.map((tag,i)=><span key={i} className="badge bg-green-200 rounded-2xl">{tag}</span>)
                    }
                </div>
                    <p className="text-[#64748B]">"{bio}"</p>
                    <p className="text-[#64748B]">{email}</p> 
                    <div className="space-y-5">{Buttons}</div>

        </div>




            </div>
            
                
                <div className="card shadow py-3 text-center mt-3 bg-white">
                <div className="text-[32px] font-semibold text-[#244D3F]">{days_since_contact}</div>
                <div className="text-[#64748B] text-[18px font-regular]">Days Since Contact</div>
            

            </div>
            

             <div className="card shadow py-3 text-center mt-3 bg-white">
                <div className="text-[32px] font-semibold text-[#244D3F]">{goal}</div>
                <div className="text-[#64748B] text-[18px font-regular]">Goal (Days)</div>
            </div>

            
            <div className="card shadow py-3 text-center mt-3 bg-white">
                <div className="text-[32px] font-semibold text-[#244D3F]">{next_due_date}</div>
                <div className="text-[#64748B] text-[18px font-regular]">Next Due</div>
            </div>
            
            <div className="col-span-3 bg-white p-3 h- card shadow ">

                <div className="flex justify-between items-center">
                <h2 className="text-[#244D3F] text-[20px] font-medium">Relationship Goal</h2>
                <button className="btn text-[18px] text-[#64748B]">Edit</button>
                </div>
                <p className="text-[18px] font-medium text-[#64748B]">Connect every {goal} days</p>

            </div>
            <div className="col-span-3 bg-white row-span-2 card shadow p-3">

                  <h1 className="text-[#64748B] text-[18px] font-regular my-3">Quick Check-In</h1>
             <div className="grid md:grid-cols-3 gap-3">       
                <Link onClick={()=>{handleCallButton(myFriend)}} className=" shadow card text-center flex items-center justify-center flex-col bg-gray-200">
                    <img src={Call} alt=""/>
                    <h2 className="text-[#64748B] text-[18px font-regular]">Call</h2>
                </Link>

                <Link onClick={()=>handleTextButton(myFriend)} className="shadow card text-center flex items-center justify-center flex-col bg-gray-200">
                    <img src={Text} alt="" className="mx-auto w-15 py-4"/>
                    <h2 className="text-[#64748B] text-[18px font-regular]">Text</h2>
                </Link>

                <Link onClick={()=>handleVideoButton(myFriend)} className="shadow card text-center flex items-center justify-center flex-col bg-gray-200">
                    <img src={Video} alt="" className="mx-auto w-15 py-4"/>
                    <h2 className="text-[#64748B] text-[18px font-regular]">Video</h2>
                </Link>

            </div>


            </div>
            
        </div>
</div>
        
        </>
    );
};

export default CardDetails;