import {
    createContext,
    useContext,
    useState,
    ReactNode   
} from 'react';

interface userInformationContextType {
    isLoggedIn: boolean;
    setIsLoggedIn?: React.Dispatch<React.SetStateAction<boolean>>;
    feedToggle: "friends" | "community";
    setFeedToggle?: React.Dispatch<React.SetStateAction<"friends" | "community">>;   
}

const initialState:userInformationContextType = {
    isLoggedIn: false,
    feedToggle: "friends"
}


const UserInformationContext = createContext<userInformationContextType>(initialState);

export const useUserInformation = () => {
    const context = useContext(UserInformationContext);
    if(!context) {
        throw new Error("useUserInformation must be used within a UserInformationProvider");
    }
    return context;
}

export const UserInformationProvider: React.FC<any> = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(initialState.isLoggedIn);
    const [feedToggle, setFeedToggle] = useState<"friends" | "community">(initialState.feedToggle);

    return (
        <UserInformationContext.Provider value={{isLoggedIn, setIsLoggedIn, feedToggle, setFeedToggle}}>
            {children}
        </UserInformationContext.Provider>
    );
}