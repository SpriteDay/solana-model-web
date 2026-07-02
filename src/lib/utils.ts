import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { logger } from "./logger"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function nbsp(args: TemplateStringsArray) {
    return args.join("\xa0").replaceAll(" ", "\xa0")
}

export async function copyToClipboard(text: string): Promise<boolean> {
    // Try using the modern Clipboard API first
    if (navigator.clipboard && window.isSecureContext) {
        try {
            await navigator.clipboard.writeText(text)
            return true
        } catch (err) {
            logger.warn("Clipboard API failed:", err)
            // Fall through to fallback
        }
    }

    // Fallback for older browsers or non-secure contexts
    try {
        // Create a temporary textarea element
        const tempTextArea = document.createElement("textarea")
        tempTextArea.value = text

        // Make the textarea out of viewport
        tempTextArea.style.position = "fixed"
        tempTextArea.style.left = "-999999px"
        tempTextArea.style.top = "-999999px"
        document.body.appendChild(tempTextArea)

        // Select and copy the text
        tempTextArea.focus()
        tempTextArea.select()

        const success = document.execCommand("copy")

        // Remove the temporary textarea
        document.body.removeChild(tempTextArea)

        return success
    } catch (err) {
        logger.error("Fallback clipboard copy failed:", err)
        return false
    }
}
