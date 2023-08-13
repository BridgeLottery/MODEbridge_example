import Navbar from '../app/components/Navbar'
import LotteryBar from '../app/components/LotteryBar'
import Bridge from '../app/components/Bridge'


export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="bg-scroll bg-[url('/bg.svg')] h-[972px]">
        <LotteryBar />
        <Bridge />
      </div>
    </main>
  )
}
