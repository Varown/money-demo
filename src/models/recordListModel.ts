const localStorageLKeyName = 'recordList';
const model = {
  clone(data: RecordItem[] |RecordItem) {
    return JSON.parse(JSON.stringify(data));
  },
  fetch() {
    return JSON.parse(window.localStorage.getItem('localStorageLKeyName') || '[]') as RecordItem[];
  },
  save(data: RecordItem[]) {
    window.localStorage.setItem('localStorageLKeyName', JSON.stringify(data));
  }

};

export default model;