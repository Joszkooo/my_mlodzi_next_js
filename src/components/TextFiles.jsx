"use client";

export default function TextFiles({ index }){
    const div_base_styles = "text-black px-4 md:px-10 lg:px-12"
    const h1_base_styles = "h1_clamp font-bold uppercase p-4 md:p-8 tracking-wide"
    const p_base_styles = "p_clamp break-words p-4 md:p-8"
    if(index === 0){
        return(
            <div className={`${div_base_styles}`}>
                <h1 className={`${h1_base_styles}`}>ROZKWIT</h1>
                <p className={`${p_base_styles}`}>Umiemy rozwinąć Twój region tak, by niczego Ci nie brakowało. Nie jest to tylko suchy slogan. <strong>Od 2014 roku organizujemy największe lokalne wydarzenia i programy pod szyldem „My Młodzi” oraz „Nasze Miasto”</strong>, a dziś wspólnie jako fundacja „Rozkwit” zwiększamy jakość życia mieszkańców. Dotarliśmy do tysięcy rodzin z „Zwariowanymi Blokowiskami”, wsparliśmy dziesiątki nastolatków naszymi programami, pomogliśmy mieszkańcom w rozwiązywaniu ich codziennych problemów i ożywiliśmy imprezami nawet najbardziej zabetonowane zakątki miast.<strong> To dopiero początek, który możesz z nami tworzyć!</strong></p>
            </div>
        );
    }
    // tutaj poprawic
    else if (index === 1){
        return(
            <div className={`${div_base_styles}`}>
                <h2 className={`${h1_base_styles}`}>ZDOLNI!</h2> 
                <p className={`${p_base_styles}`}>Przegrani już na starcie. Wiele Młodych tak właśnie określa swoją sytuacje przez brak dostępu do wysokiej jakości placówek edukacyjnych, zajęć pozalekcyjnych, możliwości rozwoju. Tylko odważni nastolatkowie próbują sięgnąć po swoje marzenia. Właśnie dla nich tworzymy program „Zdolni!”. <strong>To pierwsze stypendium, które nie ogranicza się do sztywnych kryteriów takich jak oceny, osiągnięcia, czy zaangażowanie w szkole.</strong> Zgłosić może się każdy z swoim planem na rozwój. Doceniamy Młodych za ich pasję i pozwalamy im samodzielnie decydować, jak wykorzystać nagrodę, by spełniać marzenia i rozwijać swoje talenty. <strong>To właśnie my jako pierwsi w regionie doceniliśmy tak mocno Urszulę Sipko, kilkukrotną mistrzynię Polski i medalistkę mistrzostw Europy.</strong></p>
            </div>
        );
    }
    else if(index === 2){
        return(
            <div className={`${div_base_styles}`}>
                <h2 className={`${h1_base_styles}`}>ZWARIOWANE BLOKOWISKA</h2>
                <p className={`${p_base_styles}`}>„Zwariowane Blokowiska” to wyjątkowy cykl wakacyjnych spotkań, który od 10 lat ożywia osiedla i wnosi kulturę, sport oraz rekreację tam, gdzie często brakuje takich możliwości. <strong>Naszym celem jest dotarcie do dzieci i ich rodziców z mniejszych społeczności, którzy na co dzień nie mają dostępu do podobnych atrakcji. Od dmuchanych zjeżdżalni i darmowych lodów, po spektakle teatralne – każda edycja to nie tylko zabawa, ale także inspiracja i budowanie więzi.</strong> „Zwariowane Blokowiska” to coś więcej niż rozrywka – to tworzenie przestrzeni, gdzie każdy, bez względu na miejsce zamieszkania, może poczuć się częścią czegoś wyjątkowego.</p>
            </div>
        )
    }
    
    else if(index === 3){
        return(
            <div className={`${div_base_styles}`}>
                <h2 className={`${h1_base_styles}`}>AKTYWATOR</h2> 
                <p className={`${p_base_styles}`}>Ponad połowa uczniów w Polsce nie odczuwa motywacji, a prawie 60% czuje się bezużyteczna. Musieliśmy zacząć działać, by dać Młodym promyk nadziei. Tak powstał program „Aktywator”. <strong>Cykl szkoleń skierowany do uczniów szkół średnich, na których eksperci ukazują jak nastolatkowie mogą zmieniać swoje najbliższe otoczenie.</strong> Nasze warsztaty to praktyczne lekcje negocjacji, zarządzania projektami i pracy zespołowej, ale przede wszystkim przestrzeń, gdzie Młodzi czują, że ich pomysły mają znaczenie. </p>
            </div>
        );
    }
    
    else if(index === 4){
        return(
            <div className={`${div_base_styles}`}>
                <h2 className={`${h1_base_styles}`}>ROZRYWKA</h2>
                <p className={`${p_base_styles}`}>Czy pamiętasz, kiedy ostatnio bawiłeś się tak, że chciałeś, by wieczór trwał wiecznie? My chcemy, żeby takie chwile były normą w Bartoszycach. <strong>Dlatego zamiast kolejnego festiwalu disco polo, proponujemy wydarzenia z charakterem.</strong> Koncerty, Silent Disco, DJ sety, imprezy, konkursy i wiele więcej. Ożywiamy miasto, ale także pokazujemy mieszkańcom, że rozrywka może być różnorodna i niezapomniana.</p>
            </div>
        );
    }
    
    else if(index === 5){
        return(
            <div className={`${div_base_styles}`}>
                <h2 className={`${h1_base_styles}`}>INFRASTRUKTURA</h2>
                <p className={`${p_base_styles}`}>Czy Twoje miasto naprawdę odpowiada na Twoje potrzeby? Podczas spacerów badawczych analizujemy przestrzeń miejską i odkrywamy, jak wiele potencjału naszych miast marnuje się przez błędy w ich organizacji. Przyglądamy się chodnikom, zieleni, stanowi technicznemu ulic i osiedli, zbieramy opinie mieszkańców i zgłaszamy konkretne wnioski do urzędów, by wprowadzać realne zmiany. Wspólnie projektujemy rozwiązania, które sprawiają, że miasta stają się bardziej funkcjonalne, dostępne i przyjazne. <strong>Działamy po to, byś czuł się lepiej w każdym miejscu swojego miasta – na osiedlu, w parku, na placu zabaw z dzieckiem czy idąc na zakupy.</strong></p>
            </div>
        );
    }
    
    else if(index === 6){
        return(
            <div className={`${div_base_styles}`}>
                <h2 className={`${h1_base_styles}`}>TWOJE SPRAWY</h2>
                <p className={`${p_base_styles}`}>Twoje problemy są dla nas priorytetem. To od nich zaczynamy każde działanie. W przeciwieństwie do innych, stawiamy na jakość, która nie jest tylko sloganem, ale konkretnym działaniem opartym na badaniach i realnych potrzebach mieszkańców. <strong>Analizujemy, organizujemy, pracujemy z ekspertami i wprowadzamy zmiany, które mają znaczenie.</strong> To Ty decydujesz, jakie miasto tworzysz, a my pomagamy to zrealizować. Twoja darowizna to nie tylko wsparcie, ale także narzędzie, dzięki któremu masz wpływ na swoje otoczenie. Czy akurat to czego Ci brakuje w Twoim mieście, to nie jest jakość? <strong>My ją zapewniamy.</strong></p>
            </div>
        );
    }
    else{
        return (<p>blad!</p>);
    }
}   