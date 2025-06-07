
// In client component
import { settingStore } from '@/store/storage/serverSettingStore';

let setting: any = null;

async function clientSettingStore() {
  if (setting === null) {
    setting = await settingStore();
  } else {
  }
  return setting;
}

export {clientSettingStore, setting}