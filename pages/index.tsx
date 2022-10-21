/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import Avatar from "../components/Atoms/Avatar";
import Button from "../components/Atoms/Button";
import Container from "../components/Atoms/Container";
import Initializer from "../components/initializer";
import { LandingLayout } from "../components/Layouts";
import Footer from "../components/Molecules/Footer";
import LandingHeader from "../components/Organisms/Header";
import { useAuth } from "../context/authContext";
import type { PageWithlayout } from "./_app";

const Home: PageWithlayout = () => {
  const { auth, initializing } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sectA, setSectA] = useState("a");
  const router = useRouter();

  useEffect(() => {
    if (auth && !isLoading && !initializing) {
      router.push("/jobs");
    }
    setIsLoading(false);
  }, [auth, isLoading, initializing]);

  if (initializing && isLoading && !auth) {
    return <Initializer />;
  }

  return (
    <div className="">
      <LandingHeader />
      <Container>
        <div className="text-center py-11 lg:py-24 max-w-[779px] mx-auto">
          <h2 className="font-bold text-lg lg:text-[34px] lg:leading-[41px] text-secondary">
            With a personal recruiter, you’ll get matched to roles that are
            right for you.
          </h2>
        </div>
        <div className="flex justify-between gap-8 mb-10">
          <div className="w-full lg:w-1/2 flex flex-col  gap-4">
            <button
              onClick={() => setSectA("a")}
              className={`${
                sectA === "a" ? "" : "opacity-50 grayscale"
              } border-2 px-8 lg:px-11 py-8 lg:py-8 rounded-3xl border-primary mb-5 text-left relative`}
            >
              <div className="absolute -top-6 -left-4">
                {sectA === "a" ? (
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-11 h-11  lg:!w-12 lg:!h-12"
                  >
                    <rect width="56" height="56" rx="28" fill="#98CBFF" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M25.5999 20.7999C22.9489 20.7999 20.7999 22.9489 20.7999 25.5999C20.7999 28.2509 22.9489 30.3999 25.5999 30.3999C28.2509 30.3999 30.3999 28.2509 30.3999 25.5999C30.3999 22.9489 28.2509 20.7999 25.5999 20.7999ZM18.3999 25.5999C18.3999 21.6235 21.6235 18.3999 25.5999 18.3999C29.5764 18.3999 32.7999 21.6235 32.7999 25.5999C32.7999 27.1549 32.307 28.5948 31.4688 29.7717L37.2484 35.5514C37.7171 36.02 37.7171 36.7798 37.2484 37.2484C36.7798 37.7171 36.02 37.7171 35.5514 37.2484L29.7717 31.4688C28.5948 32.307 27.1549 32.7999 25.5999 32.7999C21.6235 32.7999 18.3999 29.5764 18.3999 25.5999Z"
                      fill="#002D5B"
                    />
                    <rect width="56" height="56" rx="28" stroke="white" />
                  </svg>
                ) : (
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-11 h-11  lg:!w-12 lg:!h-12"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="55"
                      height="55"
                      rx="27.5"
                      fill="white"
                    />
                    <path
                      d="M37 37L31 31M33 26C33 29.866 29.866 33 26 33C22.134 33 19 29.866 19 26C19 22.134 22.134 19 26 19C29.866 19 33 22.134 33 26Z"
                      stroke="#63748A"
                      strokeOpacity="0.5"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="55"
                      height="55"
                      rx="27.5"
                      stroke="#E5E7EB"
                    />
                  </svg>
                )}
              </div>
              <h3 className="text-secondary font-bold inline-block mb-5  lg:my-4 text-lg lg:text-2xl lg:leading-7">
                Discover <br /> New Opportunities
              </h3>
              <p className="font-medium text-sm lg:text-lg text-[#63748A]">
                Tega, your AI personal recruiter, works 24/7 to send you jobs
                that are a great match for your skills and experience—so you
                never miss an opportunity.
              </p>
            </button>
            <button
              onClick={() => setSectA("b")}
              className={`${
                sectA === "b" ? "" : "opacity-50 grayscale"
              } border-2 px-8 lg:px-11 py-9 lg:py-11 rounded-3xl border-primary mb-5 text-left relative`}
            >
              <div className="absolute -top-6 -left-4">
                {sectA === "b" ? (
                  <svg
                    className="w-11 h-11  lg:!w-12 lg:!h-12"
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="56" height="56" rx="28" fill="#98CBFF" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.0599 20.8602C25.3403 17.5798 30.6589 17.5798 33.9393 20.8602C37.2197 24.1406 37.2197 29.4592 33.9393 32.7396L27.9996 38.6793L22.0599 32.7396C18.7795 29.4592 18.7795 24.1406 22.0599 20.8602ZM27.9996 29.1999C29.3251 29.1999 30.3996 28.1254 30.3996 26.7999C30.3996 25.4744 29.3251 24.3999 27.9996 24.3999C26.6741 24.3999 25.5996 25.4744 25.5996 26.7999C25.5996 28.1254 26.6741 29.1999 27.9996 29.1999Z"
                      fill="#002D5B"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-11 h-11  lg:!w-12 lg:!h-12"
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="55"
                      height="55"
                      rx="27.5"
                      fill="white"
                    />
                    <path
                      d="M33.6569 32.6569C32.7202 33.5935 30.7616 35.5521 29.4138 36.8999C28.6327 37.681 27.3677 37.6814 26.5866 36.9003C25.2623 35.576 23.3416 33.6553 22.3431 32.6569C19.219 29.5327 19.219 24.4673 22.3431 21.3431C25.4673 18.219 30.5327 18.219 33.6569 21.3431C36.7811 24.4673 36.7811 29.5327 33.6569 32.6569Z"
                      stroke="#63748A"
                      strokeOpacity="0.5"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M31 27C31 28.6569 29.6569 30 28 30C26.3431 30 25 28.6569 25 27C25 25.3431 26.3431 24 28 24C29.6569 24 31 25.3431 31 27Z"
                      stroke="#63748A"
                      strokeOpacity="0.5"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="55"
                      height="55"
                      rx="27.5"
                      stroke="#E5E7EB"
                    />
                  </svg>
                )}
              </div>
              <h3 className="text-secondary font-bold inline-block mb-5  lg:my-4 text-lg lg:text-2xl lg:leading-7">
                Get Invited <br /> to Apply to Jobs
              </h3>
              <p className="font-medium text-sm lg:text-lg text-[#63748A]">
                Tega pitches your profile to employers for jobs {"you'll"}{" "}
                love–so you stand out–and these companies can reach out to you
                directly.
              </p>
            </button>
          </div>
          {sectA === "a" && <Sect img="img-1.png" />}
          {sectA === "b" && <Sect img="tiny-img-2.png" />}
        </div>

        <div className="lg:mt-28">
          <div className="flex flex-col lg:flex-row gap-x-10">
            <svg
              width="156"
              height="109"
              viewBox="0 0 156 109"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M128.949 2.61264C127.456 6.09615 126.088 9.82849 124.843 13.8097C123.848 17.542 123.226 21.2743 122.977 25.0067C122.977 28.4902 123.599 31.7249 124.843 34.7107C126.088 37.4478 128.327 39.6872 131.562 41.429C138.031 44.9125 143.505 49.3913 147.984 54.8654C152.712 60.0906 155.075 66.56 155.075 74.2735C155.075 79.0012 154.205 83.48 152.463 87.7099C150.721 91.9399 148.233 95.6723 144.998 98.907C142.012 101.893 138.404 104.257 134.174 105.998C129.944 107.74 125.466 108.611 120.738 108.611C111.283 108.611 103.32 105.252 96.8509 98.5337C90.3816 91.8155 86.898 83.7288 86.4004 74.2735C85.6539 64.3206 86.898 55.1142 90.1327 46.6542C93.6162 37.9454 97.5974 30.3563 102.076 23.887C106.804 17.4176 111.407 12.1923 115.886 8.21114C120.365 3.98116 123.475 1.24411 125.217 0C125.714 0.248823 126.336 0.622056 127.083 1.1197L128.203 2.2394C128.451 2.48823 128.7 2.61264 128.949 2.61264ZM43.1053 2.61264C41.6123 6.09615 40.2438 9.82849 38.9997 13.8097C38.0044 17.542 37.3824 21.2743 37.1335 25.0067C37.1335 28.4902 37.7556 31.7249 38.9997 34.7107C40.2438 37.4478 42.4832 39.6872 45.7179 41.429C52.1873 44.9125 57.6614 49.3913 62.1402 54.8654C66.8678 60.0906 69.2316 66.56 69.2316 74.2735C69.2316 79.0012 68.3608 83.48 66.619 87.7099C64.8772 91.9399 62.389 95.6723 59.1543 98.907C56.1685 101.893 52.5605 104.257 48.3306 105.998C44.1006 107.74 39.6218 108.611 34.8941 108.611C25.4389 108.611 17.4766 105.252 11.0072 98.5337C4.53778 91.8155 1.05427 83.7288 0.556624 74.2735C-0.189844 64.3206 1.05427 55.1142 4.28896 46.6542C7.77248 37.9454 11.7536 30.3563 16.2324 23.887C20.9601 17.4176 25.5633 12.1923 30.0421 8.21114C34.5209 3.98116 37.6312 1.24411 39.3729 0C39.8706 0.248823 40.4926 0.622056 41.2391 1.1197L42.3588 2.2394C42.6076 2.48823 42.8565 2.61264 43.1053 2.61264Z"
                fill="#E1EEFB"
              />
            </svg>

            <h2 className="font-bold text-secondary text-[43px] max-w-[653.98px] lg:leading-[52px]">
              What people are saying about FosadRecruit.
            </h2>
          </div>
          <div className="my-[74px] flex flex-col lg:grid lg:grid-cols-3  gap-5  ">
            <TestimonialCard
              avatar="user-3.png"
              name="Lorraine S."
              text="Tega really made it feel like someone else was taking this job search as seriously as I was. It felt very genuine and sincere to me."
              theme="dark"
            />
            <TestimonialCard
              avatar="user-4.png"
              name="Alisa M."
              text="Tega made me feel like something good was right around the corner. All the positive feedback made me feel like I wasn't just a needle in a haystack."
              theme="light"
            />
             <TestimonialCard
              avatar="user-5.png"
              name="Lorraine S."
              text="Super thankful for Tega at FosadRecruit for making my whole job search process easier"
              theme="dark"
            />
            <TestimonialCard
              avatar="user-6.png"
              name="Alisa M."
              text="Tega, you made my job search a priority. And you stuck with me all throughout it. Couldn't have done it with you!. Results may vary. Some individuals were compensated for their time."
              theme="light"
            />
             <TestimonialCard
              avatar="user-7.png"
              name="Lorraine S."
              text="I've got to thank you, Tega. Having you was like having my own personal recruiter. I'd wake up to emails from you with jobs that matched what I was looking for. You gave me the confidence and hope to get out there. I did it because of you. Thank you!"
              theme="dark"
            />
            <TestimonialCard
              avatar="user-8.png"
              name="Alisa M."
              text="Tega, you are amazing! You gave me the confidence and hope to get out there. I did it because of you. Thank you!"
              theme="light"
            />
          </div>
        </div>

        <div className="hidden md:flex landing-banner-lit bg-secondary py-24 text-center rounded-2xl justify-center items-center mt-28 mb-16 landing-banner">
          <div className="max-w-[800px] bg-transparent">
            <h3 className="text-white font-bold text-[54px] leading-[65px] my-5">
              We take the work out of looking for work
            </h3>
            <p className="text-white text-lg font-medium text-opacity-60">
              Find your next job and more on our platform. Let us help you find
              your next big opportunity.
            </p>
            <div className="flex justify-center my-6">
              <Button
                color="primary"
                label="Let’s Get You Started"
                cl="!font-medium w-max "
                iconRight={
                  <svg
                    width="22"
                    height="23"
                    viewBox="0 0 22 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.4267 10.8195C16.383 10.707 16.3176 10.6042 16.2342 10.517L11.6508 5.93365C11.5654 5.84818 11.4639 5.78038 11.3522 5.73413C11.2406 5.68787 11.1209 5.66406 11 5.66406C10.7559 5.66406 10.5218 5.76103 10.3492 5.93365C10.2637 6.01912 10.1959 6.12058 10.1496 6.23225C10.1034 6.34392 10.0796 6.46361 10.0796 6.58448C10.0796 6.82859 10.1766 7.0627 10.3492 7.23531L13.3742 10.2511H6.41667C6.17355 10.2511 5.94039 10.3477 5.76849 10.5196C5.59658 10.6915 5.5 10.9247 5.5 11.1678C5.5 11.4109 5.59658 11.6441 5.76849 11.816C5.94039 11.9879 6.17355 12.0845 6.41667 12.0845H13.3742L10.3492 15.1003C10.2632 15.1855 10.1951 15.2869 10.1485 15.3986C10.102 15.5103 10.078 15.6301 10.078 15.7511C10.078 15.8722 10.102 15.992 10.1485 16.1037C10.1951 16.2154 10.2632 16.3168 10.3492 16.402C10.4344 16.4879 10.5358 16.5561 10.6475 16.6026C10.7592 16.6492 10.879 16.6731 11 16.6731C11.121 16.6731 11.2408 16.6492 11.3525 16.6026C11.4642 16.5561 11.5656 16.4879 11.6508 16.402L16.2342 11.8186C16.3176 11.7315 16.383 11.6287 16.4267 11.5161C16.5183 11.293 16.5183 11.0427 16.4267 10.8195Z"
                      fill="#002D5B"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <Footer />
      </Container>
    </div>
  );
};

const TestimonialCard = ({
  avatar,
  name,
  text,
  theme,
}: {
  avatar: string;
  name: string;
  text: string;
  theme: "light" | "dark";
}) => {
  return (
    <div
      className={`${
        theme === "light" ? "bg-[#F4FAFF]" : "bg-[#E1EEFB]"
      } p-9 flex flex-col rounded-xl h-max gap-5`}
    >
      <Avatar size="medium" className="w-[58px] h-[58px]" source={`/assets/images/${avatar}`} />
      <h4 className="font-bold text-secondary text-sm ">{name}</h4>
      <p className="font-medium text-secondary text-base ">{text}</p>
    </div>
  );
};

const Sect = ({ img }: { img: string }) => {
  return (
    <div className="lg:w-1/2 hidden lg:block ">
      <div>
        <img src={`/assets/${img}`} alt="" />
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Home;
