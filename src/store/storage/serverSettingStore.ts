import { API_HOST } from "@/utils/BaseApp";
import { fetchDataFromServer } from "@/utils/fatchApi";

let settingPromise: Promise<any> | null = null;

async function settingStore() {
  if (settingPromise === null) {
    settingPromise = fetchDataFromServer(`${API_HOST}setting/get`);
  }
  return await settingPromise;
}

export { settingStore };