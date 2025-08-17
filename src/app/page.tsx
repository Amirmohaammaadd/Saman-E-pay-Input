"use client"

import { useRouter } from "next/navigation";

export default function Home() {

  const navigate = useRouter()

  return (
    <main className="h-screen flex flex-col gap-10 justify-center items-center">
      <h1 className="bg-blue-400 text-2xl shadow-lg p-5 rounded-md text-white">
        تسک پروژه پرداخت الکترونیک سامان
      </h1>

      <button onClick={() => navigate.push("/form")} className="bg-blue-500 p-3 rounded-md text-white cursor-pointer hover:bg-blue-600 transition-colors duration-200">
        ورود به صفحه From
      </button>

    </main>
  );
}
