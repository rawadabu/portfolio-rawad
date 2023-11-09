import { Form, useActionData, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";
// import homeImage from "../../assets/handShake.svg";
import {
  BiLogoLinkedinSquare,
  BiLogoGithub,
  BiLogoGmail,
} from "react-icons/bi";

function Contact() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData(); // We get this when is not submittion made, error or somethings
  return (
    <div className="grid grid-cols-2 my-10 px-4 sm:py-32 lg:px-8 mx-auto text-center font-playpen">
      <div
        className="flex flex-col items-center bg-center bg-no-repeat w-full h-full relative bg-cover"
        // style={{ backgroundImage: `url(${homeImage})` }}
      >
        <div className="flex flex-col items-center text-white">
          <h1 className="text-3xl mb-4">GET IN TOUCH</h1>
        </div>
        <div className="flex gap-4">
          <BiLogoGithub className="icon" />
          <BiLogoLinkedinSquare className="icon" />
          <BiLogoGmail className="icon" />
        </div>
      </div>

      <div className="flex-col space-y-8">
        <h1 className="mb-8 text-3xl">
          Have a question or want to work together?
        </h1>
        <Form>
          <div className="mb-5  flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40 ">First Name</label>
            <input
              className="input grow"
              type="text"
              name="customer"
              placeholder="Enter your name"
              // defaultValue={username}
              required
            />
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40 ">Phone number</label>
            <div className="grow">
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
            <label className="sm:basis-40">Address</label>
            <div className="grow">
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
