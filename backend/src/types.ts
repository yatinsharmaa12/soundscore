    
import z from 'zod';

export const createTaskInput = z.object({
    options: z.array(z.object({
        beatUrl: z.string()
    })).nonempty("Options cannot be empty"),
    title: z.string().optional(),
    signature: z.string()
});

export const createSubmissionInput = z.object({
    taskId: z.string(),
    selection:z.string()
})