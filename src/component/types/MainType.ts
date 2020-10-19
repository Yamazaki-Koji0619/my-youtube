export type randomIdDataType = {
    id: string;
    genre: string;
    name: string;
}[];

export type aipDataType = {
    etag: string;
    id: string;
    kind: string;
    snippet?: object;
    statistics?: object
};

export type  aipVideoType = object[];