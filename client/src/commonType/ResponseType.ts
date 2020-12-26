export interface ResponseSucceedType<T> {
    data: T;
    err: null;
    code: number;
}
export interface ResponseErrorType<T> {
    data: null;
    err: [];
    code: number;
}
export interface ResponseSucceedPageType<T> {
    data: T[];
    err: null;
    total: number;
    code: number;
}