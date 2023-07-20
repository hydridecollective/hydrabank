import React from 'react';
import {BiServer } from "react-icons/bi";

const Page = ({ info, browser, agent, otherData }) => {
  // Function to obscure sensitive information
  const obscureSensitiveData = (data) => {
    // Implement logic to obscure sensitive information
    return 'XXX';
  };

  return (
    <section className="flex flex-col gap-y-6 w-full h-screen p-16 pt-16">
      <div className="flex flex-col gap-y-2 justify-center items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-header lg:max-w-[72rem]">
          <b className="bg-gradient-to-r from-[#b16318] to-[#d87718] bg-clip-text text-transparent">
            Your data that we collect.
          </b>
        </h1>
        <div className="mockup-code bg-neutral-800 md:mt-8 mb-4 text-primary-content text-left max-w-[100rem] w-full drop-shadow-2xl md:gap-y-4">
          <div className="bg-gray rounded-md shadow-md p-6">
            <pre data-prefix="$"><code>curl -X GET https://hydrabank.systems/data</code></pre>
            <pre data-prefix=">" className="text-error text-lg font-bold"><code>This is your data that is actively being collected as you visit our website.</code></pre>
            <pre data-prefix=">" className="text-neutral-400"><code><BiServer className="inline-block text-2xl"/> DATA</code></pre>
            <pre data-prefix=">" className="text-neutral-400"><code>Your IP: xx</code></pre>
            <pre data-prefix=">" className="text-neutral-400"><code>Your Browser: </code></pre>
            <pre data-prefix=">" className="text-neutral-400"><code>Your Agent Data: </code></pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
