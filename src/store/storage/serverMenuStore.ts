import { API_HOST } from "@/utils/BaseApp";
import { fetchDataFromServer } from "@/utils/fatchApi";

let menuPromise: Promise<any> | null = null;

async function menuStore() {
  if (menuPromise === null) {
    menuPromise = fetchDataFromServer(`${API_HOST}menu/all`);
  }
  return await menuPromise;
}

export { menuStore };