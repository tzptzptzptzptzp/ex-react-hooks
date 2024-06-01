import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-2 p-24 ${inter.className}`}
    >
      <Link href={"/useCallback"}>useCallback</Link>
      <Link href={"/useContext"}>useContext</Link>
    </main>
  );
}
