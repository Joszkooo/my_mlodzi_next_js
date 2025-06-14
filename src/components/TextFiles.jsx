"use client";

export default function TextFiles({ index }){
    const div_base_styles = "text-black px-4 md:px-10 lg:px-12"
    const h1_base_styles = "h1_clamp font-bold uppercase p-4 md:p-8 tracking-wide"
    const p_base_styles = "p_clamp break-words p-4 md:p-8"
    if(index === 0){
        return(
            <div className={`${div_base_styles}`}>
                <h1 className={`${h1_base_styles}`}>ROZKWIT</h1>
                <p className={`${p_base_styles}`}>Umiemy rozwinąć Twój region tak, by niczego Ci nie brakowało. Nie jest to tylko suchy slogan.<strong> Od 2014 roku organizujemy największe lokalne wydarzenia i programy pod szyldem „My Młodzi” oraz „Nasze Miasto”</strong>, a dziś wspólnie jako fundacja „Rozkwit” zwiększamy jakość życia mieszkańców. Dotarliśmy do tysięcy rodzin ze „Zwariowanymi Blokowiskami”, wsparliśmy dziesiątki nastolatków naszymi programami, pomogliśmy mieszkańcom w rozwiązywaniu ich codziennych problemów i ożywiliśmy imprezami nawet najbardziej zabetonowane zakątki miast. <strong>Z Twoją pomocą możemy zrobić jeszcze więcej.</strong></p>
            </div>
        );
    }
    else if (index === 1){
        return(
            <div className={`${div_base_styles}`}>
                <h2 className={`${h1_base_styles}`}>ZDOLNI!</h2> 
                <p className={`${p_base_styles}`}>„Przegrani już na starcie” - tak wielu Młodych opisuje swoją sytuację. Brak dostępu do dobrej edukacji, zajęć dodatkowych czy możliwości rozwoju sprawia, że marzenia wydają się odległe. Tylko nieliczni mają odwagę po nie sięgnąć.
                                            <br />Właśnie dla nich stworzyliśmy program <strong>„Zdolni!” - pierwsze stypendium w regionie, które nie ogranicza się do ocen, dyplomów ani świadectw z czerwonym paskiem.</strong>
                                            <br />Każdy może się zgłosić - wystarczy własny pomysł na rozwój. Doceniamy pasję i pozwalamy samodzielnie zdecydować, jak wykorzystać nagrodę, by spełniać marzenia.
                                            <br />To dzięki temu jako pierwsi dostrzegliśmy potencjał <strong>Urszuli Sipko</strong>, dziś kilkukrotnej mistrzyni Polski i medalistki mistrzostw Europy.
                </p>
            </div>
        );
    }
    else if(index === 2){
        return(
            <div className={`${div_base_styles}`}>
                <h2 className={`${h1_base_styles}`}>ZWARIOWANE BLOKOWISKA</h2>
                <p className={`${p_base_styles}`}>„Zwariowane Blokowiska” to wyjątkowy cykl wakacyjnych spotkań, który od 10 lat ożywia osiedla i wnosi kulturę, sport oraz rekreację tam, gdzie często brakuje takich możliwości.
                                                <br />Naszym celem jest dotarcie do dzieci i ich rodziców z mniejszych społeczności, którzy na co dzień nie mają dostępu do podobnych atrakcji. Od dmuchanych zjeżdżalni i darmowych lodów, po spektakle teatralne - każda edycja to nie tylko zabawa, ale także inspiracja i budowanie więzi. 
                                                <br />„Zwariowane Blokowiska” to coś więcej niż rozrywka - to tworzenie przestrzeni, gdzie każdy, bez względu na miejsce zamieszkania, może poczuć się częścią czegoś wyjątkowego.
</p>
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
                <p className={`${p_base_styles}`}>Pamiętasz ostatni wieczór, który chciałeś, by trwał bez końca? Chcemy, żeby takie chwile były codziennością w Bartoszycach.
                                            <br />Zamiast kolejnych festiwali disco polo, proponujemy <strong>wydarzenia z charakterem:</strong> koncerty, Silent Disco, DJ sety, imprezy plenerowe, konkursy i mnóstwo niespodzianek.
                                            <br />Nie tylko ożywiamy miasto - <strong>pokazujemy, że rozrywka może być różnorodna, jakościowa i naprawdę niezapomniana.</strong>
</p>
            </div>
        );
    }
    
    else if(index === 5){
        return(
            <div className={`${div_base_styles}`}>
                <h2 className={`${h1_base_styles}`}>INFRASTRUKTURA</h2>
                <p className={`${p_base_styles}`}>Czy Twoje miasto naprawdę odpowiada na Twoje potrzeby?
                                            <br />Podczas spacerów badawczych analizujemy miejską przestrzeń: chodniki, zieleń, stan ulic i osiedli. Zbieramy głosy mieszkańców i tworzymy konkretne wnioski dla urzędów, które prowadzą do realnych zmian.
                                            <br />Razem projektujemy rozwiązania, dzięki którym miasto staje się funkcjonalne, dostępne i przyjazne - od osiedla i parku, po plac zabaw czy drogę do sklepu. 
                                            <br />Zmieniamy Twoje miasto na lepsze.
                </p>
            </div>
        );
    }
    
    else if(index === 6){
        return(
            <div className={`${div_base_styles}`}>
                <h2 className={`${h1_base_styles}`}>TWOJE SPRAWY</h2>
                <p className={`${p_base_styles}`}>Twoje problemy są dla nas punktem startu - to od nich zaczynamy każde działanie. Stawiamy na realną jakość, opartą na badaniach i potrzebach mieszkańców, dzięki czemu wprowadzamy konkretne zmiany, które poprawiają życie w Twoim mieście.
                                            <br />Twoja darowizna pomaga budować nową infrastrukturę - bezpieczne place zabaw, zielone przestrzenie i wygodne chodniki. Wspiera Młodych, którzy dzięki naszym programom mogą rozwijać swoje talenty i realizować marzenia. Pozwala organizować wydarzenia kulturalne i sportowe, które ożywiają osiedla i integrują społeczność.
                                            <br />Nawet symboliczne wsparcie ma znaczenie i pozwala nam działać skuteczniej.
                </p>
            </div>
        );
    }
    else{
        return (<p>blad!</p>);
    }
}   