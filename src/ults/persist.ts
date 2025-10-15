import type { State } from "../types";

const postAPIStateDataToDB = async (stateData: State): Promise<void> => {
    console.log('Saving to "DataBase"');
    // Mock saving to DB by using localStorage
    localStorage.setItem(stateData.userAuth.userId ?? "appState", JSON.stringify(stateData));
};

const fetchAPIStateDataFromDB = async (user: string | undefined): Promise<State | null> => {
    console.log(`Fetching data from "DataBase" for user: ${user}`);
    // Mock fetching from DB by using localStorage
    if (!user) {
        console.log("No user data in database");
        return null;
    }
    const data = localStorage.getItem(user);

    if (data) {
        return JSON.parse(data);
    }

    return null;
}

const saveDataState = async (stateData: State): Promise<void> => {
    if (stateData.userAuth.isLoggedIn) {
        await postAPIStateDataToDB(stateData);
    }
};

const loadInitialDataState = async (id: string | undefined): Promise<State | null> => {
    return await fetchAPIStateDataFromDB(id) || null;
};

export const persistence = {
  saveDataState,
  loadInitialDataState,
};
