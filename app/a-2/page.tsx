"use client"
import { useRouter } from "next/navigation"
import { TypingText, Color, Shake, Blink, Bold } from '@/components/text'

export default function event1() {
  const router = useRouter()
  

  return (
    <>
      <div className='py-2 text-5xl'>
      <TypingText duration={500}>
        ты че бля?
        </TypingText>
      </div>
      <div className="absolute bottom-[5%] left-[50%] translate-x-[-50%] py-2 text-2xl">
        <div onClick={() => router.push("/start")}> 1 </div>
        
      </div>
    </>
  )
}