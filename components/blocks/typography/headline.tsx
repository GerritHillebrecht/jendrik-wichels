import { cn } from "@/lib/utils";

export function Headline({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn("text-4xl sm:text-36 md:text-54 xl:text-80 font-bold ", className)}
      {...props}
    >
      {children}
    </h1>
  );
}
