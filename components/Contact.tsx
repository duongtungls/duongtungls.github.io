'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2, Github } from 'lucide-react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm as useFormspree } from '@formspree/react'; // Add this import

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Replace "mqapzqpo" with your actual Formspree form ID
  const [formspreeState, sendToFormspree] = useFormspree('mqapzqpo');

  // React Hook Form setup for validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // Reset form when submission succeeds
  useEffect(() => {
    if (formspreeState.succeeded) {
      reset();
      setSubmitSuccess(true);
      const timer = setTimeout(() => setSubmitSuccess(false), 100);
      return () => clearTimeout(timer);
    }
  }, [formspreeState.succeeded, reset]);

  // Combined submit handler - validate with React Hook Form, submit with Formspree
  const onSubmit = async (data: FormData) => {
    await sendToFormspree(data);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 dark:text-white">Contact Information</h3>
              <div className="space-y-6">
                <a
                  href="mailto:duongtungls@gmail.com"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <Mail className="w-6 h-6 mr-3 text-blue-600" />
                  duongtungls@gmail.com
                </a>
                <a
                  href="tel:+84382563034"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <Phone className="w-6 h-6 mr-3 text-blue-600" />
                  +84-382-563034
                </a>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="w-6 h-6 mr-3 text-blue-600" />
                  Hanoi, Vietnam
                </div>
                <a
                  href="https://github.com/duongtungls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <Github className="w-6 h-6 mr-3 text-blue-600" />
                  duongtungls
                </a>
                <a
                  href="https://www.linkedin.com/in/tung-duongb65015133"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-3 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://www.freelancer.com/u/vw6867131vw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-3 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm-2-11h4v-1h-4v1zm5 2v1h-6v-1h6zm-6 3v-1h6v1h-6zm1-11h4v1h-4v-1z" />
                  </svg>
                  Freelancer
                </a>
                <a
                  href="https://www.upwork.com/fl/tungduong2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-3 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm-2-11h4v-1h-4v1zm5 2v1h-6v-1h6zm-6 3v-1h6v1h-6zm1-11h4v1h-4v-1z" />
                  </svg>
                  Upwork
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    name="name" // Important for Formspree
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    name="email" // Important for Formspree
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  {...register('subject')}
                  type="text"
                  name="subject" // Important for Formspree
                  className={`w-full px-4 py-2 rounded-md border ${
                    errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                )}
              </div>
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  {...register('message')}
                  name="message" // Important for Formspree
                  rows={4}
                  className={`w-full px-4 py-2 rounded-md border ${
                    errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={formspreeState.submitting}
                  className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center ${
                    formspreeState.submitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {formspreeState.submitting ? (
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {formspreeState.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              {/* Formspree errors */}
              {formspreeState.errors && (
                <div className="mt-4 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-md">
                  {Object.keys(formspreeState.errors).map(key => (
                    <p key={key}>
                      {formspreeState.errors &&
                        // Use type assertion to handle the indexing
                        (formspreeState.errors as unknown as Record<string, string>)[key]}
                    </p>
                  ))}
                </div>
              )}

              {/* Success message */}
              {submitSuccess && (
                <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-md">
                  Message sent successfully!
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image
          src="/hero/tung-photos/02.webp"
          alt="Decorative background"
          width={256}
          height={256}
        />
      </div>
    </section>
  );
}
