
// In client component
import { pageStore } from '@/store/storage/serverPageStore';

let page: any = null;

async function clientPageStore() {
  if (page === null) {
    page = await pageStore();
  } else {
  }
}

export {clientPageStore, page}