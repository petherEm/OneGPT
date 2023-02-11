"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { db } from "../firebase";

import { useSession } from "next-auth/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { toast } from "react-hot-toast";
import ModelSelection from "./ModelSelection";
import useSWR from "swr";

type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  const { data: model } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");
    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name!}`,
      },
    };

    // add message to firebase
    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );

    // Toast notification to say 'Loading...'
    const notification = toast.loading("ChatGPT is thinking...");

    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      //Toast notification to say 'Success!'
      toast.success("ChatGPT has responded!", {
        id: notification,
      });
    });
  };

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <form
        onSubmit={sendMessage}
        className="p-5 space-x-5 flex items-center justify-between"
      >
        <input
          type="text"
          className="w-full bg-transparent focus:outline-none disabled:cursor-not-allowed disabled:text-gray-300"
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          placeholder="Enter your message here..."
        />

        <button
          disabled={!prompt || !session}
          type="submit"
          className="bg-[#11a37f] hover:opacity-50 text-white font-bold px-4 py-4 rounded-full cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>

      
    </div>
  );
};

export default ChatInput;
