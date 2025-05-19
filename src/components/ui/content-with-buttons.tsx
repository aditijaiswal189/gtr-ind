"use client";

interface ButtonConfig {
  label: string;
  onClick?: () => void; // for a real button
  href?: string; // for a link
  colorClass?: string; // e.g. "bg-primary", "bg-blue"
}

interface ContentProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  brandText: string;
  textColor?: string;
  bgColor?: string;
  buttons: ButtonConfig[]; // now supports href or onClick
}

export const ContentWithButtons = ({
  imageSrc,
  title,
  subtitle,
  description,
  brandText,
  textColor = "text-primary",
  bgColor = "bg-card",
  buttons,
}: ContentProps) => {
  const baseBtnClasses = `
    inline-flex items-center justify-center
    h-12 px-6
    font-medium tracking-wide
    text-white transition duration-200
    rounded shadow-md
    focus:shadow-outline focus:outline-none
    rounded-lg
  `;

  return (
    <div className={`w-full px-4 py-16 ${bgColor}`}>
      <div className="flex flex-col w-full overflow-hidden border rounded shadow-sm lg:flex-row">
        {/* Image half */}
        <div className="relative lg:w-1/2">
          <img
            src={imageSrc}
            alt="Decorative"
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 19 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 0 20 0 20 104 0.82456 114" />
          </svg>
        </div>

        {/* Text & Buttons */}
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <span className="  mb-4 text-xs font-semibold tracking-wider  uppercase rounded-lg text-primary">
            {brandText}
          </span>

          <h5
            className={`mb-3 text-3xl font-extrabold leading-none sm:text-4xl ${textColor}`}
          >
            {title}
          </h5>

          <p className="mb-8 text-foreground">
            <span className="font-bold">{subtitle}</span> {description}
          </p>

          <div className="grid grid-cols-2 gap-4">
            {buttons.map((btn, idx) => {
              const btnClasses = `
                ${baseBtnClasses}
                ${btn.colorClass ?? "bg-primary"}
                hover:${btn.colorClass ?? "bg-primary"}-hover
              `
                .replace(/\s+/g, " ")
                .trim();

              if (btn.href) {
                return (
                  <a
                    key={idx}
                    href={btn.href}
                    className={btnClasses}
                    // optionally open external links in new tab:
                    target={btn.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      btn.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {btn.label}
                    {/* optional icon: <ArrowRight className="w-4 h-4 ml-2" /> */}
                  </a>
                );
              }

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={btn.onClick}
                  className={btnClasses}
                >
                  {btn.label}
                  {/* optional icon: <ArrowRight className="w-4 h-4 ml-2" /> */}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
