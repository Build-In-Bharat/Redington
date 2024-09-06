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
}

const formSchema = z.object({
    email: z.string().email("Invalid email address"),
});

type FormValues = z.infer<typeof formSchema>;

export const DialogForm: React.FC<DialogFormProps> = ({
    isDialogOpen,
    toggleDialog,
    buttonText,
    dialogTitle,
    buttonClassNames
}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        setIsSubmitting(true);
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL_EARLY_ACCESS as string;

            if (!apiUrl) {
                throw new Error('API URL is not defined');
            }

            const formattedData = {
                business_email: data.email,
            };

            const response = await axios.post(`${apiUrl}/submit-form/`, formattedData);

            if (response.status === 200) {
                console.log('Form submitted successfully');
                toast.success('Form submitted successfully!');
                toggleDialog();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
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
                <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white">
                            Business Email
                        </label>
                        <Input
                            type="email"
                            {...register("email")}
                            className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-[#010B1A] text-white rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        {errors.email && (
                            <p className="text-red-500">{String(errors.email.message)}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md shadow-md transition-all"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </DialogContent>
        </Dialog>
    );
};