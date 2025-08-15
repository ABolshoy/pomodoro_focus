import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";

const STORAGE_KEY = "@pomodoro_cycles_history";

const getTodayDateKey = () => format(new Date(), "yyyy-MM-dd");

export async function getAllCyclesHistory() {
  try {
    const rawData = await AsyncStorage.getItem(STORAGE_KEY);
    return rawData ? JSON.parse(rawData) : {};
  } catch (err) {
    console.error("Error, loading history: ", err);
    return {};
  }
}

export async function getCyclesForDate(dateKey = getTodayDateKey()) {
  try {
    const history = await getAllCyclesHistory();
    return history[dateKey] || [];
  } catch (err) {
    console.error(
      `Erreur lors de la récupération des cycles pour ${dateKey} :`,
      err
    );
    return [];
  }
}

export async function saveCompletedPomodoroCycle(completedCycleData) {
  try {
    const today = getTodayDateKey();
    const history = await getAllCyclesHistory();
    const todayCycles = history[today] || [];
    todayCycles.push(completedCycleData);
    history[today] = todayCycles;
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    // console.log("Cycle pomodoro OK!");
  } catch (err) {
    console.error("Error, saving pomodoro cycle: ", err);
  }
}

export const logCurrentStorage = async () => {
  try {
    const data = await getAllCyclesHistory();
    // console.log(
    // "\n--- Contenu actuel de AsyncStorage (Pomodoro History) ---\n",
    // JSON.stringify(data, null, 2)
    // );
    // console.log(
    // "\n---------------------------------------------------------\n"
    // );
  } catch (e) {
    console.error("Erreur lors de l'affichage du stockage :", e);
  }
};

export async function saveCompletedPomodoroSession(sessionData) {
  try {
    const today = getTodayDateKey();
    const history = await getAllCyclesHistory();
    const todayCycles = history[today] || [];

    todayCycles.push(sessionData);
    history[today] = todayCycles;

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    // console.log("🎉 SESSION POMODORO COMPLÈTE SAUVEGARDÉE !");
  } catch (err) {
    console.error("Erreur lors de la sauvegarde de la session complète :", err);
  }
}
