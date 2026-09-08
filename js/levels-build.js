/* ============================================================
   INVENTATORII — levels-build.js
   ATELIERUL DE INVENȚII · 100 de nivele
   Copilul primește o problemă, alege piesele potrivite
   și construiește invenția.

   Format rând:
   [ scena, propsScena, titlu, problema, numeInventie,
     pieseCorecte, pieseGresite, roluri, deCe, intrebareBonus? ]

   • pieseCorecte / pieseGresite  — chei din biblioteca ART.I, separate cu virgulă
   • roluri  — la ce folosește fiecare piesă corectă, în aceeași ordine, separate cu |
   • intrebareBonus — 'întrebare|varianta A;varianta B;varianta C|indexCorect'
     (apare la dificultatea Greu; la Mediu doar în capitolele grele)
   ============================================================ */
window.LEVELS_BUILD = {

  chapters: [
    { t: 'Acasă, la treabă', d: 'Probleme mici din casă, rezolvate isteț.', dif: 1, ic: 'scara' },
    { t: 'Grădina năzdrăvană', d: 'Plante, apă și musafiri nepoftiți.', dif: 1, ic: 'floare' },
    { t: 'Școala inventatorilor', d: 'Invenții pentru clasă, hol și curtea școlii.', dif: 1, ic: 'carte' },
    { t: 'Prieteni cu blană și pene', d: 'Construiește pentru animale.', dif: 2, ic: 'caine' },
    { t: 'Apă, ploaie și vânt', d: 'Îmblânzește vremea cu idei bune.', dif: 2, ic: 'ploaie' },
    { t: 'Mașinării care mișcă', d: 'Roți, pârghii și scripeți la lucru.', dif: 2, ic: 'roata_dintata' },
    { t: 'Lumină și energie', d: 'Soare, becuri, oglinzi și curent.', dif: 2, ic: 'bec' },
    { t: 'Planeta curată', d: 'Invenții care salvează apa și reduc gunoiul.', dif: 3, ic: 'planta' },
    { t: 'Joacă și sport', d: 'Terenul de joacă are nevoie de tine.', dif: 3, ic: 'minge' },
    { t: 'Spre stele', d: 'Roboți, rachete și baze pe alte lumi.', dif: 3, ic: 'racheta' }
  ],

  list: [
    /* ---------- 1. ACASĂ, LA TREABĂ ---------- */
    ['camera', 'raft,cana', 'Borcanul de sus', 'Borcanul cu fursecuri stă pe raftul de sus. Ana întinde mâna, se ridică pe vârfuri… tot nu ajunge. Și nu are voie să se urce pe scaun.', 'Culegătorul de rafturi',
      'scara,carlig,cos', 'cui,gheata,balon', 'Te ridică în siguranță|Îți lungește brațul|Prinde borcanul, ca să nu cadă',
      'Nu ai crescut, dar ai devenit mai înalt: scara adaugă înălțime, iar cârligul adaugă braț.'],

    ['camera', 'usa,vant', 'Ușa care se trântește', 'Când deschizi fereastra, curentul trântește ușa camerei. Bum! Toată casa tresare, iar rama ușii a început să crape.', 'Opritorul de ușă',
      'arc,sfoara,burete', 'bec,seminte,magnet', 'Trage ușa încet înapoi|Leagă ușa de perete|Primește lovitura, moale',
      'Buretele întinde lovitura pe mai mult timp. Aceeași forță, împrăștiată, nu mai face zgomot și nu mai sparge nimic.'],

    ['camera', 'pat,cutie', 'Papucii dispăruți', 'În fiecare dimineață, papucii sunt în alt loc: unul sub pat, altul în hol. Ana pierde cinci minute bune înainte de școală.', 'Cutia cu despărțitoare',
      'cutie,carton,lipici', 'foc,peste,ceas', 'Casa papucilor|Desparte fiecare pereche|Prinde despărțitoarele',
      'Când fiecare lucru are un loc al lui, nu mai trebuie să ții minte unde l-ai pus. Se numește organizare.'],

    ['bucatarie', 'cana,masa', 'Laptele vărsat', 'Rareș toarnă lapte din sticla mare în cana lui. Jumătate ajunge pe masă, pentru că gura cănii e mult prea mică.', 'Pâlnia fără stropi',
      'palnie,cana,tava', 'magnet,minge,foc', 'Strânge lichidul spre gaură|Primește laptele|Prinde stropii scăpați',
      'Pâlnia are gura largă și gâtul îngust: adună tot lichidul într-un fir subțire, ușor de nimerit.'],

    ['noapte', 'pat,luna', 'Drumul spre baie, noaptea', 'Noaptea e beznă pe hol. Dacă aprinzi lumina mare, trezești toată casa. Dacă nu o aprinzi, te lovești de dulap.', 'Lumina care te simte',
      'senzor,bec,baterie', 'oala,panza,sfoara', 'Simte că vine cineva|Face lumină blândă|Dă energie',
      'Senzorul e o santinelă: când te apropii, închide circuitul și becul se aprinde singur, doar cât e nevoie.'],

    ['camera', 'pat,ceas', 'Somnul greu', 'Rareș nu aude deloc alarma telefonului. A întârziat de trei ori la școală săptămâna asta.', 'Deșteptătorul vesel',
      'ceas,sonerie,baterie', 'umbrela,sita,rock', 'Măsoară timpul|Face zgomot puternic|Dă energie',
      'Ceasul numără secundele, iar la ora potrivită trimite curent spre sonerie. Timpul devine sunet.'],

    ['camera', 'raft,carte', 'Cărțile care cad', 'Raftul e înclinat puțin și cărțile alunecă până cad pe podea. Una a căzut chiar pe pisică.', 'Raftul cu opritor',
      'lemn,cui,suport', 'apa,balon,pisica', 'Bara care oprește alunecarea|Prinde bara de raft|Susține raftul drept',
      'O margine de doi centimetri oprește alunecarea: cărțile se sprijină în ea în loc să plece la vale.'],

    ['scoala', 'scaun,carte', 'Ghiozdanul de plumb', 'Ghiozdanul lui Rareș cântărește cât un pepene. Până la etajul trei, brațele îi amorțesc.', 'Ghiozdanul pe roți',
      'roata,axa,sfoara', 'bec,floare,capac', 'Se rostogolește ușor|Ține roțile la locul lor|Îl tragi după tine',
      'Roata schimbă frecarea de alunecare cu una de rostogolire. De aceea trage de zece ori mai ușor.'],

    ['camera', 'fereastra,gheata', 'Frigul de la geam', 'Iarna, lângă fereastră e mult mai frig decât în restul camerei. Se simte un firicel de aer rece pe la margini.', 'Izolatorul de fereastră',
      'folie,banda_adeziva,panza', 'pahar,motoras,seminte', 'Oprește curentul de aer|Lipește folia etanș|Astupă pragul de jos',
      'Căldura nu „iese" prin sticlă: fuge prin crăpături. Închizi crăpăturile, oprești pierderea.'],

    ['camera', 'usa,masa', 'Cheile rătăcite', 'În fiecare dimineață, mama întreabă: „Unde sunt cheile?" Uneori sunt în geantă, alteori pe frigider.', 'Panoul cu chei',
      'carlig,lemn,surub', 'gheata,peste,tub', 'Ține cheile agățate|Panoul de perete|Fixează panoul',
      'Un obiect care are un „acasă" nu se mai pierde niciodată. Invenția rezolvă un obicei, nu un lucru.'],

    /* ---------- 2. GRĂDINA NĂZDRĂVANĂ ---------- */
    ['gradina', 'floare,ghiveci', 'Vacanța de două săptămâni', 'Familia pleacă la mare 14 zile. Florile din balcon nu rezistă nici cinci zile fără apă.', 'Udătorul cu picătura',
      'sticla,sfoara,ghiveci', 'bec,magnet,toba', 'Rezervorul de apă|Duce apa picătură cu picătură|Primește apa la rădăcină',
      'Sfoara suge apa ca un fitil și o predă încet pământului. Fenomenul se numește capilaritate.'],

    ['gradina', 'seminte,pasare', 'Ospățul păsărilor', 'Rareș a semănat ridichi. A doua zi, semințele dispăruseră, iar pe pământ erau urme de ciocuri.', 'Cortul pentru semințe',
      'plasa,lemn,cui', 'pahar,ceas,gheata', 'Bariera de deasupra|Stâlpii care o ridică|Fixează plasa în pământ',
      'Plasa lasă să treacă lumina, aerul și ploaia — dar nu și ciocul păsărilor.'],

    ['gradina', 'rock,copac', 'Muntele de pământ', 'Un morman de pământ trebuie mutat în celălalt capăt al grădinii. Cu găleata, ar dura toată ziua.', 'Roaba ușoară',
      'roata,lemn,suport', 'bec,sare,floare', 'Duce greutatea în locul tău|Cutia de transport|Mânerele de împins',
      'Roaba e o pârghie: greutatea stă lângă roată, iar tu ridici doar o mică parte din ea.'],

    ['ploios', 'ploaie,galeata', 'Ploaia care se pierde', 'Plouă torențial. Toată apa curge de pe acoperiș direct în canal, iar mâine grădina va fi iar uscată.', 'Colectorul de ploaie',
      'jgheab,galeata,capac', 'minge,oglinda,furnica', 'Adună apa de pe acoperiș|Depozitul de apă|Ține frunzele și țânțarii afară',
      'De pe un acoperiș mic se strâng zeci de litri la o singură ploaie. Apă gratuită pentru toată vara.'],

    ['gradina', 'planta,soare', 'Când ud florile?', 'Ana udă florile în fiecare zi, „ca să fie sigură". Unele au început să se ofilească — de prea multă apă.', 'Semaforul plantelor',
      'senzor,bec,baterie', 'parghie,cana,nor', 'Simte umezeala din pământ|Se aprinde când e uscat|Alimentează senzorul',
      'Pământul umed lasă curentul să treacă mai ușor decât cel uscat. Senzorul măsoară exact această diferență.'],

    ['gradina', 'seminte,gheata', 'Semințele care dorm', 'E martie. Semințele au fost puse acum trei săptămâni și încă nu a răsărit nimic. Nopțile sunt reci.', 'Sera de buzunar',
      'cutie,folie,termometru', 'sonerie,peste,magnet', 'Adăpostul semințelor|Ține căldura înăuntru|Verifici temperatura',
      'Folia lasă razele soarelui să intre, dar nu lasă căldura să iasă. Este efectul de seră, în miniatură.'],

    ['gradina', 'planta,apa', 'Musafirii de noapte', 'În fiecare dimineață, frunzele de salată au găuri. Pe pământ sunt dâre lucioase: melcii au dat petrecere.', 'Gardul pentru salată',
      'sita,lemn,cui', 'bec,balon,ceas', 'Bariera aspră|Rama gardului|Fixează sita',
      'Melcii se deplasează lipindu-se de suprafețe netede. O margine ridicată și zgrunțuroasă îi întoarce din drum.'],

    ['gradina', 'galeata,floare', 'Balconul de la etajul trei', 'Florile sunt la capătul balconului lung. Ana cară găleata înainte și înapoi de zece ori.', 'Furtunul dirijat',
      'tub,palnie,robinet', 'carte,gheata,minge', 'Duce apa la distanță|Umpli ușor tubul|Oprești apa exact când vrei',
      'Apa curge singură la vale prin tub. Nu ai nevoie de pompă — doar de o găleată ținută mai sus.'],

    ['gradina', 'copac,vant', 'Pomul care se îndoaie', 'Prunul plantat în toamnă s-a aplecat rău după furtună. Dacă rămâne așa, va crește strâmb toată viața.', 'Suportul pentru pom',
      'lemn,sfoara,panza', 'bec,farfurie,gheata', 'Stâlpul care ține direcția|Leagă pomul de stâlp|Protejează scoarța de frecare',
      'Legătura trebuie să fie moale și puțin largă: pomul crește în grosime și o sfoară strânsă l-ar tăia.'],

    ['gradina', 'cutie,planta', 'Grămada care miroase', 'Resturile de la bucătărie au fost aruncate într-un colț al grădinii. Acum miros urât și atrag muște.', 'Compostorul fără miros',
      'cutie,capac,sita', 'telefon,prisma,minge', 'Vasul pentru resturi|Închide mirosul|Lasă aerul să circule',
      'Resturile au nevoie de aer ca să se transforme în pământ bun. Fără aer se strică altfel și miros urât.'],

    /* ---------- 3. ȘCOALA INVENTATORILOR ---------- */
    ['scoala', 'masa,carte', 'Creioanele fugare', 'Banca e ușor înclinată. Creioanele se rostogolesc și cad pe jos de zeci de ori pe zi.', 'Suportul de creioane',
      'cutie,carton,lipici', 'apa,magnet,nor', 'Corpul suportului|Despărțitoarele dinăuntru|Prinde totul la un loc',
      'Un creion rotund se rostogolește la cea mai mică înclinare. Pus vertical, nu mai are unde să plece.'],

    ['scoala', 'clopotel,minge', 'Clopoțelul nevăzut', 'În curtea mare, la fotbal, nimeni nu aude clopoțelul. Jumătate de clasă întârzie la fiecare pauză.', 'Clopoțelul care ajunge departe',
      'difuzor,fir,baterie', 'pahar,gheata,seminte', 'Trimite sunetul departe|Duce semnalul din clădire|Dă energie',
      'Difuzorul transformă curentul electric în vibrații ale aerului — adică exact în ceea ce urechea numește sunet.'],

    ['scoala', 'usa,scaun', 'Holul blocat', 'Ghiozdanele stau grămadă pe jos, în fața clasei. Copiii se împiedică, iar femeia de serviciu nu poate mătura.', 'Cuierul din hol',
      'carlig,lemn,surub', 'minge,oala,ploaie', 'Agață ghiozdanele|Bara de perete|Fixează bara solid',
      'Peretele e spațiu gratuit. Când urci lucrurile pe verticală, podeaua rămâne liberă pentru oameni.'],

    ['scoala', 'fereastra,soare', 'Tabla orbitoare', 'După ora 11, soarele intră pe geam și lovește exact tabla. Din primele bănci nu se mai vede nimic.', 'Perdeaua reglabilă',
      'panza,sfoara,carlig', 'bec,peste,roata', 'Filtrează lumina puternică|O tragi într-o parte|Susține perdeaua sus',
      'Nu întunecăm toată clasa: oprim doar razele care lovesc direct tabla. Soluția bună e cea potrivită.'],

    ['scoala', 'carte,masa', 'Anunțurile care cad', 'Orarul lipit cu scotch cade de pe perete la fiecare două zile, iar pionezele sunt interzise în clasă.', 'Panoul magnetic',
      'magnet,folie,lemn', 'sare,floare,tub', 'Ține hârtia apăsată|Fața metalică a panoului|Rama de susținere',
      'Magnetul se lipește de metal și prinde hârtia la mijloc — fără găuri, fără vârfuri ascuțite.'],

    ['scoala', 'toba,carte', 'Gălăgia de la ora de desen', 'La lucrul în echipă, clasa devine tot mai zgomotoasă. Doamna trebuie să strige ca să se facă auzită.', 'Semaforul de zgomot',
      'microfon,bec,baterie', 'scara,gheata,cos', 'Ascultă cât de tare e|Se face roșu la depășire|Alimentează totul',
      'Microfonul măsoară cât de puternic vibrează aerul. Când depășește limita, becul avertizează fără să țipe nimeni.'],

    ['ploios', 'usa,ploaie', 'Podeaua alunecoasă', 'În zilele cu ploaie, intrarea școlii devine o patinoar. Cineva a alunecat deja.', 'Ștergătorul de la ușă',
      'burete,tava,carton', 'bec,racheta,albina', 'Absoarbe apa de pe tălpi|Strânge apa scursă|Suportul de dedesubt',
      'Buretele are mii de găurele. Apa intră în ele prin capilaritate și rămâne acolo, nu pe gresie.'],

    ['scoala', 'sticla,masa', 'Sticlele identice', 'Toată clasa are aceleași sticle de apă de la excursie. La fiecare pauză e scandal: „E a mea!"', 'Eticheta cu nume',
      'carton,banda_adeziva,rigla', 'gheata,magnet,peste', 'Eticheta cu numele|Prinde eticheta pe sticlă|Trasezi drept și citeț',
      'Eticheta e cea mai ieftină invenție din lume și rezolvă confuzia dintre 25 de obiecte identice.'],

    ['scoala', 'bicicleta,lemn', 'Bicicletele căzute', 'Bicicletele sunt sprijinite de gard. Când cade una, cad toate, ca la domino.', 'Suportul de biciclete',
      'lemn,cui,suport', 'bec,oala,nor', 'Locașul pentru roata din față|Fixează scândurile|Ține construcția în picioare',
      'Bicicleta stă în echilibru doar dacă roata din față e ținută pe direcție. Restul vine de la sine.'],

    ['terenjoaca', 'minge,copac', 'Mingile din tufe', 'La fiecare pauză, două-trei mingi zboară în tufele de la marginea terenului. Nimeni nu le mai scoate.', 'Prinzătorul de mingi',
      'plasa,sfoara,carlig', 'sare,bec,termometru', 'Oprește mingea din zbor|O tragi înapoi|Agață plasa sus',
      'E mult mai ușor să oprești mingea decât să o cauți. Inventatorii buni rezolvă problema înainte să apară.'],

    /* ---------- 4. PRIETENI CU BLANĂ ȘI PENE ---------- */
    ['ferma', 'pisica,farfurie', 'Bolul călător', 'Când mănâncă, pisica împinge bolul prin toată bucătăria. Ajunge sub masă și varsă apa pe drum.', 'Bolul care stă pe loc',
      'burete,tava,lipici', 'bec,racheta,prisma', 'Talpa antiderapantă|Prinde stropii|Lipește buretele de fund',
      'Buretele mărește frecarea: se agață de gresie în loc să alunece pe ea.',
      'Pe ce suprafață alunecă bolul cel mai ușor?|Gresie udă;Covor;Iarbă|0'],

    ['ploios', 'caine,ploaie', 'Câinele în ploaie', 'Rex stă în curte. Când plouă, se ghemuiește lângă gard, ud până la piele, pentru că nu are unde să intre.', 'Cușca cu acoperiș',
      'lemn,folie,cui', 'pahar,magnet,seminte', 'Pereții adăpostului|Acoperișul care nu lasă apa|Prinde acoperișul',
      'Un acoperiș înclinat trimite apa în lături. Dacă ar fi drept, apa s-ar aduna deasupra și ar picura înăuntru.'],

    ['ferma', 'pasare,gheata', 'Apa înghețată a păsărilor', 'Iarna, vasul cu apă pentru păsări îngheață până la prânz. Păsările vin, ciugulesc gheața și pleacă însetate.', 'Adăpătoarea de iarnă',
      'galeata,folie,oglinda', 'toba,furnica,sina', 'Vasul cu apă|Ține căldura în jurul vasului|Trimite razele soarelui în apă',
      'Lumina reflectată și un vas ferit de vânt pot ține apa cu câteva grade peste zero. Uneori e exact cât trebuie.',
      'Ce îngheață mai greu?|Apa multă dintr-un vas mare;O picătură pe geam;Apa dintr-o lingură|0'],

    ['camera', 'cutie,roata', 'Hamsterul plictisit', 'Hamsterul Bolt stă toată ziua într-un colț al cuștii. Se îngrașă și doarme prea mult.', 'Roata de alergare',
      'roata,axa,suport', 'bec,sare,umbrela', 'Pista care se învârte|Punctul de rotire|Ține roata ridicată',
      'Roata se rotește în jurul axului cu foarte puțină frecare, așa că pornește de la un singur pas mic.'],

    ['ferma', 'furnica,farfurie', 'Furnicile la masă', 'Furnicile au descoperit castronul lui Rex. Merg în șir, una după alta, de la gard până la mâncare.', 'Insula anti-furnici',
      'tava,apa,farfurie', 'bec,sina,prisma', 'Șanțul de jur împrejur|Bariera pe care nu o trec|Mâncarea, la mijlocul insulei',
      'Furnicile merg pe uscat, urmând urma de miros lăsată de surate. Un inel de apă rupe drumul lor invizibil.',
      'Cum se orientează furnicile pe drum?|După urma de miros lăsată de altele;După hartă;După Soare|0'],

    ['laborator', 'peste,apa', 'Peștii de la suprafață', 'Peștii din acvariu stau tot timpul lipiți de suprafața apei și înghit aer. Apa e limpede, dar ceva nu e în regulă.', 'Pompa de aer',
      'pompa,tub,baterie', 'carte,gheata,cos', 'Împinge aer în apă|Duce aerul până jos|Alimentează pompa',
      'Bulele agită suprafața, iar acolo apa ia oxigen din aer. Peștii respiră oxigenul dizolvat, nu apa.'],

    ['camera', 'fereastra,pasare', 'Bufnitura în geam', 'De trei ori luna asta, câte o pasăre s-a lovit de geamul mare al livingului.', 'Semnele de pe geam',
      'folie,carton,banda_adeziva', 'pompa,rock,ceas', 'Siluetele lipite|Din ce le decupezi|Le prinzi pe sticlă',
      'Pasărea nu vede sticla: vede cerul și copacii reflectați în ea. Semnele fac geamul vizibil.',
      'De ce nu văd păsările geamul?|Pentru că oglindește cerul;Pentru că e prea mic;Pentru că e cald|0'],

    ['ferma', 'plasa,copac', 'Evadatul cu urechi lungi', 'Iepurele a scăpat de două ori din țarc. O dată a sărit peste gard, o dată a săpat pe sub el.', 'Țarcul înalt',
      'plasa,lemn,cui', 'bec,cana,luna', 'Gardul care nu se rupe|Stâlpii de susținere|Fixează plasa, inclusiv jos',
      'Iepurii sar sus și sapă adânc. Un gard bun trebuie îngropat câțiva centimetri, nu doar înălțat.'],

    ['camera', 'pisica,scaun', 'Canapeaua zgâriată', 'Pisica a transformat colțul canapelei în ghem de ață. Nu ajută nici să o cerți.', 'Stâlpul de zgâriat',
      'sfoara,lemn,lipici', 'bec,minge,ploaie', 'Suprafața aspră de zgâriat|Stâlpul vertical|Fixează sfoara răsucită',
      'Pisicile nu strică din răutate: își ascut ghearele. Dacă le dai un loc mai bun, îl aleg singure pe el.'],

    ['strada', 'caine,sfoara', 'Câinele care trage', 'Rex trage tare de lesă când vede alt câine. Mâna te doare, iar el tușește pentru că îl strânge zgarda.', 'Lesa elastică',
      'arc,sfoara,carlig', 'pahar,senzor,sare', 'Amortizează smuciturile|Legătura până la zgardă|Prinde de zgardă',
      'Arcul întinde forța pe mai mult timp, așa că smucitura bruscă devine o tragere blândă.',
      'Ce face arcul cu o smucitură?|O întinde pe mai mult timp;O face mai puternică;O oprește instantaneu|0'],

    /* ---------- 5. APĂ, PLOAIE ȘI VÂNT ---------- */
    ['ploios', 'ploaie,panza', 'Rufele prinse de ploaie', 'Rufele stau întinse în curte de dimineață. La prânz începe o ploaie scurtă și trebuie luate toate, ude leoarcă.', 'Acoperișul de rufe',
      'folie,sfoara,lemn', 'bec,peste,magnet', 'Acoperă de sus|Sârma pe care stau rufele|Stâlpii care ridică totul',
      'Rufele se usucă de la aerul care trece printre ele, nu de la soare. Le ții la aer, dar la adăpost de picături.'],

    ['rau', 'apa,galeata', 'Apa tulbure', 'În tabără, apa din pârâu are frunze, nisip și e gălbuie. Nu poate fi folosită nici măcar la spălat pe mâini.', 'Filtrul de apă',
      'palnie,filtru,sita', 'bec,racheta,toba', 'Îndreaptă apa spre filtru|Reține particulele fine|Oprește frunzele și pietricelele',
      'Filtrarea scoate mizeria, dar nu și microbii. Apa filtrată tot trebuie fiartă înainte de băut.',
      'Ce NU scoate un filtru simplu din apă?|Microbii;Nisipul;Frunzele|0'],

    ['gradina', 'ploaie,pahar', 'Cât a plouat, de fapt?', 'Bunicul spune „a plouat bine", vecinul spune „abia a stropit". Cine are dreptate? Nimeni nu a măsurat.', 'Pluviometrul',
      'pahar,rigla,suport', 'magnet,foc,roata', 'Adună ploaia|Măsoară înălțimea apei|Îl ține drept și nemișcat',
      'Meteorologii spun „20 de litri pe metru pătrat" — adică exact înălțimea apei strânse în vasul tău.'],

    ['ploios', 'ghiveci,vant', 'Vântul răsturnat', 'După noaptea cu furtună, trei ghivece înalte de pe balcon erau pe jos, sparte. Cele scunde au rămas în picioare.', 'Ancora pentru ghivece',
      'greutate,sfoara,ghiveci', 'bec,pisica,prisma', 'Coboară centrul de greutate|Leagă de balustradă|Vasul plantei',
      'Un obiect se răstoarnă greu dacă e greu jos și ușor sus. Vântul împinge partea de sus, dar baza îl ține.',
      'Ce se răstoarnă mai greu?|Un vas greu la bază;Un vas înalt și gol;Un vas ușor|0'],

    ['munte', 'vant,copac', 'Din ce parte bate vântul?', 'Bunicul vrea să știe dinainte dacă vine ploaia. „Uită-te de unde bate vântul", spune el. Dar cum se vede asta?', 'Girueta',
      'panza,sfoara,suport', 'gheata,carte,pompa', 'Suprafața pe care o împinge vântul|Se rotește liber|Stâlpul pe care se învârte',
      'Partea lată e împinsă de vânt și fuge în spate. Vârful subțire rămâne să arate de unde vine vântul.'],

    ['munte', 'gheata,lemn', 'Poteca înzăpezită', 'A nins toată noaptea. Poteca de la poartă la stradă are zăpadă până la genunchi.', 'Plugul de zăpadă',
      'lemn,sfoara,roata', 'bec,peste,floare', 'Lama care împinge zăpada|O tragi după tine|Alunecă ușor pe teren',
      'Lama pusă oblic împinge zăpada într-o parte, nu în față. Așa nu se mai adună grămadă în fața ta.'],

    ['gradina', 'apa,rock', 'Băltoacele veșnice', 'După ploaie, în curte rămân băltoace câte trei zile. Pământul e tare ca piatra și apa nu intră deloc.', 'Drenajul curții',
      'tub,rock,sita', 'bec,minge,ceas', 'Duce apa mai jos|Stratul prin care se scurge|Oprește frunzele care ar înfunda',
      'Apa curge printre pietre ca printr-un labirint plin de goluri, apoi intră liniștită în pământ.'],

    ['rau', 'apa,soare', 'Apa de la râu la grădină', 'Grădina e la 20 de metri de râu, dar cu 2 metri mai sus. Cu găleata, e o corvoadă zilnică.', 'Pompa solară',
      'pompa,panou_solar,tub', 'toba,gheata,carlig', 'Ridică apa|Îi dă energie de la Soare|Conduce apa la plante',
      'Soarele dă cea mai multă energie exact în zilele în care plantele au nevoie de cea mai multă apă.',
      'Când merge cel mai bine o pompă solară?|Într-o zi senină de vară;Noaptea;Într-o zi cu ceață|0'],

    ['noapte', 'bec,luna', 'Pană de curent', 'Furtuna a doborât un stâlp. Casa e în beznă, iar telefoanele sunt aproape descărcate.', 'Lanterna de urgență',
      'baterie,bec,intrerupator', 'sare,elice,planta', 'Energia păstrată dinainte|Face lumina|Pornește doar când ai nevoie',
      'Bateria e energie „la conservă": o strângi când ai curent și o folosești când nu mai ai.'],

    ['gradina', 'ploaie,planta', 'Grindina', 'Vara trecută, o grindină de zece minute a făcut praf toate roșiile. Anul acesta se anunță la fel.', 'Plasa anti-grindină',
      'plasa,sfoara,lemn', 'bec,peste,cana', 'Sparge și încetinește boabele|Ține plasa întinsă|Stâlpii de susținere',
      'Plasa nu oprește gheața, ci o încetinește. Un bob încetinit lovește frunza fără să o rupă.'],

    /* ---------- 6. MAȘINĂRII CARE MIȘCĂ ---------- */
    ['atelier', 'cutie,masinuta', 'Lada în camion', 'Lada cu unelte cântărește 40 de kilograme și trebuie urcată în camion. Doi oameni nu reușesc să o ridice drept.', 'Rampa de încărcare',
      'rampa,roata,sfoara', 'bec,sare,floare', 'Urci pe pantă, nu drept în sus|Reduce frecarea|Tragi lada în sus',
      'Pe o rampă lungă urci aceeași greutate cu forță mult mai mică — în schimb parcurgi un drum mai lung.',
      'Cum e mai ușor de urcat o ladă?|Pe o rampă lungă;Ridicată drept în sus;Pe o rampă foarte scurtă|0'],

    ['ferma', 'galeata,apa', 'Găleata din fântână', 'Fântâna are 8 metri. Găleata plină cântărește cât un copil, iar bunica nu o mai poate trage.', 'Scripetele',
      'scripete,sfoara,galeata', 'bec,prisma,pisica', 'Schimbă direcția forței|Trece peste roată|Vasul care urcă apa',
      'Cu un scripete tragi în jos ca să ridici în sus. Iar în jos poți folosi și greutatea corpului tău.'],

    ['ferma', 'usa,roata', 'Ușa hambarului', 'Ușa mare de lemn s-a lăsat și acum se freacă de pământ. Trebuie trasă cu amândouă mâinile.', 'Ușa pe șine',
      'sina,roata,carlig', 'bec,sare,nor', 'Ghidajul de sus|Rulează pe șină|Ține ușa suspendată',
      'Dacă ușa atârnă pe roți, nu mai atinge pământul: aluneci pe metal, în loc să freci lemnul de pietriș.'],

    ['gradina', 'rock,lemn', 'Piatra din drum', 'În mijlocul aleii e o piatră cât o roată de mașină. Trei copii împing de ea și nu se clintește.', 'Pârghia',
      'parghie,rock,lemn', 'bec,apa,telefon', 'Bara lungă cu care apeși|Punctul de sprijin|Talpa care nu se afundă',
      'Cu cât punctul de sprijin e mai aproape de piatră, cu atât ridici mai ușor. Arhimede promitea că mișcă Pământul.',
      'Unde pui punctul de sprijin ca să ridici cel mai ușor?|Aproape de piatră;Exact la mijloc;Aproape de mâna ta|0'],

    ['atelier', 'masinuta,roata', 'Mașinuța fără viață', 'Mașinuța de lemn merge doar dacă o împingi. Rareș vrea una care pleacă singură la apăsarea unui buton.', 'Mașinuța automată',
      'motoras,baterie,roata', 'pahar,floare,sita', 'Învârte roțile|Dă curent motorului|Împing mașina înainte',
      'Motorul transformă energia electrică în mișcare de rotație. Roțile transformă rotația în deplasare.'],

    ['ferma', 'vant,copac', 'Făina fără curent', 'La cabana din deal nu ajunge curentul, dar bate vânt aproape zilnic. Grâul trebuie măcinat cumva.', 'Moara de vânt',
      'elice,roata_dintata,suport', 'bec,peste,gheata', 'Prinde vântul|Transmite mișcarea mai departe|Ține totul sus, în bătaia vântului',
      'Vântul este aer în mișcare. Orice mișcare poate fi prinsă și transformată în rotație folositoare.'],

    ['rau', 'apa,roata_apa', 'Energie de la râu', 'Râul curge zi și noapte, la doi pași de atelier. Toată acea mișcare se pierde degeaba.', 'Moara de apă',
      'roata_apa,roata_dintata,axa', 'bec,sare,minge', 'O învârte apa care cade|Transmite forța|Leagă roțile între ele',
      'Apa care coboară are energie. Roata i-o ia și o transformă în învârtire, fără să consume nimic.'],

    ['strada', 'masinuta,rampa', 'Căruciorul scăpat', 'Căruciorul cu marfă a luat-o singur la vale pe stradă. Noroc că l-a prins cineva la timp.', 'Frâna de mână',
      'parghie,sfoara,burete', 'bec,seminte,nor', 'Mânerul pe care apeși|Trage sabotul de frână|Freacă roata și o oprește',
      'Frâna transformă mișcarea în căldură, prin frecare. De aceea frânele bicicletei se încing la vale.',
      'În ce se transformă mișcarea când frânezi?|În căldură;În lumină;În apă|0'],

    ['ferma', 'usa,greutate', 'Poarta lăsată deschisă', 'Toată lumea uită poarta deschisă, iar găinile ies în drum. Nu ajută nici biletul „Închide poarta!".', 'Poarta care se închide singură',
      'arc,sfoara,greutate', 'bec,pahar,albina', 'Trage poarta înapoi|Leagă greutatea de poartă|Coboară și închide',
      'Greutatea cade mereu în jos: o forță gratuită, care nu obosește și nu uită niciodată.'],

    ['scoala', 'panza,suport', 'Steagul din vârf', 'Steagul trebuie ridicat în vârful catargului de 6 metri. Nimeni nu se urcă acolo în fiecare dimineață.', 'Catargul cu scripete',
      'scripete,sfoara,panza', 'bec,gheata,furnica', 'Roata din vârf|Bucla de sfoară fără capăt|Steagul care urcă',
      'Cu un scripete în vârf, ridici steagul stând jos, cu picioarele pe pământ. Nu mai urci deloc.'],

    /* ---------- 7. LUMINĂ ȘI ENERGIE ---------- */
    ['munte', 'soare,bec', 'Cabana fără curent', 'La cabana din munți nu ajunge rețeaua electrică. Seara se stă cu lumânări, ceea ce e periculos.', 'Lampa solară',
      'panou_solar,baterie,bec', 'oala,sfoara,pisica', 'Transformă lumina în curent|Păstrează energia pentru seară|Luminează camera',
      'Ziua încarci, noaptea folosești. Bateria e pușculița în care strângi energie pentru mai târziu.'],

    ['plaja', 'soare,oala', 'Mâncare caldă fără foc', 'În tabără e interzis focul din cauza secetei. Totuși, toată lumea vrea ceva cald la prânz.', 'Cuptorul solar',
      'oglinda,cutie,folie', 'bec,plasa,peste', 'Adună razele într-un punct|Camera în care se gătește|Ține căldura înăuntru',
      'Oglinzile aduc razele din toate părțile într-un singur loc. Acolo, temperatura poate depăși 100 de grade.',
      'Ce culoare se încălzește cel mai repede la soare?|Negru;Alb;Argintiu|0'],

    ['noapte', 'bicicleta,luna', 'Bicicleta invizibilă', 'Rareș vine de la antrenament pe întuneric. Bateriile lanternei se termină exact când e nevoie de ea.', 'Dinamul de bicicletă',
      'motoras,bec,fir', 'sare,cos,planta', 'Învârtit de roată, produce curent|Luminează drumul|Duce curentul la bec',
      'Un motoraș învârtit produce curent electric. Este exact același aparat, folosit invers.',
      'Când luminează becul dinamului?|Când pedalezi;Când stai pe loc;Doar ziua|0'],

    ['camera', 'fereastra,oglinda', 'Camera întunecoasă', 'Camera din spate are o singură fereastră mică, spre nord. Chiar și la prânz trebuie aprins becul.', 'Tunelul de lumină',
      'oglinda,tub,lentila', 'bec,foc,minge', 'Trimite lumina mai departe|Drumul pe care merge lumina|Împrăștie lumina în cameră',
      'Lumina merge în linie dreaptă, dar poate fi „îndoită" de la o oglindă la alta, ca o minge care ricoșează.'],

    ['laborator', 'lupa,carte', 'Prea mic pentru ochi', 'Ana a găsit o insectă minusculă pe frunză. Vrea să-i vadă picioarele, dar ochiul nu distinge nimic.', 'Microscopul de buzunar',
      'lupa,tub,suport', 'sare,roata,ploaie', 'Mărește imaginea|Ține distanța potrivită|Stă perfect nemișcat',
      'Lentila îndoaie razele de lumină astfel încât ochiul tău crede că obiectul e mult mai mare decât e.'],

    ['noapte', 'bec,stea', 'Mesaje peste curte', 'Ana și Rareș locuiesc în case vecine. Seara nu mai au voie să iasă, dar vor să-și spună noapte bună.', 'Telegraful luminos',
      'bec,baterie,intrerupator', 'cana,plasa,rock', 'Semnalul care se vede de departe|Energia|Faci puncte și linii',
      'Un bec care clipește scurt și lung poate transmite orice mesaj. Așa funcționează alfabetul Morse.'],

    ['laborator', 'prisma,soare', 'Curcubeu la comandă', 'Ana a văzut un curcubeu după ploaie și vrea să facă unul în camera ei, oricând, fără ploaie.', 'Fabrica de curcubeie',
      'prisma,oglinda,pahar', 'cui,plasa,robot', 'Desparte lumina în culori|Trimite raza pe perete|Apa care îndoaie și ea lumina',
      'Lumina albă e un amestec de culori. Prisma le desparte pentru că fiecare culoare se îndoaie altfel.',
      'Din ce e făcută lumina albă?|Din toate culorile amestecate;Numai din alb;Din alb și negru|0'],

    ['gradina', 'soare,rigla', 'Ora fără ceas', 'În tabără, telefoanele se predau dimineața. Nimeni nu știe cât e ceasul până sună clopotul de masă.', 'Ceasul solar',
      'rigla,suport,lemn', 'bec,peste,tub', 'Bățul care face umbră|Îl ține perfect drept|Cadranul cu ore desenate',
      'Umbra se rotește pentru că Pământul se rotește. Direcția ei îți spune ora, dacă ai marcat-o dinainte.'],

    ['gradina', 'bec,soare', 'Aleea pe întuneric', 'Aleea spre poartă nu are lumină. Cine intră seara în curte se împiedică de trepte.', 'Felinarul inteligent',
      'panou_solar,senzor,bec', 'oala,sina,albina', 'Încarcă bateria peste zi|Simte când se întunecă|Se aprinde singur, seara',
      'Panoul solar produce curent, dar poate și să „simtă" câtă lumină e afară. Aceeași piesă, două utilizări.'],

    ['munte', 'telefon,soare', 'Telefonul descărcat', 'În a doua zi de drumeție, telefonul cu harta are 4% baterie. Priza cea mai apropiată e la 30 de kilometri.', 'Încărcătorul solar',
      'panou_solar,fir,baterie', 'gheata,minge,cana', 'Culege energia soarelui|Duce curentul|Păstrează energia strânsă',
      'Un panou cât o carte poate încărca un telefon într-o zi însorită. Energia era acolo — trebuia doar culeasă.',
      'Ce pățește un panou solar acoperit de praf?|Produce mai puțin curent;Produce mai mult;Nu se schimbă nimic|0'],

    /* ---------- 8. PLANETA CURATĂ ---------- */
    ['strada', 'cutie,carton', 'Gunoiul amestecat', 'În bloc există un singur tomberon. Hârtia, plasticul și resturile ajung împreună — și nimic nu se mai poate recicla.', 'Stația de sortare',
      'cutie,carton,banda_adeziva', 'bec,peste,roata', 'Recipientele separate|Semnele colorate|Le prinzi bine, la vedere',
      'Reciclarea începe cu separarea. Odată amestecate, hârtia udă de resturi nu mai poate fi refolosită.',
      'Unde merge o sticlă de plastic goală?|La plastic;La hârtie;La resturi alimentare|0'],

    ['gradina', 'sticla,planta', 'Munții de sticle', 'După petrecerea din curte au rămas 30 de sticle de plastic. Ana refuză să le arunce pe toate.', 'Ghivecele din sticle',
      'sticla,seminte,apa', 'bec,magnet,sina', 'Devine ghiveci|Se plantează înăuntru|Le uzi cu puțină apă',
      'O sticlă aruncată stă sute de ani în natură. Aceeași sticlă, tăiată în două, ține o plantă un an întreg.',
      'Cât rezistă plasticul în natură?|Sute de ani;Câteva zile;Cam un an|0'],

    ['scoala', 'carte,galeata', 'Coșul plin de hârtie', 'La sfârșitul zilei, coșul clasei e plin de foi scrise pe o singură parte.', 'Hârtia refăcută',
      'carte,sita,galeata', 'bec,gheata,elice', 'Hârtia veche, materia primă|Scoate foaia nouă din apă|Vasul cu pastă de hârtie',
      'Hârtia e făcută din fibre de lemn. Le înmoi, le amesteci și le usuci din nou — și ai o foaie nouă.',
      'Din ce e făcută hârtia?|Din fibre de lemn;Din plastic;Din nisip|0'],

    ['gradina', 'cutie,planta', 'Cojile aruncate', 'Zilnic, la gunoi ajung coji de cartofi, frunze de salată și zaț de cafea. Un sac întreg pe săptămână.', 'Compostorul',
      'cutie,sita,apa', 'bec,racheta,oglinda', 'Vasul în care se transformă|Aerisirea|Umezeala potrivită',
      'Resturi + aer + umezeală = pământ negru și bogat, în câteva luni. Natura reciclează de milioane de ani.',
      'Ce NU se pune la compost?|Punga de plastic;Coaja de măr;Frunzele uscate|0'],

    ['bucatarie', 'galeata,apa', 'Apa aruncată', 'Apa în care s-au spălat legumele se duce direct pe scurgere. Zece litri, în fiecare zi.', 'A doua viață a apei',
      'galeata,filtru,tub', 'bec,sare,ceas', 'Strânge apa folosită|Reține resturile|O duce la plante',
      'Nu tot ce e „folosit" e murdar. Apa de la clătit legume e perfect bună pentru flori.',
      'Ce apă poți da la flori?|Apa în care ai clătit legume;Apa cu detergent;Apa cu ulei|0'],

    ['camera', 'panza,cutie', 'Hainele rămase mici', 'Trei tricouri și doi blugi nu-i mai vin lui Rareș. Sunt încă bune, dar nu-i mai încap nici în dulap.', 'Atelierul de haine noi',
      'panza,banda_adeziva,rigla', 'bec,pompa,luna', 'Materialul de bază|Prinde bucățile|Măsori înainte să tai',
      'Un tricou devine sacoșă, un blug devine penar. Se numește „upcycling": lucrul vechi devine ceva mai bun.',
      'Ce e mai bine pentru planetă?|Să transformi hainele vechi;Să le arunci imediat;Să cumperi mereu altele|0'],

    ['atelier', 'cutie,magnet', 'Metalul din gunoi', 'În lada de reciclare sunt amestecate cutii de conserve, doze de aluminiu și plastic. Sortarea manuală durează ore.', 'Separatorul magnetic',
      'magnet,banda,cutie', 'bec,floare,gheata', 'Trage doar fierul|Aduce gunoiul prin fața magnetului|Colectează metalul separat',
      'Magnetul atrage fierul, dar nu aluminiul, plasticul sau sticla. Diferența dintre materiale face sortarea automată.',
      'Ce atrage magnetul?|Fierul;Plasticul;Sticla|0'],

    ['terenjoaca', 'roata,copac', 'Anvelopa uitată', 'În spatele garajului stă de doi ani o anvelopă veche. Ocupă loc și adună apă de ploaie.', 'Leagănul din anvelopă',
      'roata,sfoara,copac', 'bec,sare,peste', 'Scaunul leagănului|Îl ține agățat|Creanga puternică de sus',
      'Înainte să arunci un obiect, întreabă-te: „ce altceva ar putea fi?" Cele mai bune invenții pleacă de la întrebarea asta.',
      'Care e cea mai bună soluție pentru un obiect vechi?|Să-i găsești altă folosință;Să-l arunci;Să-l îngropi|0'],

    ['strada', 'plasa,vant', 'Pungile zburătoare', 'Vântul poartă pungi prin tot parcul. Se agață în copaci și ajung până în râu.', 'Capcana de pungi',
      'plasa,lemn,cos', 'bec,prisma,ceas', 'Oprește pungile din zbor|Rama care ține plasa|Aduni ce ai prins',
      'O pungă ușoară poate zbura kilometri. Cel mai bine e să nu ajungă niciodată acolo.',
      'Ce se întâmplă cu o pungă ajunsă în râu?|Poate ajunge în mare;Se topește în câteva zile;Devine hrană bună|0'],

    ['camera', 'robinet,ceas', 'Dușul nesfârșit', 'Rareș cântă la duș. Când iese, au trecut 15 minute și apa caldă s-a terminat pentru toată casa.', 'Ceasul de duș',
      'clepsidra,robinet,sonerie', 'bec,minge,plasa', 'Măsoară minutele|Oprești apa la timp|Te anunță când e gata',
      'Un duș de 4 minute în loc de 10 economisește peste 60 de litri de apă. În fiecare zi, de fiecare persoană.',
      'Cât consumă un duș de 10 minute?|Peste 100 de litri;Cam 10 litri;Cam 1 litru|0'],

    /* ---------- 9. JOACĂ ȘI SPORT ---------- */
    ['terenjoaca', 'minge,plasa', 'Mingea peste gard', 'La fiecare gol ratat, mingea zboară peste gard, în curtea vecinului. Vecinul nu mai e amuzat.', 'Plasa de poartă',
      'plasa,sfoara,lemn', 'bec,oala,gheata', 'Oprește mingea|Întinde plasa|Stâlpii porții',
      'Plasa se întinde puțin la impact și fură din energia mingii, în loc să i-o dea înapoi ca un perete.',
      'De ce nu sare mingea înapoi din plasă?|Plasa se întinde și ia din energie;Plasa e grea;Mingea se dezumflă|0'],

    ['terenjoaca', 'carton,minge', 'Scorul uitat', 'La mijlocul meciului, o echipă zice 5–3, cealaltă zice 4–4. Meciul se termină cu ceartă, nu cu victorie.', 'Tabela de scor',
      'carton,rigla,carlig', 'bec,apa,peste', 'Cifrele mari|Trasezi casetele drepte|O agăți la vedere',
      'Un joc corect are nevoie de reguli clare și de un scor pe care îl văd toți, tot timpul.'],

    ['camera', 'bicicleta,usa', 'Bicicleta din hol', 'Bicicleta stă în holul îngust. Toată lumea se lovește de ghidon, iar pedala a rupt tapetul.', 'Suportul de perete',
      'carlig,surub,lemn', 'bec,sare,nor', 'Susține roata|Prinde solid în perete|Împarte greutatea pe suprafață mare',
      'Pusă vertical, o bicicletă ocupă de trei ori mai puțin loc. Spațiul nu s-a mărit — s-a folosit mai bine.'],

    ['strada', 'roata,rampa', 'Skateboardul fără frână', 'Pe panta de lângă bloc, skateboardul ia viteză și singura frânare e să sari de pe el.', 'Frâna de skate',
      'burete,surub,lemn', 'bec,planta,cana', 'Freacă asfaltul|Fixează frâna de placă|Talpa pe care apeși',
      'Frecarea nu e mereu dușmanul: fără ea nu ai putea nici să mergi, nici să te oprești, nici să stai pe loc.',
      'Ce te oprește când frânezi?|Frecarea;Vântul;Culoarea plăcii|0'],

    ['noapte', 'minge,luna', 'Joacă după apus', 'Vara se întunecă la 9 seara, dar copiii tot vor să joace. Mingea neagră devine invizibilă.', 'Mingea luminoasă',
      'bec,baterie,banda_adeziva', 'sare,plasa,oglinda', 'Lumina dinăuntru|Energia|Fixează becul, să nu zdrăngăne',
      'Lumina în mișcare se vede de foarte departe. De aceea bicicliștii au lumini care clipesc, nu doar reflectorizante.'],

    ['terenjoaca', 'leagan,sfoara', 'Leagănul care scârțâie', 'Leagănul din parc scârțâie oribil, iar o frânghie e roasă pe jumătate.', 'Reparația leagănului',
      'surub,sfoara,suport', 'bec,peste,magnet', 'Strânge tot ce s-a slăbit|Înlocuiește frânghia tocită|Întărește bara de sus',
      'Scârțâitul e un semnal, nu o ciudățenie: două piese se freacă acolo unde nu ar trebui.',
      'Ce înseamnă un scârțâit la un leagăn?|Ceva se freacă sau s-a slăbit;Că e nou;Că e proaspăt vopsit|0'],

    ['atelier', 'masinuta,rampa', 'Cursa de mașinuțe', 'Toți copiii de pe scară au mașinuțe, dar nu au unde să se întreacă. Pe covor, toate merg strâmb.', 'Pista de curse',
      'jgheab,lemn,clepsidra', 'bec,peste,magnet', 'Traseul mașinuțelor|Panta de start|Măsori timpul fiecăruia',
      'Cu cât panta de start e mai înaltă, cu atât mașinuța strânge mai multă viteză la coborâre.',
      'De unde ia viteză mașinuța pe pistă?|Din înălțimea de la start;Din culoarea ei;Din greutatea pistei|0'],

    ['terenjoaca', 'minge,suport', 'Coșul prea sus', 'Coșul de baschet e la înălțimea celor mari. Cei mici nu nimeresc niciodată și renunță după cinci minute.', 'Coșul reglabil',
      'lemn,surub,rigla', 'bec,sare,furnica', 'Stâlpul cu găuri din loc în loc|Fixezi la înălțimea aleasă|Măsori corect fiecare treaptă',
      'O invenție bună se potrivește omului. Nu omul trebuie să se potrivească invenției.'],

    ['noapte', 'fluier,copac', 'De-a v-ați ascunselea pe întuneric', 'În tabără, jocul de seară devine periculos: nimeni nu mai știe unde e celălalt, iar pădurea e aproape.', 'Semnalizatorul de joc',
      'fluier,bec,baterie', 'cana,magnet,planta', 'Semnalul care se aude|Semnalul care se vede|Energia',
      'Când nu poți vedea, auzul devine cel mai bun simț. De aceea navele folosesc sirene pe ceață.'],

    ['camera', 'cutie,rigla', 'Turnul care se prăbușește', 'Turnul de cuburi al lui Rareș cade mereu la al șaptelea etaj, mereu în aceeași parte.', 'Turnul care nu cade',
      'lemn,rigla,greutate', 'bec,peste,tub', 'Baza largă|Verifici că e perfect drept|Îngreunează baza',
      'Un turn stă în picioare cât timp greutatea lui „cade" în interiorul bazei. Când iese din bază, se răstoarnă.',
      'Ce turn stă cel mai bine?|Cu baza lată și greu jos;Înalt și subțire;Greu la vârf|0'],

    /* ---------- 10. SPRE STELE ---------- */
    ['spatiu', 'robot,rock', 'Roverul pe pietre', 'Roverul se blochează la fiecare piatră de 10 centimetri. Zona interesantă e plină de bolovani.', 'Roverul cu suspensie',
      'roata,arc,motoras', 'pahar,floare,sonerie', 'Trec peste obstacole|Amortizează hopurile|Îl pune în mișcare',
      'Arcurile lasă fiecare roată să urce singură pe piatră, fără ca tot roverul să se zguduie.',
      'De ce are roverul roți mari?|Trec mai ușor peste pietre;Arată mai bine;Sunt mai ieftine|0'],

    ['spatiu', 'racheta,parasuta', 'Aterizarea dură', 'Capsula cu instrumente cade prea repede. La ultima încercare, s-a spart la contactul cu solul.', 'Modulul de aterizare',
      'parasuta,arc,sfoara', 'bec,sare,pisica', 'Frânează căderea|Preia lovitura finală|Leagă parașuta de capsulă',
      'Parașuta mărește suprafața, iar aerul o încetinește. Pe Marte, unde aerul e rar, nu ajunge singură.',
      'De ce frânează parașuta?|Se lovește de mult aer;Pentru că e grea;Pentru că e colorată|0'],

    ['spatiu', 'robot,apa', 'Apa de pe stație', 'Fiecare litru de apă adus de pe Pământ costă enorm. Echipajul are nevoie de apă în fiecare zi, luni întregi.', 'Reciclatorul de apă',
      'filtru,tub,galeata', 'bec,minge,copac', 'Curăță apa folosită|O transportă prin stație|Rezervorul curat',
      'Pe Stația Spațială aproape toată apa e refolosită — inclusiv aburul din respirația echipajului.',
      'De ce se reciclează apa în spațiu?|E foarte scump să o duci acolo;E mai gustoasă;Ca să fie mai grea stația|0'],

    ['spatiu', 'panou_solar,robot', 'Panourile prăfuite', 'După furtuna de praf, roverul primește pe jumătate mai puțină energie. Bateriile nu se mai încarcă până seara.', 'Peria automată',
      'motoras,panza,baterie', 'gheata,peste,palnie', 'Mișcă peria|Șterge praful de pe panou|Dă energie mecanismului',
      'Praful marțian a oprit mai mulți roboți decât orice defecțiune tehnică.',
      'Ce pățește un panou solar prăfuit?|Primește mai puțină lumină;Se încarcă mai repede;Nu se schimbă nimic|0'],

    ['spatiu', 'robot,stea', 'Vești de pe Marte', 'Roverul măsoară temperatura și vântul, dar datele rămân în memorie. Nimeni de pe Pământ nu le vede.', 'Stația de date',
      'senzor,fir,baterie', 'oala,minge,floare', 'Măsoară ce se întâmplă|Duce semnalul la antenă|Alimentează stația',
      'Un semnal de pe Marte ajunge la noi în 3 până la 22 de minute. De aceea roverul trebuie să se descurce singur.',
      'Cât face un semnal de la Marte până la Pământ?|Minute bune;O secundă;O zi întreagă|0'],

    ['spatiu', 'planta,bec', 'Salată pe orbită', 'Echipajul mănâncă doar conserve de patru luni. Vor să crească salată verde la bord.', 'Sera spațială',
      'ghiveci,bec,pompa', 'sare,roata,toba', 'Ține rădăcinile la locul lor|Lumina care înlocuiește Soarele|Împinge apa la rădăcini',
      'Fără gravitație, apa nu curge în jos: rămâne lipită în bile. Trebuie împinsă cu o pompă spre rădăcini.',
      'De ce e nevoie de pompă în spațiu?|Apa nu curge în jos fără gravitație;Apa e prea rece;Plantele beau mai mult|0'],

    ['spatiu', 'plasa,racheta', 'Gunoiul de pe orbită', 'În jurul Pământului se învârt mii de bucăți de sateliți vechi. Una singură poate găuri o navă.', 'Colectorul orbital',
      'plasa,magnet,motoras', 'bec,pahar,floare', 'Prinde bucățile mari|Adună fragmentele de metal|Manevrează colectorul',
      'Un șurub pe orbită se mișcă de zece ori mai repede decât un glonț. De aceea și cel mai mic obiect e periculos.',
      'De ce e periculos un șurub pe orbită?|Merge cu viteză uriașă;E ruginit;E prea mare|0'],

    ['spatiu', 'robot,luna', 'Robotul rătăcit', 'Robotul de explorare a pornit spre crater și nu a mai găsit drumul înapoi la bază. Nu există GPS pe Lună.', 'Navigatorul',
      'senzor,ceas,baterie', 'cana,plasa,floare', 'Vede obstacolele|Ține socoteala drumului parcurs|Îl alimentează',
      'Dacă știi cât ai mers și în ce direcție, poți afla unde ești, chiar și fără hartă. Se numește navigație inerțială.'],

    ['spatiu', 'robot,cutie', 'Uneltele plutitoare', 'Astronautul lasă șurubelnița din mână pentru o secundă. Când se întoarce, ea a plecat în capătul modulului.', 'Trusa magnetică',
      'magnet,cutie,banda_adeziva', 'bec,apa,planta', 'Ține uneltele lipite|Le adăpostește|Fixează trusa de perete',
      'În imponderabilitate, un obiect lăsat din mână pleacă în călătorie și nu se oprește până nu lovește ceva.',
      'De ce plutesc obiectele pe stație?|Cad încontinuu în jurul Pământului;Nu au deloc greutate;Sunt prea ușoare|0'],

    ['spatiu', 'luna,gheata', 'Noaptea lunară', 'Pe Lună, noaptea ține două săptămâni și temperatura scade sub minus 170 de grade. Bateriile îngheață.', 'Scutul termic al bazei',
      'folie,carton,panou_solar', 'minge,peste,sfoara', 'Reflectă și păstrează căldura|Stratul izolator gros|Produce energie cât e zi',
      'Pe Lună sunt +120°C ziua și −170°C noaptea. Izolația e diferența dintre o bază care funcționează și una înghețată.',
      'De ce e nevoie de izolație pe Lună?|Din cauza diferenței uriașe de temperatură;Din cauza ploii;Din cauza vântului|0']
  ]
};
