import ApiUser from "./api-user";
import AppComment from "./app-comment";

export default interface AppAction {
    type: string;
    payload: ApiUser[] | AppComment[] | number | string
}