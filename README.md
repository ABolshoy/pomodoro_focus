# Pomodoro App
Une application mobile de productivité basée sur la méthode Pomodoro, conçue avec React Native + Expo, permettant de gérer ses sessions de focus, de suivre son historique, et de visualiser sa progression via un calendrier de type GitHub.

## 📦 Stack technique
- React Native + Expo Router
- AsyncStorage pour la persistance locale
- Date-fns pour la gestion des dates
- React Navigation (Tabs via Expo Router) pour la navigation
- Custom Components pour une interface simple et efficace

## ⚙️ Fonctionnalités principales
### ✅ 1. Gestion du cycle Pomodoro
25 minutes de focus + 5 minutes de pause.
5 sessions par cycle.
Pause longue à la fin du cycle avec feedback.

### 🧠 2. Feedback post-cycle
Saisie facultative d’un ressenti ou d’un bilan à la fin du cycle.
Feedback stocké dans l’historique.

### 📊 3. Historique et visualisation
Vue calendrier inspirée de GitHub :
7 colonnes (jours) × 12 lignes (semaines).
Chaque case représente un jour, colorée selon le nombre de sessions.
Sélection d’une date pour afficher :
Le nombre de sessions du jour.
Les feedbacks associés.

### 🔥 4. Streak de productivité
Compte le nombre de jours consécutifs actifs.
Règle personnalisée : une streak est conservée si au moins 5 jours sur 7 ont une session.

### 📱 5. Gestion du background
Le timer fonctionne même si l’utilisateur quitte l’app.
Synchronisation du temps écoulé via AsyncStorage + AppState.

### 🚀 Installation
git clone https://github.com/tonpseudo/pomodoro-app.git
cd pomodoro-app
npm install
npx expo start

### 🗂️ Structure du projet (simplifiée)

#### /components
  Timer.jsx
  Buttons.jsx
  ProgressBar.jsx
  LargeBreak.jsx
  Calendar.jsx
  HistoryView.jsx
  Streak.jsx
#### /app
  index.jsx      ← page d’accueil (timer)
  history.jsx    ← historique + calendrier
#### /utils
  sessionStorage.js ← logique d’enregistrement des sessions
#### /app/_layout.jsx ← layout global avec barre de navigation

### 💾 Stockage local
Les données sont sauvegardées dans AsyncStorage :
{
  "2025-07-08": [
    {
      "duration": 25,
      "timestamp": 1720429800000,
      "feedback": "Bonne session, concentré !"
    }
  ],
  "2025-07-09": [...]
}

### 👤 Auteur
Développé par Adam Baroukh – projet personnel de productivité.
