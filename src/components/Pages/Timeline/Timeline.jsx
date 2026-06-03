import Call from "../UI/Call";
import Text from "../UI/Text";
import Video from "../UI/Video";
import { useState, } from "react";
//import { FriendContext } from "../../Context/FriendContext";

const Timeline = () => {
    //const {callFriends,textFriends,videoFriends}=useContext(FriendContext);
    const [filterType,setFilterType]=useState('all');

    console.log(filterType);
       return (
        <div className="w-10/12 mx-auto space-y-3">
            <h2 className="text-[48px] font-bold">Timeline </h2>
            
            <select onClick={(e)=>setFilterType(e.target.value)} name="" id="" className="menu bg-base-200 w-52 dropdown rounded">
                <option value="all">All</option>
                <option value="call">Call</option>
                <option value="text">Text</option>
                <option value="video">Video</option>
            </select>
            {
                filterType=='call'?<Call></Call>:filterType=='text'?<Text></Text>:filterType=='video'?<Video></Video>:<>
                <Call></Call>
                <Text></Text>  
                <Video></Video>      
                </>
            }
            
                        
        </div>
    );
};

export default Timeline;