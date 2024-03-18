import Image from "next/image"

export default function Avatar (){
  return (
    <div className="flex xl:max-w-none">
      <Image src={'/imgs/mohamed.png'} width={737} height={678} alt="" 
      className=" translate-0 w-full h-full "/>
    </div>
  )
}