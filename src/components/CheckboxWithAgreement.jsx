"use client"

import { Checkbox } from "@/components/ui/checkbox"

export default function CheckboxWithAgreement() {
  return (
    <div className="items-top mt-3 flex space-x-2">
      <Checkbox id="terms1" className="border-black"/>
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Wyrażam zgodę na przetwarzanie moich danych osobowych, w celach marketingowych.
        </label>
      </div>
    </div>
  )
}
