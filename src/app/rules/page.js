import Link from "next/link";
import { Button } from "@/components/ui/button";

const terms = [
  "Strona internetowa prowadzona jest przez Fundację “Rozkwit” z siedzibą w ul. Zakole 17, 11-200 Bartoszyce, Polska, NIP: 7432052415, REGON: 540168402, zarejestrowany w KRS pod nr 0001137782. Możesz skontaktować się z Administratorem pisząc na adres e-mail: mymlodzibartoszyce@gmail.com.",
  "Strona internetowa umożliwia wsparcie finansowe statutowych działań Fundacji „Rozkwit”.",
  "Niniejszy regulamin ma na celu określenie warunków przekazywania darowizn online za pomocą formularza dostępnego na stronie, realizowanego przez serwis STRIPE.",
  "Płatności online są obsługiwane przez operatora płatności STRIPE PAYMENTS SP. Z O.O., WARSZAWA; Numer KRS: 0000937028; Numer REGON: 520642121 ; Numer NIP: 701-106-24-74",
  "Darowiznę może przekazać każda pełnoletnia osoba fizyczna, osoba prawna lub jednostka organizacyjna. Osoby te będą nazywane dalej „Darczyńcami”.",
  "W celu przekazania darowizny jednorazowej po wypełnieniu formularza obecnego na niniejszej stronie Darczyńca zostaje odpowiednio przekierowany do strony operatora.",
  "W ramach płatności online Darczyńca może dokonać wpłat za pomocą: przelewów elektronicznych, przelewów tradycyjnych oraz kart płatniczych. Aktualna lista banków współpracujących i metod płatności jest dostępna na stronie serwisu. ",
  "Każdy Darczyńca, który wypełni formularz i przejdzie do serwisu, może dodatkowo wyrazić dobrowolną zgodę na przetwarzanie danych podanych w formularzu w celach marketingowych, zgodnie z zapisami niniejszego Regulaminu. ",
  "Wypełniając dane w Formularzu, Darczyńca akceptuje Regulamin oraz wyraża zgodę na przetwarzanie Danych Osobowych przez Fundacje „Gdy Liczy się Czas”, zgodnie z warunkami Regulaminu i w celach w nim określonych. ",
  "Administratorem danych osobowych jest Fundacja „Rozkwit”, dane powyżej. ",
  "Darczyńcy przysługuje prawo dostępu do danych, ich poprawiania, żądania ich usunięcia, a także prawo ograniczenia przetwarzania, wniesienia sprzeciwu co do przetwarzania danych osobowych i prawo wniesienia skargi do organu nadzorczego, jeżeli dane są przetwarzane niezgodnie z wymogami prawnymi. ",
  "Dane będą przetwarzane w celu zawarcia i wykonywania umowy darowizny zawartej z Administratorem oraz dokonania niezbędnych rozliczeń w związku z jej zawarciem (w przypadku, gdy są niezbędne), a także w celu wypełniania naszej działalności statutowej. W przypadku wyrażenia dodatkowej, dobrowolnej zgody, dane będą przetwarzane także w celu marketingowym. ",
  "Dane nie są przetwarzane przez Administratora w sposób całkowicie zautomatyzowany oraz profilowane. ",
  "Podanie danych jest dobrowolne, jednak konsekwencją ich niepodania będzie niemożność zawarcia umowy. ",
  "W zakresie, w jakim dane przetwarzane są na podstawie odrębnej zgody, przysługuje Darczyńcy prawo cofnięcia zgody w dowolnym momencie. Pozostanie to jednak bez wpływu na zgodność z prawem przetwarzania danych, którego dokonano przed jej cofnięciem. ",
  "Dane osobowe będą przetwarzane zasadniczo przez czas do upływu okresu przedawnienia roszczeń i obowiązków wynikających z umowy zawartej z Administratorem. ",
  "Fundacja „Rozkwit” ma prawo do zmiany regulaminu w dowolnym momencie. ",
  "W kwestiach nieuregulowanych niniejszym regulaminem stosuje się przepisy powszechnie obowiązującego prawa. ",
]

export default function Rules() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          Regulamin
        </h1>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          {terms.map((text, idx) => (
            <li key={idx} className="text-base sm:text-lg leading-relaxed">
              {text}
            </li>
          ))}
        </ol>
        <div className="mt-6 flex justify-center">
          <Link href="/" passHref>
            <Button variant="secondary">Powrót do strony głównej</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
