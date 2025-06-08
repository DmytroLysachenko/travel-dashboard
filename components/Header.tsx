import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { Link, useLocation } from "react-router";

import { cn } from "~/lib/utils";

interface Props {
  title: string;
  description: string;
  ctaText?: string;
  ctaUrl?: string;
}

const Header = ({ title, description, ctaText, ctaUrl }: Props) => {
  const location = useLocation();

  return (
    <header className="header">
      <article>
        <h1
          className={cn(
            "text-dark-100",
            location.pathname === "/"
              ? "text-2xl md:text-4xl font-bold"
              : "text-xl md:text-2xl font-semibold"
          )}
        >
          {title}
        </h1>
        <p
          className={cn(
            "text-gray-100 font-normal md:text-lg",
            location.pathname === "/" ? "text-base" : "text-sm"
          )}
        >
          {description}
        </p>
      </article>
      {ctaText && ctaUrl && (
        <Link
          to={ctaUrl}
          className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          <ButtonComponent
            type="button"
            className="button-class !h-11 !w-full md:w-[240px]"
          >
            <img
              src="/assets/icons/plus.svg"
              alt="plus"
              className="size-5"
            />
            <span className="p-16-semibold text-white">{ctaText}</span>
          </ButtonComponent>
        </Link>
      )}
    </header>
  );
};

export default Header;
