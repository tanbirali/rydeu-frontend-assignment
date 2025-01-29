import { useState } from "react";

const Cards = () => {
  const [openChat, setOpenChat] = useState(false);
  const [openSocail, setOpenSocail] = useState(false);
  const [openQuery, setOpenQuery] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center -z-50 gap-8  mt-20 pt-10 pb-20">
      <div
        className={`w-[351px] lg:w-[963px] ${
          openChat ? "h-[167px] lg:h-[217px]" : "h-[87px] lg:h-[117px]"
        } flex flex-col  items-center gap-4 bg-white rounded-[8px]  
      lg:rounded-[11px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.17)] lg:shadow-[0px_5px_10px_0px_rgba(0,0,0,0.12)] 
      p-5 border-[1.4px] my-auto border-[#EFEFEF] transition-all ease-in-out duration-500 `}
      >
        <div className="w-full flex flex-row justify-between items-center gap-4 ">
          <div className=" flex flex-row items-center gap-6">
            {/* Chat*/}
            <svg
              className="w-[23px] h-[20px] lg:w-[41px] lg:h-[37px]"
              width="41"
              height="37"
              viewBox="0 0 41 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.9 0.533203H4.1C3.01261 0.533203 1.96976 0.965166 1.20086 1.73407C0.431963 2.50296 0 3.54582 0 4.6332L0 26.4999C0 27.5873 0.431963 28.6301 1.20086 29.399C1.96976 30.1679 3.01261 30.5999 4.1 30.5999H32.3217L38.7805 35.7686C38.9817 35.9292 39.2241 36.0298 39.4798 36.0587C39.7356 36.0876 39.9944 36.0437 40.2263 35.932C40.4582 35.8203 40.6538 35.6454 40.7907 35.4275C40.9276 35.2095 41.0001 34.9573 41 34.6999V4.6332C41 3.54582 40.568 2.50296 39.7991 1.73407C39.0302 0.965166 37.9874 0.533203 36.9 0.533203V0.533203ZM38.2667 31.8545L33.6555 28.1645C33.4118 27.9721 33.1105 27.8672 32.8 27.8665H4.1C3.73754 27.8665 3.38992 27.7225 3.13362 27.4662C2.87732 27.2099 2.73333 26.8623 2.73333 26.4999V4.6332C2.73333 4.27074 2.87732 3.92312 3.13362 3.66682C3.38992 3.41052 3.73754 3.26654 4.1 3.26654H36.9C37.2625 3.26654 37.6101 3.41052 37.8664 3.66682C38.1227 3.92312 38.2667 4.27074 38.2667 4.6332V31.8545Z"
                fill="#FF7190"
              />
              <path
                d="M12.3004 16.9333C13.0552 16.9333 13.667 16.3214 13.667 15.5666C13.667 14.8118 13.0552 14.2 12.3004 14.2C11.5456 14.2 10.9337 14.8118 10.9337 15.5666C10.9337 16.3214 11.5456 16.9333 12.3004 16.9333Z"
                fill="#FF7190"
              />
              <path
                d="M20.4999 16.9333C21.2547 16.9333 21.8665 16.3214 21.8665 15.5666C21.8665 14.8118 21.2547 14.2 20.4999 14.2C19.7451 14.2 19.1332 14.8118 19.1332 15.5666C19.1332 16.3214 19.7451 16.9333 20.4999 16.9333Z"
                fill="#FF7190"
              />
              <path
                d="M28.7 16.9333C29.4548 16.9333 30.0667 16.3214 30.0667 15.5666C30.0667 14.8118 29.4548 14.2 28.7 14.2C27.9452 14.2 27.3333 14.8118 27.3333 15.5666C27.3333 16.3214 27.9452 16.9333 28.7 16.9333Z"
                fill="#FF7190"
              />
            </svg>

            {/* Chat Text */}
            <div className="flex flex-col items-start">
              <p className="text-lg font-bold text-[#073A4D]">Chat</p>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
          {openChat ? (
            <button id="openChatBtn" onClick={() => setOpenChat(!openChat)}>
              <svg
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8849 1.11612C10.3967 0.627961 9.60525 0.627961 9.11709 1.11612L1.16214 9.07107C0.673986 9.55922 0.673986 10.3507 1.16214 10.8388C1.6503 11.327 2.44175 11.327 2.92991 10.8388L10.001 3.76777L17.072 10.8388C17.5602 11.327 18.3517 11.327 18.8398 10.8388C19.328 10.3507 19.328 9.55922 18.8398 9.07107L10.8849 1.11612ZM11.251 4L11.251 2L8.75098 2L8.75098 4L11.251 4Z"
                  fill="#777777"
                />
              </svg>
            </button>
          ) : (
            <button id="closeChatBtn" onClick={() => setOpenChat(!openChat)}>
              <svg
                width="16"
                height="9"
                viewBox="0 0 16 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.30418 8.71165C7.69723 9.09963 8.33038 9.09551 8.71836 8.70245L15.0408 2.29721C15.4287 1.90415 15.4246 1.271 15.0316 0.883027C14.6385 0.495052 14.0054 0.499172 13.6174 0.892229L7.99746 6.58577L2.30392 0.96585C1.91086 0.577875 1.27771 0.581995 0.889736 0.975052C0.501761 1.36811 0.505881 2.00126 0.898938 2.38924L7.30418 8.71165ZM6.99367 6.00651L7.00669 8.00646L9.00665 7.99345L8.99363 5.99349L6.99367 6.00651Z"
                  fill="#777777"
                />
              </svg>
            </button>
          )}
        </div>
        {openChat && (
          <div
            className={` transition-all transform duration-1000 
          ease-in-out ${
            openChat ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }  flex items-center justify-center gap-6`}
          >
            <div
              className="w-[86px] h-[86px] rounded-md hover:bg-[#EDFAFA] hover:border hover:border-[#DEF6F5]
              flex flex-col justify-center items-center"
            >
              <svg
                className="w-[30.45px] h-[30.45px] lg:w-[40px] lg:h-[40px]"
                width="54"
                height="53"
                viewBox="0 0 54 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1_253)">
                  <circle
                    cx="25.1653"
                    cy="23.3408"
                    r="20.3408"
                    fill="url(#paint0_linear_1_253)"
                  />
                </g>
                <path
                  d="M21.7549 32.7287C21.0605 32.7287 21.1852 32.4454 20.9359 31.7467L18.9064 24.6463L31.5109 16.2996L32.9885 16.715L31.7601 20.2652L21.7549 32.7287Z"
                  fill="#C8DAEA"
                />
                <path
                  d="M21.2536 32.7292C21.8124 32.7292 22.0545 32.4744 22.3712 32.1833C22.8555 31.7285 29.077 25.8155 29.077 25.8155L25.2584 24.9058L21.7192 27.089L21.2536 32.5472V32.7292Z"
                  fill="#A9C9DD"
                />
                <path
                  d="M21.8326 26.865L30.5361 33.2468C31.5251 33.7831 32.2444 33.515 32.4962 32.3351L36.0387 15.7461C36.3984 14.2981 35.4813 13.6545 34.5282 14.0836L13.7406 22.0563C12.32 22.6284 12.338 23.4149 13.4888 23.7546L18.8296 25.4171L31.1835 17.6767C31.7589 17.3192 32.2984 17.5158 31.8668 17.9091L21.8326 26.865Z"
                  fill="url(#paint1_linear_1_253)"
                />
                <defs>
                  <filter
                    id="filter0_d_1_253"
                    x="0.824493"
                    y="0"
                    width="52.6816"
                    height="52.6816"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="2" dy="3" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_253"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_253"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1_253"
                    x1="31.1269"
                    y1="9.4294"
                    x2="20.9565"
                    y2="33.16"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#37AEE2" />
                    <stop offset="1" stop-color="#1E96C8" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1_253"
                    x1="27.0459"
                    y1="23.1745"
                    x2="31.5033"
                    y2="30.3487"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EFF7FC" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>
              <p>Telegram</p>
            </div>
            <div
              className="w-[86px] h-[86px] rounded-md hover:bg-[#EDFAFA] hover:border hover:border-[#DEF6F5]
              flex flex-col justify-center items-center"
            >
              <svg
                className="w-[31px] h-[31px] lg:w-[40px] lg:h-[40px]"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1_258)">
                  <circle
                    cx="25.1663"
                    cy="24.0156"
                    r="20.3408"
                    fill="#3CBA28"
                  />
                </g>
                <g clip-path="url(#clip0_1_258)">
                  <path
                    d="M14.2673 34.9685L15.8071 29.3433C14.857 27.6968 14.3577 25.8302 14.3586 23.9163C14.3614 17.9324 19.2308 13.063 25.2137 13.063C28.1171 13.0639 30.8425 14.1948 32.8925 16.2466C34.9416 18.2984 36.0697 21.0256 36.0688 23.9263C36.0661 29.9111 31.1967 34.7805 25.2137 34.7805C23.3974 34.7796 21.6075 34.3241 20.0221 33.4588L14.2673 34.9685ZM20.2886 31.4937C21.8184 32.4019 23.2787 32.9459 25.2101 32.9468C30.1826 32.9468 34.2333 28.8998 34.236 23.9245C34.2379 18.9391 30.2063 14.8976 25.2174 14.8957C20.2412 14.8957 16.1932 18.9428 16.1914 23.9172C16.1905 25.948 16.7856 27.4686 17.785 29.0595L16.8732 32.3891L20.2886 31.4937ZM30.6819 26.5066C30.6143 26.3934 30.4336 26.3259 30.1616 26.1899C29.8905 26.0539 28.557 25.3976 28.3079 25.3073C28.0596 25.2169 27.8789 25.1713 27.6972 25.4433C27.5165 25.7143 26.9963 26.3259 26.8384 26.5066C26.6805 26.6873 26.5217 26.7101 26.2506 26.5741C25.9795 26.4381 25.1051 26.1524 24.0691 25.2278C23.2632 24.5086 22.7183 23.6205 22.5604 23.3485C22.4025 23.0775 22.544 22.9305 22.6791 22.7954C22.8014 22.674 22.9501 22.4787 23.0861 22.3199C23.224 22.1629 23.2687 22.0497 23.36 21.8681C23.4503 21.6874 23.4056 21.5286 23.3371 21.3926C23.2687 21.2575 22.7265 19.9222 22.5011 19.3791C22.2802 18.8506 22.0566 18.9218 21.8905 18.9136L21.3702 18.9045C21.1895 18.9045 20.8956 18.972 20.6473 19.244C20.3991 19.516 19.6981 20.1713 19.6981 21.5066C19.6981 22.842 20.6701 24.1317 20.8052 24.3124C20.9412 24.4931 22.7174 27.2331 25.4382 28.4078C26.0854 28.6871 26.591 28.8541 26.9844 28.9792C27.6343 29.1854 28.2257 29.1562 28.693 29.0869C29.2142 29.0093 30.2976 28.4306 30.524 27.7972C30.7503 27.1628 30.7503 26.6198 30.6819 26.5066Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1_258"
                    x="0.825439"
                    y="0.674805"
                    width="52.6816"
                    height="52.6816"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="2" dy="3" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_258"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_258"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_1_258">
                    <rect
                      width="21.9055"
                      height="21.9055"
                      fill="white"
                      transform="translate(14.2141 13.063)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <p>Whatsapp</p>
            </div>
            <div
              className="w-[86px] h-[86px] rounded-md hover:bg-[#EDFAFA] hover:border hover:border-[#DEF6F5]
              flex flex-col justify-center items-center"
            >
              <img
                src="/live_chat_icon.png"
                className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]"
              />

              <p>Live chat</p>
            </div>
          </div>
        )}
      </div>

      {/* Social  */}
      <div
        className={`w-[351px] lg:w-[963px] ${
          openSocail ? "h-[147px] lg:h-[217px]" : "h-[87px] lg:h-[117px]"
        } flex flex-col  items-center gap-4 bg-white 
      rounded-[11px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.17)] lg:shadow-[0px_5px_10px_0px_rgba(0,0,0,0.12)]  p-5 border-[1.4px] border-[#EFEFEF] transition-all duration-500 ease-in-out `}
      >
        <div className="w-full flex flex-row justify-between items-center gap-4">
          <div className=" flex flex-row items-center gap-6">
            {/* Social Icon*/}
            <svg
              className="w-[26px] h-[24px] lg:w-[40px] lg:h-[40px]"
              width="41"
              height="38"
              viewBox="0 0 41 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.6274 20.9748C32.1527 20.9748 31.678 21.0179 31.2032 21.1042L26.8874 13.6811C28.0958 12.2137 28.8727 10.4011 28.8727 8.32949C28.8727 3.75474 25.1179 0 20.5 0C15.8821 0 12.1274 3.75474 12.1274 8.37265C12.1274 10.4011 12.9042 12.2569 14.1127 13.7242L9.79686 21.1906C9.32212 21.1042 8.84738 21.0611 8.37265 21.0611C3.75474 21.0611 0 24.8158 0 29.4337C0 34.0516 3.75474 37.8064 8.37265 37.8064C11.9548 37.8064 15.019 35.519 16.1842 32.3253H24.8158C25.9811 35.519 29.0453 37.8064 32.6274 37.8064C37.2453 37.8064 41.0001 34.0516 41.0001 29.4337C41.0001 24.8158 37.2453 20.9748 32.6274 20.9748ZM32.6274 25.2043C34.0085 25.2043 35.1306 26.3264 35.1306 27.7074C35.1306 29.0885 34.0085 30.2106 32.6274 30.2106C31.2464 30.2106 30.1243 29.0885 30.1243 27.7074C30.1243 26.3264 31.2464 25.2043 32.6274 25.2043ZM23.0032 6.68949C23.0032 8.07054 21.8811 9.19265 20.5 9.19265C19.119 9.19265 17.9969 8.07054 17.9969 6.68949C17.9969 5.30843 19.119 4.18632 20.5 4.18632C21.8811 4.18632 23.0032 5.30843 23.0032 6.68949ZM16.9179 12.3863C17.0906 11.0484 18.2127 10.0127 19.5937 10.0127H21.4495C22.7874 10.0127 23.9527 11.0053 24.1253 12.3863L24.2116 13.0769C23.1758 13.8537 21.9242 14.3716 20.5432 14.3716C19.1621 14.3716 17.9106 13.8969 16.8748 13.0769L16.9179 12.3863ZM8.37265 25.2043C9.7537 25.2043 10.8758 26.3264 10.8758 27.7074C10.8758 29.0885 9.7537 30.2106 8.37265 30.2106C6.99159 30.2106 5.86948 29.0885 5.86948 27.7074C5.86948 26.3264 6.99159 25.2043 8.37265 25.2043ZM4.70422 34.0948L4.79054 33.4043C4.96317 32.0664 6.08527 31.0306 7.46633 31.0306H9.32212C10.66 31.0306 11.8253 32.0232 11.9979 33.4043L12.0842 34.0948C11.0484 34.8716 9.79686 35.3895 8.4158 35.3895C6.99159 35.3895 5.69685 34.8716 4.70422 34.0948ZM16.7021 29.8653C16.7021 29.6927 16.7453 29.5201 16.7453 29.3474C16.7453 26.0674 14.8463 23.2621 12.0842 21.8811L15.8821 15.3211C17.22 16.1842 18.7737 16.7021 20.5 16.7021C22.2264 16.7021 23.78 16.1842 25.1179 15.3211L28.9158 21.8811C26.1537 23.2621 24.2548 26.0674 24.2548 29.3474C24.2548 29.5201 24.2979 29.6927 24.2979 29.8653H16.7021ZM28.959 34.0948L29.0453 33.4043C29.2179 32.0664 30.3401 31.0306 31.7211 31.0306H33.5769C34.9148 31.0306 36.0801 32.0232 36.2527 33.4043L36.339 34.0948C35.3032 34.8716 34.0516 35.3895 32.6706 35.3895C31.2464 35.3895 29.9948 34.8716 28.959 34.0948Z"
                fill="#FF7190"
              />
            </svg>

            {/* Social  Text */}
            <div className="flex flex-col items-start">
              <p className="text-lg font-bold text-[#073A4D]">Social</p>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
          {openSocail ? (
            <button
              id="openSocialBtn"
              onClick={() => setOpenSocail(!openSocail)}
            >
              <svg
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8849 1.11612C10.3967 0.627961 9.60525 0.627961 9.11709 1.11612L1.16214 9.07107C0.673986 9.55922 0.673986 10.3507 1.16214 10.8388C1.6503 11.327 2.44175 11.327 2.92991 10.8388L10.001 3.76777L17.072 10.8388C17.5602 11.327 18.3517 11.327 18.8398 10.8388C19.328 10.3507 19.328 9.55922 18.8398 9.07107L10.8849 1.11612ZM11.251 4L11.251 2L8.75098 2L8.75098 4L11.251 4Z"
                  fill="#777777"
                />
              </svg>
            </button>
          ) : (
            <button
              id="closeSocialBtn"
              onClick={() => setOpenSocail(!openSocail)}
            >
              <svg
                width="16"
                height="9"
                viewBox="0 0 16 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.30418 8.71165C7.69723 9.09963 8.33038 9.09551 8.71836 8.70245L15.0408 2.29721C15.4287 1.90415 15.4246 1.271 15.0316 0.883027C14.6385 0.495052 14.0054 0.499172 13.6174 0.892229L7.99746 6.58577L2.30392 0.96585C1.91086 0.577875 1.27771 0.581995 0.889736 0.975052C0.501761 1.36811 0.505881 2.00126 0.898938 2.38924L7.30418 8.71165ZM6.99367 6.00651L7.00669 8.00646L9.00665 7.99345L8.99363 5.99349L6.99367 6.00651Z"
                  fill="#777777"
                />
              </svg>
            </button>
          )}
        </div>
        {openSocail && (
          <div
            className={` transition-all transform duration-500  delay-200
          ease-in-out ${
            openSocail
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }  flex items-center justify-center gap-12`}
          >
            <img src="/fb-icon.svg" alt="facebook icon" />
            <img src="/insta-logo.svg" alt="instagram icon" />
            <img src="/twiiter-logo.svg" alt="twitter icon" />
            <img src="/linkedin-icon.svg" alt="facebook icon" />
          </div>
        )}
      </div>

      {/* Query  */}
      <div
        className={`w-[351px] ${
          openQuery ? "h-[620px] lg:h-[467px]" : "h-[87px] lg:h-[117px]"
        }  lg:w-[963px] flex flex-col items-center gap-4 bg-white 
      rounded-[11px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.17)] lg:shadow-[0px_5px_10px_0px_rgba(0,0,0,0.12)] 
       p-5 border-[1.4px] border-[#EFEFEF] transition-all ease-in-out duration-500 `}
      >
        <div className="w-full flex flex-row justify-between items-center gap-4">
          <div className=" flex flex-row items-center gap-6">
            {/* Query */}
            <svg
              className="w-[20px] h-[24px] lg:w-[44px] lg:h-[44px] "
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3333 11H1.66667C0.747778 11 0 11.7774 0 12.7333V22.2667C0 23.2226 0.747778 24 1.66667 24H18.3333C19.2522 24 20 23.2226 20 22.2667V12.7333C20 11.7774 19.2522 11 18.3333 11ZM16.7136 12.7333L10 16.9228L3.28639 12.7333H16.7136ZM1.66667 22.2667V13.7442L9.57111 18.6766C9.8325 18.8402 10.1642 18.8422 10.4289 18.6766L18.3333 13.7439L18.3342 22.2667H1.66667Z"
                fill="#FF7190"
              />
              <path
                d="M9.20011 8.1817V2.7924L7.36564 4.66876C7.0531 4.98844 6.54695 4.98844 6.23441 4.66876C5.92186 4.34908 5.92186 3.83137 6.23441 3.51169L9.43371 0.239047C9.74652 -0.0817249 10.2575 -0.0776334 10.5663 0.239047L13.7656 3.51141C14.0781 3.8311 14.0781 4.3488 13.7656 4.66849C13.453 4.98817 12.9469 4.98817 12.6344 4.66849L10.8002 2.7924V8.1817C10.8002 8.63368 10.4423 9 10.0001 9C9.55798 9 9.20011 8.63368 9.20011 8.1817Z"
                fill="#FF7190"
              />
            </svg>

            {/* Send Query Text */}
            <div className="flex flex-col items-start">
              <p className="text-lg font-bold text-[#073A4D]">Send Query</p>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
          {openQuery ? (
            <button
              id={"openQueryBtn"}
              onClick={() => setOpenQuery(!openQuery)}
            >
              <svg
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8849 1.11612C10.3967 0.627961 9.60525 0.627961 9.11709 1.11612L1.16214 9.07107C0.673986 9.55922 0.673986 10.3507 1.16214 10.8388C1.6503 11.327 2.44175 11.327 2.92991 10.8388L10.001 3.76777L17.072 10.8388C17.5602 11.327 18.3517 11.327 18.8398 10.8388C19.328 10.3507 19.328 9.55922 18.8398 9.07107L10.8849 1.11612ZM11.251 4L11.251 2L8.75098 2L8.75098 4L11.251 4Z"
                  fill="#777777"
                />
              </svg>
            </button>
          ) : (
            <button id="closeQueryBtn" onClick={() => setOpenQuery(!openQuery)}>
              <svg
                width="16"
                height="9"
                viewBox="0 0 16 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.30418 8.71165C7.69723 9.09963 8.33038 9.09551 8.71836 8.70245L15.0408 2.29721C15.4287 1.90415 15.4246 1.271 15.0316 0.883027C14.6385 0.495052 14.0054 0.499172 13.6174 0.892229L7.99746 6.58577L2.30392 0.96585C1.91086 0.577875 1.27771 0.581995 0.889736 0.975052C0.501761 1.36811 0.505881 2.00126 0.898938 2.38924L7.30418 8.71165ZM6.99367 6.00651L7.00669 8.00646L9.00665 7.99345L8.99363 5.99349L6.99367 6.00651Z"
                  fill="#777777"
                />
              </svg>
            </button>
          )}
        </div>
        {openQuery && (
          <div
            className={` mt-5 transition-all transform duration-1000 
          ease-in-out ${
            openQuery ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }  flex flex-col items-center justify-center gap-6`}
          >
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <div className="flex flex-col items-start justify-center">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-[#F7F7F7] border border-[#E2E2E2] rounded-md
                w-[294px] h-[32px]"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <label htmlFor="name">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="bg-[#F7F7F7] border border-[#E2E2E2] rounded-md
                w-[294px] h-[32px]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <div className="flex flex-col items-start justify-center">
                <label htmlFor="name">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="bg-[#F7F7F7] border border-[#E2E2E2] rounded-md
                w-[294px] h-[32px]"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <label htmlFor="name">Order no.</label>
                <input
                  type="text"
                  name="orderno"
                  id="orderno"
                  className="bg-[#F7F7F7] border border-[#E2E2E2] rounded-md
                w-[294px] h-[32px]"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-3 lg:flex-row lg:items-center">
              <div className="flex flex-col items-start justify-center">
                <label htmlFor="name">Your Query</label>
                <input
                  type="text"
                  name="query"
                  id="query"
                  className="bg-[#F7F7F7] border border-[#E2E2E2] rounded-md
                w-[291px] h-[109px] lg:w-[617px] lg:h-[72px]"
                />
              </div>
            </div>
            <button className="bg-[#FD2E5A] rounded-[3px] w-[191px] h-[33px]  text-white font-bold">
              Submit{" "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
