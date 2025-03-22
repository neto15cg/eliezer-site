import React from "react";

export const Section = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <div className="max-w-2xl mx-auto opacity-0 animate-fadeIn">
      <div className="space-y-12">
        <section className="space-y-4">
          {title && (
            <h2 className="text-3xl font-bold text-secondary-500 mb-6">
              {title}
            </h2>
          )}
          {children}
        </section>
      </div>
    </div>
  );
};
