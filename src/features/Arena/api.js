import apiRoot from "../../app/api";

export const api = {
  arena: (arenaData) =>
    apiRoot.get("boxing/box/", { params: arenaData }),
};
