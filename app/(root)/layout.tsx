import StreamVideoProvider from "@/providers/streamClientProvider"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "YOOM",
    description: "Video calling App",
    icons: {
        icon: "/icons/logo.svg",
    },
};

const RootLayout = ({ children } : { children : React.ReactNode}) => {
    return (
        <main>
            <StreamVideoProvider>
                { children }
            </StreamVideoProvider>
        </main>
    )
}

export default RootLayout