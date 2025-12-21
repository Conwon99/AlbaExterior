export const ContactForm = () => {
  return (
    <form className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent">
              Fields marked with an{" "}
              <span className="text-red-600 box-border caret-transparent">
                *
              </span>
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
                            name="nf-field-6"
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
                            name="nf-field-6"
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
                            name="nf-field-6"
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
                            name="nf-field-6"
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
                            name="nf-field-6"
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
                            name="nf-field-6"
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
                        name="nf-field-7-textbox"
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
                        name="nf-field-10"
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
            <div role="alert" className="box-border caret-transparent">
              <div className="box-border caret-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
