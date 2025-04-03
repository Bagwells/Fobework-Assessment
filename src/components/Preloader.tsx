import { IoAnalytics } from "react-icons/io5"


export const Preloader =({visibility}:{visibility: string | undefined})=> {


  return(
    <div className={`${visibility} h-screen w-screen fixed z-[70] left-0 top-0`}>
        <div className=' bg-grey50 dark:bg-grey900 w-full h-full flex flex-col items-center justify-center p-8'>
          <IoAnalytics className="text-green-500 text-7xl animate-bounce duration-300 transition-transform ease-in-out "/>
          <div className="font-jakarta font-bold dark:text-grey50 text-grey900 ">
            Analytic Dashboard
          </div>
        </div>  
    </div>

    )
  }