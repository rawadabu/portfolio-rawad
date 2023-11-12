import { Form, useActionData, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";
import {
  BiLogoLinkedinSquare,
  BiLogoGithub,
  BiLogoGmail,
} from "react-icons/bi";

function Contact() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();

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
        <Form>
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:w-40">First Name</label>
            <input
              className="input w-full sm:w-auto"
              type="text"
              name="customer"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:w-40">Phone number</label>
            <div className="grow w-full">
              <input
                className="input w-full"
                type="tel"
                name="phone"
                placeholder="Enter your number"
                required
              />
              {formErrors?.phone && (
                <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                  {formErrors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:w-40">Address</label>
            <div className="grow w-full">
              <input
                type="text"
                name="address"
                required
                placeholder="Enter your address"
                className="input w-full"
              />
            </div>
          </div>

          <div>
            <input type="hidden" name="cart" />
            <Button type="primary" disabled={isSubmitting}>
              {isSubmitting ? "Submitting ..." : "Contact now"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
