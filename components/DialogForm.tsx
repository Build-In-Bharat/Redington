import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
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
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import axios from 'axios';

interface DialogFormProps {
    isDialogOpen: boolean;
    toggleDialog: () => void;
    buttonText: string;
    dialogTitle: string;
    buttonClassNames?: string;
}

export const DialogForm: React.FC<DialogFormProps> = ({
    isDialogOpen,
    toggleDialog,
    buttonText,
    dialogTitle,
    buttonClassNames
}) => {
    const { formData, setFormData } = useFormStore();

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
        setValue('section', buttonText);
    }, [formData, setValue, buttonText]);

    const onSubmit = async (data: any) => {
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;
            // console.log(apiUrl);

            if (!apiUrl) {
                throw new Error('API URL is not defined');
            }

            const organizationSizeMap: { [key: string]: string } = {
                "Fewer than 10": "fewer_than_10",
                "10-50": "10_50",
                "51-200": "51_200",
                "201-500": "201_500",
                "More than 500": "more_than_500"
            };

            const upgradePlanMap: { [key: string]: string } = {
                "Yes, within the next 3 months": "within_3_months",
                "Yes, within the next 6 months": "within_6_months",
                "Yes, within the next 12 months": "within_12_months",
                "No, not at the moment": "no"
            };

            const formattedData = {
                name: data.name,
                designation: data.designation,
                business_email: data.email,
                organization_name: data.organization,
                size_of_organization: organizationSizeMap[data.organizationSize],
                upgrade_plan: upgradePlanMap[data.upgradePlan],
                consent_to_contact: data.consent,
                section: buttonText
            };

            const response = await axios.post(`${apiUrl}/submit-form/`, formattedData);

            if (response.status === 200) {
                console.log('Form submitted successfully');
                setFormData({ ...data, section: buttonText });
                toggleDialog();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error (e.g., show error message to user)
        }
    };

    const handleInputChange = (field: string, value: any) => {
        setFormData({ ...formData, [field]: value });
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
                <ScrollArea className="max-h-[80vh]">
                    <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="hidden"
                            {...register("section")}
                            value={buttonText}
                        />
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
                                {...register("email")}
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
                            <label className="text-sm font-medium text-white">
                                I am ok to be contacted by Ingram Micro and its partners for
                                their products and services
                            </label>
                            {errors.consent && (
                                <p className="text-red-500">{String(errors.consent.message)}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md shadow-md transition-all"
                        >
                            Submit
                        </button>
                    </form>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
};