import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { db } from "../firebase";



const NewChat = () => {
  const router = useRouter();

  const { data: session } = useSession();

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );
    router.push(`/chat/${doc.id}`);
  };

  return (
    <div onClick={createNewChat} className="border-grey-700 border chatRow">
      <PlusIcon className="h-8 w-8 text-yellow-300" />
      <p>New Chat</p>
    </div>
  );
};

export default NewChat;
