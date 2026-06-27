function Footer() {
  return (
<footer className="border-t border-white/10 bg-[#08152F]">

  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">

    <div>

      <h2 className="text-2xl font-bold text-blue-400">
        SkillSwap
      </h2>

      <p className="mt-2 text-blue-200">
        Learn • Teach • Grow
      </p>

    </div>

    <div className="flex gap-8 text-blue-200">

      <p className="cursor-pointer hover:text-white">
        About
      </p>

      <p className="cursor-pointer hover:text-white">
        Contact
      </p>

      <p className="cursor-pointer hover:text-white">
        Privacy
      </p>

    </div>

  </div>

</footer>
  );
}

export default Footer;