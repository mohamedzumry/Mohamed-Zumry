"use client";
import React, { HTMLInputTypeAttribute } from "react";

function ContactForm() {
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        // event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        formData.append("subject", "New Contact from MZP Website");
        formData.append("access_key", "b3fd4f3c-7336-40e7-b2af-302d09ba0e98");
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        } else {
            console.log("Error sending data...");
        }
    }

  return (
    <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
      <div className="relative p-8 bg-white dark:text-black rounded-lg shadow-lg sm:p-12">
        <form onSubmit={handleSubmit}>
          <ContactInputBox type="text" required name="name" placeholder="Your Name" />
          <ContactInputBox type="text" required name="email" placeholder="Your Email" />
          <ContactInputBox type="text" required={false} name="phone" placeholder="Your Phone" />
          <ContactTextArea
            row={6}
            placeholder="Your Message"
            name="details"
            defaultValue=""
          />
          <div>
            <button
              type="submit"
              className="w-full p-3 text-black font-bold transition border rounded border-primary bg-primary dark:bg-gray-300 hover:bg-opacity-90 dark:hover:bg-blue-500 hover:bg-blue-500"
            >
              Send Message
            </button>
          </div>
        </form>
        <div></div>
      </div>
    </div>
  );
}

export default ContactForm;

const ContactTextArea = ({
  row,
  placeholder,
  name,
  defaultValue,
}: {
  row: number;
  placeholder: string;
  name: string;
  defaultValue: string;
}) => {
  return (
    <>
      <div className="mb-6">
        <textarea
        required
          rows={row}
          placeholder={placeholder}
          name={name}
          className="border-[f0f0f0] w-full resize-none rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({
  required,
  type,
  placeholder,
  name,
}: {
    required: boolean,
  type: HTMLInputTypeAttribute;
  placeholder: string;
  name: string;
}) => {
  return (
    <>
      <div className="mb-6">
        <input
          required={required}
          type={type}
          placeholder={placeholder}
          name={name}
          className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
        />
      </div>
    </>
  );
};
