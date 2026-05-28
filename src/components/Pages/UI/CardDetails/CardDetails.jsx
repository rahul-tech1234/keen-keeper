import { FiArchive } from "react-icons/fi";
import { RiDeleteBin5Line, RiNotificationSnoozeLine } from "react-icons/ri";
import { useLoaderData, useParams } from "react-router";

const CardDetails = () => {
    const {friendId} =useParams();
    //console.log(id)
    const AllFriends=useLoaderData();
    const myFriend=AllFriends.find(friend=> friend.id==friendId);
    //console.log(myFriend);
    const {picture,name,status,tags,bio,email}=myFriend;
    console.log(tags);
    return (
        <>
        <div className="w-100 space-y-2">
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
        </>
    );
};

export default CardDetails;