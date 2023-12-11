import Z from "zod"

export const userFormSchema = Z.object({
    name: Z.string().min(1),
    email: Z.string().min(1),
    subject: Z.string().min(1),
    message: Z.string().min(1),
})
export type userForm = Z.infer<typeof userFormSchema>
