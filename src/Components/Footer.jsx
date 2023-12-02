import logo from "../assets/devfest logo.png";

const Footer = () => {
  return (
    <footer className="px-6 max-w-[1280px] mx-auto">
      <div className="grid grid-rows-2 grid-cols-2 gap-8 sm:grid-cols-4 sm:grid-rows-1">
        <div className="flex flex-col gap-2">
          <img className="max-w-[150px]" src={logo} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <a className="underline" href="/Workshops">
            RSVP
          </a>
          <a className="underline" href="https://dscunilag.dev/dflagos-se-cfv">
            Apply as a volunteer
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <a
            className="underline"
            href="https://gdsc.community.dev/university-of-lagos/"
          >
            GDSC Unilag
          </a>
          <a
            className="underline"
            href="https://gdsc.community.dev/lagos-state-university/"
          >
            GDSC Lasu
          </a>
          <a
            className="underline"
            href="https://gdsc.community.dev/caleb-university/"
          >
            GDSC Caleb{" "}
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <a
            className="underline"
            href="https://gdsc.community.dev/babcock-university/"
          >
            GDSC Babcock
          </a>
          <a
            className="underline"
            href="https://gdsc.community.dev/yaba-college-of-technology/"
          >
            GDSC Yabatech
          </a>
          <a className="underline" href="https://gdsc.community.dev/">
            GDSC PAN
          </a>
        </div>
      </div>
      <p className="copyright no-underline">
        © 2023 DevFest Lagos Student Edition 2023. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
