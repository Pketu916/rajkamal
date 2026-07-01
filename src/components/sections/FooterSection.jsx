import React, { useState } from "react";
import Container from "../ui/Container";
import logoImg from "../../assets/images/Logo/rajkamal-tours-travels-logo.svg";
import exploreIcon from "../../assets/images/Footer/Explore the world.svg";
import createIcon from "../../assets/images/Footer/Create memories.svg";
import travelIcon from "../../assets/images/Footer/Travel seamlessly.svg";

const FooterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const googleScriptUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL;

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    if (!googleScriptUrl) {
      console.warn("Google Sheets webhook is not configured. Add VITE_GOOGLE_SHEETS_WEBHOOK_URL in your .env file.");
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 5000);
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const submittedAtIndia = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(new Date());

      const payload = JSON.stringify({
        formType: 'subscribe',
        email: email.trim(),
        submittedAt: submittedAtIndia
      });

      await fetch(googleScriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: payload
      });

      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 5000);
    } catch (error) {
      setErrorMsg("Unable to subscribe right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
        
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.5 2.25H7.5C6.10807 2.25149 4.77358 2.80509 3.78933 3.78933C2.80509 4.77358 2.25149 6.10807 2.25 7.5V16.5C2.25149 17.8919 2.80509 19.2264 3.78933 20.2107C4.77358 21.1949 6.10807 21.7485 7.5 21.75H16.5C17.8919 21.7485 19.2264 21.1949 20.2107 20.2107C21.1949 19.2264 21.7485 17.8919 21.75 16.5V7.5C21.7485 6.10807 21.1949 4.77358 20.2107 3.78933C19.2264 2.80509 17.8919 2.25149 16.5 2.25ZM12 16.5C11.11 16.5 10.24 16.2361 9.49993 15.7416C8.75991 15.2471 8.18314 14.5443 7.84254 13.7221C7.50195 12.8998 7.41283 11.995 7.58647 11.1221C7.7601 10.2492 8.18868 9.44736 8.81802 8.81802C9.44736 8.18868 10.2492 7.7601 11.1221 7.58647C11.995 7.41283 12.8998 7.50195 13.7221 7.84254C14.5443 8.18314 15.2471 8.75991 15.7416 9.49993C16.2361 10.24 16.5 11.11 16.5 12C16.4988 13.1931 16.0243 14.337 15.1806 15.1806C14.337 16.0243 13.1931 16.4988 12 16.5ZM17.625 7.5C17.4025 7.5 17.185 7.43402 17 7.3104C16.815 7.18679 16.6708 7.01109 16.5856 6.80552C16.5005 6.59995 16.4782 6.37375 16.5216 6.15552C16.565 5.93729 16.6722 5.73684 16.8295 5.5795C16.9868 5.42217 17.1873 5.31502 17.4055 5.27162C17.6238 5.22821 17.85 5.25049 18.0555 5.33564C18.2611 5.42078 18.4368 5.56498 18.5604 5.74998C18.684 5.93499 18.75 6.1525 18.75 6.375C18.75 6.67337 18.6315 6.95952 18.4205 7.1705C18.2095 7.38147 17.9234 7.5 17.625 7.5ZM15 12C15 12.5933 14.8241 13.1734 14.4944 13.6667C14.1648 14.1601 13.6962 14.5446 13.1481 14.7716C12.5999 14.9987 11.9967 15.0581 11.4147 14.9424C10.8328 14.8266 10.2982 14.5409 9.87868 14.1213C9.45912 13.7018 9.1734 13.1672 9.05764 12.5853C8.94189 12.0033 9.0013 11.4001 9.22836 10.8519C9.45542 10.3038 9.83994 9.83524 10.3333 9.50559C10.8266 9.17595 11.4067 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
        
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21.75 11.9999C21.747 14.3828 20.8727 16.6824 19.2918 18.4655C17.7109 20.2485 15.5326 21.392 13.1672 21.6805C13.1145 21.6864 13.0612 21.6812 13.0107 21.665C12.9602 21.6489 12.9137 21.6222 12.8743 21.5868C12.8349 21.5513 12.8034 21.5079 12.782 21.4594C12.7606 21.411 12.7497 21.3585 12.75 21.3055V14.2499H15C15.1028 14.2501 15.2046 14.2292 15.299 14.1884C15.3934 14.1476 15.4784 14.0879 15.5487 14.0129C15.6191 13.9379 15.6732 13.8493 15.7078 13.7525C15.7425 13.6557 15.7568 13.5528 15.75 13.4502C15.7335 13.2573 15.6445 13.0779 15.501 12.9479C15.3575 12.818 15.1701 12.7472 14.9766 12.7499H12.75V10.4999C12.75 10.102 12.9081 9.7205 13.1894 9.43919C13.4707 9.15789 13.8522 8.99985 14.25 8.99985H15.75C15.8528 9.00008 15.9546 8.97916 16.049 8.9384C16.1434 8.89764 16.2284 8.83791 16.2987 8.76292C16.3691 8.68792 16.4232 8.59927 16.4578 8.50246C16.4925 8.40565 16.5068 8.30276 16.5 8.20017C16.4834 8.00698 16.3942 7.82727 16.2503 7.6973C16.1064 7.56733 15.9186 7.49677 15.7247 7.49985H14.25C13.4544 7.49985 12.6913 7.81592 12.1287 8.37853C11.5661 8.94114 11.25 9.70421 11.25 10.4999V12.7499H9.00002C8.8972 12.7496 8.79544 12.7705 8.70105 12.8113C8.60666 12.8521 8.52165 12.9118 8.45132 12.9868C8.38098 13.0618 8.32682 13.1504 8.29219 13.2472C8.25756 13.3441 8.24321 13.447 8.25002 13.5495C8.26661 13.7427 8.35585 13.9224 8.49974 14.0524C8.64363 14.1824 8.83146 14.2529 9.02533 14.2499H11.25V21.3074C11.2503 21.3603 11.2395 21.4127 11.2181 21.4611C11.1967 21.5095 11.1653 21.5528 11.126 21.5882C11.0867 21.6237 11.0403 21.6504 10.99 21.6666C10.9396 21.6828 10.8864 21.6882 10.8338 21.6824C8.40504 21.3866 6.17586 20.1898 4.58746 18.3288C2.99907 16.4678 2.16722 14.0783 2.25658 11.6333C2.44408 6.57079 6.54471 2.45517 11.611 2.25829C12.9226 2.20748 14.231 2.42175 15.458 2.88826C16.6849 3.35477 17.8051 4.06395 18.7517 4.97338C19.6982 5.88281 20.4516 6.97381 20.9668 8.18111C21.482 9.38842 21.7484 10.6872 21.75 11.9999Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
        
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.25 2.25H3.75C3.35218 2.25 2.97064 2.40804 2.68934 2.68934C2.40804 2.97064 2.25 3.35218 2.25 3.75V20.25C2.25 20.6478 2.40804 21.0294 2.68934 21.3107C2.97064 21.592 3.35218 21.75 3.75 21.75H20.25C20.6478 21.75 21.0294 21.592 21.3107 21.3107C21.592 21.0294 21.75 20.6478 21.75 20.25V3.75C21.75 3.35218 21.592 2.97064 21.3107 2.68934C21.0294 2.40804 20.6478 2.25 20.25 2.25ZM9 16.5C9 16.6989 8.92098 16.8897 8.78033 17.0303C8.63968 17.171 8.44891 17.25 8.25 17.25C8.05109 17.25 7.86032 17.171 7.71967 17.0303C7.57902 16.8897 7.5 16.6989 7.5 16.5V10.5C7.5 10.3011 7.57902 10.1103 7.71967 9.96967C7.86032 9.82902 8.05109 9.75 8.25 9.75C8.44891 9.75 8.63968 9.82902 8.78033 9.96967C8.92098 10.1103 9 10.3011 9 10.5V16.5ZM8.25 9C8.0275 9 7.80999 8.93402 7.62498 8.8104C7.43998 8.68679 7.29578 8.51109 7.21064 8.30552C7.12549 8.09995 7.10321 7.87375 7.14662 7.65552C7.19002 7.43729 7.29717 7.23684 7.4545 7.0795C7.61184 6.92217 7.81229 6.81502 8.03052 6.77162C8.24875 6.72821 8.47495 6.75049 8.68052 6.83564C8.88609 6.92078 9.06179 7.06498 9.1854 7.24998C9.30902 7.43499 9.375 7.6525 9.375 7.875C9.375 8.17337 9.25647 8.45952 9.0455 8.6705C8.83452 8.88147 8.54837 9 8.25 9ZM17.25 16.5C17.25 16.6989 17.171 16.8897 17.0303 17.0303C16.8897 17.171 16.6989 17.25 16.5 17.25C16.3011 17.25 16.1103 17.171 15.9697 17.0303C15.829 16.8897 15.75 16.6989 15.75 16.5V13.125C15.75 12.6277 15.5525 12.1508 15.2008 11.7992C14.8492 11.4475 14.3723 11.25 13.875 11.25C13.3777 11.25 12.9008 11.4475 12.5492 11.7992C12.1975 12.1508 12 12.6277 12 13.125V16.5C12 16.6989 11.921 16.8897 11.7803 17.0303C11.6397 17.171 11.4489 17.25 11.25 17.25C11.0511 17.25 10.8603 17.171 10.7197 17.0303C10.579 16.8897 10.5 16.6989 10.5 16.5V10.5C10.5009 10.3163 10.5693 10.1393 10.692 10.0026C10.8148 9.86596 10.9834 9.7791 11.166 9.75852C11.3485 9.73794 11.5323 9.78508 11.6824 9.891C11.8325 9.99691 11.9385 10.1542 11.9803 10.3331C12.4877 9.98894 13.0792 9.78947 13.6914 9.75611C14.3036 9.72276 14.9133 9.85679 15.455 10.1438C15.9968 10.4308 16.4501 10.86 16.7664 11.3852C17.0826 11.9105 17.2498 12.5119 17.25 13.125V16.5Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
        
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21.9684 6.5175C21.8801 6.17189 21.7109 5.85224 21.4747 5.58491C21.2385 5.31758 20.9421 5.11024 20.61 4.98C17.3962 3.73875 12.2812 3.75 12 3.75C11.7188 3.75 6.60375 3.73875 3.39 4.98C3.0579 5.11024 2.76153 5.31758 2.52534 5.58491C2.28915 5.85224 2.1199 6.17189 2.03156 6.5175C1.78875 7.45313 1.5 9.16313 1.5 12C1.5 14.8369 1.78875 16.5469 2.03156 17.4825C2.11977 17.8283 2.28895 18.1481 2.52515 18.4156C2.76136 18.6831 3.0578 18.8906 3.39 19.0209C6.46875 20.2088 11.2875 20.25 11.9381 20.25H12.0619C12.7125 20.25 17.5341 20.2088 20.61 19.0209C20.9422 18.8906 21.2386 18.6831 21.4748 18.4156C21.711 18.1481 21.8802 17.8283 21.9684 17.4825C22.2113 16.545 22.5 14.8369 22.5 12C22.5 9.16313 22.2113 7.45313 21.9684 6.5175ZM15.0553 12.6113L11.3053 15.2363C11.1931 15.3148 11.0616 15.3612 10.9249 15.3703C10.7883 15.3794 10.6517 15.351 10.5301 15.288C10.4085 15.225 10.3064 15.1299 10.235 15.013C10.1636 14.8962 10.1256 14.762 10.125 14.625V9.375C10.125 9.2378 10.1627 9.10324 10.2339 8.98597C10.3051 8.86869 10.4071 8.77319 10.5289 8.70987C10.6506 8.64655 10.7873 8.61783 10.9242 8.62683C11.0611 8.63584 11.1929 8.68222 11.3053 8.76094L15.0553 11.3859C15.154 11.4551 15.2345 11.547 15.2901 11.6539C15.3457 11.7608 15.3747 11.8795 15.3747 12C15.3747 12.1205 15.3457 12.2392 15.2901 12.3461C15.2345 12.453 15.154 12.5449 15.0553 12.6141V12.6113Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  const marqueeData = [
    { text: "Explore the world", icon: exploreIcon },
    { text: "Create memories", icon: createIcon },
    { text: "Travel seamlessly", icon: travelIcon },
  ];

  // Duplicate items 4 times to ensure seamless infinite looping on ultra-wide screens
  const marqueeItems = [
    ...marqueeData,
    ...marqueeData,
    ...marqueeData,
    ...marqueeData,
  ];

  return (
    <footer className="w-full bg-[#f9fafb] border-t border-border-light pt-16 md:pt-24 pb-0 overflow-hidden">
      <Container className="max-w-[1280px]">
        {/* Upper Footer: Flex Layout Left and Right */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-0">
          {/* Left Side: Logo & Info */}
          <div className="w-full lg:w-4/12 flex flex-col items-start">
            <a href="/" className="inline-flex items-center mb-4 cursor-pointer">
              <img
                src={logoImg}
                alt="Rajkamal Tours & Travels"
                className="h-14 w-auto object-contain"
              />
            </a>
            <p className="text-text-main text-sm font-medium leading-relaxed mb-6 max-w-[340px]">
              Creating seamless and unforgettable travel experiences with over
              20 years of trusted expertise.
            </p>

            {/* Contact details with orange vertical borders */}
            <div className="flex flex-col gap-3 w-full">
              <p className="text-sm font-medium text-text-main border-l-2 border-primary pl-2 leading-none">
                <a href="tel:+919274584480" className="hover:text-primary transition-colors ">92745 84480</a><span class="text-[#00000033]"> | </span><a href="tel:+917984359577" className="hover:text-primary transition-colors">79843 59577</a><span class="text-[#00000033]"> | </span><a href="tel:+919879584480" className="hover:text-primary transition-colors">98795 84480</a>
              </p>
              <p className="text-sm font-medium text-text-main border-l-2 border-primary pl-2 leading-none">
                <a href="mailto:info@rajkamaltours.com" className="hover:text-primary transition-colors">info@rajkamaltours.com</a>
              </p>
              <p className="text-sm font-medium text-text-main border-l-2 border-primary pl-2 leading-none">
                Ahmedabad, Gujarat, India
              </p>
            </div>
          </div>

          {/* Right Side: Links & Newsletter */}
          <div className="w-full max-w-[790px] flex flex-wrap md:flex-nowrap md:justify-between sm:flex-row  md:gap-10 gap-6">
            {/* Quick Links */}
            <div className="flex flex-col items-start min-w-[120px]">
              <h4 className="text-text-main text-lg !font-medium mb-2 md:mb-4 font-sans">
                Quick links
              </h4>
              <ul className="flex flex-col md:gap-3 gap-1">
                <li>
                  <a
                    href="#"
                    className="text-text-main hover:text-primary text-sm font-medium transition-colors cursor-pointer">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-text-main hover:text-primary text-sm font-medium transition-colors cursor-pointer">
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#packages"
                    className="text-text-main hover:text-primary text-sm font-medium transition-colors cursor-pointer">
                    Tour packages
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    className="text-text-main hover:text-primary text-sm font-medium transition-colors cursor-pointer">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>



            {/* Newsletter & Socials */}
            <div className="flex flex-col items-start w-full max-w-[360px] md:max-w-[400px] md:pl-8">
              <h4 className="text-text-main text-2xl !font-medium mb-2 font-sans">
                Subscribe for Travel Updates
              </h4>
              <p className="text-text-main text-sm leading-relaxed mb-6">
                Get the latest travel offers, destination ideas, and exclusive
                holiday packages delivered to your inbox.
              </p>

              {/* Newsletter Input Block */}
              <form
                onSubmit={handleSubscribe}
                className="w-full flex flex-col gap-2.5 mb-6 md:mb-8">
                <div className="flex w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-[#F2F2F2] text-sm text-text-main placeholder:text-text-muted px-4 py-3 rounded-l-xl focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary-hover text-white text-sm font-medium px-6 py-3 rounded-r-xl transition-colors whitespace-nowrap disabled:opacity-75">
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </button>
                </div>
                {isSubscribed && (
                  <p className="text-xs text-green-600 font-semibold px-2">
                    Thank you for subscribing!
                  </p>
                )}
                {errorMsg && (
                  <p className="text-xs text-red-500 font-semibold px-2">
                    {errorMsg}
                  </p>
                )}
              </form>

              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4D4D4]  hover:text-[#090909]  flex items-center justify-center transition-colors cursor-pointer"
                    aria-label={item.name}>
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Infinite Seamless Marquee Row */}
      <div className="w-full py-8 md:py-12 relative overflow-hidden flex select-none md:mt-8 border-b border-[#00000026]">
        {/* Animated Marquee Container - Track 1 */}
        <div className="flex shrink-0 items-center gap-3 md:gap-6 animate-marquee whitespace-nowrap pr-3 md:pr-6">
          {marqueeItems.map((item, idx) => (
            <div
              key={`track1-${idx}`}
              className="flex items-center gap-4 md:gap-6">
              <span className="font-sans text-3xl md:text-5xl  !font-medium text-text-main tracking-tight">
                {item.text}
              </span>
              <img
                src={item.icon}
                alt=""
                className="h-10 md:h-14 w-auto object-contain flex-shrink-0"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        {/* Animated Marquee Container - Track 2 (Identical Duplicate) */}
        <div
          className="flex shrink-0 items-center gap-3 md:gap-6 animate-marquee whitespace-nowrap pr-3 md:pr-6"
          aria-hidden="true">
          {marqueeItems.map((item, idx) => (
            <div
              key={`track2-${idx}`}
              className="flex items-center gap-4 md:gap-6">
              <span className="font-sans text-4xl md:text-5xl !font-medium text-text-main tracking-tight">
                {item.text}
              </span>
              <img
                src={item.icon}
                alt=""
                className="h-10 md:h-14 w-auto object-contain flex-shrink-0"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar: Copyright & Policy Links */}
      <Container className="max-w-[1280px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 py-6">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <p className="text-sm text-text-main font-medium text-center md:text-left">
              &copy; 2026 Rajkamal holidays. All Rights Reserved.
            </p>
            <span className="hidden md:inline text-[#00000033]">|</span>
            <p className="text-sm text-text-main font-medium text-center md:text-left">
              Powered by <a href="https://appsrow.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline-offset-2">Appsrow</a>
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm text-text-main font-medium">
            <a
              href="#"
              className="hover:text-primary transition-colors cursor-pointer whitespace-nowrap">
              Privacy Policy
            </a>
            <span className="text-[#00000033] mx-1 hidden sm:inline">|</span>
            <a
              href="#"
              className="hover:text-primary transition-colors cursor-pointer whitespace-nowrap">
              Terms &amp; Conditions
            </a>
            <span className="text-[#00000033] mx-1 hidden sm:inline">|</span>
            <a
              href="#"
              className="hover:text-primary transition-colors cursor-pointer whitespace-nowrap">
              Cookie Policy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default FooterSection;
