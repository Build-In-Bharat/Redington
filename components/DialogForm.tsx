"use client"
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useFormStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { formSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react"; // Add this import for the spinner icon

interface DialogFormProps {
    isDialogOpen: boolean;
    toggleDialog: () => void;
    buttonText: string;
    dialogTitle: string;
    buttonClassNames?: string;
    section: string; // Added section prop
}

export const DialogForm: React.FC<DialogFormProps> = ({
    isDialogOpen,
    toggleDialog,
    buttonText,
    dialogTitle,
    buttonClassNames,
    section, // Added section to destructured props
}) => {
    const { formData, setFormData } = useFormStore();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
    } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: { ...formData, section: buttonText },
    });

    useEffect(() => {
        // Update form values when formData changes
        Object.entries(formData).forEach(([key, value]) => {
            setValue(key as any, value);
        });
        setValue("section", buttonText);
    }, [formData, setValue, buttonText]);

    const onSubmit = async (data: any) => {
        setIsSubmitting(true);

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;

            if (!apiUrl) {
                throw new Error("API URL is not defined");
            }

            const organizationSizeMap: { [key: string]: string } = {
                "Fewer than 10": "fewer_than_10",
                "10-50": "10_50",
                "51-200": "51_200",
                "201-500": "201_500",
                "More than 500": "more_than_500",
            };

            const upgradePlanMap: { [key: string]: string } = {
                "Yes, within the next 3 months": "within_3_months",
                "Yes, within the next 6 months": "within_6_months",
                "Yes, within the next 12 months": "within_12_months",
                "No, not at the moment": "no",
            };

            const formattedData = {
                name: data.name,
                designation: data.designation,
                business_email: data.email,
                organization_name: data.organization,
                size_of_organization: organizationSizeMap[data.organizationSize],
                upgrade_plan: upgradePlanMap[data.upgradePlan],
                consent_to_contact: data.consent,
                section: section, // Use the section prop here
            };

            const response = await axios.post(
                `${apiUrl}/submit-form/`,
                formattedData
            );


            // Check if the response status is not 2xx
            if (response.status < 200 || response.status >= 300) {
                throw new Error("Form submission failed");
            } else {
                console.log("Form submitted successfully");
                if (section === "AI-section") {
                    await initiateDownload('/api/download/ai-copilot', 'AI Copilot.pdf');
                } else if (section === "work-magic") {
                    await initiateDownload('/api/download/work-magic', 'Work Magic.pdf');
                } else if (section === "last-section") {
                    await initiateDownload('/api/download/case-study', 'Case Study.pdf');
                } else {
                    console.log(" ")
                }
            }

            console.log("Form submitted successfully");
            setFormData({ ...data, section: buttonText });
            toast.success("Form submitted successfully!");
            toggleDialog();
            // window.location.href = "/"; // Redirect to homepage
        } catch (error) {
            // Log the error response if available
            if (axios.isAxiosError(error) && error.response) {
                console.error("Error submitting form:", error.response.data);
            } else {
                console.error("Error submitting form:", error);
            }
            toast.error("Form submission failed. Please try again."); // Show error toast
        } finally {
            setIsSubmitting(false);
        }
    };

    const initiateDownload = async (url: string, filename: string) => {
        setIsDownloading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Network response was not ok');
            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            window.URL.revokeObjectURL(downloadUrl);
            document.body.removeChild(link);
            console.log("Download initiated successfully");
        } catch (error) {
            console.error("Error initiating download:", error);
            toast.error("Error initiating download. Please try again.");
        } finally {
            setIsDownloading(false);
        }
    };

    const handleInputChange = (field: string, value: any) => {
        setFormData({ ...formData, [field]: value });
    };

    const validateBusinessEmail = (email: string) => {
        const businessEmailRegex =
            /^[a-zA-Z0-9._%+-]+@(?!gmail\.com)(?!yahoo\.com)(?!hotmail\.com)(?!.*\.com)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
        return (
            businessEmailRegex.test(email) ||
            "Please enter a valid business email address"
        );
    };

    return (
        <>
            <Dialog open={isDialogOpen} onOpenChange={toggleDialog}>
                <DialogTrigger asChild>
                    <Button
                        className={cn(
                            "bg-[#3561FF] hover:bg-[#2749CC] text-white py-4 px-4 rounded shadow-md text-lg transition-all",
                            buttonClassNames
                        )}
                    >
                        {buttonText}
                    </Button>
                </DialogTrigger>
                <DialogContent className="bg-[#010B1A] text-white border-none rounded-xl">
                    <DialogHeader>
                        <DialogTitle>{dialogTitle}</DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="max-h-[80vh]">
                        <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                            <input type="hidden" {...register("section")} value={buttonText} />
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-white">
                                    Name
                                </label>
                                <Input
                                    type="text"
                                    {...register("name")}
                                    value={formData.name}
                                    onChange={(e) => handleInputChange("name", e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-[#010B1A] text-white rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                                {errors.name && (
                                    <p className="text-red-500">{String(errors.name.message)}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-white">
                                    Designation
                                </label>
                                <Input
                                    type="text"
                                    {...register("designation")}
                                    value={formData.designation}
                                    onChange={(e) =>
                                        handleInputChange("designation", e.target.value)
                                    }
                                    className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-[#010B1A] text-white rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                                {errors.designation && (
                                    <p className="text-red-500">
                                        {String(errors.designation.message)}
                                    </p>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-white">
                                    Business Email
                                </label>
                                <Input
                                    type="email"
                                    {...register("email", {
                                        validate: validateBusinessEmail,
                                    })}
                                    value={formData.email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-[#010B1A] text-white rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                                {errors.email && (
                                    <p className="text-red-500">{String(errors.email.message)}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-white">
                                    Organization Name
                                </label>
                                <Input
                                    type="text"
                                    {...register("organization")}
                                    value={formData.organization}
                                    onChange={(e) =>
                                        handleInputChange("organization", e.target.value)
                                    }
                                    className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-[#010B1A] text-white rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                                {errors.organization && (
                                    <p className="text-red-500">
                                        {String(errors.organization.message)}
                                    </p>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-white">
                                    Size of organization
                                </label>
                                <Controller
                                    name="organizationSize"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            value={formData.organizationSize}
                                            onValueChange={(value) => {
                                                field.onChange(value);
                                                handleInputChange("organizationSize", value);
                                            }}
                                        >
                                            <SelectTrigger className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-[#010B1A] text-white rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                                <SelectValue placeholder="Select size" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#010B1A] text-white rounded-xl">
                                                <SelectItem value="Fewer than 10">
                                                    Fewer than 10
                                                </SelectItem>
                                                <SelectItem value="10-50">10-50</SelectItem>
                                                <SelectItem value="51-200">51-200</SelectItem>
                                                <SelectItem value="201-500">201-500</SelectItem>
                                                <SelectItem value="More than 500">
                                                    More than 500
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                {errors.organizationSize && (
                                    <p className="text-red-500">
                                        {String(errors.organizationSize.message)}
                                    </p>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-white">
                                    Are you currently planning to upgrade or purchase new devices
                                    for your business within the next 6-12 months?
                                </label>
                                <Controller
                                    name="upgradePlan"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            value={formData.upgradePlan}
                                            onValueChange={(value) => {
                                                field.onChange(value);
                                                handleInputChange("upgradePlan", value);
                                            }}
                                        >
                                            <SelectTrigger className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-[#010B1A] text-white rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                                <SelectValue placeholder="Select plan" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#010B1A] text-white rounded-xl">
                                                <SelectItem value="Yes, within the next 3 months">
                                                    Yes, within the next 3 months
                                                </SelectItem>
                                                <SelectItem value="Yes, within the next 6 months">
                                                    Yes, within the next 6 months
                                                </SelectItem>
                                                <SelectItem value="Yes, within the next 12 months">
                                                    Yes, within the next 12 months
                                                </SelectItem>
                                                <SelectItem value="No, not at the moment">
                                                    No, not at the moment
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                {errors.upgradePlan && (
                                    <p className="text-red-500">
                                        {String(errors.upgradePlan.message)}
                                    </p>
                                )}
                            </div>
                            <div className="mb-4">
                                <Controller
                                    name="consent"
                                    control={control}
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={formData.consent}
                                            className="mr-2"
                                            onCheckedChange={(checked) => {
                                                field.onChange(checked === true);
                                                handleInputChange("consent", checked === true);
                                            }}
                                        />
                                    )}
                                />
                                <label className="text-sm font-medium text-white ">
                                    I am ok to be contacted by Ingram and its partners for their
                                    products and services
                                </label>
                                {errors.consent && (
                                    <p className="text-red-500">{String(errors.consent.message)}</p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md shadow-md transition-all"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                        </form>
                    </ScrollArea>
                </DialogContent>
            </Dialog>

            <Dialog open={isDownloading} onOpenChange={() => { }}>
                <DialogContent className="bg-[#010B1A] text-white border-none rounded-xl">
                    <DialogHeader>
                        <DialogTitle>Downloading...</DialogTitle>
                    </DialogHeader>
                    <div className="flex items-center justify-center p-4">
                        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
                        <p className="ml-2">Your download is in progress</p>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};
