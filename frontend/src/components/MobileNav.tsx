import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500" />
            </SheetTrigger>
            <SheetContent className="bg-white dark:bg-gray-900 p-6 space-y-3">
                <SheetTitle>
                    <span>
                        Welcome to MernEats.com!
                    </span>
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex">
                    <Button className="flex-1 font-bold bg-orange-500">Log In</Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav