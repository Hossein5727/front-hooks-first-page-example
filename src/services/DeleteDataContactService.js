import { http } from "./httpService";

export function deleteDataContactService(id) {
    return http.delete(`/contacts/${id}`)
}