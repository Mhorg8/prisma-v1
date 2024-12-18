import type {Metadata} from "next";
import LocalFont from 'next/font/local'
import "./globals.css";
import Header from "@/components/Header/Header";

const iranSans = LocalFont({
    src: [
        {
            path: "/fonts/IRANSansXFaNum-Regular.woff2",
            weight: '400',
            style: 'normal',
        }, {
            path: "/fonts/IRANSansXFaNum-Black.woff2",
            weight: '900',
            style: 'bolder',
        }, {
            path: "/fonts/IRANSansXFaNum-Bold.woff2",
            weight: '800',
            style: 'bold',
        },
        {
            path: "/fonts/IRANSansXFaNum-DemiBold.woff2",
            weight: '600',
            style: 'semibold',
        },
        {
            path: "/fonts/IRANSansXFaNum-Medium.woff2",
            weight: '500',
            style: 'medium',
        },
        {
            path: "/fonts/IRANSansXFaNum-Medium.woff2",
            weight: '300',
            style: 'light',
        },
    ]
})

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${iranSans.className} `}
        >
        <Header />
        {children}
        </body>
        </html>
    );
}
