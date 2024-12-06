import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import "./globals.css";
import { ConvexClientProvider } from "@/components/convex-client-provider";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Kasump Docs",
    description: "Collaborative document editing.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={font.className}>
                <NuqsAdapter>
                    <ConvexClientProvider>{children}</ConvexClientProvider>
                </NuqsAdapter>
            </body>
        </html>
    );
}
