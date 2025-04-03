import { ThemeSwitcher } from "./ThemeSwitcher";

interface menu {
  close: () => void;
  slide: boolean;
}

const SideBar: React.FC<menu> = ({ slide }) => {
  const position = slide ? "-translate-x-0" : "-translate-x-20";

  const Navigation = [
    {
      label: "Menu",
      icon: "/gridmenu.svg",
    },
    {
      label: "Trends",
      icon: "/trend-up.svg",
    },
    {
      label: "Users",
      icon: "/profile-2user.svg",
    },
    {
      label: "Investments",
      icon: "/box.svg",
    },
    {
      label: "Info",
      icon: "/info-circle.svg",
    },
  ];

  const ActionBtn = [
    {
      label: "Settings",
      icon: "/setting-2.svg",
    },
    {
      label: "Log out",
      icon: "/logout.svg",
    },
  ];

  return (
    <div
      className={`fixed left-0 top-0 w-20 h-[100vh] flex flex-col py-5 bg-[#F7F8FA] dark:bg-grey900 items-center ${position} lg:-translate-x-0 
            transition-all duration-500 justify-between gap-5 border-r border-[#EBECF2] dark:border-[#334155] z-20`}
    >
      <div className="flex w-full items-center flex-col gap-5 pt-20">
        <div className="w-full flex flex-col gap-4">
          {Navigation.map((item, idx) => (
            <div key={idx} className="w-full h-fit relative group">
              <button className="flex h-5 py-5 w-full items-center justify-center">
                <div className="h-fit w-full items-center justify-center flex dark:hover:border-[#F7F8FA] hover:border-r-[3px] hover:border-[#0D062D] dark:hover:border-[#94A3B8]">
                  <img src={`${item?.icon}`} className="w-10 h-5" alt="" />
                </div>
              </button>
              <div
                className="group-hover:flex absolute inset-0 left-20 hidden items-center w-fit px-4 py-2 rounded-lg 
                bg-[#E2E8F0] dark:bg-[#475569] text-[#0D062D] dark:text-[#F8FAFC] shadow-lg"
              >
                {item?.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ThemeSwitcher />

      <div className="w-full flex flex-col gap-5 pb-5">
        {ActionBtn.map((item, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-center justify-center w-full group"
          >
            <button className="flex h-fit w-full items-center justify-center dark:hover:border-[#F7F8FA] hover:border-r-[3px] hover:border-[#0D062D] dark:hover:border-[#94A3B8]">
              <img src={item?.icon} className="w-10 h-5" alt="" />
            </button>
            <div
              className="text-nowrap group-hover:flex absolute inset-0 left-20 hidden items-center w-fit px-4 py-2 rounded-lg 
              bg-[#E2E8F0] dark:bg-[#475569] text-[#0D062D] dark:text-[#F8FAFC] shadow-lg"
            >
              {item?.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;