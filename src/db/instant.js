import { init } from "@instantdb/react";
const INSTANTDBID = import.meta.env.VITE_INSTANTDB_APP_ID
export const db = init({
    appId: INSTANTDBID
});
