export const HeroButton = () => {
  return (
    <a
      href="https://getbizzyllc.com/"
      className="text-white font-medium bg-red-700 shadow-[rgba(0,0,0,0.5)_0px_0px_10px_0px] box-border caret-transparent inline-block fill-white leading-4 px-[30px] py-[15px] rounded-[10px] border-2 border-solid font-roboto hover:bg-zinc-600"
    >
      <span className="box-border caret-transparent gap-x-2.5 flex fill-white justify-center gap-y-2.5">
        <span className="items-center box-border caret-transparent flex fill-white">
          <img
            src="https://c.animaapp.com/mjfo8f47q1cuST/assets/icon-1.svg"
            alt="Icon"
            className="box-border caret-transparent h-4 w-4"
          />
        </span>
        <span className="box-border caret-transparent block fill-white">
          {" "}
          Get This Website Built
        </span>
      </span>
    </a>
  );
};
