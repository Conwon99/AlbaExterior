export const MobileNavbarLogo = () => {
  return (
    <div className="relative box-border caret-transparent block min-h-[auto] min-w-[auto] w-full z-[5] py-2.5 md:static md:hidden md:min-h-0 md:min-w-0 md:w-auto md:z-auto md:py-0">
      <a
        href="https://contractorwebsitetemplate.com/"
        className="text-pink-600 box-border caret-transparent inline-block my-[5px] p-[5px] md:my-0 md:p-0 hover:text-slate-700 hover:border-slate-700"
      >
        <img
          src="https://c.animaapp.com/mjfqi6l8cAeBpe/assets/cropped-Screenshot_2023-04-10_at_1.41.12_PM-removebg-preview-4.png"
          title=""
          alt="Filler Logo"
          className="box-border caret-transparent max-h-[55px] max-w-[150px] md:max-h-none md:max-w-full"
        />
      </a>
      <button
        type="button"
        className="relative text-orange-500 bg-red-700 caret-transparent block float-right text-center text-nowrap w-[45px] z-10 border m-3 p-2 rounded-[3px] border-solid border-black/50 md:static md:hidden md:w-auto md:z-auto md:m-5 md:px-4 md:rounded-[10px] hover:text-black/50 hover:bg-zinc-600 hover:border-black"
      >
        X
      </button>
    </div>
  );
};
