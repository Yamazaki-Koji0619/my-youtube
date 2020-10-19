export type headerProps = {
    handleDrawerToggle: object;
}

export type keywordProps = {
    item: {
        fullWidth: boolean;
        label: string;
        multiline: boolean;
        required: boolean;
        rows: number;
        value:　string
        type: string;
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    }
}