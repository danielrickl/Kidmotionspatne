# Kidmotion
Web pro Kidmotion — kopie webu Kidmotion.cz (implementace pro lokální vývoj a nasazení)

Tento repozitář obsahuje React + TypeScript aplikaci generovanou podle struktury webu kidmotion.cz.

Rychlý start (lokálně):

```powershell
npm install
npm run dev
```

Vytvoření produkční verze:

```powershell
npm run build
npm run preview
```

Nasazení na GitHub Pages

Repo je nastaveno s GitHub Actions workflowem, který při pushi do větve `main` automaticky spustí `npm ci`, `npm run build` a nasadí obsah `./dist` do větve `gh-pages`.

Pro nasazení stačí:

```powershell
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

Action se automaticky postará o build a publikaci do `gh-pages`.
 
 Poznámka o `package-lock.json` a `npm ci`:
 
 - Workflow preferuje `npm ci` (instaluje přesně podle `package-lock.json`). Pokud `package-lock.json` v repu chybí, workflow spustí `npm install` jako zálohu.
 - Doporučuji vygenerovat reálný `package-lock.json` lokálně a commitnout ho, aby `npm ci` v CI byla deterministická.
 
 Lokálně vygenerujete a commitnete lockfile těmito příkazy:
 
 ```powershell
 npm install
 git add package-lock.json
 git commit -m "Add package-lock.json"
 git push origin main
 ```
 
 Po pushi se workflow znovu spustí a použije `npm ci` (pokud je `package-lock.json` v repu).

