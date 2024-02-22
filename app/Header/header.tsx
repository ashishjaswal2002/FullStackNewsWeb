import Link from "next/link";

export default function TopNotch() {
  return (
    <>
      <header className="p-8">
        <div className="flex justify-between">
          <h1 className="
             font-medium">
            <Link href="/" className="cursor-pointer">News Web Page</Link>
          </h1>

          <div>Dark Mode</div>
        </div>
      </header>
    </>
  );
}
