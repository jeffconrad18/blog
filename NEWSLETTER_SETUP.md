# Newsletter Setup Instructions

Diese Anleitung erklärt, wie du die erforderlichen GitHub-Tokens und Secrets für die Newsletter-Funktionalität einrichtest.

## 1. Erstelle ein privates Repository

Zuerst musst du ein privates Repository erstellen, um die E-Mail-Adressen der Abonnenten zu speichern:

1. Gehe zu GitHub und erstelle ein neues Repository mit dem Namen `newsletter-emails-private`
2. Stelle sicher, dass das Repository auf **Privat** gesetzt ist
3. Initialisiere es mit einer README-Datei
4. Erstelle eine `emails.csv`-Datei mit der Kopfzeile: `Email,Datum`
5. Kopiere den Inhalt von `github-private-repo-readme.md` in die README deines Repositories

## 2. Erstelle Personal Access Tokens (PATs)

Du benötigst zwei verschiedene Personal Access Tokens:

### Token 1: Für die GitHub Action (PRIVATE_REPO_TOKEN)

Dieses Token ermöglicht der GitHub Action, in dein privates Repo zu schreiben:

1. Gehe zu GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Erstelle ein neues Token mit den folgenden Scopes:
   - `repo` (für Zugriff auf private Repositories)
   - `workflow`
3. Kopiere dieses Token und bewahre es sicher auf

### Token 2: Für Server-API-Aufrufe (GITHUB_TOKEN)

Dieses Token wird von der Server-API verwendet, um die GitHub Action auszulösen:

1. Gehe zu GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Erstelle ein weiteres Token mit dem `repo`-Scope
3. Kopiere dieses Token und bewahre es sicher auf

## 3. Füge die Secrets zu deinen Repositories hinzu

### In deinem öffentlichen Blog-Repository:

1. Gehe zu Repository Settings → Secrets and variables → Actions → New repository secret
2. Füge ein Secret namens `PRIVATE_REPO_TOKEN` mit dem Wert von Token 1 hinzu

### Für deinen Server:

Füge den Wert von Token 2 zu deinen Umgebungsvariablen hinzu:

1. Erstelle oder bearbeite eine `.env`-Datei im Stammverzeichnis deines Projekts:
```
GITHUB_TOKEN=dein_token_2_wert
```
2. Stelle sicher, dass `.env` in deiner `.gitignore`-Datei steht, um zu verhindern, dass sie committet wird

Für die Produktionsbereitstellung fügst du diese Umgebungsvariable zu deiner Hosting-Plattform hinzu.

## 4. Testen der Einrichtung

Um zu testen, ob alles funktioniert:

1. Stelle deine Website mit dem Newsletter-Formular bereit
2. Sende eine Test-Anmeldung
3. Überprüfe dein privates Repository, um zu sehen, ob die E-Mail zu `emails.csv` hinzugefügt wurde
