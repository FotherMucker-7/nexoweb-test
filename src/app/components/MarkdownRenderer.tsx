import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl md:text-5xl font-display font-black mb-8 leading-tight tracking-tighter uppercase border-b-4 border-foreground pb-4 shadow-[4px_4px_0px_var(--shadow-solid)]">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 mb-6 p-4 bg-muted border-2 border-foreground shadow-[4px_4px_0px_var(--shadow-solid)]">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl md:text-2xl font-display font-bold mt-8 mb-4 border-l-8 border-primary pl-4">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-lg leading-relaxed mb-6 font-sans font-normal opacity-90">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-none mb-8 space-y-3 pl-2">
              {children}
            </ul>
          ),
          li: ({ children }) => (
            <li className="flex items-start gap-3 before:content-[''] before:mt-2 before:w-3 before:h-3 before:bg-color-magenta before:border before:border-foreground before:shadow-[2px_2px_0px_var(--shadow-solid)]">
              <span className="flex-1">{children}</span>
            </li>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-10 border-2 border-foreground shadow-[6px_6px_0px_var(--shadow-solid)]">
              <table className="w-full text-left border-collapse">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-primary text-primary-foreground">
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th className="p-4 border-r border-foreground border-opacity-20 font-display font-bold uppercase tracking-wider">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="p-4 border-t border-r border-foreground border-opacity-20 font-sans">
              {children}
            </td>
          ),
          strong: ({ children }) => (
            <strong className="font-bold border-b-2 border-color-cyan bg-color-cyan/10">
              {children}
            </strong>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-8 p-6 bg-accent border-r-8 border-b-8 border-foreground shadow-[8px_8px_0px_var(--color-orange)] italic text-xl">
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
