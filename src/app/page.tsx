import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { LINKS, PROFESSIONAL_NAME, PROFESSIONAL_TITLE, PROFESSIONAL_BIO } from "@/lib/constants";

export default function LinktreePage() {
  return (
    <main className="min-h-dvh flex flex-col items-center px-4 pt-6 pb-12">
      {/* Profile */}
      <section className="animate-fade-in-up flex flex-col items-center gap-2 mb-8">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full ring-[3px] ring-[#90C3A4] ring-offset-[4px] ring-offset-[#F5EFE2] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
          <Image
            src="/profile.jpg"
            alt={PROFESSIONAL_NAME}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="text-center mt-1">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-[#1E1E1E] tracking-wide">
            {PROFESSIONAL_NAME}
          </h1>
          <div className="mx-auto mt-3 h-[3px] w-10 rounded-full bg-[#90C3A4]" />
          {PROFESSIONAL_TITLE && (
            <p className="font-body text-lg text-[#4E7C61] mt-3">
              {PROFESSIONAL_TITLE}
            </p>
          )}
          {PROFESSIONAL_BIO && (
            <p className="font-body text-lg text-[#6B675F] mt-0.5">
              {PROFESSIONAL_BIO}
            </p>
          )}
        </div>
      </section>

      {/* Link blocks */}
      <section className="w-full max-w-xl flex flex-col gap-6">
        {LINKS.map((link, index) =>
          link.variant === "card" ? (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${index * 90}ms` }}
              className="animate-fade-in-up group relative flex items-center rounded-[28px] overflow-hidden bg-[#1E1E1E] ring-1 ring-[#90C3A4]/20 min-h-[170px] sm:min-h-[250px] shadow-[0_10px_35px_rgba(0,0,0,0.25)] hover:-translate-y-1 hover:ring-[#90C3A4]/40 hover:shadow-[0_16px_45px_rgba(0,0,0,0.32)] transition-all duration-300 ease-out"
            >
              {/* Sheen */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent" />

              {/* Image – right side */}
              <div className="absolute right-0 inset-y-0 w-1/2 overflow-hidden">
                <Image
                  src={link.image}
                  alt=""
                  fill
                  className={`${
                    "imageFit" in link && link.imageFit === "contain"
                      ? "object-contain object-bottom p-1.5 translate-y-3"
                      : "object-cover object-top"
                  } scale-100 group-hover:scale-105 transition-transform duration-700 ease-out`}
                  sizes="(max-width: 448px) 50vw, 224px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E1E] via-[#1E1E1E]/10 to-transparent" />
              </div>

              {/* Text – left side */}
              <div className="relative z-10 px-8 py-8 w-[58%] flex flex-col gap-2">
                <h2 className="font-heading font-bold text-[#F5F3EF] text-[1.4rem] sm:text-[2.25rem] leading-[1.1] tracking-wide">
                  {link.title}
                </h2>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#A8D4B8] to-[#7FB094] text-[#1E1E1E] font-body font-semibold text-xs sm:text-lg rounded-xl sm:rounded-2xl pl-3.5 pr-1 py-1 sm:pl-7 sm:pr-2 sm:py-2 shadow-[0_8px_22px_rgba(144,195,164,0.25)] ring-1 ring-white/15 transition-all duration-300 group-hover:shadow-[0_10px_28px_rgba(144,195,164,0.4)] group-hover:brightness-105">
                    {link.cta}
                    <span className="flex items-center justify-center w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-[#1E1E1E]/15 shrink-0 transition-all duration-300 group-hover:bg-[#1E1E1E]/25 group-hover:translate-x-0.5">
                      <ArrowRight className="w-3 h-3 sm:w-[18px] sm:h-[18px]" />
                    </span>
                  </span>
                </div>
              </div>
            </a>
          ) : (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${index * 90}ms` }}
              className="animate-fade-in-up group flex items-center justify-center gap-3 w-full min-h-[64px] bg-gradient-to-r from-[#A8D4B8] to-[#7FB094] text-[#1E1E1E] font-body font-semibold text-base sm:text-lg text-center rounded-2xl px-7 py-4 shadow-[0_8px_22px_rgba(144,195,164,0.25)] ring-1 ring-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(144,195,164,0.4)] hover:brightness-105"
            >
              <span>{link.cta}</span>
              <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1E1E1E]/15 shrink-0 transition-all duration-300 group-hover:bg-[#1E1E1E]/25 group-hover:translate-x-0.5">
                <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </span>
            </a>
          )
        )}
      </section>

      {/* Footer */}
      <footer className="mt-14 flex flex-col items-center gap-3 text-center">
        <div className="h-px w-16 bg-[#1E1E1E]/10" />
        <p className="font-body text-xs tracking-wide text-[#9C978C]">
          © {new Date().getFullYear()} {PROFESSIONAL_NAME}
        </p>
      </footer>
    </main>
  );
}
