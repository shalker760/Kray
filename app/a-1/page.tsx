"use client"
import { useRouter } from "next/navigation"
import { TypingText, Color, Shake, Blink, Bold } from '@/components/text'

export default function event1() {
  const router = useRouter()
  

  return (
    <>
      <div className='py-2 text-5xl'>
      <TypingText duration={500}>
       <div>незнакомец1:он проснулся!</div>
       незнакомец2:тихо ты! дай ему очнутся нормально
       
        </TypingText>
      </div>
      <div className="absolute bottom-[5%] left-[50%] translate-x-[-50%] py-2 text-2xl">
        <div onClick={() => router.push("/a-2")}> кто я? </div>
        <div onClick={() => router.push("/a-2")}> где я? </div>
        
      </div>
    </>
  )
}
