"use client";
import React from 'react';
import { faArrowAltCircleDown, faClipboardCheck, faClock, faExternalLinkAlt, faHandshakeAngle, faShield, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTypingEffect from "react-typing-effect";
import { Fade } from "react-awesome-reveal";

const BannerStrings = [
  "Minecraft server",
  "project",
  "media platform",
  "API",
].sort(() => Math.random() - 0.5);

function Home() {
  return (
    
    <div className="py-6">
      <div className="PageBannerPhoto" style={{ zIndex: "0" }}>
        <img
          alt="background"
          src="/assets/img/startup-photo.jpg"
          className="absolute blur-sm hidden md:block brightness-50"
          style={{ zIndex: "-1" }}
        />

        <div className="flex flex-col items-center">
          <Fade delay={100} triggerOnce>
            <h1 className="PageBannerTitle text-white" id="PageBannerTitle" style={{ zIndex: "1" }}>
              Transform your infrastructural dreams into robust, secure realities with
              <b className="animate-gradient bg-gradient-to-r from-[#b16318] to-[#d87718] bg-clip-text text-transparent"> Hydrabank</b>.
            </h1>

            <h2 className="PageBannerText text-white" id="PageBannerText" style={{ zIndex: "1" }}>
              Let us take care of your infrastructure, so you can focus on your{" "}
              <b>
                <span className="text-orange-400 md:text-orange-300">
                  <ReactTypingEffect
                    speed={100}
                    eraseSpeed={50}
                    typingDelay={500}
                    eraseDelay={2500}
                    text={BannerStrings}
                    cursor={"_"}
                  />
                </span>
              </b>
              {"."}
            </h2>
          </Fade>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center"></div>

      <div className="flex flex-col gap-y-2 border-b-2 border-gray-600 py-4">
        <h1 className="Header py-8 animate-gradient bg-gradient-to-r from-[#b16318] to-[#d87718] bg-clip-text">
          Why Choose Hydrabank?
        </h1>
      </div>
      <div className="flex flex-row gap-x-4 items-center justify-center mt-8">
  <div className="flex flex-col gap-y-2 rounded-xl border-gray-600 border-2 max-w-2xl">
    <div className="flex flex-row items-center gap-x-2 border-b-2 border-gray-600 py-4 px-4">
      <FontAwesomeIcon icon={faTerminal} size="lg" className="text-orange-500" />
      <span className="text-lg font-semibold">Real Time Remote Monitoring</span> 
    </div>
    <div className="flex flex-col py-4 px-4 pt-2 gap-y-2">
      <p>Monitor your infrastructure with ease. Our powerful tools provide real-time insights into your system's performance, ensuring smooth operations and rapid issue resolution.</p>
    </div>
  </div>
  <div className="flex flex-col gap-y-2 rounded-xl border-gray-600 border-2 max-w-2xl">
    <div className="flex flex-row items-center gap-x-2 border-b-2 border-gray-600 py-4 px-4">
      <FontAwesomeIcon icon={faShield} size="lg" className="text-orange-500" />
      <span className="text-lg font-semibold">Advanced Security</span> 
    </div>
    <div className="flex flex-col py-4 px-4 pt-2 gap-y-2">
      <p>We prioritize a proactive security approach to safeguard your systems. With robust maintenance and advanced tools like Fail2Ban, IPTables, and UFW or Firewall, we ensure your production software and infrastructure remain secure, up-to-date, and reliable.</p>
    </div>
  </div>
</div>


    </div>
  );
}

export default Home;
