import { createClient } from "next-sanity";

export const client = createClient({
    apiVersion:'2024-03-13',
    dataset:'production',
    projectId:'saemjsbp'
})