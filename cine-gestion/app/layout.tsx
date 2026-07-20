"use client";
import ReduxProvider from "./reduxprovider";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="es">
            <body>

                <ReduxProvider>
                    {children}
                </ReduxProvider>

            </body>
        </html>
    );
}