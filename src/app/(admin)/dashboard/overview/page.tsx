import SellChart from "@/app/ui/dashboard/overview/SellChart"
import Statistics from "@/app/ui/dashboard/overview/Statistics"

function page() {
  return (
    <div className="w-full">
      <Statistics />
      <SellChart />
    </div>
  )
}

export default page