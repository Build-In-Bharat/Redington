import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';

interface DialogFormProps {
    isDialogOpen: boolean;
    toggleDialog: () => void;
    buttonText: string;
    dialogTitle: string;
    buttonClassNames?: string;
    section?: string;
}

const formSchema = z.object({
    business_email: z.string().email("Invalid email address"),
    section: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export const DialogForm: React.FC<DialogFormProps> = ({
    isDialogOpen,
    toggleDialog,
    buttonText,
    dialogTitle,
    buttonClassNames,
    section = "get-early-access"
}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            section: section
        }
    });

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        setIsSubmitting(true);
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL_EARLY_ACCESS as string;

            if (!apiUrl) {
                throw new Error('API URL is not defined');
            }

            const response = await axios.post(`${apiUrl}/`, data);
            
            // Log the entire response data for debugging
            console.log('API Response:', response.data);

            if (response.status === 200 || 201 ) { // Check for success in response data
                console.log('Form submitted successfully');
                if (section === "download-guide") {
                    setSubmissionMessage(`Guide will be sent to ${data.business_email}`);
                } else {
                    toast.success('Thank you for sharing your details.');
                    toggleDialog();
                }
            } else {
                throw new Error('Form submission failed'); // This will trigger if response.data.success is false
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                console.error('Error submitting form:', error.response.data);
            } else {
                console.error('Error submitting form:', error);
            }
            toast.error('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={isDialogOpen} onOpenChange={toggleDialog}>
            <DialogTrigger asChild>
                <Button className={cn("bg-[#3561FF] hover:bg-[#2749CC] text-white py-4 px-4 rounded shadow-md text-lg transition-all", buttonClassNames)}>
                    {buttonText}
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#010B1A] text-white border-none rounded-xl">
                <DialogHeader>
                    <DialogTitle>{dialogTitle}</DialogTitle>
                </DialogHeader>
                {submissionMessage ? (
                    <div className="p-4 text-center">
                        <p>{submissionMessage}</p>
                        <Button onClick={toggleDialog} className="mt-4 bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md shadow-md transition-all">
                            Close
                        </Button>
                    </div>
                ) : (
                    <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-white">
                                Business Email
                            </label>
                            <Input
                                type="email"
                                {...register("business_email")}
                                className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-[#010B1A] text-white rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                            {errors.business_email && (
                                <p className="text-red-500">{String(errors.business_email.message)}</p>
                            )}
                        </div>
                        <input type="hidden" {...register("section")} value={section} />
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md shadow-md transition-all"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
};