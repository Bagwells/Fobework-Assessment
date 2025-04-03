
import {  useContext, useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import { LuCalendarDays } from "react-icons/lu"
import { PiBell } from "react-icons/pi"
import { RiSearchLine } from "react-icons/ri"
import { GlobalContext } from "../hooks/GlobalContext"
import SideBar from "./SideBar"
import NotificationsPopUp from "./Notifications"
import { Modal } from "./Modal"
import { formattedDate } from "../hooks/useDate"

const NavBar = () => {
    const { user } = useContext(GlobalContext)

    const [isMenu, setIsMenu] = useState(false)
    const [notification, setNotifications] = useState(false)

    const openMenuSwitch = () => {
        setIsMenu((prevState) => !prevState)
    }

    const styleChange = isMenu ? "visible" : "invisible"
    const styleRotate = isMenu ? "rotate-90" : ""

    const [slideMenu, setSlideMenu] = useState(false)

    const slideToggle = () => {
        setSlideMenu((prevState) => !prevState)
    }

    return (
        <>
            <nav className="fixed flex left-0 top-0 w-full h-fit bg-grey50 dark:bg-grey900 items-center p-4 lg:pl-6 lg:pr-16 2xl:px-24 border-b border-[#EBECF2] dark:border-grey700 z-50">
                <div className="flex w-full h-full items-center justify-between z-50 gap-4">
                    {/* Logo and Title */}
                    <div className="flex items-center gap-6 lg:gap-10">
                        <img
                            onClick={slideToggle}
                            src="/Logo.svg"
                            className="animate-pulse w-8 sm:w-10 cursor-pointer"
                            alt="Analytics"
                        />
                        <div className="font-jakarta font-semibold text-sm lg:text-xl text-[#26282C] dark:text-grey200">
                            Analytics
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="flex w-fit h-full items-center gap-5 justify-between">
                        <div className="max-w-[349px] h-12 hidden sm:flex px-4 items-center bg-white dark:bg-grey800 border border-borderCol dark:border-grey600 rounded-3xl gap-2 overflow-hidden">
                            <RiSearchLine className="text-lg text-ph-grey dark:text-grey400" />
                            <input
                                className="w-full bg-transparent placeholder:font-Inter placeholder:font-normal placeholder:text-base placeholder:text-[#A3A3A3] dark:placeholder:text-grey500 focus:outline-0"
                                placeholder="Search..."
                            />
                        </div>

                        {/* Date */}
                        <div className="hidden lg:flex items-center gap-2.5 px-4 py-3">
                            <LuCalendarDays className="text-black dark:text-white text-xl" />
                            <div className="font-Inter font-medium text-sm text-textCol dark:text-grey200">
                                {formattedDate}
                            </div>
                        </div>

                        {/* Notifications */}
                        <div
                            onClick={() => setNotifications((prev) => !prev)}
                            className="hidden group relative md:flex items-center justify-center w-10 h-10 border-[0.769px] border-borderCol dark:border-grey600 rounded-full"
                        >
                            <PiBell className="text-xl text-[#0D062D] dark:text-grey300" />
                            <div className="group-hover:flex absolute inset-0 top-10 hidden items-center w-fit p-4 rounded-lg bg-[#E2E8F0] dark:bg-[#475569] text-[#0D062D] dark:text-[#F8FAFC] ">
                                Notification
                            </div>
                        </div>

                        {/* User Profile */}
                        <div
                            onClick={openMenuSwitch}
                            className="flex w-fit h-12 py-1.5 px-2 bg-white dark:bg-grey800 border border-borderCol dark:border-grey600 rounded-[28px] items-center justify-around gap-3"
                        >
                            <div className="flex w-9 rounded-full">
                                <img src={user?.image} alt="" className="w-full h-full" />
                            </div>
                            <div className="hidden md:flex flex-col w-fit justify-between items-end">
                                <div className="font-Inter font-normal text-right text-sm text-textCol dark:text-grey50">
                                    {user?.name}
                                </div>
                                <div className="font-Inter font-normal text-right text-sm text-[#787486] dark:text-grey300">
                                    {user?.email}
                                </div>
                            </div>
                            <div>
                                <IoIosArrowDown
                                    className={`text-lg text-[#0D062D] dark:text-grey400 ${styleRotate} transition-all duration-300`}
                                />
                            </div>
                        </div>

                        {/* Dropdown Menu */}
                        <div
                            className={`absolute flex right-5 top-16 w-[220px] h-fit ${styleChange} bg-grey50 dark:bg-grey900 border border-borderCol dark:border-grey600 shadow-neutral-600 rounded-lg py-4`}
                        >
                            <div className="flex flex-col w-full items-end gap-5 px-4">
                                {["Profile", "Accounts", "Notification"].map((items, index) => (
                                    <div
                                        key={index}
                                        onClick={() =>
                                            items.includes("Notification")
                                                ? setNotifications((prev) => !prev)
                                                : undefined
                                        }
                                        className="w-full font-Inter font-normal text-base text-textCol dark:text-grey100 rounded-lg hover:font-bold"
                                    >
                                        {items}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Notifications Modal */}
                <Modal close={() => setNotifications((prevState) => !prevState)} display={notification}>
                    <NotificationsPopUp onClick={() => setNotifications((prev) => !prev)} />
                </Modal>
            </nav>

            {/* Sidebar */}
            <SideBar close={slideToggle} slide={slideMenu} />
        </>
    )
}

export default NavBar