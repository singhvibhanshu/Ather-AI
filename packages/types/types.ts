import { z } from "zod";

export const trainModel = z.object({
    name: z.string(),
    type: z.enum(["Man", "Woman", "Other"]),
    age: z.number,
    ethnicity: z.enum([
        "Black",
        "Asian American",
        "East Asian",
        "South East Asian",
        "South Asian",
        "Middle Eastern",
        "Pacific",
        "Hispanic"
    ]),
    eyeColour: z.enum(["Blue", "Brown", "Gray", "Hazel", "Green"]),
    bald: z.boolean(),
    imageURL: z.array(z.string())
})

export const generateImage = z.object({
    prompt: z.string(),
    modelID: z.string(),
    noOfImages: z.number()
})

export const generateImageFromPrompt = z.object({
    modelID: z.string(),
    packID: z.string()
})