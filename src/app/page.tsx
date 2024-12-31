"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white">
      <div className="text-center space-y-6">
        <p className="text-4xl font-bold tracking-tight -lg">
          Select your destination below
        </p>
        <div className="flex  justify-center">
          <Button
            className="text-white px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-600/70 hover:scale-[1.05] font-semibold transition-all duration-500 shadow-md border border-indigo-700"
            onClick={() => router.push("/table/1")}
          >
            Go to The Table Page
          </Button>
        </div>
        <p className="text-[20px] font-medium">
          Other Next js Projects i Want to Share
        </p>
        <div className="flex  justify-center space-x-3">
          <Button
            className="text-white px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-600/70 hover:scale-[1.05] font-semibold transition-all duration-500 shadow-md border border-indigo-700"
            onClick={() => window.open("https://three.swapnesh.icu/", "_blank")}
          >
            Three js With Next
          </Button>
          <Button
            className="text-white px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-600/70 hover:scale-[1.05] font-semibold transition-all duration-500 shadow-md border border-indigo-700"
            onClick={() => window.open("https://swapnesh.icu/", "_blank")}
          >
            My Shopping App
          </Button>
        </div>
        <p className="text-sm font-[100] ">
          Note : Still Working on My Shopping App
        </p>
        <p className="text-[20px] font-medium">GitHub Repos</p>
        <div className="flex  justify-center space-x-3">
          <Button
            className="text-white px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-600/70 hover:scale-[1.05] font-semibold transition-all duration-500 shadow-md border border-indigo-700"
            onClick={() =>
              window.open("https://github.com/swapnesh839/project", "_blank")
            }
          >
            This App
          </Button>
          <Button
            className="text-white px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-600/70 hover:scale-[1.05] font-semibold transition-all duration-500 shadow-md border border-indigo-700"
            onClick={() =>
              window.open("https://github.com/swapnesh839/threenext", "_blank")
            }
          >
            Three js With Next
          </Button>
          <Button
            className="text-white px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-600/70 hover:scale-[1.05] font-semibold transition-all duration-500 shadow-md border border-indigo-700"
            onClick={() =>
              window.open(
                "https://github.com/swapnesh839/buynestfrontend",
                "_blank"
              )
            }
          >
            My Shopping App
          </Button>
        </div>
      </div>
    </div>
  );
}
