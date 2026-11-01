import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "BSP MASTER CONTROL CENTER", description: "Tsarin kula da makarantu, darussa da ajiyar sauti na BSP." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ha"><body>{children}</body></html>; }