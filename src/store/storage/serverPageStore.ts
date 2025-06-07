import { API_HOST } from "@/utils/BaseApp";
import { fetchDataFromServer } from "@/utils/fatchApi";

let pagePromise: Promise<any> | null = null;

async function pageStore() {
  if (pagePromise === null) {
    pagePromise = fetchDataFromServer(`${API_HOST}page/all`);
  }
  return await pagePromise;
}



export { pageStore };