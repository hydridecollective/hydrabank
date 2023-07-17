export default function PackagesPage() {
    return (
      <section className="flex flex-col gap-y-6 w-full h-screen p-16 pt-16">
        <div className="flex flex-col gap-y-2 justify-center items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-header lg:max-w-[72rem]">
            <b className="bg-gradient-to-r from-orange-800 to-orange-400 bg-clip-text text-transparent">
              Meet our leadership team!
            </b>
          </h1>
          <div className="flex gap-x-4">
            <div className="mockup-window max-w-[80rem] bg-base-300 bg-neutral-800 md:mt-8 mb-4 text-primary-content text-left w-80 h-100">
              <div className="card shadow-2xl m-4 bg-neutral-700">
                <figure className="rounded-full border-4 border-orange-500 overflow-hidden w-24 h-24 mx-auto my-6">
                  <img className="w-full h-full object-contain" src="https://cdn.discordapp.com/attachments/1096623864722755654/1097016378889871430/IMG_1589.png" alt="Emily" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title mt-4">Emily</h2>
                  <h3 className="mt-1 text-error">IT Director</h3>
                  <p className="text-sm">
                    Hey there! I'm Emily, a passionate Systems Administrator and Network Security Specialist with 6+ years of experience. I specialize in Linux, ensuring system stability, security, and performance. At 22, I bring fresh perspectives, innovation, and inclusivity as a transfem individual to the tech community.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mockup-window max-w-[80rem] bg-base-300 bg-neutral-800 md:mt-8 mb-4 text-primary-content text-left w-80 h-100">
              <div className="card shadow-2xl m-4 bg-neutral-700">
                <figure className="rounded-full border-4 border-orange-500 overflow-hidden w-24 h-24 mx-auto my-6">
                  <img className="w-full h-full object-contain" src="https://cdn.discordapp.com/avatars/328511703144988675/ac91d144de6e33f273eaa731c64483d3.webp" alt="Aurora" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title mt-4">Aurora</h2>
                  <h3 className="mt-1 text-error">Infrastructure Manager</h3>
                  <p className="text-sm">
                    I'm Alpha, also known as Aurora, and I oversee Hydrabank's infrastructure and systems. I'm enthusiastic about hardware and have a strong inclination towards managing UNIX systems, including Servers and Desktops, as well as system administration.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mockup-window max-w-[80rem] bg-base-300 bg-neutral-800 md:mt-8 mb-4 text-primary-content text-left w-80 h-100">
              <div className="card shadow-2xl m-4 bg-neutral-700">
                <figure className="rounded-full border-4 border-orange-500 overflow-hidden w-24 h-24 mx-auto my-6">
                  <img className="w-full h-full object-cover" src="https://cdn.discordapp.com/attachments/1057318231301435446/1130333145401663549/168956282298139123.png" alt="Dani" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title mt-4">Dani</h2>
                  <h3 className="mt-1 text-error">Collective Founder</h3>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  