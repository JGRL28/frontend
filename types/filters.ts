export type FiltersTypes = {
    result: ResultFiltersTypes | null;
    loading: boolean;
    error: string,
}

export type ResultFiltersTypes = {
    schema: {
        attributes: {
            availabilityProduct: {
                enum: any
            }
        }
    }
}