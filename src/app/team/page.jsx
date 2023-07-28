import Image from 'next/image';
import Link from 'next/link';

export default function PackagesPage() {
  return (
    <section className="flex flex-col gap-y-6 w-full min-h-screen p-16 pt-20">
      <div className="flex flex-col gap-y-2 justify-center items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-header lg:max-w-[72rem]">
          <b className="bg-gradient-to-r from-[#b16318] to-[#d87718] bg-clip-text text-transparent">
            Leadership
          </b>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12">
          <div className="mockup-window max-w-[80rem] bg-base-300 bg-neutral-800 md:mt-8 mb-4 text-primary-content text-left w-80 h-100">
            <div className="card shadow-2xl m-4 bg-neutral-700">
              <figure className="rounded-full border-4 border-orange-500 overflow-hidden w-24 h-24 mx-auto my-6">
                <Image
                  src="https://cdn.discordapp.com/attachments/1096623864722755654/1097016378889871430/IMG_1589.png"
                  alt="Emily"
                  width={96}
                  height={96}
                  objectFit="contain"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title mt-4">Emily</h2>
                <h3 className="mt-1 text-error">IT Director</h3>
                <p className="text-sm">
                  Hey there! I&apos;m Emily, a passionate Systems Administrator and Network Security Specialist with 6+ years of experience. I specialize in Linux, ensuring system stability, security, and performance. At 22, I bring fresh perspectives, innovation, and inclusivity as a transfem individual to the tech community.
                </p>
              </div>
            </div>
          </div>

          <div className="mockup-window max-w-[80rem] bg-base-300 bg-neutral-800 md:mt-8 mb-4 text-primary-content text-left w-80 h-100">
            <div className="card shadow-2xl m-4 bg-neutral-700">
              <figure className="rounded-full border-4 border-orange-500 overflow-hidden w-24 h-24 mx-auto my-6">
                <Image
                  src="https://cdn.discordapp.com/avatars/328511703144988675/ac91d144de6e33f273eaa731c64483d3.webp"
                  alt="Aurora"
                  width={96}
                  height={96}
                  objectFit="contain"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title mt-4">Aurora</h2>
                <h3 className="mt-1 text-error">Infrastructure Manager</h3>
                <p className="text-sm">
                  I&apos;m Alpha, also known as Aurora, and I oversee Hydrabank&apos;s infrastructure and systems. I&apos;m enthusiastic about hardware and have a strong inclination towards managing UNIX systems, including Servers and Desktops, as well as system administration.
                </p>
              </div>
            </div>
          </div>

          <div className="mockup-window max-w-[80rem] bg-base-300 bg-neutral-800 md:mt-8 mb-4 text-primary-content text-left w-80 h-100">
            <div className="card shadow-2xl m-4 bg-neutral-700">
              <figure className="rounded-full border-4 border-orange-500 overflow-hidden w-24 h-24 mx-auto my-6">
                <Image
                  src="/assets/img/val.jpg"
                  alt="Val"
                  width={96}
                  height={96}
                  objectFit="cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title mt-4">Val</h2>
                <h3 className="mt-1 text-error">Hydride Leadership</h3>
                <p className="text-sm">
                  Hi. my name is Valerie or Val. My official mission is to represent Hydride, but I am actually a floating figure and help every division. My job here is to procure servers and help clients.
                  <br /> <br />
                  I am a certified GCP Cloud Architect and recurring RCHSA as of 2022 and will be testing for CCSP certification in 2024.
                </p>
              </div>
            </div>
          </div>



          <div className="mockup-window max-w-[80rem] bg-base-300 bg-neutral-800 md:mt-8 mb-4 text-primary-content text-left w-80 h-fit">
            <div className="card shadow-2xl m-4 bg-neutral-700">
              <figure className="rounded-full border-4 border-orange-500 overflow-hidden w-24 h-24 mx-auto my-6">
                <Image
                  src="/assets/img/kermit.webp"
                  alt="Dani"
                  width={96}
                  height={96}
                  objectFit="cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title mt-4">Dani</h2>
                <h3 className="mt-1 text-error">Hydride Founder</h3>
                <p className="text-sm">
                    howdy, y&apos;all! the name&apos;s dani. i ain&apos;t really involved with things here at hydrabank and mostly let emily/alpha/val do their thing, but i&apos;m the founder of the <a href="https://hydride.dev" target="_blank" className="underline hover:text-gray-200" rel="noreferrer noopener">hydride</a> collective.
                    <br />
                    over there, i manage general operations/infrastructure and oversee web development and UI design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
