import { http } from "./httpService";

export function postDataContactService(data) {
    return http.post("/contacts", data)
}