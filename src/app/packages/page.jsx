import { BiBox, BiServer } from "react-icons/bi";

export default function PackagesPage() {
  return (
    <section className="flex flex-col gap-y-6 w-full h-screen p-16 pt-16">
      <div className="flex flex-col gap-y-2 justify-center items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-header lg:max-w-[72rem]">
          <b className="bg-gradient-to-r from-orange-800 to-orange-400 bg-clip-text text-transparent">
            Packages and pricing
          </b>
        </h1>
        <div className="mockup-code bg-neutral-800 md:mt-8 mb-4 text-primary-content text-left max-w-[100rem] w-full drop-shadow-2xl md:gap-y-4">
          <div className="bg-gray rounded-md shadow-md p-6">
            <pre data-prefix="$"><code>cat prices.md</code></pre>
            <pre data-prefix=">" className="text-error text-lg font-bold"><code>Misc Hourly Rate: $15 an hour (Doesn&apos;t apply to anything listed below)</code></pre>
            <pre data-prefix=">" className="text-neutral-400"><code><BiBox className="inline-block text-2xl" /> Plans</code></pre>
            <pre data-prefix="" className="text-neutral-400"><code>➥ Basic Plan (SSH Setup w/ keys and a Basic Firewall) - $10 USD</code></pre>
            <pre data-prefix="" className="text-neutral-400"><code>➥ Enterprise Plan for Monthly System Administration Services (Fully secured and monitoring) - Contact us</code></pre>
            <pre data-prefix=">" className="text-neutral-400 gap"><code><BiServer className="inline-block text-2xl" /> Extras</code></pre>
            <pre data-prefix="" className="text-neutral-400"><code>➥ Pterodactyl Panel Install - $10 USD</code></pre>
            <pre data-prefix="" className="text-neutral-400"><code>➥ Database Install - $6 USD Per DB Install</code></pre>
            <pre data-prefix="" className="text-neutral-400"><code>➥ Webserver Setup - +$5 USD</code></pre>
            <pre data-prefix="" className="text-neutral-400"><code>➥ Forum Software Install - $15 USD</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}
