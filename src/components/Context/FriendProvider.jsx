import { useState } from "react";
import { FriendContext } from "./FriendContext";
import { toast } from "react-toastify";
const FriendProvider = ({children}) => {
    const [callFriends,setCallFriends]=useState([]);
    const [textFriends,setTextFriends]=useState([]);
    const [videoFriends,setVideoFriends]=useState([]);
    const handleCallButton=(myFriend)=>{
        //console.log(myFriend);
    toast.success(`Call with ${myFriend.name}`);
    setCallFriends([...callFriends, myFriend]);
    }
    const handleTextButton=(myFriend)=>{
    toast.success(`Text with ${myFriend.name}`);
    setTextFriends([...textFriends, myFriend]);
    }
    const handleVideoButton=(myFriend)=>{
    toast.success(`Video with ${myFriend.name}`);
    setVideoFriends([...videoFriends, myFriend]);
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