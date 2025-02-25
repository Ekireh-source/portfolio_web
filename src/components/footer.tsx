import Link from "next/link";

export default function PublicFooter() {
  const footerNavs = [
    { href: "/education", name: "Education" },
    { href: "/projects", name: "Projects" },
    { href: "/skills", name: "Skills" },
    { href: "/about", name: "About me" },
  ];

  return (
    <footer className="sticky bottom-0 w-full bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-300 dark:border-gray-600 pt-4">
          <p className="text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-6 mt-4 sm:mt-0">
            {footerNavs.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="text-gray-800 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
