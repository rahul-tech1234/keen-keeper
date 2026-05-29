import { RiArrowDropDownLine } from "react-icons/ri";
import Call from "../UI/Call";
import Text from "../UI/Text";
import Video from "../UI/Video";
import { useState } from "react";

const Timeline = () => {
    const [filterType,setFilterType]=useState('');
    //console.log(filterType);
       return (
        <div className="w-10/12 mx-auto space-y-3">
            <h2 className="text-[48px] font-bold">Timeline </h2>
            <button className="btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>Button <RiArrowDropDownLine className="inline-block size-8" /></button>

            <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
              popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
                <li><a onClick={() => setFilterType("text")}>Text</a></li>
                <li><a onClick={() => setFilterType("call")}>Call</a></li>
                <li><a onClick={() => setFilterType("video")}>Video</a></li>
</ul>
            
            <Call filterType={filterType}></Call>
            <Text filterType={filterType}></Text>  
            <Video filterType={filterType}></Video>      
                        
        </div>
    );
};

export default Timeline;