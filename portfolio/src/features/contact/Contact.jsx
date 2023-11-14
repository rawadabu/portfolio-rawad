/* eslint-disable no-unused-vars */
import { Form, useNavigation } from "react-router-dom";
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

function Contact() {
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
    reset(); // Reset the form after successful submission
  };

  const [successVisible, setSuccessVisible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);

  useEffect(() => {
    if (mutation.isSuccess) {
      setSuccessVisible(true);
      setTimeout(() => setSuccessVisible(false), 5000); // Adjust the delay (in milliseconds) as needed
    }

    if (mutation.isError) {
      setErrorVisible(true);
      setTimeout(() => setErrorVisible(false), 5000); // Adjust the delay (in milliseconds) as needed
    }
  }, [mutation.isSuccess, mutation.isError]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 my-10 px-4 sm:py-32 lg:px-8 mx-auto text-center font-playpen">
      <div className="bg-center bg-no-repeat bg-cover w-full h-80 sm:h-full relative">
        <div className="flex flex-col items-center text-white p-4 sm:p-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            GET IN TOUCH
          </h1>
          <div className="flex gap-4">
            <BiLogoGithub className="icon" />
            <BiLogoLinkedinSquare className="icon" />
            <BiLogoGmail className="icon" />
          </div>
        </div>
      </div>

      <div className="flex-col space-y-8 p-4 sm:p-8">
        <h1 className="mb-8 text-3xl sm:text-4xl lg:text-5xl">
          Have a question or want to work together?
        </h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Your form fields */}
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label htmlFor="fullName" className="sm:w-40">
              Full Name
            </label>
            <div className="grow w-full">
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

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label htmlFor="email" className="sm:w-40">
              Email
            </label>
            <div className="grow w-full">
              <input
                {...register("email", { required: "This field is required" })}
                id="email"
                className="input w-full sm:w-auto"
                type="text"
                placeholder="Enter your email"
                required
              />
              {errors?.email && (
                <p className="mt-2 rounded-sm bg-red-100 p-2 text-xs text-red-700">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label htmlFor="description" className="sm:w-40">
              Description
            </label>
            <div className="grow w-full">
              <textarea
                {...register("description", {
                  required: "This field is required",
                })}
                id="description"
                className="input w-full sm:w-auto h-24"
                placeholder="Enter your description"
                required
              />
            </div>
          </div>

          <div>
            <input type="hidden" name="contact" />
            <Button type="primary" disabled={isSubmitting}>
              {isSubmitting ? "Submitting ..." : "Contact now"}
            </Button>
          </div>
          <div className="mt-4">
            {successVisible && (
              <p className="text-green-500 transition duration-500 ease-in-out">
                Form submitted successfully! 🚀
              </p>
            )}
            {errorVisible && (
              <p className="text-red-500 transition duration-500 ease-in-out">
                Error submitting form. Please try again. 🛑
              </p>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
