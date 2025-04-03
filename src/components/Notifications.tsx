
import { MouseEventHandler } from "react";
import { MdOutlineNotifications } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";


type NotificationProps = {
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const NotificationsPopUp = ({ onClick }: NotificationProps ) => {
  

    return(
        <>
            <div className="bg-white dark:bg-slate-800 flex flex-col w-full h-full md:h-[560px] bg-textcolwhite overflow-hidden rounded-2xl">
                <div className="flex flex-col p-4 border-b border-[#6e6d6d] ">
                    <div className="inline-flex justify-between gap-x-24 ">
                        <div className="flex justify-between py-1 gap-2 items-center">
                            <button onClick={onClick}
                                className="pt-1 w-6 h-6 text-grey-300">
                                <IoCloseCircle className="font-bold"/>
                            </button>
                            <h4 className="font-semibold font-sans text-xl text-gray-300">
                                Notifications
                            </h4>
                        </div>
                        <button className="flex font-sans text-base py-2 font-normal underline-offset-2 text-gray-300">
                            <h4 className=" underline underline-offset-1">Mark all as read </h4>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center flex-1 gap-6">
                    <MdOutlineNotifications className="text-5xl"/>
                    <h4 className="self-center text-base font-sans font-medium text-gray-300">No notifications</h4>
                </div>
            </div>
        </>
    )
};

export default NotificationsPopUp;