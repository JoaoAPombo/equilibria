"use client";
import * as React from "react";

export function Accordion({
  type = "single",
  collapsible = false,
  className,
  children,
}) {
  const [open, setOpen] = React.useState(null);
  return (
    <div className={className}>
      {React.Children.map(children, (child, idx) =>
        React.cloneElement(child, {
          open: open === idx,
          onClick: () => setOpen(open === idx && collapsible ? null : idx),
        })
      )}
    </div>
  );
}

export function AccordionItem({ value, open, onClick, children }) {
  // children[0] = AccordionTrigger, children[1] = AccordionContent
  const [trigger, content] = React.Children.toArray(children);
  return (
    <div className="border-b">
      {React.cloneElement(trigger, { onClick })}
      {open && content}
    </div>
  );
}

export function AccordionTrigger({ children, onClick, className }) {
  return (
    <button
      type="button"
      className={`w-full text-left py-4 font-medium transition-all hover:underline flex justify-between items-center ${
        className || ""
      }`}
      onClick={onClick}
    >
      {children}
      <svg
        className="h-4 w-4 ml-2 transition-transform duration-200"
        viewBox="0 0 24 24"
        fill="none"
        style={{ transform: "rotate(0deg)" }}
      >
        <path
          d="M6 9l6 6 6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export function AccordionContent({ children, className }) {
  return (
    <div className={`pb-2 pt-0 text-gray-700 text-xl ${className || ""}`}>
      {children}
    </div>
  );
}
