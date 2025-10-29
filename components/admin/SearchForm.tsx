import { Search } from "lucide-react"
import { Label } from "@/components/ui/label"
import { SidebarInput } from "@/components/ui/sidebar"
export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props}>
      <div className="relative">
        <Label htmlFor="search" className="sr-only">
          Search
        </Label>
        <SidebarInput
          id="search"
          placeholder="Search..."
          className="h-12 pl-7 ml-2 w-full md:w-124 lg:w-160 rounded-3xl outline-none"
        />
        <Search className="pointer-events-none absolute top-1/2 left-3 size-6 -translate-y-1/2 opacity-50 select-none" />
      </div>
    </form>
  )
}