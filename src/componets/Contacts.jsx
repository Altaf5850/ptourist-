import React from "react";
import Swal from "sweetalert2";

function Contactss() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f41ed25c-1894-4396-b4db-e9ee05604b82");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully",
        icon: "success",
      });
      event.target.reset();
    }
  };

  return (
    <section className="py-10 px-20 m-5 bg-gray-100 mx-auto w-full max-w-2xl shadow-md shadow-white border rounded-xl">
      <form
        onSubmit={onSubmit}
        className="text-center text-black px-4 md:px-8 lg:px-16"
      >
        <h2 className="text-2xl font-semibold">
          Contact <span className="text-green-500">Us</span>
        </h2>
        <p className="text-gray-500 mt-3 text-lg">Get in touch</p>
        <div className="my-4 flex flex-col">
          <label className="mb-2 text-start">FULL NAME</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="p-2 rounded-xl bg-white"
          />
        </div>
        <div className="my-4 flex flex-col">
          <label className="mb-2 text-start">EMAIL ADDRESS</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="p-2 rounded-xl bg-white"
          />
        </div>
        <div className="my-4 flex flex-col">
          <label className="mb-2 text-start">MESSAGE</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            required
            className="p-2 rounded-xl bg-white"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn-primary py-3 px-10 rounded-xl m-3 bg-cyan-600  hover:text-cyan-600 hover:bg-transparent hover:scale-90 duration-200 ease-in-out"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contactss;
