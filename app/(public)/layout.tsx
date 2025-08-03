import "@/app/globals.css";
import Nav from "@/app/(public)/Nav";
import Footer from "./Footer";
import ScrollReveal from "@/components/ScrollReveal";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      {children}

      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </>
  );
}
