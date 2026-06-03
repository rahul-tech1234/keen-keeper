'use client'
import { useState } from "react";
import { FriendContext } from "./FriendContext";
import { toast } from "react-toastify";
//const [filterType,setFilterType]=useState([]);

// const callhandle=()=>{
//     setFilterType([...filterType,{type: 'text'}]);
// }
//([...arrr, {...obj1, type:  "text"}])
const FriendProvider = ({children}) => {
    const [filterType,setFilterType]=useState([]);
    const [callFriends,setCallFriends]=useState([]);
    const [textFriends,setTextFriends]=useState([]);
    const [videoFriends,setVideoFriends]=useState([]);
    //console.log(callFriends,textFriends,videoFriends);
    //console.log(isCallFriend);
    const handleCallButton=(myFriend)=>{
        //console.log(myFriend);
    toast.success(`Call with ${myFriend.name}`);
    setCallFriends([...callFriends, {myFriend, type: 'call'}]);
    const isCallFriend=callFriends.find(friend=>friend.type==='call');
    console.log(isCallFriend);
    setFilterType([...filterType,isCallFriend]);
    }
    const handleTextButton=(myFriend)=>{
    toast.success(`Text with ${myFriend.name}`);
    setTextFriends([...textFriends, {myFriend, type: 'text'}]);
    }
    const handleVideoButton=(myFriend)=>{
    toast.success(`Video with ${myFriend.name}`);
    setVideoFriends([...videoFriends, {myFriend, type: 'video'}]);
    }
const data={
        callFriends,
        setCallFriends,
        handleCallButton,
        textFriends,
        setTextFriends,
        handleTextButton,
        videoFriends,
        setVideoFriends,
        handleVideoButton,
    }

    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendProvider;