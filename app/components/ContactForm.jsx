"use client"

import React, { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [errors, setErrors] = useState({})
    const [isSending, setIsSending] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const validate = () => {
        let errors = {}
        if(!formData.name) errors.name = "Name is required";
        if(!formData.email) errors.email = "Email is required";

        else if(!/\S+@\S+\.\S+/.test(formData.email)) {
            formData.email = "Email is invalid"
        }
        if(!formData.message) {
            errors.message = "Message is required";
        }
        return errors
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validateErrors = validate()
        if(Object.keys(validateErrors).length > 0){
            setErrors(validateErrors);
        } else{
            setErrors({});
            setIsSending(true);

            emailjs
                .send(
                    "service_3isdins",
                    "template_aomnidb",
                    formData,
                    "OrQk2TXTL6AKxxL1s"
                )
                .then((response) => {
                    console.log("SUCCESS", response.status, response.text);
                    toast.success("Message sent successfully!");
                    setFormData({name: "", email: "", message: ""});
                })
                .catch((error) => {
                    console.log("FAILED...", error)
                    toast.error("Failed to send message. Please try again later.")
                })
                .finally(() => {
                    setIsSending(false);
                })
        }
    }
  return (
    <div className='mx-auto max-w-xl p-4'>
        <Toaster />
        <h2 className='my-12 text-center text-2xl font-semibold uppercase tracking-wide text-slate-100'>
            Get in touch
        </h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-4'>
                <input type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    placeholder='Name'
                    onChange={handleChange}
                    className='w-full appearance-none rounded-lg border border-slate-800 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none' 
                />
                {errors.name && (
                    <p className='text-sm text-pink-700'>{errors.name}</p>
                )}
            </div>
            <div className='mb-4'>
                <input type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    placeholder='Email'
                    onChange={handleChange}
                    className='w-full appearance-none rounded-lg border border-slate-800 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none' 
                />
                {errors.email && (
                    <p className='text-sm text-pink-700'>{errors.email}</p>
                )}
            </div>
            <div className='mb-4'>
                <textarea type='message'
                    id='message'
                    name='message'
                    value={formData.message}
                    placeholder='Message'
                    onChange={handleChange}
                    className='w-full appearance-none rounded-lg border border-slate-800 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none'
                    rows={4} 
                />
                {errors.message && (
                    <p className='text-sm text-pink-700'>{errors.message}</p>
                )}
            </div>
            <button className={`w-full rounded bg-gray-300 px-4 py-2 text-sm font-semibold text-slate-950 hover:text-teal-800 ${isSending ? "cursor-not-allowed opacity-50" : ""}`}>
                {isSending ? "Sending..." : "Send"}                     
            </button>
        </form>
    </div>
  )
}

export default ContactForm