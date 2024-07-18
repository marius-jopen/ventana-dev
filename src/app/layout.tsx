import Grid from "./components/grid";
import '@/app/styles.css';
import Head from 'next/head'; // Import the Head component

export const metadata = {
    title: 'Ventana Dev',
    description: 'Ventana Dev',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <Head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body className="antialiased font-outfit bg-slate-50">
            {children}
            {/* <Grid /> Optionally uncomment this if you need the Grid component */}
        </body>
        </html>
    );
}
