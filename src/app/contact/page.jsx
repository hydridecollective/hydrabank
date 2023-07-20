// Orginal Code from Dani
// All credit goes to her
// https://github.com/hydridecollective/company/blob/master/hydride.dev/app/contact/page.js

import { ContactField } from "./ContactField.client";
import Content from "./Content.mdx";

export default async function Page() {
  return (
    <section className="flex flex-col gap-y-6 w-full h-screen p-16 pt-16">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-header lg:max-w-[72rem]">
          <b className="bg-gradient-brand gradient-fade-between bg-clip-text text-transparent">
            Get in touch.
          </b>
        </h1>
      </div>
      <div className="flex flex-col gap-y-4 lg:flex-row lg:items-start lg:justify-between w-full">
        <div className="flex flex-col gap-y-2 lg:max-w-[40vw]">
          <Content />
        </div>
        <div className="flex flex-col gap-y-2 items-start text-left">
          <h1 className="text-2xl font-medium font-header">Leave a message</h1>
          <ContactField />
        </div>
      </div>
    </section>
  );
}
