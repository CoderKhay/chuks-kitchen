import {Menu} from 'lucide-react'

const NavigationBar = () => {
  return (
    <nav className="flex justify-between items-center p-2 pr-6 pl-6 bg-white shadow-2xs fixed top-0 bottom-0 z-1 w-full h-12">
        <h2 className="text-[#FF7A18] font-Island text-3xl">Chuks Kitchen</h2>
     <Menu/>
    </nav>
  )
}

export default NavigationBar