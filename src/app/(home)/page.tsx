import { Button } from "@/components/ui/button"

export default function Home() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center">
            <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between px-16 py-32 sm:items-start">
                <Button className="font-heading">My Test Button</Button>
            </main>
        </div>
    )
}
