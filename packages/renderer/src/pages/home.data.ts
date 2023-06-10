import type { RouteDataFunc } from 'solid-app-router';
import { createResource } from 'solid-js';


const HomeData: RouteDataFunc = () => {
  // @ts-ignore
  const dbData = ipcRenderer.invoke('open-win')
  const [data] = createResource(() => (dbData));

  return data;
};

export default HomeData;
