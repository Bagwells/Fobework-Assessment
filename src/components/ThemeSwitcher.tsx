import { useContext} from "react";
import { ThemeContext } from "../hooks/themeContext";
import { WiMoonAltWaxingCrescent1 } from "react-icons/wi";
import { BiSolidSun } from "react-icons/bi";



export const ThemeSwitcher = () => {
    const { theme, toggleTheme} = useContext(ThemeContext)
    
    return (
        <>  
            <div className="flex flex-col w-[46px] h-24 p-2 bg-[#F7F8FA] dark:bg-[#1E293B] rounded-[100px] justify-between self-center">
                <button onClick={toggleTheme}
                    className={`flex text-[30px] ${theme ? "text-[#FACC15]" : "text-[#94A3B8]" } hover:text-[#FACC15]`}>
                    <BiSolidSun />
                </button>
                <button onClick={toggleTheme}
                    className={`flex text-[30px] ${!theme ? "text-[#1E40AF]" : "text-[#94A3B8]" } hover:text-[#1E40AF]`}>
                    <WiMoonAltWaxingCrescent1 />
                </button>
            </div>
        </>
    )
};