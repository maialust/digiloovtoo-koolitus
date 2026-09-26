/* =====================================================================
 * KOOLITUSE ANDMED — KÕIK MUUDETAV INFO ON SIIN FAILIS
 * ---------------------------------------------------------------------
 * Muuda ainult jutumärkide vahel olevat teksti. Ära kustuta komasid,
 * sulge ega jutumärke. Pärast muutmist salvesta fail — kui leht on
 * GitHubis, avaldatakse muudatus automaatselt mõne minuti jooksul.
 * ===================================================================== */

/* ---------------------------------------------------------------------
 * 1. REGISTREERIMISLINK
 * Asenda "LISA_REGISTREERIMISLINK" päris aadressiga, näiteks:
 *   export const REGISTRATION_URL = "https://www.tlu.ee/...";
 * Seni, kuni siin on "LISA_REGISTREERIMISLINK", viivad kõik
 * registreerimisnupud lehe registreerimisplokki (mitte olematule
 * aadressile) ja avalikul lehel seda sõna ei kuvata.
 * ------------------------------------------------------------------- */
export const REGISTRATION_URL = "https://haridusportaal.edu.ee/koolitused-juhan/koolitus/019fcbff-3de8-75c9-a122-21a629c23edc";;

/* ---------------------------------------------------------------------
 * 2. LEHE AVALIK AADRESS (SEO ja jagamise eelvaate jaoks)
 * Pärast GitHub Pagesi aktiveerimist lisa siia lehe täisaadress,
 * näiteks "https://kasutajanimi.github.io/digiloovtoo-koolitus/".
 * Tühjaks jäetuna töötab leht ikka; ainult sotsiaalmeedia eelvaade
 * on vähem täpne.
 * ------------------------------------------------------------------- */
export const SITE_URL = "";

/* ---------------------------------------------------------------------
 * Abiväärtused (ei ole vaja muuta)
 * ------------------------------------------------------------------- */
export const REGISTRATION_ANCHOR = "registreeru";
export const hasRegistrationUrl = /^https?:\/\//i.test(REGISTRATION_URL.trim());
export const registrationHref = hasRegistrationUrl
  ? REGISTRATION_URL.trim()
  : `#${REGISTRATION_ANCHOR}`;

/* =====================================================================
 * PÕHIANDMED
 * ===================================================================== */
export const course = {
  name: "Digiloovtöö juhendajate koolitus",
  organizer: "Tallinna Ülikool",
  organizerShort: "TLÜ",
  language: "eesti keel",
  location: "Tallinna Ülikool",
  locationDetail: "Kontaktpäevad toimuvad Tallinnas, Tallinna Ülikoolis.",
  format: "Hübriidõpe",
  maxParticipants: 24,
  certificate: "Tallinna Ülikooli täiendusõppe tunnistus",
  audience:
    "Kõigi ainete õpetajad, kes juhendavad või plaanivad juhendada digiloovtöid põhikoolis.",
  prerequisite:
    "Kasuks tuleb varasem loovtöö juhendamise kogemus põhikoolis, kuid see ei ole osalemise eeltingimus.",
  volume: {
    total: 52, // akadeemilist tundi kokku
    contact: 36, // kontakt- ja veebiõpe
    independent: 16, // iseseisev töö
  },
  contactDays: {
    count: 5,
    hoursEach: 6, // akadeemilist tundi
  },
  // NB! Veebikohtumiste arv ja kestus on õppekavas kahel viisil kirjas,
  // seetõttu on lehel neutraalne sõnastus. Muuda ainult kinnitatud info põhjal.
  onlineNote: "Kontaktpäevade vahel toimuvad veebikohtumised ja konsultatsioonid Zoomis.",
  datesNote: "Kontaktpäevade täpsed kuupäevad avaldatakse enne registreerimise algust.",
  tools: {
    learning: "Google Classroom",
    meetings: "Zoom",
    community: "Discord või Slack",
  },
};

/* ---------------------------------------------------------------------
 * ÕPPEGRUPID
 * Lisa täpsed kuupäevad alles siis, kui need on kinnitatud.
 * `note` on valikuline lisarida (nt "Registreerimine on avatud").
 * Kui mõni grupp on juba toimunud, kustuta see plokk või muuda `note`.
 * ------------------------------------------------------------------- */
export type Group = { label: string; period: string; note?: string };

export const groups: Group[] = [
  { label: "I grupp", period: "august–september 2026" },
  { label: "II grupp", period: "märts–aprill 2027" },
];

/* ---------------------------------------------------------------------
 * KOOLITAJAD
 * `bio` — lühitutvustus (1–3 lauset). Tühjaks jäetuna ei kuvata midagi.
 * `photo` — pildifaili nimi kaustas public/koolitajad/,
 *           nt "maia-lust.jpg". Tühjaks jäetuna kuvatakse initsiaalid.
 * `role`  — nt ametikoht. Lisa ainult kinnitatud info.
 * ------------------------------------------------------------------- */
export type Trainer = { name: string; role: string; bio: string; photo: string };

export const trainers: Trainer[] = [
  { name: "Maia Lust", role: "Koolitaja", bio: "", photo: "" },
  { name: "Mart Laanpere", role: "Koolitaja", bio: "", photo: "" },
];

/* ---------------------------------------------------------------------
 * KONTAKT
 * Täida, kui kontaktandmed on teada. Tühjad väljad lehel ei kuvata.
 * ------------------------------------------------------------------- */
export const contact = {
  name: "", // nt "Tallinna Ülikooli täiendusõppe keskus" või kontaktisiku nimi
  email: "", // nt "taiendusope@tlu.ee"
  phone: "", // nt "+372 ..."
  web: "", // nt koolituse ametliku lehe aadress
};
export const hasContact = Boolean(contact.email || contact.phone || contact.web);

/* =====================================================================
 * LEHE SISU
 * ===================================================================== */

export type IconKey =
  | "compass"
  | "users"
  | "route"
  | "kanban"
  | "message"
  | "scale"
  | "laptop"
  | "presentation"
  | "hammer"
  | "userSmall"
  | "monitor"
  | "books"
  | "messages"
  | "award"
  | "lightbulb"
  | "layers"
  | "workflow"
  | "target"
  | "sparkles"
  | "shapes"
  | "calendar"
  | "check"
  | "folder"
  | "home"
  | "shield"
  | "library"
  | "view360"
  | "bookImage"
  | "sprout"
  | "triangle"
  | "bot";

export const benefits: { icon: IconKey; title: string; text: string }[] = [
  {
    icon: "hammer",
    title: "Praktika on esikohal",
    text: "Ülesanded on seotud digiloovtöö juhendamisega sinu enda koolis. Õpid tehes ja rakendad kohe.",
  },
  {
    icon: "userSmall",
    title: "Kuni 24 osalejat",
    text: "Väike grupp jätab ruumi päriselt koos töötamiseks, küsimusteks ja isiklikuks tagasisideks.",
  },
  {
    icon: "monitor",
    title: "Hübriidõpe",
    text: "Viis kontaktpäeva Tallinna Ülikoolis ning nende vahel veebikohtumised ja konsultatsioonid Zoomis.",
  },
  {
    icon: "books",
    title: "Sobib kõigi ainete õpetajale",
    text: "Sa ei pea olema informaatikaõpetaja. Keskmes on juhendamine, meeskonnatöö ja hindamine.",
  },
  {
    icon: "messages",
    title: "Tugi ka päevade vahel",
    text: "Kogemusi jagatakse ja muresid arutatakse jooksvalt koos koolitajate ja teiste osalejatega.",
  },
  {
    icon: "award",
    title: "Tallinna Ülikooli tunnistus",
    text: "Edukalt lõpetanud osaleja saab Tallinna Ülikooli täiendusõppe tunnistuse.",
  },
];

export const outcomes: { icon: IconKey; title: string; text: string }[] = [
  {
    icon: "compass",
    title: "Mõtestad digiloovtöö",
    text: "Mõistad digiloovtöö kohta kooli õppekavas ning oskad selgitada selle eesmärke õpilastele ja kolleegidele.",
  },
  {
    icon: "users",
    title: "Leiad teemad ja moodustad meeskonnad",
    text: "Pakud õpilastele sobivaid teemasid ja aitad neil kokku panna toimivad töörühmad.",
  },
  {
    icon: "route",
    title: "Juhendad kogu teekonna",
    text: "Toetad meeskonda vajaduste analüüsist ja ideest prototüübi, testimise ja esitluseni.",
  },
  {
    icon: "kanban",
    title: "Juhid projekti agiilselt",
    text: "Kasutad agiilse arenduse võtteid ja digitaalseid projektijuhtimise vahendeid.",
  },
  {
    icon: "message",
    title: "Annad kujundavat tagasisidet",
    text: "Tagasiside aitab õpilastel näha, kus nad on ja milline on järgmine samm.",
  },
  {
    icon: "scale",
    title: "Hindad õiglaselt",
    text: "Hindad nii iga õpilase individuaalset panust kui ka meeskonna ühist tulemust.",
  },
  {
    icon: "laptop",
    title: "Valid sobivad digikeskkonnad",
    text: "Kanban-tahvel, Taiga, GitHub või Google Classroom — tead, mida milleks kasutada.",
  },
  {
    icon: "presentation",
    title: "Valmistad ette kaitsmise",
    text: "Aitad õpilastel ette valmistada kaitsmise, refleksiooni ja tulemuse tutvustamise koolipere ees.",
  },
];

/* ---------------------------------------------------------------------
 * PROGRAMM — kuus teemaplokki
 * ------------------------------------------------------------------- */
export type Module = { phase: string; title: string; topics: string[] };

export const modules: Module[] = [
  {
    phase: "Mõista",
    title: "Digiloovtöö koht õppekavas",
    topics: [
      "digiloovtöö eesmärk",
      "seos informaatika ainekava, STEM-hariduse ja riikliku õppekavaga",
      "digiloovtöö ja traditsioonilise loovtöö erinevused",
    ],
  },
  {
    phase: "Vali",
    title: "Teemad, õppematerjalid ja kooli juhend",
    topics: [
      "praktilised näited",
      "digiõpik ja õpetajaraamat",
      "kooli tasandi juhendi koostamine",
      "võimalikud teemad: veebidisain, robootika, liitreaalsus ja teised digilahendused",
    ],
  },
  {
    phase: "Korralda",
    title: "Meeskonnatöö ja projektijuhtimine",
    topics: [
      "ülesannete koostamine ja jaotamine",
      "Kanban",
      "Taiga või GitHub",
      "töö korraldamine kooli digitaalses õpikeskkonnas",
    ],
  },
  {
    phase: "Juhenda",
    title: "Metoodika, juhendamine ja tagasiside",
    topics: [
      "disainmõtlemine",
      "agiilne arendusprotsess",
      "õpetaja roll juhendajana",
      "kujundav tagasiside",
      "arvestuslik hindamine",
    ],
  },
  {
    phase: "Loo",
    title: "Analüüs ja prototüüpimine",
    topics: [
      "sihtrühma vajaduste analüüs",
      "persoonad ja stsenaariumid",
      "prototüüpide loomine",
      "testimine ja täiustamine",
      "juhendamisstrateegiad",
    ],
  },
  {
    phase: "Esitle",
    title: "Hindamine, kaitsmine ja refleksioon",
    topics: [
      "hindamiskriteeriumid",
      "individuaalse ja rühmatöö hindamine",
      "lõppesitlus ja kaitsmine",
      "refleksioon",
      "tulemuste tutvustamine kogukonnas",
      "võimalikud võistlusformaadid",
    ],
  },
];

/* ---------------------------------------------------------------------
 * ÕPPEPROTSESS
 * ------------------------------------------------------------------- */
export const processSteps: { title: string; text: string }[] = [
  { title: "Kontaktpäev", text: "Uus teema, näited ja koostöö Tallinna Ülikoolis." },
  { title: "Praktiline ülesanne", text: "Ülesanne põhineb kontaktpäeva ja veebikohtumiste teemadel." },
  { title: "Rakendamine oma koolis", text: "Proovid ja kohandad lahendusi oma kooli ja õpilaste jaoks." },
  { title: "Veebikohtumine", text: "Konsultatsioon Zoomis: küsimused, arutelu ja tagasiside." },
  { title: "Kogemuste jagamine", text: "Jooksev arutelu koolitajate ja teiste osalejatega." },
  { title: "Järgmine arendusetapp", text: "Täiendad oma kava ja liigud järgmise teema juurde." },
  { title: "Portfoolio kaitsmine", text: "Tood kokku oma töö ja esitled seda koolituse lõpus." },
];

/* ---------------------------------------------------------------------
 * NÄIDISPROJEKTID digiõpikust „Digiloovtöö“
 * Kirjeldused on lühikesed ümbersõnastused, iga kaart viitab õpiku
 * vastavale osale. Õpiku litsents: kõik õigused kaitstud — seetõttu
 * ei kopeerita siia õpiku teksti ega pilte.
 * ------------------------------------------------------------------- */
export const exampleBook = {
  title: "Digiloovtöö",
  author: "Maia Lust",
  url: "https://web.htk.tlu.ee/informaatika/digiloovtoo/",
};

export const digiloovtooIntro =
  "Digiloovtöö on III kooliastme õpilaste meeskonnaprojekt, kus õpilased loovad päris sihtrühmale digitaalse lahenduse. Nad analüüsivad kasutajate vajadusi, koostavad persoonad, katsetavad ideid paberprototüübiga ja arendavad seejärel interaktiivse prototüübi. Erinevalt kirjalikust loovtööst tugineb digiloovtöö projektõppele ja korduvatele arendustsüklitele.";

export const examples: { icon: IconKey; title: string; text: string; tags: string[]; url: string }[] = [
  {
    icon: "home",
    title: "Nutikodu",
    text: "Meeskond kavandab kodu turvalisust ja energiatõhusust toetava nutilahenduse.",
    tags: ["nutilukud", "valvekaamera", "nutivalgustid"],
    url: "https://web.htk.tlu.ee/informaatika/digiloovtoo/part/main-body/",
  },
  {
    icon: "shield",
    title: "Küberkaitse lipuvõistlus",
    text: "Õpilased loovad kaasõpilastele küberturbe võistluse koos ülesannete ja keskkonnaga.",
    tags: ["CTF", "CTFd", "küberturve"],
    url: "https://web.htk.tlu.ee/informaatika/digiloovtoo/part/kuberkaitse-lipuvoistlus/",
  },
  {
    icon: "library",
    title: "Elav raamatukogu",
    text: "Interaktiivsed raamatututvustused muudavad kooliraamatukogu õpilastele kutsuvamaks.",
    tags: ["QR-koodid", "interaktiivne ekraan"],
    url: "https://web.htk.tlu.ee/informaatika/digiloovtoo/part/elav-raamatukogu/",
  },
  {
    icon: "view360",
    title: "Koolimaja virtuaaltuur",
    text: "Panoraamvõtetest valmib veebituur, mis tutvustab kooli külastajatele.",
    tags: ["360° foto", "virtuaaltuur"],
    url: "https://web.htk.tlu.ee/informaatika/digiloovtoo/part/koolimaja-virtuaaltuur/",
  },
  {
    icon: "bookImage",
    title: "Interaktiivne aastaraamat",
    text: "Veebiplatvorm, kus koolipere saab jagada õppeaasta sündmusi ja meenutusi.",
    tags: ["veebidisain", "multimeedia"],
    url: "https://web.htk.tlu.ee/informaatika/digiloovtoo/part/kooli-interaktiivne-aastaraamat/",
  },
  {
    icon: "sprout",
    title: "Taimekasvatuse automaatika",
    text: "Andur ja kontroller aitavad taimi kasta targemalt ja energiat säästa.",
    tags: ["micro:bit", "mullaniiskusandur"],
    url: "https://web.htk.tlu.ee/informaatika/digiloovtoo/part/taimekasvatamise-automatiseerimine/",
  },
  {
    icon: "triangle",
    title: "Geomeetriavalemite rakendus",
    text: "Mobiilirakendus, millega saab geomeetria valemeid harjutada ja korrata.",
    tags: ["App Inventor", "mobiilirakendus"],
    url: "https://web.htk.tlu.ee/informaatika/digiloovtoo/part/geomeetria-valemite-rakendus/",
  },
  {
    icon: "bot",
    title: "Õppematerjal tehisintellektiga",
    text: "Õpilased loovad tehisintellekti rakenduste abil õppematerjali mõne aine õpitulemuse toetamiseks.",
    tags: ["tehisintellekt", "õppematerjal"],
    url: "https://web.htk.tlu.ee/informaatika/digiloovtoo/part/tehisintellekt/",
  },
];

/* ---------------------------------------------------------------------
 * PRAKTILINE LÕPPTULEMUS
 * ------------------------------------------------------------------- */
export const finalResult = {
  statement:
    "Koolituse lõpuks on sul olemas läbimõeldud tegevuskava vähemalt ühe õpilasrühma digiloovtöö juhendamiseks oma koolis.",
  items: [
    "sobiv teema õpilasrühma digiloovtööks",
    "selge ülevaade juhendamise etappidest",
    "meeskonnatöö ülesehitus ja rollid",
    "valitud digitaalsed töövahendid",
    "hindamiskriteeriumid",
    "tagasiside andmise plaan",
    "projekti raamistik ideest esitluse ja refleksioonini",
  ],
};

/* ---------------------------------------------------------------------
 * SEOS ÕPETAJA KUTSESTANDARDIGA (tase 7)
 * ------------------------------------------------------------------- */
export const competences = {
  standard: "Õpetaja kutsestandardi 7. taseme pädevused",
  items: [
    { title: "Innovatsioonipädevus", text: "loovate lahenduste rakendamine digiloovtöö juhendamisel" },
    { title: "Digipädevus", text: "digivahendite teadlik, tõhus ja vastutustundlik kasutamine" },
    { title: "Õppijate toetamine", text: "õpilasmeeskondade suunamine kogu arendusprotsessi vältel" },
    { title: "Õppevara valimine, kohandamine ja loomine", text: "digiõpiku, juhendite ja materjalide kasutamine oma kooli vajadustest lähtudes" },
    { title: "Õppijate individuaalse arengu toetamine", text: "iga õpilase panuse märkamine ja hindamine meeskonnatöös" },
  ],
  priorities: [
    "analüüsioskus ja uurimispädevus",
    "haridustehnoloogiate mõtestatud rakendamine",
    "kaasav haridus",
  ],
};

/* ---------------------------------------------------------------------
 * LÕPETAMINE
 * ------------------------------------------------------------------- */
export const completion: { icon: IconKey; title: string; text: string }[] = [
  { icon: "calendar", title: "Osalemine", text: "Osaled vähemalt 75% kontaktpäevadest." },
  { icon: "check", title: "Ülesanded", text: "Sooritad kõik nõutud individuaalsed ja rühmaülesanded." },
  { icon: "folder", title: "Portfoolio", text: "Koostad portfoolio ja kaitsed selle." },
  { icon: "scale", title: "Hindamine", text: "Mitteeristav hindamine: arvestatud / mittearvestatud." },
];

/* ---------------------------------------------------------------------
 * KKK — korduma kippuvad küsimused
 * Vasta ainult kinnitatud info põhjal.
 * ------------------------------------------------------------------- */
export const faq: { q: string; a: string }[] = [
  {
    q: "Mis on digiloovtöö?",
    a: "Digiloovtöö on III kooliastme õpilaste meeskonnaprojekt, kus õpilased loovad päris sihtrühmale digitaalse lahenduse: analüüsivad vajadusi, katsetavad ideid prototüüpidega ja esitlevad tulemust. Näiteid leiad sellel lehel jaotisest „Näited“ ning digiõpikust „Digiloovtöö“.",
  },
  {
    q: "Kellele koolitus sobib?",
    a: "Kõigi ainete õpetajatele, kes juhendavad või plaanivad juhendada digiloovtöid põhikoolis. Koolitus keskendub III kooliastme õpilasmeeskondade juhendamisele.",
  },
  {
    q: "Kas koolitus sobib ka õpetajale, kes ei õpeta informaatikat?",
    a: "Jah. Koolitus on mõeldud kõigi ainete õpetajatele. Keskmes on juhendamise oskused: teema valik, meeskonnatöö korraldamine, tagasiside ja hindamine. Digitaalseid töövahendeid õpid koolituse käigus kasutama.",
  },
  {
    q: "Kas varasem digiloovtöö juhendamise kogemus on kohustuslik?",
    a: "Ei. Soovitatav on varasem loovtöö juhendamise kogemus põhikoolis, kuid see ei ole osalemise eeltingimus.",
  },
  {
    q: "Kui suur on õppegrupp?",
    a: "Ühes grupis on kuni 24 osalejat. See võimaldab praktilist koostööd, arutelu ja tagasisidet.",
  },
  {
    q: "Kus koolitus toimub?",
    a: "Viis kontaktpäeva toimuvad Tallinnas, Tallinna Ülikoolis. Kontaktpäevade vahel kohtutakse veebis Zoomis ja õppematerjalid on Google Classroomis.",
  },
  {
    q: "Milline osa toimub veebis?",
    a: "Kontaktpäevade vahel toimuvad veebikohtumised ja konsultatsioonid Zoomis. Kogemusi jagatakse ja küsimusi arutatakse jooksvalt ka Discordis või Slackis.",
  },
  {
    q: "Kui palju on iseseisvat tööd?",
    a: "Iseseisev töö moodustab 16 akadeemilist tundi 52-st. Need on praktilised ülesanded kontaktpäevade vahel, mis on seotud digiloovtöö juhendamisega sinu koolis. Enamik ülesandeid on individuaalsed, mõned tehakse paaris või rühmas.",
  },
  {
    q: "Millised on koolituse lõpetamise tingimused?",
    a: "Osalemine vähemalt 75% kontaktpäevadest, kõigi nõutud individuaalsete ja rühmaülesannete sooritamine ning portfoolio koostamine ja kaitsmine. Hindamine on mitteeristav: arvestatud / mittearvestatud.",
  },
  {
    q: "Millise dokumendi osaleja saab?",
    a: "Koolituse edukalt lõpetanud osaleja saab Tallinna Ülikooli täiendusõppe tunnistuse.",
  },
  {
    q: "Millal järgmised grupid alustavad?",
    a: "Grupid on kavandatud perioodidele august–september 2026 ja märts–aprill 2027. Kontaktpäevade täpsed kuupäevad avaldatakse enne registreerimise algust.",
  },
];

/* ---------------------------------------------------------------------
 * SEO
 * ------------------------------------------------------------------- */
export const seo = {
  title: "Digiloovtöö juhendajate koolitus | Tallinna Ülikool",
  description:
    "Praktiline täienduskoolitus kõigi ainete õpetajatele, kes juhendavad põhikoolis digiloovtöid: disainmõtlemine, prototüüpimine, meeskonnatöö ja kujundav hindamine. 52 ak tundi, Tallinna Ülikool.",
  ogTitle: "Aita õpilastel muuta idee toimivaks digilahenduseks",
  ogDescription:
    "Digiloovtöö juhendajate koolitus Tallinna Ülikoolis: hübriidõpe, kuni 24 osalejat, praktiline tegevuskava oma kooli digiloovtöö juhendamiseks.",
};
