"use client";

export default function TextFiles({ index }){
    if(index === 0){
        return(
            <div className="absolute inset-0 flex flex-col text-black p-4 md:p-10 lg:p-20">
                <h2 className="text-4xl lg:text-5xl xl:text-7xl mb-2 font-extrabold">ROZKWIT</h2>
                <p className="text-wrap mt-4 text-xl lg:text-2xl xl:text-3xl ">Umiemy rozwinąć Twój region tak, by niczego Ci nie brakowało. Nie jest to tylko suchy slogan. <strong>Od 2014 roku organizujemy największe lokalne wydarzenia i programy pod szyldem „My Młodzi” oraz „Nasze Miasto”</strong>, a dziś wspólnie jako fundacja „Rozkwit” zwiększamy jakość życia mieszkańców. Dotarliśmy do tysięcy rodzin z „Zwariowanymi Blokowiskami”, wsparliśmy dziesiątki nastolatków naszymi programami, pomogliśmy mieszkańcom w rozwiązywaniu ich codziennych problemów i ożywiliśmy imprezami nawet najbardziej zabetonowane zakątki miast.<strong> To dopiero początek, który możesz z nami tworzyć!</strong></p>
            </div>
        );
    }
    // tutaj poprawic
    else if (index === 1){
        return(
            <div className="absolute inset-0 flex flex-col text-black p-4 md:p-10 lg:p-20">
                <h2 className="text-4xl md:text-5xl xl:text-7xl font-extrabold">ZDOLNI!</h2> 
                <p className="mt-4 text-xl overflow-auto md:text-2xl lg:text-xl xl:text-4xl text-wrap max-w-[60%] md:pr-20 lg:pr-40">Przegrani już na starcie. Wiele Młodych tak właśnie określa swoją sytuacje przez brak dostępu do wysokiej jakości placówek edukacyjnych, zajęć pozalekcyjnych, możliwości rozwoju. Tylko odważni nastolatkowie próbują sięgnąć po swoje marzenia. Właśnie dla nich tworzymy program „Zdolni!”. <strong>To pierwsze stypendium, które nie ogranicza się do sztywnych kryteriów takich jak oceny, osiągnięcia, czy zaangażowanie w szkole.</strong> Zgłosić może się każdy z swoim planem na rozwój. Doceniamy Młodych za ich pasję i pozwalamy im samodzielnie decydować, jak wykorzystać nagrodę, by spełniać marzenia i rozwijać swoje talenty. <strong>To właśnie my jako pierwsi w regionie doceniliśmy tak mocno Urszulę Sipko, kilkukrotną mistrzynię Polski i medalistkę mistrzostw Europy.</strong></p>
            </div>
        );
    }
    else if(index === 2){
        return(
            <div className="absolute inset-0 flex flex-col text-black p-4 md:p-10 lg:p-20">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">ZWARIOWANE BLOKOWISKA</h2>
                <p className="mt-4 text-wrap text-base md:text-lg lg:text-xl xl:text-2xl">„Zwariowane Blokowiska” to wyjątkowy cykl wakacyjnych spotkań, który od 10 lat ożywia osiedla i wnosi kulturę, sport oraz rekreację tam, gdzie często brakuje takich możliwości. <strong>Naszym celem jest dotarcie do dzieci i ich rodziców z mniejszych społeczności, którzy na co dzień nie mają dostępu do podobnych atrakcji. Od dmuchanych zjeżdżalni i darmowych lodów, po spektakle teatralne – każda edycja to nie tylko zabawa, ale także inspiracja i budowanie więzi.</strong> „Zwariowane Blokowiska” to coś więcej niż rozrywka – to tworzenie przestrzeni, gdzie każdy, bez względu na miejsce zamieszkania, może poczuć się częścią czegoś wyjątkowego.</p>
            </div>
        )
    }
    
    else if(index === 3){
        return(
            <div className="absolute inset-0 flex flex-col text-black p-4 md:p-10 lg:p-20">
                <h2 className="text-4xl md:text-5xl xl:text-7xl font-bold">AKTYWATOR</h2> 
                <p className="mt-4 text-wrap text-base md:text-2xl lg:text-[1.6vw]">Ponad połowa uczniów w Polsce nie odczuwa motywacji, a prawie 60% czuje się bezużyteczna. Musieliśmy zacząć działać, by dać Młodym promyk nadziei. Tak powstał program „Aktywator”. <strong>Cykl szkoleń skierowany do uczniów szkół średnich, na których eksperci ukazują jak nastolatkowie mogą zmieniać swoje najbliższe otoczenie.</strong> Nasze warsztaty to praktyczne lekcje negocjacji, zarządzania projektami i pracy zespołowej, ale przede wszystkim przestrzeń, gdzie Młodzi czują, że ich pomysły mają znaczenie. </p>
            </div>
        );
    }
    
    else if(index === 4){
        return(
            <div className="absolute inset-0 flex flex-col text-black p-4 md:p-10 lg:p-20">
                <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold">ROZRYWKA</h2>
                <p className="mt-4 pr-10 text-base md:text-3xl overflow-auto lg:text-xl xl:text-4xl 2xl:text-5xl max-w-[50%] text-wrap md:pr-24">Czy pamiętasz, kiedy ostatnio bawiłeś się tak, że chciałeś, by wieczór trwał wiecznie? My chcemy, żeby takie chwile były normą w Bartoszycach. <strong>Dlatego zamiast kolejnego festiwalu disco polo, proponujemy wydarzenia z charakterem.</strong> Koncerty, Silent Disco, DJ sety, imprezy, konkursy i wiele więcej. Ożywiamy miasto, ale także pokazujemy mieszkańcom, że rozrywka może być różnorodna i niezapomniana.</p>
            </div>
        );
    }
    
    else if(index === 5){
        return(
            <div className="absolute inset-0 flex flex-col text-black p-4 md:p-8 lg:p-16">
                <h2 className="text-4xl md:text-5xl xl:text-7xl font-bold">INFRASTRUKTURA</h2>
                <p className="mt-4 text-base md:text-xl lg:text-[1.6vw] text-wrap">Czy Twoje miasto naprawdę odpowiada na Twoje potrzeby? Podczas spacerów badawczych analizujemy przestrzeń miejską i odkrywamy, jak wiele potencjału naszych miast marnuje się przez błędy w ich organizacji. Przyglądamy się chodnikom, zieleni, stanowi technicznemu ulic i osiedli, zbieramy opinie mieszkańców i zgłaszamy konkretne wnioski do urzędów, by wprowadzać realne zmiany. Wspólnie projektujemy rozwiązania, które sprawiają, że miasta stają się bardziej funkcjonalne, dostępne i przyjazne. <strong>Działamy po to, byś czuł się lepiej w każdym miejscu swojego miasta – na osiedlu, w parku, na placu zabaw z dzieckiem czy idąc na zakupy.</strong></p>
            </div>
        );
    }
    
    else if(index === 6){
        return(
            <div className="absolute inset-0 flex flex-col text-black p-4 md:p-10 lg:p-20">
                <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold">TWOJE SPRAWY</h2>
                <p className="mt-4 text-sm md:text-xl lg:text-[1.6vw] text-wrap ">Twoje problemy są dla nas priorytetem. To od nich zaczynamy każde działanie. W przeciwieństwie do innych, stawiamy na jakość, która nie jest tylko sloganem, ale konkretnym działaniem opartym na badaniach i realnych potrzebach mieszkańców. <strong>Analizujemy, organizujemy, pracujemy z ekspertami i wprowadzamy zmiany, które mają znaczenie.</strong> To Ty decydujesz, jakie miasto tworzysz, a my pomagamy to zrealizować. Twoja darowizna to nie tylko wsparcie, ale także narzędzie, dzięki któremu masz wpływ na swoje otoczenie. Czy akurat to czego Ci brakuje w Twoim mieście, to nie jest jakość? <strong>My ją zapewniamy.</strong></p>
            </div>
        );
    }
    else{
        return (<p>blad!</p>);
    }
}   