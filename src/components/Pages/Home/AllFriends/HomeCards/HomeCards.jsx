import { use } from "react";
import Card from "../../../UI/Card";
const FriendsPromise=fetch('/Data.json').then((res)=>res.json());
const HomeCards = () => {
    const FriendData=use(FriendsPromise);
    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 space-y-3">
            {
               FriendData.map(friend=><Card key={friend.id} friend={friend}></Card>) 
            }
        </div>
    );
};

export default HomeCards;