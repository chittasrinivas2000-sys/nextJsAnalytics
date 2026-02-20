import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-md">
      <h1 className="text-3xl font-bold">Settings</h1>

      <Input placeholder="Company Name" />
      <Input placeholder="Support Email" />

      <Button>Save Changes</Button>
    </div>
  )
}