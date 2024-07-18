import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  console.log("CallToAction slice:", slice);

  if (!slice || !slice.variation) {
    console.error("Slice or slice.variation is not defined:", slice);
    return <div>Error: Slice data is not properly defined.</div>;
  }

  const alignment = slice.variation === "alignLeft" ? "left" : "center";

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="es-bounded es-call-to-action"
    >
      <div className="es-bounded__content es-call-to-action__content">
        {isFilled.link(slice.primary.buttonLink) && (
          <PrismicNextLink
            className="es-call-to-action__button"
            field={slice.primary.buttonLink}
          >
            {slice.primary.buttonLabel || "Learn more…"}
          </PrismicNextLink>
        )}
      </div>

      <style>
        {`
          .es-bounded {
            padding: 8vw 2rem;
          }
          
          .es-bounded__content {
            margin-left: auto;
            margin-right: auto;
          }
          
          @media screen and (min-width: 640px) {
            .es-bounded__content {
              max-width: 90%;
            }
          }
          
          @media screen and (min-width: 896px) {
            .es-bounded__content {
              max-width: 80%;
            }
          }
          
          @media screen and (min-width: 1280px) {
            .es-bounded__content {
              max-width: 75%;
            }
          }
          
          .es-call-to-action {
            font-family: system-ui, sans-serif;
            background-color: #fff;
            color: #333;
          }
          
          .es-call-to-action__image {
            max-width: 14rem;
            height: auto;
            width: auto;
            justify-self: ${alignment};
          }
          
          .es-call-to-action__content {
            display: grid;
            gap: 1rem;
            justify-items: ${alignment};
          }
          
          .es-call-to-action__content__heading {
            font-size: 2rem;
            font-weight: 700;
            text-align: ${alignment};
          }

          .es-call-to-action__content__heading * {
            margin: 0;
          }
          
          .es-call-to-action__content__paragraph {
            font-size: 1.15rem;
            max-width: 38rem;
            text-align: ${alignment};
          }
          
          .es-call-to-action__button {
            justify-self: ${alignment};
            border-radius: 0.25rem;
            display: inline-block;
            font-size: 0.875rem;
            line-height: 1.3;
            padding: 1rem 2.625rem;
            text-align: ${alignment};
            transition: background-color 100ms linear;
            background-color: #16745f;
            color: #fff;
          }
          
          .es-call-to-action__button:hover {
            background-color: #0d5e4c;
          }
        `}
      </style>
    </section>
  );
};

export default CallToAction;
