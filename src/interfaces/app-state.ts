import ApiUser from "./api-user";
import AppComment from "./app-comment";

export default interface AppState {
    users: ApiUser[];
    comments: AppComment[];
    selectedUserId: number;
    search: string;
    isSynced: boolean;
}