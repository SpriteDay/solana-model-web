import { Geist, Montserrat } from "next/font/google"

export const titleFont = Montserrat({
    variable: "--font-title",
    subsets: ["latin"],
})

export const mainFont = Geist({
    variable: "--font-main",
    subsets: ["latin"],
})
