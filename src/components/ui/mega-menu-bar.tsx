"use client"
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  ChevronDown,
  GraduationCap,
  MapPin,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
import { Button } from "./button"
import { menuRouter } from "@/components/ui/menuRouter"

const router = menuRouter
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ")
}

export function MegaMenuBar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const menuButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  const [menuPosition, setMenuPosition] = useState<{
    left: number
    top: number
    width: number
  } | null>(null)

  useEffect(() => {
    setActiveMenu(null)
  }, [pathname])

  useLayoutEffect(() => {
    if (activeMenu && menuButtonRefs.current[activeMenu]) {
      const buttonRect =
        menuButtonRefs.current[activeMenu]!.getBoundingClientRect()
      const menuWidth = 900
      const left = Math.min(
        Math.max(16, buttonRect.left + buttonRect.width / 2 - menuWidth / 2),
        window.innerWidth - menuWidth - 16
      )
      const top = buttonRect.bottom - 50
      setMenuPosition({ left, top, width: menuWidth })
    } else {
      setMenuPosition(null)
    }
  }, [activeMenu])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleMenuClick = useCallback(
    (menu: string) =>
      setActiveMenu((current) => (current === menu ? null : menu)),
    []
  )

  const getFeaturedContent = (category: string) => {
    const styles = "h-8 w-8 text-primary"
    switch (category) {
      case "About":
        return {
          title: "About Our Services",
          description: "Learn more about our immigration consulting services.",
          image: "/images/customers/cu1.webp",
          cta: {
            text: "Book a Consultation",
            link: "/about-us/about/book-appointment",
          },
          icon: <BookOpen className={styles} />,
          highlight: {
            title: "Why Choose Us",
            text: "15+ years of experience, helping thousands successfully immigrate.",
            link: "/about-us/about/why-choose-us",
          },
        }
      case "Immigration":
        return {
          title: "Immigration Pathways",
          description:
            "Discover various immigration programs for your situation.",
          image: "/images/customers/cu2.webp",
          cta: {
            text: "Assess Your Eligibility",
            link: "/immigration/express-entry/federal-skilled-trade",
          },
          icon: <MapPin className={styles} />,
          highlight: {
            title: "Express Entry",
            text: "Fastest PR path for skilled workers.",
            link: "/immigration/express-entry/federal-skilled-worker",
          },
        }
      case "Business":
        return {
          title: "Business Immigration",
          description: "Start or expand your business in Canada.",
          image: "/images/customers/cu3.jpeg",
          cta: {
            text: "Business Options",
            link: "/business/quebec/quebec-investor",
          },
          icon: <Briefcase className={styles} />,
          highlight: {
            title: "Start-Up Visa Program",
            text: "Launch innovative ideas with Canadian support.",
            link: "/business/federal-programs/start-up-visa(suv)",
          },
        }
      case "Work And Jobs":
        return {
          title: "Canadian Work Opportunities",
          description: "From work permits to permanent jobs.",
          image: "/images/customers/cu4.webp",
          cta: {
            text: "In-Demand Jobs",
            link: "/work-and-jobs/jobs/in-demand-jobs",
          },
          icon: <Briefcase className={styles} />,
          highlight: {
            title: "LMIA Work Permits",
            text: "Understand LMIA process for work permits.",
            link: "/work-and-jobs/work/lmia",
          },
        }
      case "Study":
        return {
          title: "Study in Canada",
          description: "World-class education + PR pathways.",
          image: "/images/customers/cu5.webp",
          cta: {
            text: "Find Programs",
            link: "/study/programs/study-in-canada",
          },
          icon: <GraduationCap className={styles} />,
          highlight: {
            title: "Post-Graduation Work Permit",
            text: "Gain Canadian work experience.",
            link: "/study/programs/post-graduate-wp",
          },
        }
      case "Other Services":
        return {
          title: "Other Services",
          description: "News and updates",
          image: "/images/customers/cu6.webp",
          cta: {
            text: "Find Programs",
            link: "/other-services/programs/family-sponsorship",
          },
          icon: <GraduationCap className={styles} />,
          highlight: {
            title: "News and Updates",
            text: "Stay informed",
            link: "/other-services/news-service/news",
          },
        }
      default:
        return null
    }
  }

  return (
    <div className="hidden md:flex md:items-center md:justify-between md:flex-1 md:ml-5 md:mr-2">
      <div className="flex items-center space-x-1">
        {router.map((item) => {
          if (!item.children) {
            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium text-primary hover:bg-primary  hover:text-white cursor-pointer transition-colors",
                  pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.element}
              </Link>
            )
          }
          return (
            <div key={item.path} className="relative group">
              <button
                ref={(el) => {
                  menuButtonRefs.current[item.path] = el
                }}
                onClick={() => handleMenuClick(item.path)}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium inline-flex items-center text-primary  hover:bg-primary transition-colors cursor-pointer hover:text-white",
                  activeMenu === item.path
                    ? "text-primary "
                    : "text-muted-foreground"
                )}
              >
                {item.path}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeMenu === item.path && menuPosition && (
                <div
                  ref={menuRef}
                  className="fixed mt-2 bg-card rounded-md shadow-2xl z-50 p-4"
                  style={{
                    left: menuPosition.left,
                    top: menuPosition.top,
                    width: menuPosition.width,
                    maxWidth: "98vw",
                  }}
                >
                  <div className="grid grid-cols-12 gap-4">
                    {(() => {
                      const children = item.children
                      //   const allDirectLinks = children.every((child) => !child.children);
                      const featured = getFeaturedContent(item.path)

                      return (
                        <>
                          {featured && (
                            <div className="col-span-4 space-y-4 border-r border-border pr-6">
                              <div className="flex items-start space-x-3">
                                {featured.icon}
                                <h3 className="text-lg font-semibold text-foreground">
                                  {featured.title}
                                </h3>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {featured.description}
                              </p>
                              <div className="relative h-40 w-full overflow-hidden rounded-lg">
                                <img
                                  src={featured.image}
                                  alt={featured.title}
                                  className="object-cover w-full h-full"
                                />
                              </div>
                              <div className="bg-primary/10 p-4 rounded-lg">
                                <h4 className="font-medium text-primary">
                                  {featured.highlight.title}
                                </h4>
                                <p className="text-sm text-primary mt-1">
                                  {featured.highlight.text}
                                </p>
                                <Link
                                  href={featured.highlight.link}
                                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 mt-2"
                                >
                                  Learn more
                                  <ArrowRight className="ml-1 h-3 w-3" />
                                </Link>
                              </div>
                              <Button asChild className="w-full">
                                <Link href={featured.cta.link}>
                                  {featured.cta.text}
                                </Link>
                              </Button>
                            </div>
                          )}

                          <div
                            className={featured ? "col-span-8" : "col-span-12"}
                          >
                            {children.every((child) => !child.children) ? (
                              <div className="flex flex-wrap gap-x-8 gap-y-4 items-center h-full justify-start pl-8 border-l border-border min-h-[260px]">
                                {children.map((child) => (
                                  <Link
                                    key={child.path}
                                    href={child.path}
                                    className="block text-base font-medium text-foreground hover:text-primary"
                                  >
                                    {child.element}
                                  </Link>
                                ))}
                              </div>
                            ) : (
                              <div className="grid gap-4 grid-cols-3">
                                {children.map((child) => (
                                  <div key={child.path} className="space-y-4">
                                    <h3 className="text-sm font-semibold text-foreground border-b border-border pb-1">
                                      {child.path}
                                    </h3>
                                    <ul className="space-y-2">
                                      {(child.children || []).map(
                                        (subChild) => (
                                          <li key={subChild.path}>
                                            <Link
                                              href={subChild.path}
                                              className="block text-sm text-muted-foreground hover:text-primary"
                                            >
                                              {subChild.element}
                                            </Link>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </>
                      )
                    })()}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
