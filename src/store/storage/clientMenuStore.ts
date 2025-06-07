
// In client component
import { menuStore } from '@/store/storage/serverMenuStore';

let menu: any = null;

async function clientMenuStore() {
  if (menu === null) {
    menu = await menuStore();
  } else {
  }
}

export {clientMenuStore, menu}