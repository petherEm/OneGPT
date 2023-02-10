import Sidebar from "../components/Sidebar";
import { SessionProvider } from "../components/SessionProvider";
import ClientProvider from "../components/ClientProvider";

import { getServerSession } from "next-auth";
import "../styles/globals.css";

import { authOptions } from "../pages/api/auth/[...nextauth]";
import Login from "../components/Login";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  console.log(session);

  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex flex-col md:flex-row bg-gradient-to-l from-gray-700 via-gray-900 to-black">
              {/* Sidebar  */}

              <div className="mt-10 flex flex-col items-center md:items-start md:h-screen overflow-y-auto overflow-x-hidden md:min-h-[20rem] md:min-w-[450px]">
                <Sidebar />
              </div>

              {/* ClientProvider Notifications  */}

              <ClientProvider />

              <div className="mt-20 flex justify-center w-full">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
