import { LuCalendarDays } from "react-icons/lu"
import { AnalyticDataCard, AnalyticBarCard, AnalyticProp } from "./components/AnalyticData";
import ChartStyle from "./components/Chart";
import { formattedDate } from "./hooks/useDate";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import StockTable from "./components/stock";

const HomePage =() => {

    const [analytics, setAnalytics] = useState<AnalyticProp[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const mockResponse = {
              analytics: [
                {
                  title: "Total Investment",
                  icons: '/box-tick.svg',
                  metric: "$350",
                  rating: "+23.5%",
                  arrow: "/trending-up.svg",
                  textColor: "text-[#34CAA5]",
                  backColor: "bg-analyticbggreen",
                  chart: "/GreenChart.svg",
                },
                {
                  title: "Total Profit",
                  icons: '/3d-rotate.svg',
                  metric: "$270",
                  rating: "-10.5%",
                  arrow: "/trending-down.svg",
                  textColor: "text-[#ED544E]",
                  backColor: "bg-analyticbgred",
                  chart: "/RedChart.svg",
                },
                {
                  title: "Dividends",
                  icons: '/RedChart.svg',
                  metric: "1567",
                  rating: "-20.5%",
                  arrow: "/trending-down.svg",
                  textColor: "text-[#ED544E]",
                  backColor: "bg-analyticbgred",
                  chart: "/RedChart.svg",
                },
                {
                  title: "Total Income",
                  icons:'/coin.svg',
                  metric: "$350",
                  rating: "+23.5%",
                  arrow: "/trending-up.svg",
                  textColor: "text-[#34CAA5]",
                  backColor: "bg-analyticbggreen",
                  chart: "/GreenChart.svg",
                },
              ],
            };
            setTimeout(() => {
              setAnalytics(mockResponse.analytics);
              setLoading(false);
              toast.success("Analytics Data Fetch successfully");
            }, 2000);
          } catch (error: unknown) {
            toast.error("Error fetching analytics data");
            console.error("Error fetching analytics:", error);
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);
    


    return(
        <>
            <div className="flex w-full h-full bg-grey50 dark:bg-grey900">
                <div className="flex flex-col w-full h-full ">
                    <div className="flex w-full h-full">
                        <div className="flex flex-col w-full bg-[#FAFAFA] dark:bg-grey900 gap-5">
                            <div className="flex lg:hidden items-center self-end gap-2.5 ">
                                <LuCalendarDays className="text-black dark:text-white text-xl" />
                                <div className="font-Inter font-medium text-sm text-textCol dark:text-grey200">
                                    {formattedDate}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 lg:flex-row gap-5">
                                <div className="flex w-full">
                                    <ChartStyle/>
                                </div>
                                <div className=" w-full">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4 w-full ">
                                        {loading ? (
                                        <div className=" bg-gray-600 animate-pulse"/>
                                        ) : (
                                        analytics.map((item, index) => (
                                            <AnalyticDataCard
                                            key={index}
                                            icons={item.icons}
                                            chart={item.chart}
                                            title={item.title}
                                            metric={item.metric}
                                            backColor={item.backColor}
                                            textColor={item.textColor}
                                            arrow={item.arrow}
                                            rating={item.rating}
                                            />
                                        ))
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:flex-row gap-5 justify-between">
                                <div className="flex flex-col w-full p-6 bg-white dark:bg-grey800 dark:border-grey700 border border-[#EDF2F7] rounded-[14px] gap-5 overflow-hidden">
                                    <div className="flex justify-between items-center w-full">
                                        <div className=" font-jakarta font-semibold text-textCol dark:text-grey200 text-sm sm:text-lg">
                                            Stocks
                                        </div>
                                        <div className="font-jakarta font-medium text-[#34CAA5] opacity-100 text-sm sm:text-lg">
                                            See All
                                        </div>
                                    </div>
                                    <div className="w-full flex overflow-auto">
                                    
                                        <StockTable/>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full px-2.5 py-2 sm:px-5 sm:py-4 bg-white dark:bg-grey800 dark:border-grey700 border border-[#EDF2F7] rounded-[8px] gap-5 overflow-hidden">
                                    <div className="flex justify-between items-center w-full">
                                        <div className=" font-jakarta font-semibold text-textCol dark:text-grey200 text-sm sm:text-lg">
                                            Top Platform
                                        </div>
                                        <div className="font-jakarta font-medium text-[#34CAA5] opacity-100 text-lg">
                                            See All
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full lg:1/2 overflow-auto">
                                        <AnalyticBarCard
                                            title="Book Bazaar"
                                            width="w-[50%]"
                                            color="bg-purple"
                                            amount="2,500,00"
                                            percentage="+15%"
                                        />
                                        <AnalyticBarCard
                                            title="Artisan Aisle"
                                            width="w-[40%]"
                                            color="bg-blue"
                                            amount="1,800,00"
                                            percentage="+10%"
                                        />
                                        <AnalyticBarCard
                                            title="Toy Troop"
                                            width="w-[25%]"
                                            color="bg-orange"
                                            amount="1,200,00"
                                            percentage="+8%"
                                        />
                                        <AnalyticBarCard
                                            title="XStore"
                                            width="w-[20%]"
                                            color="bg-red"
                                            amount="2,500,00"
                                            percentage="+15%"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 

export default HomePage
