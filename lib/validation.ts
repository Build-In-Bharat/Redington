import { z } from 'zod';

export const formSchema = z.object({
    name: z.string().nonempty("Name is required"),
    designation: z.string().nonempty("Designation is required"),
    email: z.string().email("Invalid email address"),
    organization: z.string().nonempty("Please provide your organization name"),
    organizationSize: z.enum(["Fewer than 10", "10-50", "51-200", "201-500", "More than 500"], {
        required_error: "please select the organisation size"
    }),
    upgradePlan: z.enum(["Yes, within the next 3 months", "Yes, within the next 6 months", "Yes, within the next 12 months", "No, not at the moment"], {
        required_error: "Please select an upgrade plan option"
    }),
    consent: z.boolean().refine(val => val === true, "Consent is required"),
    section: z.string()
});