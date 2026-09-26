# Digiloovtöö juhendajate koolitus — tutvustusleht

Üheleheküljeline turundusleht, mis tutvustab Tallinna Ülikooli täienduskoolitust **„Digiloovtöö juhendajate koolitus“** ja suunab õpetajaid koolitusele registreeruma.

Leht on tehtud tehnoloogiatega React, Vite, TypeScript ja Tailwind CSS ning avaldatakse **GitHub Pagesis** automaatselt.

- Kõik muudetav info (registreerimislink, kontaktid, grupid, koolitajad, moodulid, KKK, näidisprojektid) on **ühes failis**: `src/data/course.ts`.
- Leht ei kogu isikuandmeid, ei kasuta küpsiseid, analüütikat ega väliseid fonte.
- Registreerimine toimub välise ametliku vormi kaudu (vt punkt 5).

---

## 1. Projekti eesmärk

Leht peab õpetajale mõne sekundiga selgeks tegema:

- kellele koolitus on mõeldud;
- mis on digiloovtöö (koos näidisprojektidega digiõpikust „Digiloovtöö“);
- mida koolitusel õpitakse ja milline on praktiline lõpptulemus;
- kuidas õpe on korraldatud ja kes koolitust läbi viivad;
- kuidas registreeruda.

## 2. Kohalik käivitamine (oma arvutis)

Vaja on programmi **Node.js** (versioon 20 või uuem): https://nodejs.org → laadi alla „LTS“ ja paigalda.

1. Ava Terminal (Mac) või PowerShell (Windows).
2. Liigu projekti kausta, näiteks kui kaust on töölaual:
   ```
   cd ~/Desktop/digiloovtoo-koolitus
   ```
3. Paigalda vajalikud paketid (ainult esimesel korral):
   ```
   npm install
   ```
4. Käivita arendusserver:
   ```
   npm run dev
   ```
5. Ava brauseris aadress, mille Terminal näitab (tavaliselt `http://localhost:5173/`). Kui muudad faile, uueneb leht ise.
6. Serveri peatamiseks vajuta Terminalis `Ctrl + C`.

## 3. Production build (avaldamiseks valmis versioon)

```
npm run build
```

Valmis leht tekib kausta `dist`. Selle eelvaateks:

```
npm run preview
```

Tüübikontroll eraldi: `npm run typecheck`.

## 4. GitHub Pagesi aktiveerimine

1. Loo GitHubis uus avalik repositoorium, nt nimega `digiloovtoo-koolitus`.
2. Lae sinna kõik selle kausta failid **koos peidetud kaustaga `.github`** (kaust `node_modules` ja `dist` ei ole vajalikud).
   - Kõige lihtsam veebis: repositooriumis **Add file → Upload files**, lohista failid ja kaustad aknasse, vajuta **Commit changes**.
   - Või käsurealt:
     ```
     git init
     git add .
     git commit -m "Koolituse tutvustusleht"
     git branch -M main
     git remote add origin https://github.com/KASUTAJANIMI/digiloovtoo-koolitus.git
     git push -u origin main
     ```
     (asenda `KASUTAJANIMI` oma GitHubi kasutajanimega)
3. Ava repositooriumis **Settings → Pages**.
4. Vali **Build and deployment → Source: GitHub Actions**.
5. Ava vahekaart **Actions**: töövoog „Avalda GitHub Pagesis“ käivitub iga muudatuse järel. Kui kõrval on roheline linnuke, on leht avaldatud.
6. Leht on aadressil `https://KASUTAJANIMI.github.io/digiloovtoo-koolitus/`.
7. Lisa see aadress faili `src/data/course.ts` väärtuseks `SITE_URL` — siis on sotsiaalmeedias jagamise eelvaade täpne.

Lehe alamkaust (`base`) seadistatakse automaatselt repositooriumi nime järgi — midagi ei pea käsitsi muutma.

## 5. Registreerimislingi muutmine

Ava `src/data/course.ts` ja leia rida:

```ts
export const REGISTRATION_URL = "LISA_REGISTREERIMISLINK";
```

Asenda jutumärkide vahel olev tekst päris aadressiga (Tallinna Ülikooli registreerimisleht või muu ametlik vorm), nt:

```ts
export const REGISTRATION_URL = "https://www.tlu.ee/...";
```

- Kuni linki pole lisatud, viivad kõik nupud „Registreeru koolitusele“ lehe registreerimisplokki ja seal on kirjas, et link avaldatakse sellel lehel. Tehnilist asendusteksti avalikul lehel ei näidata.
- Pärast lingi lisamist viivad kõik nupud (esimene ekraan, eeliste järel, õppekorralduse juures, lõpukutse, mobiili alumine riba) otse registreerimislehele.
- Ära ehita GitHub Pagesile oma registreerimisvormi: leht on staatiline ega tohi isikuandmeid koguda.

## 6. Kontaktandmete muutmine

Samas failis täida plokk `contact`:

```ts
export const contact = {
  name: "...",
  email: "...",
  phone: "...",
  web: "...",
};
```

Tühjaks jäetud välju lehel ei kuvata. Kui vähemalt e-post, telefon või veebiaadress on täidetud, ilmuvad kontaktid lõpukutsesse ja jalusesse.

## 7. Grupi kuupäevade muutmine

Plokk `groups`:

```ts
export const groups: Group[] = [
  { label: "I grupp", period: "august–september 2026" },
  { label: "II grupp", period: "märts–aprill 2027" },
];
```

- `period` — periood või kinnitatud kuupäevad (nt `"12.03.2027–23.04.2027"`).
- `note` (valikuline) — lisarida, nt `note: "Registreerimine on avatud"`.
- Juba toimunud grupi rea võid kustutada.
- Kui kuupäevad on kinnitatud, muuda ka `course.datesNote` ning KKK viimane vastus.

## 8. Koolitajate info ja fotode lisamine

Plokk `trainers`:

```ts
{ name: "Maia Lust", role: "Koolitaja", bio: "", photo: "" },
```

- `bio` — 1–3 lauset kinnitatud infot. Tühjaks jäetuna ei kuvata.
- `role` — nt ametinimetus.
- Foto: loo kaust `public/koolitajad/`, pane sinna ruudukujuline pilt (vähemalt 300×300 px, nt `maia-lust.jpg`) ja kirjuta failinimi väljale `photo: "maia-lust.jpg"`. Ilma fotota kuvatakse neutraalne ikoon.

## 9. Näidisprojektid

Plokk `examples` sisaldab kaheksat näidisprojekti digiõpikust „Digiloovtöö“. Iga kaart viib õpiku vastavasse ossa. Kirjeldused on lühikesed ümbersõnastused; õpiku tekste ega pilte lehele kopeeritud ei ole.

## 10. Kontroll enne avaldamist

1. `npm run build` lõpeb ilma vigadeta.
2. `npm run preview` → ava leht ja kontrolli:
   - kõik menüülingid viivad õigesse kohta;
   - kõik nupud „Registreeru koolitusele“ viivad õigele aadressile;
   - näidisprojektide lingid avanevad;
   - KKK küsimused avanevad ja sulguvad.
3. Kitsenda brauseriakent või kasuta arendaja tööriistade mobiilivaadet (Chrome: `F12` → telefoni ikoon): tekst ei tohi ekraanist välja minna, alumine registreerimisriba ilmub pärast esimest ekraani.
4. Klaviatuur: vajuta korduvalt `Tab` — esimesena ilmub „Liigu põhisisu juurde“ ja iga aktiivne element saab nähtava raami.
5. Otsi lehelt, et seal poleks teksti `LISA_` ega kinnitamata fakte (hind, täpsed kuupäevad, väljamõeldud tagasiside).
6. Pärast avaldamist ava leht telefonis ja kontrolli jagamise eelvaadet (nt saada link endale).

## Failistruktuur

```
.github/workflows/deploy.yml   automaatne avaldamine GitHub Pagesis
public/favicon.svg             lehe märk
public/og-image.png            jagamise eelvaate pilt
404.html                       leht puuduva aadressi korral
index.html                     lehe põhi (SEO lisatakse failist course.ts)
vite.config.ts                 ehituse seadistus, SEO ja Schema.org Course
src/data/course.ts             KÕIK MUUDETAVAD ANDMED
src/components/                lehe osad (Hero, Näited, Programm, KKK jne)
src/index.css                  värvid, fondid ja animatsioonid
```
