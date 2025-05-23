"use client"

import { Checkbox } from "@/components/ui/checkbox"

export default function CheckboxWithAgreement({ checked, onChange }) {
  return (
    <div className="mt-3 flex items-start space-x-2">
      <Checkbox 
        id="terms1" 
        className="border-black"
        checked={checked}
        onCheckedChange={(e) => onChange(!!e)}
      />
      <label
        htmlFor="terms1"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Wyrażam zgodę na przetwarzanie moich danych osobowych, w celach marketingowych.
      </label>
    </div>
  )
}
