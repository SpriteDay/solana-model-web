import "@/styles/globals.css"
import type { Metadata } from "next"
import { mainFont, titleFont } from "./fonts"
import { Env } from "@/env"
import { logger } from "@/lib/logger"
import { BASE_URL } from "@/lib/constants"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: "<title>",
    description: "<description>",
    keywords: ["<keword1>"],
    openGraph: {
        title: "<title>",
        description: "<description>",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "<alt>",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "<title>",
        description: "<description>",
        images: ["/twitter-image.jpg"],
    },
    icons: {
        icon: [
            {
                rel: "icon",
                url: "/favicon/favicon-96x96.png",
                sizes: "96x96",
                type: "image/png",
            },
            { rel: "icon", url: "/favicon/favicon.svg", type: "image/svg+xml" },
            { rel: "shortcut icon", url: "/favicon/favicon.ico" },
        ],
        apple: "/favicon/apple-touch-icon.png",
    },
    other: {
        "deployment-version": new Date().toISOString(),
    },
}
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    logger.log({ "MY_SERVER_VAR": Env.MY_SERVER_VAR })
    return (
        <html
            lang="en"
            className={cn(
                "h-full",
                "antialiased",
                mainFont.variable,
                titleFont.variable,
            )}
        >
            <body className="flex min-h-full flex-col font-sans">
                {children}
            </body>
        </html>
    )
}
