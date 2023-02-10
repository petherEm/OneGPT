"use client";

import React from "react";
import NewChat from "./NewChat";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";

const Sidebar = () => {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="p-2 flex flex-col md:min-h-screen text-white max-w-[350px]">
      <div className="flex-1 space-y-10">
        {session && (
          <div className="flex items-center  space-x-4">
            <h1>Hi, {session.user?.name}</h1>
            <img
              onClick={() => signOut()}
              src={session.user?.image!}
              className="rounded-full h-12 w-12 cursor-pointer mx-auto mb-2 hover:opacity-50"
              alt=""
            />
          </div>
        )}
        <div className="flex flex-col space-y-4">
          {/* NewChat */}

          <NewChat />

          <div className="hidden sm:inline">
            {/* ModelSelection */}
            <ModelSelection />
          </div>

          <div className="flex flex-col space-y-2 my-2">
            {loading && (
              <div className="animate-pulse text-center text-white">
                <p>Loading Chats...</p>
              </div>
            )}
            {/* Map through the ChatRows */}
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
