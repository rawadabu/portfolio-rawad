/* eslint-disable no-unused-vars */
import { Form, useLocation, useNavigation } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import {
  BiLogoLinkedinSquare,
  BiLogoGithub,
  BiLogoGmail,
} from "react-icons/bi";
import { useMutation } from "@tanstack/react-query";
import { createContact } from "../../services/apiContacts";
import { useEffect, useState } from "react";
import LinkButton from "../../ui/LinkButton";

function Contact() {
  const location = useLocation();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm();
  const mutation = useMutation((data) => createContact(data), {
    onError: (error) => {
      if (
        error.message ===
        "Email already exists. Cannot create duplicate contact."
      ) {
        setError("email", {
          type: "manual",
          message: "This email is already in use.",
        });
      } else {
        console.error("Error submitting form:", error);
      }
    },
  });

  const onSubmit = async (data) => {
    const newContact = {
      fullName: data.fullName,
      email: data.email,
      description: data.description,
    };
    await mutation.mutateAsync(newContact);
    reset();
  };

  const [successVisible, setSuccessVisible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);

  useEffect(() => {
    if (mutation.isSuccess) {
      setSuccessVisible(true);
      setTimeout(() => setSuccessVisible(false), 5000);
    }

    if (mutation.isError) {
      setErrorVisible(true);
      setTimeout(() => setErrorVisible(false), 5000);
    }
  }, [mutation.isSuccess, mutation.isError]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 my-10 px-4 sm:py-32 lg:px-8 mx-auto text-center font-playpen">
      <div className="bg-center bg-no-repeat bg-cover w-full h-80 sm:h-full relative">
        <div className="flex flex-col items-center text-white p-4 sm:p-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 font-extrabold">
            GET IN TOUCH
          </h1>
          <div className="flex gap-4">
            <a
              href="https://github.com/rawadabu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoGithub className="icon text-4xl" />
            </a>
            <a
              href="https://linkedin.com/in/rawadabu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoLinkedinSquare className="icon text-4xl" />
            </a>
            <a href="mailto:rawadabusaleh0@gmail.com">
              <BiLogoGmail className="icon text-4xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex-col space-y-8 p-4 sm:p-8 justify-center">
        <h1 className="mb-8 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
          Have a question or want to work together?
        </h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Your form fields */}
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center">
            <label htmlFor="fullName" className="sm:w-40 font-bold">
              Full Name
            </label>
            <div className="flex-grow">
              <input
                {...register("fullName", {
                  required: "This field is required",
                })}
                id="fullName"
                className="input w-full sm:w-auto"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center">
            <label htmlFor="email" className="sm:w-40 font-bold">
              Email
            </label>
            <div className="flex-grow">
              <input
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
                id="email"
                className="input w-full sm:w-auto"
                type="text"
                placeholder="Enter your email"
                required
              />
              {errors?.email && (
                <p className="mt-2 rounded-sm p-2 text-lg font-bold text-red-700">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center">
            <label htmlFor="description" className="sm:w-40 font-bold">
              Description
            </label>
            <div className="flex-grow">
              <textarea
                {...register("description", {
                  required: "This field is required",
                })}
                id="description"
                className="input w-full sm:w-auto description"
                placeholder="Enter your description"
                required
              />
            </div>
          </div>

          <input type="hidden" name="contact" />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting ? "Submitting ..." : "Contact now"}
          </Button>

          <div className="mt-4">
            {successVisible && (
              <p className="transition duration-500 ease-in-out font-extrabold">
                Form submitted successfully! ✅
              </p>
            )}
            {errorVisible && (
              <p className="transition duration-500 ease-in-out font-extrabold">
                Error submitting form. Please try again. 🛑
              </p>
            )}
          </div>
        </Form>
      </div>
      {location.pathname === "/contact" && (
        <LinkButton to="-1" className="absolute bottom-4 left-4 text-xl">
          &larr; Go back
        </LinkButton>
      )}
    </div>
  );
}

export default Contact;
