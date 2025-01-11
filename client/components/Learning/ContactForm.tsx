"use client"
import React, { useState, FormEvent } from 'react';

const ContactForm: React.FC = () => {

    const [formData, setFormData] = useState({
        course: '',
        subject: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // submission logic here
    };

    return (
        <section className="bg-gradient-to-t from-[#09120E] via-[#050603] to-[#042011] text-white py-16 px-6">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-2xl font-semibold mb-2">Can't Find Something?</h2>
                <p className="text-gray-400 mb-6">
                    Let us know here and we'll get it to you asap!
                </p>
                <form onSubmit={ handleSubmit } className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="course" className="block text-sm font-medium mb-2">
                                Course & Sem *
                            </label>
                            <input
                                type="text"
                                id="course"
                                value={ formData.course }
                                onChange={ handleChange }
                                placeholder="eg. BCA 3"
                                className="w-full bg-black border border-green-200 rounded-lg p-3 placeholder-gray-500 focus:outline-none focus:border-[#115430]"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                Subject *
                            </label>
                            <input
                                type="text"
                                id="subject"
                                value={ formData.subject }
                                onChange={ handleChange }
                                placeholder="eg. Python"
                                className="w-full bg-black border border-green-200 rounded-lg p-3 placeholder-gray-500 focus:outline-none focus:border-[#115430]"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={ formData.email }
                            onChange={ handleChange }
                            placeholder="Email"
                            className="w-full bg-black border border-green-200 rounded-lg p-3 placeholder-gray-500 focus:outline-none focus:border-[#115430]"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Message *
                        </label>
                        <textarea
                            id="message"
                            value={ formData.message }
                            onChange={ handleChange }
                            placeholder="Message"
                            rows={ 4 }
                            className="w-full bg-black border border-green-200 rounded-lg p-3 placeholder-gray-500 focus:outline-none focus:border-[#115430]"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#115430] text-white font-semibold py-3 rounded-lg hover:bg-[#104629] transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
