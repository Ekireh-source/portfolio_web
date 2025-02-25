import Image from "next/image";
import React from "react";

interface MyComponentProps {
  items: Array<{ alt?: string; img?: string; name?: string; icon?: string }>;
}

const SkillsFooter: React.FC<MyComponentProps> = ({ items }) => {
  return (
    <>
      {items &&
        items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg hover:bg-accent transition-colors"
          >
            {item.icon && (
              <Image
                src={item.icon}
                alt={item.alt || item.name || "Icon"}
                width={48} // Equivalent to w-12 (12 * 4px = 48px)
                height={48} // Equivalent to h-12
                className="object-contain"
              />
            )}
            <span className="text-sm text-center font-medium text-muted-foreground">
              {item.name}
            </span>
          </div>
        ))}
    </>
  );
};

export default SkillsFooter;
