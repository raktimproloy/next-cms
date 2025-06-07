import { API_HOST } from "@/utils/BaseApp";

let data: any = null;
let updated: string = "not-updated";
let resolvePromise: (value?: any) => void = () => {};

async function pageStore(): Promise<any> {
  if (updated === "not-updated") {
    try {
      const response = await fetch(`${API_HOST}page/all`);
      const resData = await response.json();
      data = resData;
      updated = "updated";// Add this line to log the data
    } catch (error) {
    }
  } else {
  }

  resolvePromise(data);

  return new Promise((resolve) => {
    resolvePromise = resolve;
  });
}

export default pageStore;
