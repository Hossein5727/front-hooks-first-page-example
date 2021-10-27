import { http } from "./httpService";

export function getDataContactService() {
    return http.get("/contacts")
}