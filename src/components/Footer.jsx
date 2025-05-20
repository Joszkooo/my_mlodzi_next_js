import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 py-8 w-full">
      <div className="container mx-auto px-4">
        <Card className="bg-transparent shadow-none border-t">
          <CardContent className="px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start text-center lg:text-left">
              <div className="flex flex-col space-y-2">
                <Link href="/rules" className="hover:underline">
                  Regulamin
                </Link>
              </div>

              <div className="flex flex-col space-y-2">
                <p>
                  Telefon:
                  <a href="tel:123123123" className="hover:underline ml-1">
                    123 123 123
                  </a>
                </p>
                <p>
                  Mail:
                  <a
                    href="mailto:mymlodzi@gmail.com"
                    className="hover:underline ml-1"
                  >
                    mymlodzi@gmail.com
                  </a>
                </p>
              </div>

              <div className="text-sm">
                <p>© 2024 My Młodzi Ltd. Wszystkie prawa zastrzeżone.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </footer>
  );
}
