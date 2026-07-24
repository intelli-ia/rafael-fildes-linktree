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
      <section className="w-full max-w-xl flex flex-col gap-5 sm:gap-6">
        {LINKS.map((link, index) =>
          link.variant === "card" ? (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${index * 90}ms` }}
              className="animate-fade-in-up group relative flex items-center rounded-[22px] sm:rounded-[28px] overflow-hidden bg-[#173A39] ring-1 ring-[#90C3A4]/20 min-h-[170px] sm:min-h-[250px] shadow-[0_8px_28px_rgba(0,0,0,0.22)] sm:shadow-[0_10px_35px_rgba(0,0,0,0.25)] hover:-translate-y-1 hover:ring-[#90C3A4]/40 hover:shadow-[0_16px_45px_rgba(0,0,0,0.32)] transition-all duration-300 ease-out"
            >
              {/* Sheen */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent" />

              {/* Image – right side */}
              <div className="absolute right-0 inset-y-0 w-[58%] overflow-hidden">
                <Image
                  src={link.image}
                  alt=""
                  fill
                  className={`${
                    "imageFit" in link && link.imageFit === "contain"
                      ? "object-contain object-bottom p-1.5 translate-y-3"
                      : "object-cover object-top"
                  } scale-100 group-hover:scale-105 transition-transform duration-700 ease-out`}
                  sizes="(max-width: 448px) 58vw, 260px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#173A39] via-[#173A39]/10 to-transparent" />
              </div>

              {/* Text – left side */}
              <div className="relative z-10 px-5 py-5 sm:px-8 sm:py-8 w-[58%] flex flex-col gap-2">
                <h2 className="font-heading font-bold text-[#61BFBF] text-lg sm:text-[2.25rem] leading-tight sm:leading-[1.1] tracking-wide">
                  {link.title}
                </h2>
                <div className="relative mt-3 flex items-center justify-center gap-2 w-[75%] min-h-[36px] sm:min-h-[44px] overflow-hidden bg-gradient-to-br from-[#7ACDCD] via-[#61BFBF] to-[#4CA3A3] text-[#FFFFFF] font-body font-semibold text-xs sm:text-sm text-center rounded-lg sm:rounded-xl px-3 sm:px-5 py-1.5 sm:py-2 ring-1 ring-white/25 shadow-[0_6px_18px_rgba(97,191,191,0.3)] transition-all duration-500 ease-out group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_28px_rgba(97,191,191,0.5)] group-hover:brightness-110 group-active:scale-[0.98]">
                  {/* Shine sweep */}
                  <span className="pointer-events-none absolute inset-0 -translate-x-[120%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[120%]" />
                  <span className="relative z-10 tracking-wide">{link.cta}</span>
                  <span className="relative z-10 flex items-center justify-center w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white/15 ring-1 ring-white/20 shrink-0 transition-all duration-300 group-hover:bg-white/25 group-hover:translate-x-1">
                    <ArrowRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
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
              className="animate-fade-in-up group relative flex items-center justify-center gap-3 w-full min-h-[64px] overflow-hidden bg-gradient-to-br from-[#7ACDCD] via-[#61BFBF] to-[#4CA3A3] text-[#FFFFFF] font-body font-semibold text-base sm:text-lg text-center rounded-2xl px-7 py-4 ring-1 ring-white/25 shadow-[0_8px_24px_rgba(97,191,191,0.35)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(97,191,191,0.55)] hover:brightness-110 active:scale-[0.98]"
            >
              {/* Shine sweep */}
              <span className="pointer-events-none absolute inset-0 -translate-x-[120%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[120%]" />
              <span className="relative z-10 tracking-wide">{link.cta}</span>
              <span className="relative z-10 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/15 ring-1 ring-white/20 shrink-0 transition-all duration-300 group-hover:bg-white/25 group-hover:translate-x-1">
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
