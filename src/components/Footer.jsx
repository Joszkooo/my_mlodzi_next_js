import Link from "next/link";

export default function Footer() {
  return (
    <footer className="
        flex flex-col items-center text-center
        bg-[#f9f9f9] text-base-content rounded p-10
        space-y-6
        md:flex-row md:justify-between md:space-y-0
      ">

      <aside className="space-y-2">
        <Link href="/rules">Regulamin</Link>
        <p>Telefon: 123 123 123</p>
        <p>Mail: mymlodzi@gmail.com</p>
        <p>Copyright © 2024 - All right reserved by My Młodzi Ltd</p>
      </aside>
    </footer>
  );
}