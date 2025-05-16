import Link from 'next/link'

export default function Footer(){
    return(
        <footer className="text-center bg-[#f9f9f9] text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover"><Link href="/rules">Regulamin</Link></a>
            </nav>
            <aside>
                <p>Telefon: 123 123 123</p>
                <p>Mail: mymlodzi@gmail.com</p>
                <p>Copyright © 2024 - All right reserved by My Młodzi Ltd</p>
            </aside>
        </footer>
    );
}