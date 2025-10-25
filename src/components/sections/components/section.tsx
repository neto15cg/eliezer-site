import React from "react";

export const Section = ({
  children,
  title,
  id,
}: {
  children: React.ReactNode;
  title?: string;
  id?: string;
}) => {
  return (
    <div className="w-full opacity-0 animate-fadeIn">
      <div className="space-y-8">
        <section id={id} className="space-y-6">
          {title && (
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-400 mb-4 leading-tight">
                {title}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-secondary-500 to-secondary-300"></div>
            </div>
          )}
          <div className="prose prose-lg prose-invert max-w-none">
            {children}
          </div>
        </section>
      </div>
    </div>
  );
};
