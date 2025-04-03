
import { createContext, ReactNode, SetStateAction, useState, Dispatch } from 'react';

interface GlobalContextType {
  user: {name:string, email:string, image:string} | null;
  setUser: Dispatch<SetStateAction<{name:string, email:string, image:string} | null>>
}

export const GlobalContext = createContext<GlobalContextType>({
  user: {name:'Timmy',email: 'timmybag@icloud.com', image:'/Profile.svg'},
  setUser: () => {}
});

const GlobalContextProvider = ({ children }:{children:ReactNode}) => {
  const [user, setUser] = useState<{name:string, email:string, image:string} | null>({
    name:'Timmy',email: 'timmybag@icloud.com', image:'/Profile.svg'}
  );
  


 

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextProvider};
