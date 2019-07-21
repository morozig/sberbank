export default interface AppComment {
    id: number;
    userId: number;
    userName: string;
    text: string;
    date: Date;
    isSelected: boolean;
};