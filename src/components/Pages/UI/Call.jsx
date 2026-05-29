import { useContext, useEffect, useState } from "react";
import { FriendContext } from "../../Context/FriendContext";
import Image from "../../../assets/call.png";

const Call = ({filterType}) => {
    const {callFriends}=useContext(FriendContext);
    const myFriend =callFriends.map(friend=> friend);
    console.log(myFriend);
    const [filterCallFriend,setFilterCallFriend]=useState([]);
    useEffect(()=>{
        if (filterType) {
            if (filterType==='call') {
              console.log(filterCallFriend);  
            }else if (filterType==='text') {
                ///
            }else{
//
            }
        }
    })
    return (
        <div className="space-y-3">
                        {
                            callFriends.map((friend,i)=>{
                                return (
                                    <div key={i} className="card shadow-sm px-5 py-3">
                                    <div className="flex justify-start items-center gap-2">
                                        <img src={Image} alt="" className="w-5"/>
                                        <div>
                                            <h2 className="text-[#244D3F] text-[20px] font-bold">meetup <span className="font-normal text-[#64748B] text-[18px]">with {friend.name}</span></h2>
                                            <span className="font-normal text-[#64748B] text-[18px]">{new Date().toLocaleString()}</span>
                                        </div>
                                    </div>
                                    </div>
                                );
                            })
                        }
                    </div>
    );
};

export default Call;