
import { HiOutlineDocumentArrowDown } from "react-icons/hi2"

export interface AnalyticProp {
    chart: string
    icons: string
    title: string
    metric: string
    rating: string
    arrow: string
    textColor: string
    backColor: string
}

const AnalyticDataCard = ({ chart, icons, title, metric, rating, arrow, backColor, textColor }: AnalyticProp) => {
    return (
        <div className="flex flex-col justify-between w-full h-[180px] px-3 py-3 sm:px-4 sm:py-4 bg-white dark:bg-grey800 border border-[#EDF2F7] dark:border-grey700 rounded-[14px]">
            <div className="w-full flex items-center justify-between">
                <div className="flex w-10 h-10 items-center justify-center border border-[#E6E6E6] dark:border-grey600 rounded-full">
                    <img src={`${icons}`} alt="" className="w-6 h-6" />
                </div>
                <div className="flex">
                    <img src={`${chart}`} alt="" className="" />
                </div>
            </div>
            <div className="flex flex-col w-full gap-2.5">
                <div className="font-jakarta font-medium text-base sm:text-lg text-[#898989] dark:text-grey200">
                    {title}
                </div>
                <div className="font-jakarta font-medium text-lg sm:text-2xl text-secondary dark:text-grey300">
                    {metric}
                </div>
            </div>
            <div className="flex w-full items-center justify-between gap-2">
                <div className={`flex w-17.5 items-center px-4 py-1 rounded-[100px] ${backColor} gap-1`}>
                    <img className="w-[9px]" src={`${arrow}`} />
                    <div className={`font-jakarta font-medium text-xs ${textColor}`}>
                        {rating}
                    </div>
                </div>
                <div className="font-Inter font-normal text-sm text-[#606060] dark:text-grey400 text-right">
                    vs.previous month
                </div>
            </div>
        </div>
    )
}

const TableDataAnalysis = () => {
    const tableData = [
        {
            name: "Marcus Bergson",
            image: "/Marcus.svg",
            date: "Nov 15, 2023",
            amount: "$80,000",
            status: "Paid",
            statusColor: "text-[#34CAA5]",
        },
        {
            name: "Jaydon Vaccaro",
            image: "/Jaydon.svg",
            date: "Nov 15, 2023",
            amount: "$150,000",
            status: "Refund",
            statusColor: "text-[#ED544E]",
        },
        {
            name: "Corey Schleifer",
            image: "/Corey.svg",
            date: "Nov 15, 2023",
            amount: "$87,000",
            status: "Paid",
            statusColor: "text-[#34CAA5]",
        },
        {
            name: "Cooper Press",
            image: "/Marcus.svg",
            date: "Nov 15, 2023",
            amount: "$100,000",
            status: "Refund",
            statusColor: "text-[#ED544E]",
        },
        {
            name: "Phillip Lubin",
            image: "/Phillip.svg",
            date: "Nov 13, 2023",
            amount: "$78,000",
            status: "Paid",
            statusColor: "text-[#34CAA5]",
        },
    ]

    return (
        <div className="overflow-x-auto w-full">
            <table className="table-auto w-full border-collapse border-[#EDF2F6] dark:border-grey700">
                <thead className="bg-grey50 dark:bg-grey800">
                    <tr>
                        {["Name", "Date", "Amount", "Status", "Invoice"].map((item, index) => (
                            <th
                                key={index}
                                className="px-4 py-2 font-jakarta font-medium text-left text-[#9CA4AB] dark:text-grey200 text-sm md:text-base"
                            >
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr
                            key={index}
                            className="border-t border-[#EDF2F6] dark:border-grey700 hover:bg-grey100 dark:hover:bg-grey700"
                        >
                            <td className="px-4 py-2 flex items-center gap-2.5">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full">
                                    <img src={row.image} alt={row.name} className="w-full" />
                                </div>
                                <div className="font-jakarta font-medium text-secondary dark:text-grey300 text-sm md:text-base">
                                    {row.name}
                                </div>
                            </td>
                            <td className="px-4 py-2 font-jakarta font-normal text-grey500 dark:text-grey400 text-sm md:text-base">
                                {row.date}
                            </td>
                            <td className="px-4 py-2 font-jakarta font-medium text-[#0D062D] dark:text-grey400 text-sm md:text-base">
                                {row.amount}
                            </td>
                            <td
                                className={`px-4 py-2 font-jakarta font-normal ${row.statusColor} text-sm md:text-base`}
                            >
                                {row.status}
                            </td>
                            <td className="px-4 py-2 flex items-center gap-1.5 cursor-pointer">
                                <HiOutlineDocumentArrowDown className="text-sm text-[#0D062D] dark:text-grey400" />
                                <div className="font-jakarta font-normal text-[#0D062D] dark:text-grey400 text-sm">
                                    View
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

interface AnalyticBarCardProps {
    title: string
    width: string
    color: string
    amount: string
    percentage: string
}

const AnalyticBarCard: React.FC<AnalyticBarCardProps> = ({
    title,
    width,
    color,
    amount,
    percentage,
}) => {
    return (
        <div className="flex flex-col w-full gap-4">
            <div className="inline-flex items-center font-jakarta font-semibold text-lg text-[#22242C] dark:text-grey200">
                {title}
            </div>

            <div className="flex w-full h-3 bg-grey100 dark:bg-grey400 rounded-[40px]">
                <div className={`flex ${width} h-3 ${color} rounded-[40px]`} />
            </div>
            <div className="inline-flex justify-between items-center">
                <div className="font-jakarta font-normal text-lg text-[#525252] dark:text-grey300">
                    ${amount}
                </div>
                <div className="font-jakarta font-normal text-lg text-[#525252] dark:text-grey300">
                    {percentage}
                </div>
            </div>
        </div>
    )
}

export default AnalyticBarCard

export { AnalyticDataCard, TableDataAnalysis, AnalyticBarCard }