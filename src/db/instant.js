
import { init, id, lookup } from "@instantdb/react";
const INSTANTDBID = import.meta.env.VITE_INSTANTDB_APP_ID
export const db = init({
    appId: INSTANTDBID
});
export { id, lookup };