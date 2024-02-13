import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Toaster } from "@/components/ui/sonner";
import { SocketProvider } from "@/providers/socket";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SocketProvider>
        <Component {...pageProps} />
        <Toaster />
      </SocketProvider>
    </ThemeProvider>
  );
}
