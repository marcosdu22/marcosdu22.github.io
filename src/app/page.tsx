'use client'

import { Label } from "@/components/label"
import { Products } from "@/components/products"
import { LabelProvider } from "@/contexts/LabelContext"
import { redirect } from "next/navigation"


function Page() {
  return (
    redirect("/label")
  )
}
 
export default Page