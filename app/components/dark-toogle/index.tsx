"use client"

import { BiMoon } from "react-icons/bi"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export function DarkToggle() {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="bg-transparent border-none hover:bg-slate-950">
                    <BiMoon className="h-5 w-5 hover:text-white" />
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-slate-950 text-white">
                <DropdownMenuItem>
                    <Link href="/">
                        Claro
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="/">
                        Escuro
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="/">
                        Sistema
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}