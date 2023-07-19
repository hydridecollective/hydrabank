"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faTerminal, faShield, faBook, faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
import ReactTypingEffect from 'react-typing-effect';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';

const BannerStrings = [
  'Minecraft server',
  'Project',
  'Media platform',
  'API',
].sort(() => Math.random() - 0.5);

function Home() {
  return <>
      <div className="h-screen overflow-hidden">
        <div className="h-full w-full absolute top-0 object-cover">
          <div className="h-full w-full blur-sm brightness-50 bg-img"></div>
        </div>
        <div className="h-full flex flex-col justify-center">
          <Fade delay={100} triggerOnce>
            <h1 className="PageBannerTitle text-white" id="PageBannerTitle" style={{ zIndex: '1' }}>
              Transform your infrastructural dreams into robust, secure realities with
              <b className="animate-gradient bg-gradient-to-r from-[#b16318] to-[#d87718] bg-clip-text text-transparent">
                {' '}
                Hydrabank
              </b>
              .
            </h1>
            <h2 className="PageBannerText text-white" id="PageBannerText" style={{ zIndex: '1' }}>
              Let us take care of your infrastructure, so you can focus on your{' '}
              <b>
                <span className="text-orange-400 md:text-orange-300">
                  <ReactTypingEffect
                    speed={100}
                    eraseSpeed={50}
                    typingDelay={500}
                    eraseDelay={2500}
                    text={BannerStrings}
                    cursor={'_'}
                  />
                </span>
              </b>
              .
            </h2>
          </Fade>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex min-h-screen">
          <div className="my-auto w-full flex flex-wrap justify-around p-16 px-10 sm:px-16">
            <div className="col flex flex-col rounded-xl border-gray-600 border-2">
              <div className="flex flex-row items-center gap-x-2 border-b-2 border-gray-600 p-4">
                <FontAwesomeIcon icon={faTerminal} size="lg" className="text-orange-500" />
                <span className="text-lg sm:text-2xl font-semibold">Real Time Remote Monitoring</span>
              </div>
              <div className="text-base sm:text-xl p-4 pt-2 gap-y-2">
                <p>
                  Monitor your infrastructure with ease. Our powerful tools provide real-time insights into your system&apos;s
                  performance, ensuring smooth operations and rapid issue resolution.
                </p>
              </div>
            </div>
            <div className="col flex flex-col rounded-xl border-gray-600 border-2">
              <div className="flex flex-row items-center gap-x-2 border-b-2 border-gray-600 p-4">
                <FontAwesomeIcon icon={faShield} size="lg" className="text-orange-500" />
                <span className="text-lg sm:text-2xl font-semibold">Advanced Security</span>
              </div>
              <div className="text-base sm:text-xl p-4 pt-2 gap-y-2">
                <p>
                  We prioritize a proactive security approach to safeguard your systems. With robust maintenance and
                  advanced tools like Fail2Ban, IPTables, and UFW or Firewall, we ensure your production software and
                  infrastructure remain secure, up-to-date, and reliable.
                </p>
              </div>
            </div>
            <div className="col flex flex-col rounded-xl border-gray-600 border-2">
              <div className="flex flex-row items-center gap-x-2 border-b-2 border-gray-600 p-4">
                <FontAwesomeIcon icon={faBook} size="lg" className="text-orange-500" />
                <span className="text-lg sm:text-2xl font-semibold">Advanced Logging</span>
              </div>
              <div className="text-base sm:text-xl p-4 pt-2 gap-y-2">
                <p>
                  We streamline SSH logging and backup reporting by organizing them into separate channels, allowing for
                  effortless log browsing. Regular proactive checks are conducted to identify any inconsistencies or
                  anomalies in the data streams, ensuring comprehensive monitoring and reporting.
                </p>
              </div>
            </div>
            <div className="col flex flex-col rounded-xl border-gray-600 border-2">
              <div className="flex flex-row items-center gap-x-2 border-b-2 border-gray-600 p-4">
                <FontAwesomeIcon icon={faHandshakeAngle} size="lg" className="text-orange-500" />
                <span className="text-lg sm:text-2xl font-semibold">Quality and Excellence</span>
              </div>
              <div className="text-base sm:text-xl p-4 pt-2 gap-y-2">
                <p>
                  We are committed to delivering high-quality solutions and will work closely with you to ensure your
                  satisfaction. If there&apos;s anything you&apos;re not happy with, we&apos;ll make the necessary adjustments.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-10 flex min-h-screen flex-col items-center">
          <div className="mt-auto flex flex-row gap-x-12 items-center justify-center max-w-5xl">
            <FontAwesomeIcon icon={faMoneyBill} size="6x" />
            <div className="flex flex-col gap-y-2 flex-wrap">
              <h1 className="text-2xl font-bold">That sounds cool and all.. But what are your prices?</h1>
              <p className="text-lg">
                At Hydrabank, we offer affordable and reliable system administration services tailored to meet the needs of communities and businesses. Our pricing is designed with your budget in mind, ensuring that you receive top-notch support without hidden fees or exorbitant costs.
              </p>
            </div>
          </div>
          <div className="mb-auto flex flex-col pt-20 text-center">
            <h1 className="text-white font-bold text-3xl font-header px-5">So, What Are You Waiting For?</h1>
            <h2 className="text-white font-medium text-2xl font-header px-5 pt-2 pb-4 text-center">
              Let us help you bring your <b>vision</b> to life.
              {" "}
              <span className="text-orange-400 md:text-orange-300 font-spacemono">
                <ReactTypingEffect speed="100" eraseSpeed="50" typingDelay="500" eraseDelay="2500" text={BannerStrings} cursor={" "} />
              </span>
              {" "}
              for your project.
            </h2>

            <div>
              <a type="button" className="font-golos inline-block px-6 py-2.5 bg-blue-300 text-gray-800 font-bold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-400 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-400 active:shadow-lg transition duration-150 ease-in-out" href="/services">
                Learn More & Get Started
                <FontAwesomeIcon className="ml-2" icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
        </div>
      </div>
  </>;
}

export default Home;
