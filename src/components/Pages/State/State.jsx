import { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendContext } from '../../Context/FriendContext';
const State = () => {
    const {textFriends,callFriends,videoFriends}=useContext(FriendContext);
    //console.log(textFriends);
    const text=textFriends.length;
    const call=callFriends.length;
    const video=videoFriends.length;
    //console.log(text,'text');
    const data = [
  { name: 'Text', value: text, fill: '#0088FE' },
  { name: 'Call', value: call, fill: '#00C49F' },
  { name: 'Video', value: video, fill: '#FFBB28' },
  //{ name: 'Group D', value: 200, fill: '#FF8042' },
];
    return (
        <>
            <h2 className='text-center text-5xl font-bold mb-3'>Friendship Analytics</h2>
        <div className='flex justify-center items-center'>
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend></Legend>
      <Tooltip></Tooltip>
    </PieChart>
            
        </div>
        </>
    );
};

export default State;