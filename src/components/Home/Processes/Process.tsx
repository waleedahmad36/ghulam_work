import StrategyCircle from "./_components/CicleDots"




const Process = () => {
  return (
    <div   className=" flex flex-col bg-white justify-center items-center text-black " >
        <div   className="bg-black h-[20vh] w-[1px]" />
        <h3  className="text-[80px] my-6" >Our Process</h3>
        <div   className="bg-black h-[10vh] w-[1px]" />
        <div  className="w-12 h-12 flex justify-center items-center mt-3 mb-10 rounded-full border border-black" >1</div>
        <StrategyCircle/>
    </div>
  )
}

export default Process