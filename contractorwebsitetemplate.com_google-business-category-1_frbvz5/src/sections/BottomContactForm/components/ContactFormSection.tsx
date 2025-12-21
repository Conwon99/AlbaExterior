export const ContactFormSection = () => {
  return (
    <div className="relative content-start bg-[linear-gradient(160deg,rgb(0,0,0)_0%,rgb(8,8,8)_100%)] shadow-[rgba(0,0,0,0.5)_0px_0px_10px_0px] box-border caret-transparent flex flex-wrap w-full -mt-20 p-[30px] rounded-lg border-[3px] border-solid border-white">
      <div className="absolute bg-zinc-600 box-border caret-transparent opacity-50 rounded-lg inset-0"></div>
      <div className="relative text-white text-[37px] font-medium box-border caret-transparent leading-[37px] text-center w-full mb-5 font-roboto md:leading-[42px]">
        <div className="box-border caret-transparent leading-[37px] md:leading-[42px]">
          <h2 className="text-[32px] box-border caret-transparent leading-[38.4px] mt-2 mb-4">
            Get A Free Estimate On (Service/GBP Secondary Category-1)
          </h2>
        </div>
      </div>
      <div className="relative text-white box-border caret-transparent text-center w-full mb-5 font-roboto">
        <div className="box-border caret-transparent">
          <p className="box-border caret-transparent mb-[14.4px]">
            Fill out the quick form below to schedule a no-pressure,
            no-obligation quote on the cost of our (Service Area) + (Service On
            This Page)
          </p>
        </div>
      </div>
      <div className="relative text-white box-border caret-transparent text-center w-full mb-5 font-roboto">
        <div className="box-border caret-transparent">
          <p className="box-border caret-transparent mb-[14.4px]">
            <strong className="font-bold box-border caret-transparent">
              Need to contact us right away? Call Us:{" "}
              <a
                href="tel://addnumber"
                className="text-pink-600 box-border caret-transparent hover:text-slate-700 hover:border-slate-700"
              >
                (000) 555-5555
              </a>
            </strong>
            <br className="box-border caret-transparent" />
            or simply fill out the form below.
          </p>
        </div>
      </div>
      <div className="relative text-white box-border caret-transparent w-full font-roboto">
        <div className="box-border caret-transparent">
          <div role="form" className="box-border caret-transparent">
            <span className="box-border caret-transparent"></span>
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent hidden"></div>
              <div className="box-border caret-transparent"></div>
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent"></div>
              </div>
              <div className="box-border caret-transparent">
                <form className="box-border caret-transparent">
                  <div className="box-border caret-transparent">
                    <div className="box-border caret-transparent">
                      <div className="box-border caret-transparent">
                        <div className="box-border caret-transparent">
                          Fields marked with an{" "}
                          <span className="text-red-600 box-border caret-transparent">
                            *
                          </span>{" "}
                          are required
                        </div>
                      </div>
                    </div>
                    <div className="box-border caret-transparent">
                      <div className="box-border caret-transparent">
                        <div className="box-border caret-transparent">
                          <div className="relative box-border caret-transparent clear-both mb-[25px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-white after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-roboto">
                            <div className="box-border caret-transparent">
                              <div className="box-border caret-transparent"></div>
                            </div>
                            <div className="box-border caret-transparent">
                              <div className="box-border caret-transparent flex flex-wrap">
                                <div className="box-border caret-transparent order-5 mb-2.5">
                                  <label className="font-bold box-border caret-transparent inline-block leading-4 align-middle">
                                    WHERE DO YOU NEED OUR SERVICES? (ADDRESS){" "}
                                    <span className="text-red-600 box-border caret-transparent">
                                      *
                                    </span>
                                  </label>
                                </div>
                                <div className="relative box-border caret-transparent order-[15] w-full">
                                  <input
                                    type="text"
                                    value=""
                                    name="address"
                                    className="text-black box-border caret-transparent w-full border border-stone-500 px-4 py-2 rounded-[3px] border-solid"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="box-border caret-transparent">
                              <div className="box-border caret-transparent">
                                <div className="text-xs box-border caret-transparent leading-[18px] mt-[5px]"></div>
                                <div
                                  role="alert"
                                  className="box-border caret-transparent"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="box-border caret-transparent">
                          <div className="relative box-border caret-transparent clear-both mb-[25px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-white after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-roboto">
                            <div className="box-border caret-transparent">
                              <div className="box-border caret-transparent"></div>
                            </div>
                            <div className="box-border caret-transparent">
                              <div className="box-border caret-transparent flex flex-wrap">
                                <div className="box-border caret-transparent order-5 mb-2.5">
                                  <span className="font-bold box-border caret-transparent">
                                    WHAT TYPE OF (SERVICE) DO YOU NEED?{" "}
                                    <span className="text-red-600 box-border caret-transparent">
                                      *
                                    </span>
                                  </span>
                                </div>
                                <div className="relative box-border caret-transparent order-[15] w-full">
                                  <ul className="box-border caret-transparent list-none pl-0">
                                    <li className="box-border caret-transparent mb-[5px]">
                                      <input
                                        type="checkbox"
                                        name="nf-field-6_1"
                                        value="service-1"
                                        role="checkbox"
                                        className="text-black bg-transparent box-border caret-transparent block float-left mr-[5px] mt-1 p-0"
                                      />
                                      <label className="box-border caret-transparent block leading-4 align-middle ml-6">
                                        Service #1
                                      </label>
                                    </li>
                                    <li className="box-border caret-transparent mb-[5px]">
                                      <input
                                        type="checkbox"
                                        name="nf-field-6_1"
                                        value="service-2"
                                        role="checkbox"
                                        className="text-black bg-transparent box-border caret-transparent block float-left mr-[5px] mt-1 p-0"
                                      />
                                      <label className="box-border caret-transparent block leading-4 align-middle ml-6">
                                        Service #2
                                      </label>
                                    </li>
                                    <li className="box-border caret-transparent mb-[5px]">
                                      <input
                                        type="checkbox"
                                        name="nf-field-6_1"
                                        value="service-3"
                                        role="checkbox"
                                        className="text-black bg-transparent box-border caret-transparent block float-left mr-[5px] mt-1 p-0"
                                      />
                                      <label className="box-border caret-transparent block leading-4 align-middle ml-6">
                                        Service #3
                                      </label>
                                    </li>
                                    <li className="box-border caret-transparent mb-[5px]">
                                      <input
                                        type="checkbox"
                                        name="nf-field-6_1"
                                        value="service-4"
                                        role="checkbox"
                                        className="text-black bg-transparent box-border caret-transparent block float-left mr-[5px] mt-1 p-0"
                                      />
                                      <label className="box-border caret-transparent block leading-4 align-middle ml-6">
                                        Service #4
                                      </label>
                                    </li>
                                    <li className="box-border caret-transparent mb-[5px]">
                                      <input
                                        type="checkbox"
                                        name="nf-field-6_1"
                                        value="service-5"
                                        role="checkbox"
                                        className="text-black bg-transparent box-border caret-transparent block float-left mr-[5px] mt-1 p-0"
                                      />
                                      <label className="box-border caret-transparent block leading-4 align-middle ml-6">
                                        Service #5
                                      </label>
                                    </li>
                                    <li className="box-border caret-transparent mb-[5px]">
                                      <input
                                        type="checkbox"
                                        name="nf-field-6_1"
                                        value="service-6"
                                        role="checkbox"
                                        className="text-black bg-transparent box-border caret-transparent block float-left mr-[5px] mt-1 p-0"
                                      />
                                      <label className="box-border caret-transparent block leading-4 align-middle ml-6">
                                        Service #6
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="box-border caret-transparent">
                              <div className="box-border caret-transparent">
                                <div className="text-xs box-border caret-transparent leading-[18px] mt-[5px]"></div>
                                <div
                                  role="alert"
                                  className="box-border caret-transparent"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="box-border caret-transparent">
                          <div className="relative box-border caret-transparent clear-both mb-[25px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-white after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-roboto">
                            <div className="box-border caret-transparent">
                              <div className="box-border caret-transparent"></div>
                            </div>
                            <div className="box-border caret-transparent">
                              <div className="box-border caret-transparent flex flex-wrap">
                                <div className="box-border caret-transparent order-5 mb-2.5">
                                  <label className="font-bold box-border caret-transparent inline-block leading-4 align-middle">
                                    NAME{" "}
                                    <span className="text-red-600 box-border caret-transparent">
                                      *
                                    </span>
                                  </label>
                                </div>
                                <div className="relative box-border caret-transparent order-[15] w-full">
                                  <input
                                    type="text"
                                    value=""
                                    name="nf-field-7_1-textbox"
                                    className="text-black box-border caret-transparent w-full border border-stone-500 px-4 py-2 rounded-[3px] border-solid"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="box-border caret-transparent">
                              <div className="box-border caret-transparent">
                                <div className="text-xs box-border caret-transparent leading-[18px] mt-[5px]"></div>
                                <div
                                  role="alert"
                                  className="box-border caret-transparent"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="box-border caret-transparent">
                          <div className="relative box-border caret-transparent clear-both mb-[25px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-white after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-roboto">
                            <div className="box-border caret-transparent">
                              <div className="box-border caret-transparent"></div>
                            </div>
                            <div className="box-border caret-transparent">
                              <div className="box-border caret-transparent flex flex-wrap">
                                <div className="box-border caret-transparent order-5 mb-2.5">
                                  <label className="font-bold box-border caret-transparent inline-block leading-4 align-middle">
                                    PHONE NUMBER{" "}
                                    <span className="text-red-600 box-border caret-transparent">
                                      *
                                    </span>
                                  </label>
                                </div>
                                <div className="relative box-border caret-transparent order-[15] w-full">
                                  <input
                                    type="tel"
                                    value=""
                                    name="phone"
                                    className="text-black box-border caret-transparent w-full border border-stone-500 px-4 py-2 rounded-[3px] border-solid"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="box-border caret-transparent">
                              <div className="box-border caret-transparent">
                                <div className="text-xs box-border caret-transparent leading-[18px] mt-[5px]"></div>
                                <div
                                  role="alert"
                                  className="box-border caret-transparent"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="box-border caret-transparent">
                          <div className="relative box-border caret-transparent clear-both mb-[25px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-white after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-roboto">
                            <div className="box-border caret-transparent">
                              <div className="box-border caret-transparent"></div>
                            </div>
                            <div className="box-border caret-transparent">
                              <div className="box-border caret-transparent flex flex-wrap">
                                <div className="box-border caret-transparent order-5 mb-2.5">
                                  <label className="font-bold box-border caret-transparent inline-block leading-4 align-middle">
                                    EMAIL{" "}
                                    <span className="text-red-600 box-border caret-transparent">
                                      *
                                    </span>
                                  </label>
                                </div>
                                <div className="relative box-border caret-transparent order-[15] w-full">
                                  <input
                                    type="email"
                                    value=""
                                    name="email"
                                    className="text-black box-border caret-transparent w-full border border-stone-500 px-4 py-2 rounded-[3px] border-solid"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="box-border caret-transparent">
                              <div className="box-border caret-transparent">
                                <div className="text-xs box-border caret-transparent leading-[18px] mt-[5px]"></div>
                                <div
                                  role="alert"
                                  className="box-border caret-transparent"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="box-border caret-transparent">
                          <div className="relative box-border caret-transparent clear-both mb-[25px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-white after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-roboto">
                            <div className="box-border caret-transparent">
                              <div className="box-border caret-transparent"></div>
                            </div>
                            <div className="box-border caret-transparent">
                              <div className="box-border caret-transparent flex flex-wrap">
                                <div className="box-border caret-transparent order-5 mb-2.5">
                                  <label className="font-bold box-border caret-transparent inline-block leading-4 align-middle">
                                    SHORT DESCRIPTION OF WHAT YOU NEED
                                  </label>
                                </div>
                                <div className="relative box-border caret-transparent order-[15] w-full">
                                  <textarea
                                    name="nf-field-10_1"
                                    className="text-black box-border caret-transparent h-[200px] resize-y w-full border-stone-500 px-4 py-2 rounded-[3px]"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <div className="box-border caret-transparent">
                              <div className="box-border caret-transparent">
                                <div className="text-xs box-border caret-transparent leading-[18px] mt-[5px]"></div>
                                <div
                                  role="alert"
                                  className="box-border caret-transparent"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="box-border caret-transparent">
                          <div className="relative box-border caret-transparent clear-both mb-[25px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-white after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-roboto">
                            <div className="box-border caret-transparent">
                              <div className="box-border caret-transparent"></div>
                            </div>
                            <div className="box-border caret-transparent">
                              <div className="box-border caret-transparent flex flex-wrap">
                                <div className="box-border caret-transparent order-5 mb-2.5"></div>
                                <div className="relative box-border caret-transparent order-[15] w-full">
                                  <input
                                    type="submit"
                                    value="GET A FREE ESTIMATE!"
                                    className="bg-red-700 box-border caret-transparent text-center text-nowrap border px-4 py-2 rounded-[10px] border-solid border-black hover:bg-zinc-600"
                                  />
                                </div>
                                <div className="box-border caret-transparent"></div>
                              </div>
                            </div>
                            <div className="box-border caret-transparent">
                              <div className="box-border caret-transparent">
                                <div className="text-xs box-border caret-transparent leading-[18px] mt-[5px]"></div>
                                <div
                                  role="alert"
                                  className="box-border caret-transparent"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-border caret-transparent">
                      <div className="box-border caret-transparent">
                        <div
                          role="alert"
                          className="box-border caret-transparent"
                        >
                          <div className="box-border caret-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
