export default function Home() {
  return (

    <>
  {/* =========== Navbar Start =========== */}
  <header
    id="navbar"
    className="light fixed top-0 inset-x-0 flex items-center z-40 w-full lg:bg-transparent bg-white transition-all py-5"
  >
    <div className="container">
      <nav className="flex items-center">
        {/* Navbar Brand Logo */}
        <a href="index.html">
          <img
            src="assets/images/logo-dark.png"
            className="h-8 logo-dark"
            alt="Logo Dark"
          />
          <img
            src="assets/images/logo-light.png"
            className="h-8 logo-light"
            alt="Logo Light"
          />
        </a>
        {/* Nevigation Menu */}
        <div className="hidden lg:block ms-auto">
          <ul className="navbar-nav flex gap-x-3 items-center justify-center">
            {/* Home Page Link */}
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                Home
              </a>
            </li>
            {/* Home Page Dropdown */}
            <li className="nav-item">
              <a
                href="javascript:void(0);"
                className="nav-link after:absolute hover:after:-bottom-10 after:inset-0"
                data-fc-type="dropdown"
                data-fc-trigger="hover"
                data-fc-target="landingDropdownMenu"
                data-fc-placement="bottom"
              >
                Landing{" "}
                <i className="fa-solid fa-angle-down ms-2 align-middle" />
              </a>
              <div
                id="landingDropdownMenu"
                className="hidden opacity-0 mt-4 fc-dropdown-open:opacity-100 fc-dropdown-open:translate-y-0 translate-y-3 origin-center transition-all bg-white rounded-lg shadow-lg border p-2 w-96 fc-dropdown-open:grid grid-cols-2 gap-1.5"
              >
                <div className="nav-item">
                  <a className="nav-link" href="home-app.html">
                    <div className="flex items-center -ms-1.5">
                      <span className="bg-blue-600/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                        <svg
                          className="text-blue-600 w-6 h-6"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M8,2.5 C7.30964406,2.5 6.75,3.05964406 6.75,3.75 L6.75,20.25 C6.75,20.9403559 7.30964406,21.5 8,21.5 L16,21.5 C16.6903559,21.5 17.25,20.9403559 17.25,20.25 L17.25,3.75 C17.25,3.05964406 16.6903559,2.5 16,2.5 L8,2.5 Z"
                              id="Combined-Shape"
                              fill="currentColor"
                              opacity="0.3"
                            />
                            <path
                              d="M8,2.5 C7.30964406,2.5 6.75,3.05964406 6.75,3.75 L6.75,20.25 C6.75,20.9403559 7.30964406,21.5 8,21.5 L16,21.5 C16.6903559,21.5 17.25,20.9403559 17.25,20.25 L17.25,3.75 C17.25,3.05964406 16.6903559,2.5 16,2.5 L8,2.5 Z M8,1 L16,1 C17.5187831,1 18.75,2.23121694 18.75,3.75 L18.75,20.25 C18.75,21.7687831 17.5187831,23 16,23 L8,23 C6.48121694,23 5.25,21.7687831 5.25,20.25 L5.25,3.75 C5.25,2.23121694 6.48121694,1 8,1 Z M9.5,1.75 L14.5,1.75 C14.7761424,1.75 15,1.97385763 15,2.25 L15,3.25 C15,3.52614237 14.7761424,3.75 14.5,3.75 L9.5,3.75 C9.22385763,3.75 9,3.52614237 9,3.25 L9,2.25 C9,1.97385763 9.22385763,1.75 9.5,1.75 Z"
                              id="Combined-Shape"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </span>
                      <div className="flex-grow-1">App</div>
                    </div>
                  </a>
                </div>
                <div className="nav-item">
                  <a className="nav-link" href="home-saas.html">
                    <div className="flex items-center -ms-1.5">
                      <span className="bg-green-500/20 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                        <svg
                          className="text-green-500 w-6 h-6"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M6,8 L6,16 L18,16 L18,8 L6,8 Z M20,16 L21.381966,16 C21.7607381,16 22.1070012,16.2140024 22.2763932,16.5527864 L22.5,17 C22.6706654,17.3413307 22.5323138,17.7563856 22.190983,17.927051 C22.0950363,17.9750244 21.9892377,18 21.881966,18 L2.11803399,18 C1.73641461,18 1.42705098,17.6906364 1.42705098,17.309017 C1.42705098,17.2017453 1.45202663,17.0959467 1.5,17 L1.7236068,16.5527864 C1.89299881,16.2140024 2.23926193,16 2.61803399,16 L4,16 L4,8 C4,6.8954305 4.8954305,6 6,6 L18,6 C19.1045695,6 20,6.8954305 20,8 L20,16 Z"
                              id="Combined-Shape"
                              fill="currentColor"
                            />
                            <polygon
                              id="Combined-Shape"
                              fill="currentColor"
                              opacity="0.3"
                              points="6 8 6 16 18 16 18 8"
                            />
                          </g>
                        </svg>
                      </span>
                      <div className="flex-grow-1">Saas Modern</div>
                    </div>
                  </a>
                </div>
                <div className="nav-item">
                  <a className="nav-link" href="home-saas2.html">
                    <div className="flex items-center -ms-1.5">
                      <span className="bg-primary/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                        <svg
                          className="text-primary w-6 h-6"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <polygon
                              id="Combined-Shape"
                              fill="currentColor"
                              opacity="0.3"
                              points="6 7 6 15 18 15 18 7"
                            />
                            <path
                              d="M11,19 L11,16 C11,15.4477153 11.4477153,15 12,15 C12.5522847,15 13,15.4477153 13,16 L13,19 L14.5,19 C14.7761424,19 15,19.2238576 15,19.5 C15,19.7761424 14.7761424,20 14.5,20 L9.5,20 C9.22385763,20 9,19.7761424 9,19.5 C9,19.2238576 9.22385763,19 9.5,19 L11,19 Z"
                              id="Combined-Shape"
                              fill="currentColor"
                              opacity="0.3"
                            />
                            <path
                              d="M6,7 L6,15 L18,15 L18,7 L6,7 Z M6,5 L18,5 C19.1045695,5 20,5.8954305 20,7 L20,15 C20,16.1045695 19.1045695,17 18,17 L6,17 C4.8954305,17 4,16.1045695 4,15 L4,7 C4,5.8954305 4.8954305,5 6,5 Z"
                              id="Combined-Shape"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </span>
                      <div className="flex-grow-1">Saas Classic</div>
                    </div>
                  </a>
                </div>
                <div className="nav-item">
                  <a className="nav-link" href="home-startup.html">
                    <div className="flex items-center -ms-1.5">
                      <span className="bg-orange-600/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                        <svg
                          className="text-orange-600 w-6 h-6"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <rect
                              id="Combined-Shape"
                              fill="currentColor"
                              opacity="0.3"
                              x={2}
                              y={3}
                              width={20}
                              height={18}
                              rx={2}
                            />
                            <path
                              d="M9.9486833,13.3162278 C9.81256925,13.7245699 9.43043041,14 9,14 L5,14 C4.44771525,14 4,13.5522847 4,13 C4,12.4477153 4.44771525,12 5,12 L8.27924078,12 L10.0513167,6.68377223 C10.367686,5.73466443 11.7274983,5.78688777 11.9701425,6.75746437 L13.8145063,14.1349195 L14.6055728,12.5527864 C14.7749648,12.2140024 15.1212279,12 15.5,12 L19,12 C19.5522847,12 20,12.4477153 20,13 C20,13.5522847 19.5522847,14 19,14 L16.118034,14 L14.3944272,17.4472136 C13.9792313,18.2776054 12.7550291,18.143222 12.5298575,17.2425356 L10.8627389,10.5740611 L9.9486833,13.3162278 Z"
                              id="Path-108"
                              fill="currentColor"
                            />
                            <circle
                              id="Oval"
                              fill="currentColor"
                              opacity="0.3"
                              cx={19}
                              cy={6}
                              r={1}
                            />
                          </g>
                        </svg>
                      </span>
                      <div className="flex-grow-1">Startup</div>
                    </div>
                  </a>
                </div>
                <div className="nav-item">
                  <a className="nav-link" href="home-software.html">
                    <div className="flex items-center -ms-1.5">
                      <span className="bg-amber-400/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                        <svg
                          className="text-amber-400 w-6 h-6"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M4,9.67471899 L10.880262,13.6470401 C10.9543486,13.689814 11.0320333,13.7207107 11.1111111,13.740321 L11.1111111,21.4444444 L4.49070127,17.526473 C4.18655139,17.3464765 4,17.0193034 4,16.6658832 L4,9.67471899 Z M20,9.56911707 L20,16.6658832 C20,17.0193034 19.8134486,17.3464765 19.5092987,17.526473 L12.8888889,21.4444444 L12.8888889,13.6728275 C12.9050191,13.6647696 12.9210067,13.6561758 12.9368301,13.6470401 L20,9.56911707 Z"
                              id="Combined-Shape"
                              fill="currentColor"
                            />
                            <path
                              d="M4.21611835,7.74669402 C4.30015839,7.64056877 4.40623188,7.55087574 4.5299008,7.48500698 L11.5299008,3.75665466 C11.8237589,3.60013944 12.1762411,3.60013944 12.4700992,3.75665466 L19.4700992,7.48500698 C19.5654307,7.53578262 19.6503066,7.60071528 19.7226939,7.67641889 L12.0479413,12.1074394 C11.9974761,12.1365754 11.9509488,12.1699127 11.9085461,12.2067543 C11.8661433,12.1699127 11.819616,12.1365754 11.7691509,12.1074394 L4.21611835,7.74669402 Z"
                              id="Path"
                              fill="currentColor"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                      <div className="flex-grow-1">Software</div>
                    </div>
                  </a>
                </div>
                <div className="nav-item">
                  <a className="nav-link" href="home-agency.html">
                    <div className="flex items-center -ms-1.5">
                      <span className="bg-black/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                        <svg
                          className="text-black w-6 h-6"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M12,10.9996338 C12.8356605,10.3719448 13.8743941,10 15,10 C17.7614237,10 20,12.2385763 20,15 C20,17.7614237 17.7614237,20 15,20 C13.8743941,20 12.8356605,19.6280552 12,19.0003662 C11.1643395,19.6280552 10.1256059,20 9,20 C6.23857625,20 4,17.7614237 4,15 C4,12.2385763 6.23857625,10 9,10 C10.1256059,10 11.1643395,10.3719448 12,10.9996338 Z M13.3336047,12.504354 C13.757474,13.2388026 14,14.0910788 14,15 C14,15.9088933 13.7574889,16.761145 13.3336438,17.4955783 C13.8188886,17.8206693 14.3938466,18 15,18 C16.6568542,18 18,16.6568542 18,15 C18,13.3431458 16.6568542,12 15,12 C14.3930587,12 13.8175971,12.18044 13.3336047,12.504354 Z"
                              id="Combined-Shape"
                              fill="currentColor"
                              opacity="0.3"
                            />
                            <circle
                              id="Oval-14"
                              fill="currentColor"
                              cx={12}
                              cy={9}
                              r={5}
                            />
                          </g>
                        </svg>
                      </span>
                      <div className="flex-grow-1">Agency</div>
                    </div>
                  </a>
                </div>
                <div className="nav-item">
                  <a className="nav-link" href="home-coworking.html">
                    <div className="flex items-center -ms-1.5">
                      <span className="bg-primary/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                        <svg
                          className="text-primary w-6 h-6"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M3.95709826,8.41510662 L11.47855,3.81866389 C11.7986624,3.62303967 12.2013376,3.62303967 12.52145,3.81866389 L20.0429,8.41510557 C20.6374094,8.77841684 21,9.42493654 21,10.1216692 L21,19.0000642 C21,20.1046337 20.1045695,21.0000642 19,21.0000642 L4.99998155,21.0000673 C3.89541205,21.0000673 2.99998155,20.1046368 2.99998155,19.0000673 L2.99999828,10.1216672 C2.99999935,9.42493561 3.36258984,8.77841732 3.95709826,8.41510662 Z M10,13 C9.44771525,13 9,13.4477153 9,14 L9,17 C9,17.5522847 9.44771525,18 10,18 L14,18 C14.5522847,18 15,17.5522847 15,17 L15,14 C15,13.4477153 14.5522847,13 14,13 L10,13 Z"
                              id="Combined-Shape"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </span>
                      <div className="flex-grow-1">Coworking</div>
                    </div>
                  </a>
                </div>
                <div className="nav-item">
                  <a className="nav-link" href="home-crypto.html">
                    <div className="flex items-center -ms-1.5">
                      <span className="bg-orange-600/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                        <svg
                          className="text-orange-600 w-6 h-6"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <rect
                              id="Rectangle"
                              fill="currentColor"
                              opacity="0.3"
                              x={11}
                              y={2}
                              width={2}
                              height={5}
                              rx={1}
                            />
                            <rect
                              id="Rectangle-Copy-3"
                              fill="currentColor"
                              opacity="0.3"
                              x={11}
                              y={16}
                              width={2}
                              height={5}
                              rx={1}
                            />
                            <path
                              d="M17.875,14.086 C17.875,14.8206703 17.7293348,15.4381642 17.438,15.9385 C17.1466652,16.4388358 16.7603357,16.8409985 16.279,17.145 C15.7976643,17.4490015 15.2498364,17.6674993 14.6355,17.8005 C14.0211636,17.9335007 13.3910032,18 12.745,18 L7,18 L7,4.548 L12.745,4.548 C13.2643359,4.548 13.7963306,4.60183279 14.341,4.7095 C14.8856694,4.8171672 15.3796644,5.00083204 15.823,5.2605 C16.2663356,5.52016796 16.6273319,5.87166445 16.906,6.315 C17.1846681,6.75833555 17.324,7.32199658 17.324,8.006 C17.324,8.75333707 17.1213354,9.3708309 16.716,9.8585 C16.3106646,10.3461691 15.77867,10.6976656 15.12,10.913 C15.5000019,11.0143337 15.8578317,11.1314991 16.1935,11.3025 C16.5291683,11.4735009 16.8204988,11.6919987 17.0675,11.958 C17.3145012,12.2240013 17.5108326,12.5343316 17.6565,12.889 C17.8021674,13.2436684 17.875,13.6426645 17.875,14.086 Z M14.189,8.443 C14.189,7.98699772 14.0148351,7.65450105 13.6665,7.4455 C13.3181649,7.23649896 12.8020034,7.132 12.118,7.132 L10.522,7.132 L10.522,9.906 L12.27,9.906 C12.878003,9.906 13.3498317,9.78250124 13.6855,9.5355 C14.0211683,9.28849877 14.189,8.92433574 14.189,8.443 Z M14.626,13.782 C14.626,13.2246639 14.4170021,12.8383344 13.999,12.623 C13.5809979,12.4076656 13.0236701,12.3 12.327,12.3 L10.522,12.3 L10.522,15.378 L12.346,15.378 C12.5993346,15.378 12.8621653,15.3558336 13.1345,15.3115 C13.4068347,15.2671664 13.6538322,15.1880006 13.8755,15.074 C14.0971678,14.9599994 14.277666,14.798501 14.417,14.5895 C14.556334,14.380499 14.626,14.111335 14.626,13.782 Z"
                              id="Combined-Shape"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </span>
                      <div className="flex-grow-1">Crypto</div>
                    </div>
                  </a>
                </div>
                <div className="nav-item">
                  <a className="nav-link" href="home-marketing.html">
                    <div className="flex items-center -ms-1.5">
                      <span className="bg-blue-500/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                        <svg
                          className="text-blue-500 w-6 h-6"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M12.7037037,14 L15.6666667,10 L13.4444444,10 L13.4444444,6 L9,12 L11.2222222,12 L11.2222222,14 L6,14 C5.44771525,14 5,13.5522847 5,13 L5,3 C5,2.44771525 5.44771525,2 6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,13 C19,13.5522847 18.5522847,14 18,14 L12.7037037,14 Z"
                              id="Combined-Shape"
                              fill="currentColor"
                              opacity="0.3"
                            />
                            <path
                              d="M9.80428954,10.9142091 L9,12 L11.2222222,12 L11.2222222,16 L15.6666667,10 L15.4615385,10 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 L9.80428954,10.9142091 Z"
                              id="Combined-Shape"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </span>
                      <div className="flex-grow-1">Marketing</div>
                    </div>
                  </a>
                </div>
                <div className="nav-item">
                  <a className="nav-link" href="home-portfolio.html">
                    <div className="flex items-center -ms-1.5">
                      <span className="bg-red-500/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                        <svg
                          className="text-red-500 w-6 h-6"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
                            <path
                              d="M6,5 L18,5 C19.6568542,5 21,6.34314575 21,8 L21,17 C21,18.6568542 19.6568542,20 18,20 L6,20 C4.34314575,20 3,18.6568542 3,17 L3,8 C3,6.34314575 4.34314575,5 6,5 Z M5,17 L14,17 L9.5,11 L5,17 Z M16,14 C17.6568542,14 19,12.6568542 19,11 C19,9.34314575 17.6568542,8 16,8 C14.3431458,8 13,9.34314575 13,11 C13,12.6568542 14.3431458,14 16,14 Z"
                              id="Rectangle-25"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </span>
                      <div className="flex-grow-1">Portfolio</div>
                    </div>
                  </a>
                </div>
              </div>
            </li>
            {/* Inner Page Dropdown */}
            <li className="nav-item">
              <a
                href="javascript:void(0);"
                className="nav-link after:absolute hover:after:-bottom-10 after:inset-0"
                data-fc-trigger="hover"
                data-fc-target="innerPageDropdownMenu"
                data-fc-type="dropdown"
                data-fc-placement="bottom"
              >
                Pages <i className="fa-solid fa-angle-down ms-2 align-middle" />
              </a>
              <div
                id="innerPageDropdownMenu"
                className="hidden opacity-0 mt-4 fc-dropdown-open:opacity-100 fc-dropdown-open:translate-y-0 translate-y-3 origin-center transition-all bg-white rounded-lg shadow-lg border p-2 w-48 space-y-1.5"
              >
                {/* Dropdown item */}
                <div className="nav-item">
                  <a
                    className="nav-link after:absolute after:inset-0 after:-end-10"
                    data-fc-offset={8}
                    data-fc-placement="right-start"
                    data-fc-trigger="hover"
                    data-fc-type="dropdown"
                    type="button"
                  >
                    Account{" "}
                    <i className="fa-solid fa-angle-right ms-auto align-middle" />
                  </a>
                  <div className="ms-2 hidden w-48 opacity-0 fc-dropdown-open:opacity-100 fc-dropdown-open:translate-y-0 translate-y-3 origin-center transition-all bg-white rounded-lg shadow-lg border p-2 space-y-1.5">
                    <div className="nav-item">
                      <a className="nav-link" href="account-dashboard.html">
                        Dashboard
                      </a>
                    </div>
                    <div className="nav-item">
                      <a className="nav-link" href="account-settings.html">
                        Settings
                      </a>
                    </div>
                    <div className="nav-item">
                      <a className="nav-link" href="account-login.html">
                        Login
                      </a>
                    </div>
                    <div className="nav-item">
                      <a className="nav-link" href="account-signup.html">
                        Sign Up
                      </a>
                    </div>
                    <div className="nav-item">
                      <a
                        className="nav-link"
                        href="account-forget-password.html"
                      >
                        Forget Password
                      </a>
                    </div>
                    <div className="nav-item">
                      <a className="nav-link" href="account-confirm.html">
                        Confirm Account
                      </a>
                    </div>
                  </div>
                </div>
                {/* Dropdown item */}
                <div className="nav-item">
                  <a
                    className="nav-link after:absolute after:inset-0 after:-end-10"
                    data-fc-offset={8}
                    data-fc-placement="right-start"
                    data-fc-trigger="hover"
                    data-fc-type="dropdown"
                    type="button"
                  >
                    Blog{" "}
                    <i className="fa-solid fa-angle-right ms-auto align-middle" />
                  </a>
                  <div className="ms-2 hidden w-48 opacity-0 fc-dropdown-open:opacity-100 fc-dropdown-open:translate-y-0 translate-y-3 origin-center transition-all bg-white rounded-lg shadow-lg border p-2 space-y-1.5">
                    <div className="nav-item">
                      <a className="nav-link" href="blog.html">
                        Blog
                      </a>
                    </div>
                    <div className="nav-item">
                      <a className="nav-link" href="blog-post.html">
                        Blog Post
                      </a>
                    </div>
                  </div>
                </div>
                <hr className="-mx-2 my-2" />
                {/* Dropdown item */}
                <div className="nav-item">
                  <a className="nav-link" href="company.html">
                    Company
                  </a>
                </div>
                {/* Dropdown item */}
                <div className="nav-item">
                  <a className="nav-link" href="career.html">
                    Career
                  </a>
                </div>
                {/* Dropdown item */}
                <div className="nav-item">
                  <a className="nav-link" href="pricing.html">
                    Pricing
                  </a>
                </div>
                {/* Dropdown item */}
                <div className="nav-item">
                  <a
                    className="nav-link after:absolute after:inset-0 after:-end-10"
                    data-fc-offset={8}
                    data-fc-placement="right-start"
                    data-fc-trigger="hover"
                    data-fc-type="dropdown"
                    type="button"
                  >
                    Portfolio{" "}
                    <i className="fa-solid fa-angle-right ms-auto align-middle" />
                  </a>
                  <div className="ms-2 hidden w-48 opacity-0 fc-dropdown-open:opacity-100 fc-dropdown-open:translate-y-0 translate-y-3 origin-center transition-all bg-white rounded-lg shadow-lg border p-2 space-y-1.5">
                    <div className="nav-item">
                      <a className="nav-link" href="portfolio-grid.html">
                        Portfolio Grid
                      </a>
                    </div>
                    <div className="nav-item">
                      <a className="nav-link" href="portfolio-masonry.html">
                        Portfolio Masonry
                      </a>
                    </div>
                    <div className="nav-item">
                      <a className="nav-link" href="portfolio-item.html">
                        Portfolio Item
                      </a>
                    </div>
                  </div>
                </div>
                <hr className="-mx-2 my-2" />
                {/* Dropdown item */}
                <div className="nav-item">
                  <a className="nav-link" href="help.html">
                    Help
                  </a>
                </div>
              </div>
            </li>
            {/* Contact Page Link */}
            <li className="nav-item">
              <a className="nav-link" href="contact.html">
                Contact us
              </a>
            </li>
          </ul>
        </div>
        {/* Download Button */}
        <div className="hidden lg:flex items-center ms-3">
          <a
            href="https://1.envato.market/prompt-tailwind"
            target="_blank"
            className="bg-primary text-white px-4 py-2 rounded inline-flex items-center text-sm"
          >
            Download
          </a>
        </div>
        {/* Moblie Menu Toggle Button (Offcanvas Button) */}
        <div className="lg:hidden flex items-center ms-auto px-2.5">
          <button
            type="button"
            data-fc-target="mobileMenu"
            data-fc-type="offcanvas"
          >
            <i className="fa-solid fa-bars text-2xl text-gray-500" />
          </button>
        </div>
      </nav>
    </div>
  </header>
  {/* =========== Navbar End =========== */}
  
  {/* =========== Mobile Menu Start (Offcanvas) =========== */}
  <div
    id="mobileMenu"
    className="fc-offcanvas-open:translate-x-0 translate-x-full fixed top-0 end-0 transition-all duration-200 transform h-full w-full max-w-md z-50 bg-white border-s hidden"
  >
    <div className="flex flex-col h-full divide-y-2 divide-gray-200">
      {/* Mobile Menu Topbar Logo (Header) */}
      <div className="p-6 flex items-center justify-between">
        <a href="index.html">
          <img src="assets/images/logo-dark.png" className="h-8" alt="Logo" />
        </a>
        <button data-fc-dismiss="" className="flex items-center px-2">
          <i className="fa-solid fa-xmark text-xl" />
        </button>
      </div>
      {/* Mobile Menu Link List */}
      <div className="p-6 overflow-scroll h-full">
        <ul className="navbar-nav flex flex-col gap-2" data-fc-type="accordion">
          {/* Home Page Link */}
          <li className="nav-item">
            <a href="index.html" className="nav-link">
              Home
            </a>
          </li>
          {/* Landing Page */}
          <li className="nav-item">
            <a
              href="javascript:void(0)"
              data-fc-type="collapse"
              className="nav-link"
            >
              Landing{" "}
              <i className="fa-solid fa-angle-down ms-auto align-middle transition-all fc-collapse-open:rotate-180" />
            </a>
            <ul className="hidden overflow-hidden transition-[height] duration-300 space-y-2">
              <li className="nav-item mt-2">
                <a className="nav-link" href="home-app.html">
                  App
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="home-saas.html">
                  Saas Modern
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="home-saas2.html">
                  Saas Classic
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="home-startup.html">
                  Startup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="home-software.html">
                  Software
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="home-agency.html">
                  Agency
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="home-coworking.html">
                  Coworking
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="home-crypto.html">
                  Crypto
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="home-marketing.html">
                  Marketing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="home-portfolio.html">
                  Portfolio
                </a>
              </li>
            </ul>
          </li>
          {/* Inner Page */}
          <li className="nav-item">
            <a
              href="javascript:void(0)"
              data-fc-type="collapse"
              className="nav-link"
            >
              Pages{" "}
              <i className="fa-solid fa-angle-down ms-auto align-middle transition-all fc-collapse-open:rotate-180" />
            </a>
            <ul className="hidden overflow-hidden transition-[height] duration-300 space-y-2">
              <li className="nav-item mt-2">
                <a className="nav-link" href="company.html">
                  Company
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="career.html">
                  Career
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pricing.html">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="help.html">
                  Help
                </a>
              </li>
            </ul>
          </li>
          {/* Blog Page */}
          <li className="nav-item">
            <a
              href="javascript:void(0)"
              data-fc-type="collapse"
              className="nav-link"
            >
              Blog Page{" "}
              <i className="fa-solid fa-angle-down ms-auto align-middle transition-all fc-collapse-open:rotate-180" />
            </a>
            <ul className="hidden overflow-hidden transition-[height] duration-300 space-y-2">
              <li className="nav-item mt-2">
                <a className="nav-link" href="blog.html">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="blog-post.html">
                  Blog Post
                </a>
              </li>
            </ul>
          </li>
          {/* Portfolio Page */}
          <li className="nav-item">
            <a
              href="javascript:void(0)"
              data-fc-type="collapse"
              className="nav-link"
            >
              Portfolio{" "}
              <i className="fa-solid fa-angle-down ms-auto align-middle transition-all fc-collapse-open:rotate-180" />
            </a>
            <ul className="hidden overflow-hidden transition-[height] duration-300 space-y-2">
              <li className="nav-item mt-2">
                <a className="nav-link" href="portfolio-grid.html">
                  Portfolio Grid
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="portfolio-masonry.html">
                  Portfolio Masonry
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="portfolio-item.html">
                  Portfolio Item
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="account-confirm.html">
                  Confirm Account
                </a>
              </li>
            </ul>
          </li>
          {/* Auth Page */}
          <li className="nav-item">
            <a
              href="javascript:void(0)"
              data-fc-type="collapse"
              className="nav-link"
            >
              Account{" "}
              <i className="fa-solid fa-angle-down ms-auto align-middle transition-all fc-collapse-open:rotate-180" />
            </a>
            <ul className="hidden overflow-hidden transition-[height] duration-300 space-y-2">
              <li className="nav-item mt-2">
                <a className="nav-link" href="account-login.html">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="account-signup.html">
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="account-forget-password.html">
                  Forget Password
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="account-confirm.html">
                  Confirm Account
                </a>
              </li>
            </ul>
          </li>
          {/* Contact Page Link */}
          <li className="nav-item">
            <a className="nav-link" href="contact.html">
              Contact us
            </a>
          </li>
        </ul>
      </div>
      {/* Mobile Menu Download Button (Footer) */}
      <div className="p-6 flex items-center justify-center">
        <a
          href="https://1.envato.market/prompt-tailwind"
          target="_blank"
          className="bg-primary w-full text-white p-3 rounded flex items-center justify-center text-sm"
        >
          Download
        </a>
      </div>
    </div>
  </div>
  {/* =========== Mobile Menu End =========== */}
  {/* =========== Hero Section Start =========== */}
  <section className="bg-gradient-to-t from-slate-500/10 relative">
    <section className="relative pt-44 pb-36">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-center sm:text-start">
              <h1 className="text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold mb-7">
                The best way to
                <span className="relative z-0 after:bg-green-500/50 after:-z-10 after:absolute md:after:h-6 after:h-4 after:w-full after:bottom-0 after:end-0">
                  showcase
                </span>{" "}
                your saas
              </h1>
              <p className="sm:text-lg text-gray-500">
                Make your saas application stand out with high-quality landing
                page designed and developed by professional
              </p>
              <div className="flex gap-3 mt-16">
                <input
                  type="email"
                  className="inline-block text-sm border border-slate-300 focus:ring-0 rounded shadow-lg sm:shadow-none bg-white w-full py-3 "
                  id="Email"
                  aria-describedby="emailHelp"
                  placeholder="Your Email"
                />
                <button
                  htmlFor="Email"
                  className="bg-primary text-white rounded-lg text-sm font-semibold flex-none hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-3"
                >
                  Sign Up
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-5 mt-5">
                <div className="flex items-center gap-2">
                  <svg
                    className="stroke-green-500 stroke-2 w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <p className="text-sm text-gray-700">Free 14-day Demo</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="stroke-green-500 stroke-2 w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <p className="text-sm text-gray-700">No credit card needed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="hidden sm:block">
                <div className="before:w-24 before:h-24 before:absolute before:-bottom-8 before:-start-8" />
                <div className="after:w-24 after:h-24 after:absolute after:-top-10 after:end-10 2xl:after:end-0 after:rotate-45" />
              </div>
              <div
                id="swiper_one"
                className="swiper border-[6px] border-white bg-white 2xl:w-[140%]"
                data-aos="fade-left"
                data-aos-duration={1000}
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <a
                        href="#"
                        className="sm:h-14 h-10 sm:w-14 w-10 rounded-full bg-green-500 flex items-center justify-center"
                      >
                        <svg
                          className="h-5 w-5 fill-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.1628 6.83709C19.3876 9.02928 21 10.1254 21 12.0001C21 13.8748 19.3876 14.9709 16.1628 17.1631C15.2726 17.7682 14.3897 18.338 13.5783 18.8128C12.8665 19.2293 12.0604 19.6602 11.2258 20.0831C8.00859 21.7134 6.39999 22.5286 4.95724 21.6261C3.5145 20.7236 3.38338 18.8342 3.12114 15.0555C3.04698 13.9868 3 12.9392 3 12.0001C3 11.0609 3.04698 10.0133 3.12114 8.9447C3.38338 5.16597 3.5145 3.2766 4.95725 2.37408C6.39999 1.47155 8.00859 2.28672 11.2258 3.91706C12.0604 4.34 12.8665 4.77085 13.5783 5.18738C14.3897 5.66216 15.2726 6.23193 16.1628 6.83709Z" />
                        </svg>
                      </a>
                    </div>
                    <img
                      src="assets/images/hero/saas1.png"
                      alt="saas1"
                      className="w-full h-full rounded-md"
                    />
                  </div>
                  <div className="swiper-slide">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <a
                        href="#"
                        className="sm:h-14 h-10 sm:w-14 w-10 rounded-full bg-green-500 flex items-center justify-center"
                      >
                        <svg
                          className="h-5 w-5 fill-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.1628 6.83709C19.3876 9.02928 21 10.1254 21 12.0001C21 13.8748 19.3876 14.9709 16.1628 17.1631C15.2726 17.7682 14.3897 18.338 13.5783 18.8128C12.8665 19.2293 12.0604 19.6602 11.2258 20.0831C8.00859 21.7134 6.39999 22.5286 4.95724 21.6261C3.5145 20.7236 3.38338 18.8342 3.12114 15.0555C3.04698 13.9868 3 12.9392 3 12.0001C3 11.0609 3.04698 10.0133 3.12114 8.9447C3.38338 5.16597 3.5145 3.2766 4.95725 2.37408C6.39999 1.47155 8.00859 2.28672 11.2258 3.91706C12.0604 4.34 12.8665 4.77085 13.5783 5.18738C14.3897 5.66216 15.2726 6.23193 16.1628 6.83709Z" />
                        </svg>
                      </a>
                    </div>
                    <img
                      src="assets/images/hero/saas2.png"
                      alt="saas2"
                      className="w-full h-full rounded-md"
                    />
                  </div>
                  <div className="swiper-slide">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <a
                        href="#"
                        className="sm:h-14 h-10 sm:w-14 w-10 rounded-full bg-green-500 flex items-center justify-center"
                      >
                        <svg
                          className="h-5 w-5 fill-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.1628 6.83709C19.3876 9.02928 21 10.1254 21 12.0001C21 13.8748 19.3876 14.9709 16.1628 17.1631C15.2726 17.7682 14.3897 18.338 13.5783 18.8128C12.8665 19.2293 12.0604 19.6602 11.2258 20.0831C8.00859 21.7134 6.39999 22.5286 4.95724 21.6261C3.5145 20.7236 3.38338 18.8342 3.12114 15.0555C3.04698 13.9868 3 12.9392 3 12.0001C3 11.0609 3.04698 10.0133 3.12114 8.9447C3.38338 5.16597 3.5145 3.2766 4.95725 2.37408C6.39999 1.47155 8.00859 2.28672 11.2258 3.91706C12.0604 4.34 12.8665 4.77085 13.5783 5.18738C14.3897 5.66216 15.2726 6.23193 16.1628 6.83709Z" />
                        </svg>
                      </a>
                    </div>
                    <img
                      src="assets/images/hero/saas3.png"
                      alt="saas3"
                      className="w-full h-full rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="absolute bottom-0 inset-x-0 hidden sm:block">
      <img
        src="assets/images/shapes/white-wave.svg"
        alt="white-wave-svg"
        className="w-full -scale-x-100 -scale-y-100"
      />
    </div>
  </section>
  {/* =========== Hero Section End =========== */}
  {/* =========== feature Section Start =========== */}
  <section className="overflow-hidden">
    <div className="xl:py-24 py-16">
      <div className="container">
        <div className="text-center">
          <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
            Features
          </span>
          <h1 className="text-3xl/tight font-medium mt-3 mb-4">
            Better Management. Better Performance
          </h1>
          <p className="text-gray-500">
            Start working with <span className="text-primary">Prompt</span> to
            manage your workforce better
          </p>
        </div>
        <div className="xl:pt-16 xl:pb-28 py-16">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
            <div className="relative">
              <div className="hidden sm:block">
                <div className="after:w-20 after:h-20 after:absolute after:-top-8 after:-start-8 2xl:after:end-0" />
                <div className="before:w-20 before:h-20 before:absolute before:-bottom-8 before:-end-8" />
              </div>
              <img
                src="assets/images/hero/saas1.png"
                alt="saas1"
                data-aos="fade-right"
                data-aos-duration={400}
              />
            </div>
            <div className="lg:ms-24">
              <div
                data-fc-type="accordion"
                data-aos="fade-up"
                data-aos-duration={500}
              >
                {/* 1 */}
                <button
                  className="pt-2 inline-flex items-center gap-x-4 w-full font-medium text-left text-gray-800 transition-all hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                  data-fc-type="collapse"
                >
                  <div className="bg-blue-500/10 rounded-lg flex items-center justify-center h-12 w-12">
                    <svg
                      className="h-6 w-6 text-blue-500"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
                        <path
                          d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                          id="Combined-Shape"
                          fill="currentColor"
                          opacity="0.3"
                        />
                        <path
                          d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                          id="Combined-Shape"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </div>
                  <h1 className="font-medium mb-4 mt-2">
                    Improve Employee Experience
                  </h1>
                </button>
                <div className="w-full overflow-hidden duration-300 ps-16">
                  <p className="text-gray-700 dark:text-gray-300">
                    Before we dive into why companies must invest in employee
                    experience (EX), it’s important to understand what this
                    concept entails.
                  </p>
                  <div className="mt-7 flex items-center">
                    <a href="#" className="text-primary">
                      Learn more <i className="fa-solid fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
                <div className="border-b my-6" />
                {/* 2 */}
                <button
                  className="pt-2 inline-flex items-center gap-x-4 w-full font-medium text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                  data-fc-type="collapse"
                >
                  <div className="bg-green-500/10 rounded-lg flex items-center justify-center h-12 w-12">
                    <svg
                      className="h-6 w-6 text-green-500"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
                        <path
                          d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                          id="Combined-Shape"
                          fill="currentColor"
                          opacity="0.3"
                        />
                        <path
                          d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                          id="Mask-Copy"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </div>
                  <h1 className="font-medium mb-4 mt-2">
                    Hiring &amp; Onboarding
                  </h1>
                </button>
                <div className="hidden w-full overflow-hidden duration-300 ps-16">
                  <p className="text-gray-700 dark:text-gray-300">
                    Post your job, interview candidates and make offers, all on
                    Prompt. Start hiring today.
                  </p>
                  <div className="mt-7 flex items-center">
                    <a href="#" className="text-primary">
                      Learn more <i className="fa-solid fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
                <div className="border-b my-6" />
                {/* 3 */}
                <button
                  className="pt-2 inline-flex items-center gap-x-4 w-full font-medium text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                  data-fc-type="collapse"
                >
                  <div className="bg-orange-500/10 rounded-lg flex items-center justify-center h-12 w-12">
                    <svg
                      className="h-6 w-6 text-orange-500"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect id="bound" x={0} y={0} width={24} height={24} />
                        <rect
                          id="Rectangle-62-Copy"
                          fill="currentColor"
                          opacity="0.3"
                          x={7}
                          y={4}
                          width={3}
                          height={13}
                          rx="1.5"
                        />
                        <rect
                          id="Rectangle-62-Copy-2"
                          fill="currentColor"
                          opacity="0.3"
                          x={12}
                          y={9}
                          width={3}
                          height={8}
                          rx="1.5"
                        />
                        <path
                          d="M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z"
                          id="Path-95"
                          fill="currentColor"
                        />
                        <rect
                          id="Rectangle-62-Copy-4"
                          fill="currentColor"
                          opacity="0.3"
                          x={17}
                          y={11}
                          width={3}
                          height={6}
                          rx="1.5"
                        />
                      </g>
                    </svg>
                  </div>
                  <h1 className="font-medium mb-4 mt-2">
                    People Data &amp; Analytics
                  </h1>
                </button>
                <div className="hidden w-full overflow-hidden duration-300 ps-16">
                  <p className="text-gray-700 dark:text-gray-300">
                    Finding committed employees is one of public and private
                    organizations’ top priorities.
                  </p>
                  <div className="mt-7 flex items-center">
                    <a href="#" className="text-primary">
                      Learn more <i className="fa-solid fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid lg:grid-cols-2 grid-cols-1n gap-6 items-center">
            <div
              className="order-2 lg:order-1 2xl:w-9/12"
              data-aos="fade-up"
              data-aos-duration={500}
            >
              <div className="h-12 w-12 bg-primary/10 flex items-center justify-center rounded-lg">
                <svg
                  className="h-7 w-7 text-primary"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <rect id="bound" x={0} y={0} width={24} height={24} />
                    <path
                      d="M10.8226874,8.36941377 L12.7324324,9.82298668 C13.4112512,8.93113547 14.4592942,8.4 15.6,8.4 C17.5882251,8.4 19.2,10.0117749 19.2,12 C19.2,13.9882251 17.5882251,15.6 15.6,15.6 C14.5814697,15.6 13.6363389,15.1780547 12.9574041,14.4447676 L11.1963369,16.075302 C12.2923051,17.2590082 13.8596186,18 15.6,18 C18.9137085,18 21.6,15.3137085 21.6,12 C21.6,8.6862915 18.9137085,6 15.6,6 C13.6507856,6 11.9186648,6.9294879 10.8226874,8.36941377 Z"
                      id="Combined-Shape"
                      fill="currentColor"
                      opacity="0.3"
                    />
                    <path
                      d="M8.4,18 C5.0862915,18 2.4,15.3137085 2.4,12 C2.4,8.6862915 5.0862915,6 8.4,6 C11.7137085,6 14.4,8.6862915 14.4,12 C14.4,15.3137085 11.7137085,18 8.4,18 Z"
                      id="Oval-14-Copy"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </div>
              <h1 className="text-3xl/tight font-medium mt-6 mb-4">
                Smart Payroll. Paying your people couldn't be easier
              </h1>
              <p className="text-gray-500">
                You can modify your pages with drag-dropping , can import demos
                with just ” One Click” and can modify theme setting easy-to-use
                options panel.
              </p>
              <div className="flex items-center mt-12">
                <a href="#" className="text-primary">
                  Learn more <i className="fa-solid fa-arrow-right ms-2" />{" "}
                </a>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="hidden sm:block">
                <div className="after:w-20 after:h-20 after:absolute after:-top-8 after:-end-8 2xl:after:-end-8" />
                <div className="before:w-20 before:h-20 before:absolute before:-bottom-8 before:-start-8" />
              </div>
              <img
                src="assets/images/hero/saas2.png"
                alt="saas2"
                data-aos="fade-left"
                data-aos-duration={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="xl:py-24 py-16">
      <div className="container" data-aos="fade-up" data-aos-duration={600}>
        <div className="text-center">
          <h1 className="text-2xl font-medium">
            Any many more powerful features
          </h1>
        </div>
        <div className="py-16">
          <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
            <div className="order-1">
              <div className="flex flex-col gap-5">
                <p className="flex items-center gap-3">
                  {" "}
                  <i className="fa-solid fa-check text-green-500 text-xl" />{" "}
                  Hire and Retain Top Talent
                </p>
                <p className="flex items-center gap-3">
                  {" "}
                  <i className="fa-solid fa-check text-green-500 text-xl" />{" "}
                  Team Management
                </p>
              </div>
            </div>
            <div className="order-3 xl:order-2">
              <div className="flex flex-col gap-5">
                <p className="flex items-center gap-3">
                  {" "}
                  <i className="fa-solid fa-check text-green-500 text-xl" />{" "}
                  Stay Compliant
                </p>
                <p className="flex items-center gap-3">
                  {" "}
                  <i className="fa-solid fa-check text-green-500 text-xl" />{" "}
                  Improve Productivity
                </p>
                <p className="flex items-center gap-3">
                  {" "}
                  <i className="fa-solid fa-check text-green-500 text-xl" />{" "}
                  Improve Experience
                </p>
              </div>
            </div>
            <div className="order-4 xl:order-3">
              <div className="flex flex-col gap-5">
                <p className="flex items-center gap-3">
                  {" "}
                  <i className="fa-solid fa-check text-green-500 text-xl" />{" "}
                  Self-service Time Tracking
                </p>
                <p className="flex items-center gap-3">
                  {" "}
                  <i className="fa-solid fa-check text-green-500 text-xl" />{" "}
                  Performance Management
                </p>
                <p className="flex items-center gap-3">
                  {" "}
                  <i className="fa-solid fa-check text-green-500 text-xl" />{" "}
                  Expert HR
                </p>
              </div>
            </div>
            <div className="order-2 xl:order-4">
              <div className="flex flex-col gap-5">
                <p className="flex items-center gap-3">
                  {" "}
                  <i className="fa-solid fa-check text-green-500 text-xl" /> New
                  Hire Checklist
                </p>
                <p className="flex items-center gap-3">
                  {" "}
                  <i className="fa-solid fa-check text-green-500 text-xl" /> Tax
                  Calculator
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="flex items-center justify-center mx-auto">
          <a
            href="#"
            className="bg-primary text-white rounded-lg text-sm font-semibold flex-none hover:shadow-lg  hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-6 py-3"
          >
            Sign Up Now <i className="fa-solid fa-arrow-right ms-2" />{" "}
          </a>
        </button>
      </div>
    </div>
  </section>
  {/* =========== feature Section end =========== */}
  {/* =========== clients Section Start =========== */}
  <section className="bg-gradient-to-r from-gray-100/70 to-gray-100 relative xl:py-24 py-16">
    <div className="absolute top-0 inset-x-0 hidden sm:block">
      <img
        src="assets/images/shapes/white-wave.svg"
        alt="svg"
        className="w-full -scale-x-100"
      />
    </div>
    <div className="py-5">
      <div className="container" data-aos="fade-up" data-aos-duration={300}>
        <div className="text-center">
          <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
            Clients
          </span>
          <h1 className="text-3xl/tight font-medium mt-3 mb-4">
            The smart people management you need
          </h1>
          <p className="text-gray-500">
            21,000+ organizations trust{" "}
            <span className="text-primary">Prompt</span> to drive perfomance
            &amp; engagement
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center lg:gap-24 gap-10 mt-14">
          <div>
            <img src="assets/images/brands/amazon.svg" className="h-8" />
          </div>
          <div>
            <img src="assets/images/brands/google.svg" className="h-8" />
          </div>
          <div>
            <img src="assets/images/brands/paypal.svg" className="h-8" />
          </div>
          <div>
            <img src="assets/images/brands/spotify.svg" className="h-8" />
          </div>
          <div>
            <img src="assets/images/brands/shopify.svg" className="h-8" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* =========== clients Section end =========== */}
  {/* =========== testimonial Section Start =========== */}
  <section className="py-16 sm:py-24 overflow-x-hidden">
    <div className="container" data-aos="fade-up" data-aos-duration={600}>
      <div className="grid xl:grid-cols-4 grid-cols-3 gap-6">
        <div className="col-span-3 lg:col-span-1">
          <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
            Feedback
          </span>
          <h1 className="text-3xl/tight font-medium mt-3 mb-4">
            What people say
          </h1>
          <p className="text-gray-500">
            Few valuables words from our customers
          </p>
          <div className="flex gap-4 mt-10">
            <div className="button-prev text-xl transition-all duration-300 hover:text-primary">
              <i className="fa-solid fa-arrow-left" />
            </div>
            <div className="button-next text-xl transition-all duration-300 hover:text-primary">
              <i className="fa-solid fa-arrow-right" />
            </div>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-2 xl:col-span-3">
          <div className="relative">
            <div className="hidden sm:block">
              <div className="before:w-24 before:h-24 before:absolute before:-top-8 before:-end-8" />
              <div className="after:w-24 after:h-24 after:absolute after:-bottom-8 after:-start-8" />
            </div>
            <div id="swiper_one" className="swiper relative">
              <div className="swiper-wrapper z-10">
                {/* 1 */}
                <div className="swiper-slide p-10 border rounded-xl bg-white shadow">
                  <i className="fa-solid fa-quote-left text-gray-500 text-5xl" />
                  <p className="my-4">
                    It is one of the very convenient to use project manager
                    ever! I have tried many project management apps for my daily
                    tasks, but this one is far better than others. Simply loved
                    it!
                  </p>
                  <div className="border-b border-gray-200 w-full my-7" />
                  <div className="flex items-center gap-2">
                    <img
                      src="assets/images/avatars/img-1.jpg"
                      alt="avatar"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <h1 className="text-sm mb-1">Cersei Lannister</h1>
                      <p className="text-gray-500 text-xs">
                        Senior Project Manager
                      </p>
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div className="swiper-slide p-10 border rounded-xl bg-white shadow">
                  <i className="fa-solid fa-quote-left text-gray-500 text-5xl" />
                  <p className="my-4">
                    It is one of the very convenient to use project manager
                    ever! I have tried many project management apps for my daily
                    tasks, but this one is far better than others. Simply loved
                    it!
                  </p>
                  <div className="border-b border-gray-200 w-full my-7" />
                  <div className="flex items-center gap-2">
                    <img
                      src="assets/images/avatars/img-2.jpg"
                      alt="avatar"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <h1 className="text-sm mb-1">Cersei Lannister</h1>
                      <p className="text-gray-500 text-xs">
                        Senior Project Manager
                      </p>
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div className="swiper-slide p-10 border rounded-xl bg-white shadow">
                  <i className="fa-solid fa-quote-left text-gray-500 text-5xl" />
                  <p className="my-4">
                    It is one of the very convenient to use project manager
                    ever! I have tried many project management apps for my daily
                    tasks, but this one is far better than others. Simply loved
                    it!
                  </p>
                  <div className="border-b border-gray-200 w-full my-7" />
                  <div className="flex items-center gap-2">
                    <img
                      src="assets/images/avatars/img-3.jpg"
                      alt="avatar"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <h1 className="text-sm mb-1">Cersei Lannister</h1>
                      <p className="text-gray-500 text-xs">
                        Senior Project Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* =========== testimonial Section end =========== */}
  {/* =========== pricing Section Start =========== */}
  <section className="bg-gradient-to-r from-gray-100/70 to-gray-100 relative py-16 sm:py-24">
    <div className="absolute top-0 inset-x-0 hidden sm:block">
      <img
        src="assets/images/shapes/white-wave.svg"
        alt="svg"
        className="w-full -scale-x-100"
      />
    </div>
    <div className="py-5">
      <div className="container relative">
        <div className="text-center">
          <h1 className="text-3xl/tight font-medium mb-4">Pricing</h1>
          <p className="text-gray-500">
            Pricing that <span className="text-primary">works </span> for
            everyone
          </p>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 mt-14">
          {/* 1 */}
          <div data-aos="fade-up" data-aos-duration={500}>
            <div className="transition-all duration-300 pointer-events-auto hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,.12)] hover:-translate-y-1">
              <div className="border border-gray-300 bg-white rounded w-full h-full text-center p-5">
                <span className="text-lg text-primary">Starter</span>
                <h1 className="text-3xl/tight font-semibold mt-3">
                  <sup className="text-gray-500 text-sm font-normal">$</sup> 49{" "}
                  <sub className="text-gray-500 text-sm font-normal">
                    /month
                  </sub>
                </h1>
                <div className="border-b border-gray-200 w-full my-7" />
                <div>
                  <div className="flex flex-col gap-4">
                    <p className="flex items-center text-gray-600 gap-4">
                      <i className="fa-solid fa-check text-green-500 text-lg" />
                      Up to 600 minutes usage time
                    </p>
                    <p className="flex items-center text-gray-600 gap-4">
                      <i className="fa-solid fa-check text-green-500 text-lg" />
                      Use for personal only
                    </p>
                    <p className="flex items-center text-gray-600 gap-4">
                      <i className="fa-solid fa-check text-green-500 text-lg" />
                      Add up to 10 attendees
                    </p>
                    <p className="flex items-center text-gray-600 gap-4">
                      <i className="fa-solid fa-check text-green-500 text-lg" />
                      Technical support via email
                    </p>
                  </div>
                  <div className="flex mt-[120px]">
                    <a
                      href="#"
                      className="bg-primary/10 text-primary/90 w-full py-3 rounded-lg border border-transparent hover:border hover:border-primary/20 transition-all duration-300"
                    >
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div data-aos="fade-up" data-aos-duration={700}>
            <div className="transition-all duration-300 pointer-events-auto hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,.12)] hover:-translate-y-1">
              <div className="border border-gray-300 bg-white rounded w-full h-full text-center p-5">
                <span className="text-lg text-primary">Professional</span>
                <h1 className="text-3xl/tight font-semibold mt-3">
                  <sup className="text-gray-500 text-sm font-normal">$</sup> 99{" "}
                  <sub className="text-gray-500 text-sm font-normal">
                    /month
                  </sub>
                </h1>
                <div className="border-b border-gray-200 w-full my-7" />
                <div>
                  <div className="flex flex-col gap-4">
                    <p className="flex items-center text-gray-600 gap-4">
                      <i className="fa-solid fa-check text-green-500 text-lg" />
                      Up to 6000 minutes usage time
                    </p>
                    <p className="flex items-center text-gray-600 gap-4">
                      <i className="fa-solid fa-check text-green-500 text-lg" />
                      Use for personal or a commercial
                    </p>
                    <p className="flex items-center text-gray-600 gap-4">
                      <i className="fa-solid fa-check text-green-500 text-lg" />
                      Add up to 100 attendees
                    </p>
                    <p className="flex items-center text-gray-600 gap-4">
                      <i className="fa-solid fa-check text-green-500 text-lg" />
                      Up to 5 teams
                    </p>
                    <p className="flex items-center text-gray-600 gap-4">
                      <i className="fa-solid fa-check text-green-500 text-lg" />
                      Technical support via email
                    </p>
                  </div>
                  <div className="flex mt-20">
                    <a
                      href="#"
                      className="bg-primary text-white w-full py-3 rounded-lg border border-transparent hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 hover:border hover:border-primary transition-all duration-300"
                    >
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div data-aos="fade-up" data-aos-duration={900}>
            <div className="transition-all duration-300 pointer-events-auto hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,.12)] hover:-translate-y-1">
              <div className="border border-gray-300 bg-white rounded w-full h-full text-center p-5">
                <span className="text-lg text-primary">Enterprise</span>
                <h1 className="text-3xl/tight font-semibold mt-3">
                  <sup className="text-gray-500 text-sm font-normal">$</sup> 599{" "}
                  <sub className="text-gray-500 text-sm font-normal">
                    /month
                  </sub>
                </h1>
                <div className="border-b border-gray-200 w-full my-7" />
                <div>
                  <div className="flex flex-col gap-4">
                    <p className="flex items-center text-gray-600 gap-4">
                      <i className="fa-solid fa-check text-green-500 text-lg" />
                      Unlimited usage time
                    </p>
                    <p className="flex items-center text-gray-600 gap-4">
                      <i className="fa-solid fa-check text-green-500 text-lg" />
                      Use for personal or a commercial
                    </p>
                    <p className="flex items-center text-gray-600 gap-4">
                      <i className="fa-solid fa-check text-green-500 text-lg" />
                      Add Unlimited attendees
                    </p>
                    <p className="flex items-center text-gray-600 gap-4">
                      <i className="fa-solid fa-check text-green-500 text-lg" />
                      24x7 Technical support via phone
                    </p>
                    <p className="flex items-center text-gray-600 gap-4">
                      <i className="fa-solid fa-check text-green-500 text-lg" />
                      Technical support via email
                    </p>
                  </div>
                  <div className="flex mt-20">
                    <a
                      href="#"
                      className="bg-primary/10 text-primary/90 w-full py-3 rounded-lg border border-transparent hover:border hover:border-primary/20 transition-all duration-300"
                    >
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 inset-x-0 hidden sm:block">
      <img
        src="assets/images/shapes/white-wave.svg"
        alt="svg"
        className="w-full scale-x-100 -scale-y-100"
      />
    </div>
  </section>
  {/* =========== pricing Section end =========== */}
  {/* =========== faq Section start =========== */}
  <section className="py-16 sm:py-24">
    <div className="container" data-aos="fade-up" data-aos-duration={2000}>
      <div className="text-center">
        <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
          FAQs
        </span>
        <h1 className="text-3xl/tight font-medium mt-3 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-500">
          Here are some of the basic types of questions for our customers
        </p>
      </div>
      <div
        data-fc-type="accordion"
        className="mt-14 lg:w-3/4 lg:mx-auto 2xl:w-2/3"
      >
        {/* 1 */}
        <div className="border border-gray-300 rounded-lg">
          <bu
            p-5tton=""
            className="inline-flex p-5 items-center justify-between w-full font-semibold text-left transition"
            data-fc-type="collapse"
          >
            Can I use this template for my client?
            <span className="material-symbols-rounded text-xl block transition-all fc-collapse-open:rotate-180">
              <i className="fa-solid fa-angle-down" />
            </span>
          </bu>
          <div className="w-full overflow-hidden transition-[height] duration-300">
            <p className="text-gray-700 dark:text-gray-300 pt-3 p-5">
              Yup, the marketplace license allows you to use this theme in any
              end products. For more information on licenses, please refere
              license terms on marketplace.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="border border-gray-300 rounded-lg mt-4">
          <button
            className="p-5 inline-flex items-center justify-between w-full font-semibold text-left transition"
            data-fc-type="collapse"
          >
            Can this theme work with WordPress?
            <span className="material-symbols-rounded text-xl block transition-all fc-collapse-open:rotate-180">
              <i className="fa-solid fa-angle-down" />
            </span>
          </button>
          <div className="hidden w-full overflow-hidden transition-[height] duration-300">
            <p className="text-gray-700 dark:text-gray-300 pt-3 p-5">
              No. This is a HTML template. It won't directly with WordPress,
              though you can convert this into WordPress compatible theme.
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="border border-gray-300 rounded-lg mt-4">
          <button
            className="p-5 inline-flex items-center justify-between w-full font-semibold text-left transition"
            data-fc-type="collapse"
          >
            How do I get help with the theme?
            <span className="material-symbols-rounded text-xl block transition-all fc-collapse-open:rotate-180">
              <i className="fa-solid fa-angle-down" />
            </span>
          </button>
          <div className="hidden w-full overflow-hidden transition-[height] duration-300">
            <p className="text-gray-700 dark:text-gray-300 pt-3 p-5">
              Use our dedicated support email (support@coderthemes.com) to send
              your issues or feedback. We are here to help anytime.
            </p>
          </div>
        </div>
        {/* 4 */}
        <div className="border border-gray-300 rounded-lg mt-4">
          <button
            className="p-5 inline-flex items-center justify-between w-full font-semibold text-left transition"
            data-fc-type="collapse"
          >
            Will you regularly give updates of Prompt ?
            <span className="material-symbols-rounded text-xl block transition-all fc-collapse-open:rotate-180">
              <i className="fa-solid fa-angle-down" />
            </span>
          </button>
          <div className="hidden w-full overflow-hidden transition-[height] duration-300">
            <p className="text-gray-700 dark:text-gray-300 pt-3 p-5">
              Yes, We will update the Prompt regularly. All the future updates
              would be available without any cost.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-14">
        <p className="inline-flex flex-wrap gap-1 bg-gray-100 text-sm rounded-lg py-2 px-5">
          Still have unanswered questions?
          <a href="#" className="hover:text-primary transition-all">
            {" "}
            Contact Us
          </a>
        </p>
      </div>
    </div>
  </section>
  {/* =========== faq Section end =========== */}
  {/* =========== footer Section start =========== */}
  <footer className="bg-gray-100">
    <div className="container">
      <div className="grid xl:grid-cols-5 gap-6 py-12">
        <div className="xl:col-span-2">
          <a href="index.html">
            <img src="assets/images/logo-dark.png" className="h-8" />
          </a>
          <p className="text-gray-500/80 mt-5 lg:w-4/5">
            Make your web application stand out with high-quality landing page
          </p>
        </div>
        <div className="xl:col-span-3 col-span-4">
          <div className="flex flex-col sm:flex-row gap-6 flex-wrap justify-between">
            <div>
              <div className="flex flex-col gap-3">
                <h5 className="mb-3 uppercase">Platform</h5>
                <div className="text-gray-500/80">
                  <a href="javascript:void(0);">Demo</a>
                </div>
                <div className="text-gray-500/80">
                  <a href="javascript:void(0);">Pricing</a>
                </div>
                <div className="text-gray-500/80">
                  <a href="javascript:void(0);">Integrations</a>
                </div>
                <div className="text-gray-500/80">
                  <a href="javascript:void(0);">Status</a>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <h5 className="mb-3 uppercase">Knowledge Base</h5>
                <div className="text-gray-500/80">
                  <a href="javascript:void(0);">Blog</a>
                </div>
                <div className="text-gray-500/80">
                  <a href="javascript:void(0);">Help Center</a>
                </div>
                <div className="text-gray-500/80">
                  <a href="javascript:void(0);">Sales Tools catalog</a>
                </div>
                <div className="text-gray-500/80">
                  <a href="javascript:void(0);">API</a>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <h5 className="mb-3 uppercase">Company</h5>
                <div className="text-gray-500/80">
                  <a href="javascript:void(0);">About us</a>
                </div>
                <div className="text-gray-500/80">
                  <a href="javascript:void(0);">Career</a>
                </div>
                <div className="text-gray-500/80">
                  <a href="javascript:void(0);">Contact Us</a>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <h5 className="mb-3 uppercase">Legal</h5>
                <div className="text-gray-500/80">
                  <a href="javascript:void(0);">Usage Policy</a>
                </div>
                <div className="text-gray-500/80">
                  <a href="javascript:void(0);">Privacy Policy</a>
                </div>
                <div className="text-gray-500/80">
                  <a href="javascript:void(0);">Terms of Service</a>
                </div>
                <div className="text-gray-500/80">
                  <a href="javascript:void(0);">Trust</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="grid sm:grid-cols-2 text-center sm:text-start gap-6">
          <div>
            <p className="text-gray-500/80 text-sm">
              © Prompt. All rights reserved. Crafted by{" "}
              <a
                href="#"
                className="text-gray-800 hover:text-primary transition-all"
              >
                Coderthemes
              </a>
            </p>
          </div>
          <div className="flex justify-center sm:justify-end gap-7">
            <div>
              <a href="#">
                <svg
                  className="w-5 h-5 text-gray-500 hover:text-primary transition-all"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
            <div>
              <a href="#">
                <svg
                  className="w-5 h-5 text-gray-500 hover:text-primary transition-all"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
            </div>
            <div>
              <a href="#">
                <svg
                  className="w-5 h-5 text-gray-500 hover:text-primary transition-all"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x={2} y={9} width={4} height={12} />
                  <circle cx={4} cy={4} r={2} />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* =========== footer Section end =========== */}
  {/* =========== Back To Top Start =========== */}
  <button
    data-toggle="back-to-top"
    className="fixed text-sm rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-primary/20 text-primary flex justify-center items-center"
  >
    <i className="fa-solid fa-arrow-up text-base" />
  </button>
  {/* =========== Back To Top End =========== */}
</>

  );
}
