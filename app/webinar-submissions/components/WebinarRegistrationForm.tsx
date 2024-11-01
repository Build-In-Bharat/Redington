"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  title: string;
  phone: string;
  city: string;
  leadFor: string;
}

const WebinarRegistrationForm: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    title: "",
    phone: "",
    city: "",
    leadFor: "redington",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}webinar-submissions/`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      router.push("/thankyou");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        title: "",
        phone: "",
        city: "",
        leadFor: "redington",
      });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      if (error.response.status === 400) {
        toast.error("Email already exist");
      } else {
        toast.error(error.response.data.error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label className="block ml-8 text-sm text-gray-700 mb-1">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-2 px-4 rounded-full shadow-sm bg-white"
          required
        />
      </div>
      <div>
        <label className="block ml-8 text-sm text-gray-700 mb-1">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-2 px-4 bg-white rounded-full shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block ml-8 text-sm text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="from-input w-full p-2 px-4 rounded-full shadow-sm"
          required
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div>
          <label className="block ml-8 text-sm text-gray-700 mb-1">
            Company
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-2 px-4 bg-white rounded-full shadow-sm"
            required
          />
        </div>
        <div>
          <label className="block ml-8 text-sm text-gray-700 mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 px-4 bg-white rounded-full shadow-sm"
            required
          />
        </div>
      </div>

      <div>
        <label className="block ml-8 text-sm text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          name="phone"
          type="text"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 px-4 bg-white rounded-2xl shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block ml-8 text-sm text-gray-700 mb-1">City</label>
        <input
          name="city"
          type="text"
          value={formData.city}
          onChange={handleChange}
          className="w-full p-2 px-4 bg-white rounded-2xl shadow-sm"
          required
        />
      </div>

      <div className="text-center sm:text-right">
        <button
          type="submit"
          className="w-60 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-800 text-white py-3 rounded-full shadow-sm hover:bg-purple-700 transition-colors"
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default WebinarRegistrationForm;
