import * as z from 'zod';
const editProfileSchema = z.object({
    name: z
        .string()
        .min(3, { message: 'Name must be at least 3 characters long' })
        .max(30, { message: 'Name must not exceed 30 characters' })
        .nonempty({ message: 'Name is required' }),
    email: z
        .string()
        .email({ message: 'Invalid email address' })
        .nonempty({ message: 'Email is required' }),
    mobile: z
        .string()
        .nonempty({ message: 'Mobile number is required' })
        .refine((value) => /^[1-9]\d{9}$/.test(value), {
            message: 'Invalid mobile number. Must be a 10-digit number.',
        }),
});

export default editProfileSchema;
