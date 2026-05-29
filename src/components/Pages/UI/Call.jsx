import { useContext } from "react";
import { FriendContext } from "../../Context/FriendContext";
import Image from "../../../assets/call.png";

const Call = () => {
    const {callFriends}=useContext(FriendContext);
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
                                            <span className="font-normal text-[#64748B] text-[18px]">Call</span>
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