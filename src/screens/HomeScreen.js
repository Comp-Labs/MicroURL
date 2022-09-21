import React, { useState } from "react";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  LinkedinIcon,
} from "react-share";
const BitlyClient = require("bitly").BitlyClient;

const HomeScreen = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [isShorten, setIsShorten] = useState(false);
  const [shortenLink, setShortenLink] = useState("");

  const ACCESS_TOKEN = "e9e24714f7ec8ddd24dcf0e419281e4837a2f553";
  const bit_ly = new BitlyClient(ACCESS_TOKEN);

  const shortLink = (url) => {
    bit_ly
      .shorten(url)
      .then((res) => {
        setIsShorten(true);
        setShortenLink(res.link);
        console.log(`Res: ${res.link}`);
      })
      .catch((err) => console.error(err));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    shortLink(originalUrl);
  };

  const resetHandler = () => {
    setOriginalUrl("");
    setShortenLink("");
    setIsShorten(false);
  };

  return (
    <div className="container mx-auto px-3 md:px-12 pt-7 md:pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="text-center mt-12 md:mt-0">
          <img
            src="makelinktiny_logo.svg"
            alt="makelinktiny_logo"
            className="animate-bounce h-64 md:animate-pulse mx-auto md:h-full"
          />
        </div>
        <div className="text-left pt-14 md:pt-32 md:pl-7">
          <p className="text-5xl md:text-6xl text-purple-800 font-bold">
            Make URLs Tiny
          </p>
          <p className="mt-6 text-xl text-gray-500">
            <span className="text-purple-800">Makeurlstiny</span> URL shortener
            which takes some long, unwieldy link and turns it into a shorter,
            easy-to-share one.
          </p>
          <form className="flex flex-col mt-5" onSubmit={submitHandler}>
            <label htmlFor="url" className="text-lg text-purple-700 mb-2">
              Enter URL
            </label>
            <input
              type="url"
              placeholder="Enter URl..."
              id="url"
              required
              className="px-5 py-3 rounded ring-2 ring-gray-200 transition duration-200 focus:outline-none focus:ring-purple-700 text-xl"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
            />
            <div className="flex flex-row">
              <button
                type="submit"
                className="px-6 py-4 bg-purple-700 text-white text-xl font-semibold transition duration-200 hover:bg-purple-800 focus:outline-none rounded-md mt-5 max-w-max"
              >
                {"Create Shorten"}
              </button>
              {isShorten && (
                <button
                  onClick={resetHandler}
                  className="px-6 py-4 ml-4 bg-red-600 text-white text-xl font-semibold transition duration-200 hover:bg-red-800 focus:outline-none rounded-md mt-5 max-w-max"
                >
                  Reset
                </button>
              )}
            </div>
          </form>
          {isShorten && (
            <div className="px-7 py-5 bg-gray-100 mt-6 rounded  flex flex-col">
              <a
                href={shortenLink}
                className="font-semibold text-lg text-purple-800"
              >
                {shortenLink}
              </a>
              <p className="text-gray-700 mt-4">Share Now:</p>
              <div className="flex flex-row mt-2 space-x-4">
                <EmailShareButton
                  subject="Link Short By MakeURLsTiny"
                  body={`Tap on link:\n ${shortenLink}`}
                  className="focus:outline-none"
                >
                  <EmailIcon size={32} round />
                </EmailShareButton>

                <FacebookShareButton
                  url={`Tap on link:\n ${shortenLink}`}
                  quote={"Link Short By MakeURLsTiny"}
                  className="focus:outline-none"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>

                <TwitterShareButton
                  url={`Tap on link:\n ${shortenLink}`}
                  title={"Link Short By MakeURLsTiny"}
                  className="focus:outline-none"
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>

                <TelegramShareButton
                  url={`Tap on link:\n ${shortenLink}`}
                  title={"Link Short By MakeURLsTiny"}
                  className="focus:outline-none"
                >
                  <TelegramIcon size={32} round />
                </TelegramShareButton>

                <WhatsappShareButton
                  url={`Tap on link:\n ${shortenLink}`}
                  title={"Link Short By MakeURLsTiny"}
                  separator={":\n\n"}
                  className="focus:outline-none"
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>

                <LinkedinShareButton
                  url={`Tap on link:\n ${shortenLink}`}
                  className="focus:outline-none"
                >
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col text-center w-full my-4 md:my-6">
        <a
          href="https://github.com/harshverma036/makeurlstiny"
          className="text-2xl md:text-3xl mb-3 text-gray-700 hover:text-black"
        >
          <i className="fab fa-github" />
        </a>
        <p className="text-gray-600">
          Developed With ❤ By{" "}
          <a
            href="https://harshverma.netlify.app/"
            className="font-medium text-purple-600 hover:text-purple-900"
          >
            Harsh Verma
          </a>
        </p>
      </div>
    </div>
  );
};

export default HomeScreen;
