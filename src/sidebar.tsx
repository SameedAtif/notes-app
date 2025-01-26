import { Link, useParams } from "react-router";
import {
  LayoutTemplate,
  Download,
  Trash2,
  FileText,
  ListTodo,
  Bell,
  Music,
  Clock,
  Box,
  Code,
  Hammer,
  Plus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { capitalizeFirstLetter } from "./lib/utils"


function isActivePage(page: string, item: string): boolean {
  return (capitalizeFirstLetter(page) === item)
}

export function Sidebar() {
  const { page } = useParams();

  const navigation = [
    { name: "Templates", icon: LayoutTemplate },
    { name: "Import", icon: Download },
    { name: "Trash", icon: Trash2 },
    { name: "WORKSPACES", divider: true },
    { name: "Notes", icon: FileText },
    { name: "Tasks", icon: ListTodo },
    { name: "Announcements", icon: Bell },
    { name: "Music", icon: Music },
    { name: "Deadlines", icon: Clock },
    { name: "Dashboard", icon: Box },
    { name: "Development", icon: Code },
    { name: "Skills", icon: Hammer },
  ]

  return (
    <div className="w-60 border-r flex flex-col sticky top-0 h-screen">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-black rounded-lg" />
          <span className="font-semibold">Awemd</span>
        </div>
      </div>
      <nav className="flex-1 px-3 overflow-y-auto">
        {navigation.map((item) =>
          item.divider ? (
            <div key={item.name} className="my-4">
              <Separator />
              <span className="text-xs text-gray-500 px-3 mt-2 block">{item.name}</span>
            </div>
          ) : (
            <Link to={`/${item.name.toLowerCase()}`}>
              <Button
                key={item.name}
                variant="ghost"
                className={cn("w-full justify-start gap-2 mb-1", isActivePage(page || "tasks", item.name) && "bg-gray-100")}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                {item.name}
              </Button>
            </Link>
          ),
        )}
      </nav>
      <div className="p-3 mt-auto">
        <Button className="w-full gap-2">
          <Plus className="w-4 h-4" />
          New Page
        </Button>
      </div>
    </div>
  )
}

