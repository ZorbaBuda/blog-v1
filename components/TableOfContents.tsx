"use client";

import clsx from "clsx";

import GithubSlugger from "github-slugger";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { RiArrowDownSLine } from "react-icons/ri";

interface TOCProps {
  source: string;
}

const useIntersectionObserver = (
  setActiveId: Dispatch<SetStateAction<string | undefined>>
) => {
  const headingElementsRef: any = useRef({});

  useEffect(() => {
    const callback = (headings: IntersectionObserverEntry[]) => {
      headingElementsRef.current = headings.reduce(
        (
          map: { [x: string]: any },
          headingElement: { target: { id: string | number } }
        ) => {
          map[headingElement.target.id] = headingElement;

          return map;
        },
        headingElementsRef.current
      );

      const visibleHeadings: any[] = [];

      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id: string) =>
        headingElements.findIndex((heading) => heading.id === id);

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(b.target.id) - getIndexFromId(a.target.id)
        );

        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px 0px -70% 0px",
    });

    const headingElements = Array.from(document.querySelectorAll("h2,h3,h4"));

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId]);
};

const TableOfContents = ({ source }: TOCProps) => {
  const headingLines = source
    .split("\n")
    .filter((line) => line.match(/^###*\s/));

  console.log(headingLines);

  const headings = headingLines.map((raw) => {
    const text = raw.replace(/^###*\s/, "");
    const level = raw.slice(0, 3) === "###" ? 3 : 2;
    const slugger = new GithubSlugger();

    return {
      text,
      level,
      id: slugger.slug(text),
    };
  });

  const [activeId, setActiveId] = useState<string>();

  useIntersectionObserver(setActiveId);

  {
    /* control + shift + l */
  }
  {
    /* https://www.flowbite-react.com/docs/customize/theme */
  }

  return (
    <div  className='hidden max-h-[calc(100vh-9rem-113px)] overflow-auto pb-4 lg:block'
    >
      <h3 className='text-gray-900 dark:text-gray-100 md:text-xl'>
        Table of Contents
      </h3>
        {headings.map((heading, index) => {
          return (
           
              <div
                key={index}
                href={`#${heading.id}`}
                // className={clsx(
                //   heading.id === activeId ? "font-bold" : "font-normal",
                //   heading.level === 2 ? "pl-2" : "pl-6",
                //   "mb-4 text-base text-slate-700 last:mb-6 hover:underline"
                // )}
                className={clsx(
                  'font-medium hover:text-gray-700 focus:outline-none dark:hover:text-gray-200',
                  'focus-visible:text-gray-700 dark:focus-visible:text-gray-200',
                  heading.level === 2 ? "pl-2" : "pl-6",
                  heading.id === activeId
                    ? 'text-gray-900 dark:text-gray-100'
                    : 'text-gray-400 dark:text-gray-500'
                )}

                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector<any>(`#${heading.id}`).scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }}
              >
                {heading.text}
              </div>
           
          );
        })}
      </div>
      )
      {/* <Disclosure
        as="div"
        className="flex flex-col Dropdown.Items-start justify-center"
        defaultOpen={true}
      >
        {({ open }) => (
          <>
            <dt>
              <Disclosure.Button
                as="h3"
                className="mb-4 flex flex-row flex-nowrap Dropdown.Items-center justify-start text-base font-medium text-dark"
              >
                <span className="animated-underline font-bold capitalize tracking-wide">
                  Contents:
                </span>
                <span className="ml-20 flex Dropdown.Items-center md:ml-16">
                  <RiArrowDownSLine
                    className={clsxm(
                      open ? "-rotate-180" : "rotate-0",
                      "h-6 w-6 transform"
                    )}
                    aria-hidden="true"
                  />
                </span>
              </Disclosure.Button>
            </dt>
            <Disclosure.Panel
              as="dd"
              className="flex flex-col Dropdown.Items-start justify-start"
            >
              {headings.map((heading, index) => {
                return (
                  <a
                    key={index}
                    href={`#${heading.id}`}
                    className={clsxm(
                      heading.id === activeId ? "font-bold" : "font-normal",
                      heading.level === 2 ? "pl-2" : "pl-6",
                      "mb-4 text-base text-slate-700 last:mb-6 hover:underline"
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector<any>(`#${heading.id}`).scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                      });
                    }}
                  >
                    {heading.text}
                  </a>
                );
              })}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure> */}
  
  
  
};

export default TableOfContents;
