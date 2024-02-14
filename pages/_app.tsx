import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Toaster } from "@/components/ui/sonner";
import { NotesProvider } from "@/providers/internal/notes";
import { SocketProvider } from "@/providers/vendor/socket";
import { ThemeProvider } from "next-themes";

import Layout from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SocketProvider>
        <NotesProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Toaster />
        </NotesProvider>
      </SocketProvider>
    </ThemeProvider>
  );
}
