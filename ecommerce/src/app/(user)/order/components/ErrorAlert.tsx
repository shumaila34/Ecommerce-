
import Image from "next/image";
import React from "react";

export default function ErrorAlert() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-100 text-center p-4">
      <div>
        <h1 className="text-4xl font-bold text-orange-700 mb-2">Oops!</h1>
        <p className="text-lg text-orange-700 mb-4">
          We’re having trouble loading the data.
          <br />
          Refresh and give it another shot.
        </p>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-orange-600 transition duration-300">
          BACK TO HOME
        </button>
        <div className="mt-6">
          <Image
            src="/assets/errorAlert.png"
            alt="Sleeping Koala Illustration"
            width={252} 
            height={252}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
