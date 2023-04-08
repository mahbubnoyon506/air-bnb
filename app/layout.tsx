import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ToastProvider from "./providers/ToastProvider";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Cloning Airbnb",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const currentUser = await getCurrentUser() 

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToastProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
