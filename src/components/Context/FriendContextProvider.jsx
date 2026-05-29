import { FriendCpntext } from "./FriendContextCreate";
const FriendContextProvider = ({children}) => {
    return (
        <FriendCpntext.Provider>
            {children}
        </FriendCpntext.Provider>
    );
};

export default FriendContextProvider;   