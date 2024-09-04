import create from 'zustand';

interface FormData {
    name: string;
    designation: string;
    email: string;
    organization: string;
    organizationSize: string;
    upgradePlan: string;
    consent: boolean;
}

interface FormState {
    formData: FormData;
    setFormData: (data: Partial<FormData>) => void;
    getFormData: () => FormData;
}

export const useFormStore = create<FormState>((set, get) => ({
    formData: {
        name: '',
        designation: '',
        email: '',
        organization: '',
        organizationSize: '',
        upgradePlan: '',
        consent: false,
    },
    setFormData: (data) => set((state) => ({
        formData: { ...state.formData, ...data }
    })),
    getFormData: () => get().formData,
}));