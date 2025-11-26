"use client"

import {Link} from "@heroui/link";
import {siteConfig} from "@/config/site";
import {subtitle, title} from "@/components/primitives";
import {
  ArrowUpRight,
  Card1Icon, Card2Icon, Card3Icon, ChevronLeft, ChevronLightLeft, ChevronLightRight, ChevronRight, CrownIcon,
  Logoipsum1Icon,
  Logoipsum2Icon,
  Logoipsum3Icon,
  Logoipsum4Icon,
  ProfileIcon, QuotesIcon,
  RightIcon
} from "@/components/icons";
import {Card, CardBody, CardHeader} from "@heroui/card";
import {useRef} from "react";
import {Image} from "@heroui/image";
import {Button} from "@heroui/button";
import {Accordion, AccordionItem, Avatar, Divider} from "@heroui/react";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 480;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth"
    });
  }

  const items = [
    {
      title: "Soulful Rebrand",
      category: "Branding",
      image: "/images/img1.svg"
    },
    {
      title: "Datadash Product Design",
      category: "Product Design",
      image: "/images/img2.svg"
    },
    {
      title: "Maize Website Design",
      category: "Web Design",
      image: "/images/img3.svg"
    },
    {
      title: "Soulful Rebrand",
      category: "Branding",
      image: "/images/img1.svg"
    },
    {
      title: "Datadash Product Design",
      category: "Product Design",
      image: "/images/img2.svg"
    },
    {
      title: "Maize Website Design",
      category: "Web Design",
      image: "/images/img3.svg"
    },
  ];

  const posts = [
    {
      date: "April 16, 2021",
      reading: "6 mins",
      title: "Design tips for designers, that cover everything you need"
    },
    {
      date: "April 16, 2021",
      reading: "5 mins",
      title: "How to build rapport with your web design clients"
    },
    {
      date: "April 16, 2021",
      reading: "5 mins",
      title: "Top 6 free website mockup tools 2021"
    },
    {
      date: "April 16, 2021",
      reading: "7 mins",
      title: "Logo design trends to avoid in 2021"
    },
    {
      date: "April 16, 2021",
      reading: "7 mins",
      title: "22 best UI design tools"
    }
  ];

  const education = [
    {
      title: "Stanford University",
      subtitle: "MSc (Human Computer Interaction)",
      dates: "2013–2015"
    },
    {
      title: "MIT Summer School",
      subtitle: "UX Training Bootcamp",
      dates: "2013–2014"
    },
    {
      title: "California State University",
      subtitle: "BSc in Software Engineering",
      dates: "2009–2012"
    }
  ];

  const experience = [
    {
      icon: "rocket",
      title: "SpaceFleet",
      subtitle: "Senior Product Designer",
      dates: "April 2019 – Current"
    },
    {
      icon: "note",
      title: "MusicMash",
      subtitle: "Information Architect",
      dates: "April 2016 – May 2017"
    },
    {
      icon: "crown",
      title: "Kingdom",
      subtitle: "UI Designer",
      dates: "April 2016 – May 2017"
    }
  ];

  const faqs = [
    {q: "What type of projects do you take on?", a: "I work on web, product, and brand design projects."},
    {q: "What is your hourly rate?", a: "My hourly rate varies depending on project scope."},
    {q: "What time-zone do you work in?", a: "I work primarily in the GMT time-zone."},
    {q: "What is the typical timeline for a project?", a: "Most projects take 2–6 weeks depending on complexity."},
    {q: "How do you charge for projects?", a: "I offer fixed-price and retainer-based billing."},
    {q: "What does your design process look like?", a: "Discovery → Research → Design → Iterate → Deliver."},
    {q: "What metrics do you use to measure success?", a: "Conversion, usability, retention, and client KPIs."},
    {q: "What if I need help after the project is complete?", a: "I offer ongoing support and maintenance packages."},
  ];

  return (
    <div>
      <section className="flex flex-row items-center justify-between px-36 pt-10">
        <div className="flex flex-col items-left justify-center gap-4 py-8 md:py-10">
          <div className="inline-block max-w-xl text-left justify-center">
            <span className="text-[#FF8A56] text-4xl lg:text-5xl font-semibold">I design products&nbsp;</span>
            <br/>
            <span className="text-[2.3rem] lg:text-5xl font-semibold">
            that delight and <br/> inspire people.
          </span>
            <div className={subtitle({class: "mt-4"})}>
              Hi! I’m Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing
              startups.
            </div>
          </div>

          <div className="flex">
            <Link
              isExternal
              className="border-none bg-black text-white px-5 py-2.5"
              href={siteConfig.links.docs}
            >
              Book a call
            </Link>
            <Link
              isExternal
              className="border-none bg-white text-black px-10 py-2.5"
              href={siteConfig.links.github}
            >
              <span className="pr-5">Download CV</span>
              <RightIcon/>
            </Link>
          </div>
        </div>
        <div className="h-96">
          <ProfileIcon/>
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center justify-center">
          <p className={subtitle({class: "mt-4 flex justify-center"})}>
            Trusted by
          </p>
          <div className="flex flex-row items-center justify-between gap-20 pt-8">
            <Logoipsum1Icon/>
            <Logoipsum2Icon/>
            <Logoipsum3Icon/>
            <Logoipsum4Icon/>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center justify-center mt-25">
          <div className="flex flex-col items-center justify-center text-center pb-10">
            <span className="text-[#FF5E69] text-1xl lg:text-2xl font-semibold uppercase py-5">Services</span>
            <span className={title()}>Design that solves problems,<br/> one product at a time.</span>
          </div>
          <div className="flex flex-row items-center justify-between pt-8 gap-5">
            <Card className="py-4" radius="none" shadow="none">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <Card1Icon/>
                <h2 className="font-bold text-large py-5">What I can do for you</h2>
              </CardHeader>
              <CardBody className="overflow-visible py-2 pl-5">
                <p className="text-default-500 font-regular pb-5">Faster, better products that your <br/> users love.
                  Here's all the services I provide:</p>
                <ul className="list-disc">
                  <li className="py-5 font-bold text-small">Design Strategy</li>
                  <li className="pb-5 font-bold text-small">Design Strategy</li>
                  <li className="pb-5 font-bold text-small">Design Strategy</li>
                </ul>
              </CardBody>
            </Card>

            <Card className="py-4" radius="none" shadow="none">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <Card2Icon/>
                <h2 className="font-bold text-large py-5">What I can do for you</h2>
              </CardHeader>
              <CardBody className="overflow-visible py-2 pl-5">
                <p className="text-default-500 font-regular pb-5">Faster, better products that your <br/> users love.
                  Here's all the services I provide:</p>
                <ul className="list-disc">
                  <li className="py-5 font-bold text-small">Design Strategy</li>
                  <li className="pb-5 font-bold text-small">Design Strategy</li>
                  <li className="pb-5 font-bold text-small">Design Strategy</li>
                </ul>
              </CardBody>
            </Card>

            <Card className="py-4" radius="none" shadow="none">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <Card3Icon/>
                <h2 className="font-bold text-large py-5">What I can do for you</h2>
              </CardHeader>
              <CardBody className="overflow-visible py-2 pl-5">
                <p className="text-default-500 font-regular pb-5">Faster, better products that your <br/> users love.
                  Here's all the services I provide:</p>
                <ul className="list-disc">
                  <li className="py-5 font-bold text-small">Design Strategy</li>
                  <li className="pb-5 font-bold text-small">Design Strategy</li>
                  <li className="pb-5 font-bold text-small">Design Strategy</li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full">
        {/* Top row (title + button) */}
        <div className="flex flex-row items-center justify-between relative top-25 px-20">
          <div className="flex flex-col justify-center pb-10">
      <span className="text-[#B16CEA] text-1xl lg:text-xl font-semibold uppercase py-5">
        PROJECTS
      </span>

            <span className={title()}>
        I bring results.
        <br/> My clients are proof.
      </span>
          </div>

          <Button
            variant="solid"
            className="mt-2 px-5 py-6 text-base bg-black text-white"
            radius="none"
          >
            View all projects
          </Button>
        </div>

        {/* Carousel section */}
        <div className="relative top-47 px-20 w-full">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4"
          >
            {items.map((item, idx) => (
              <Card key={idx} className="min-w-[450px]" shadow="sm" radius="none">
                <CardHeader className="p-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    removeWrapper
                    className="h-48 w-full object-cover"
                    radius="none"
                  />
                </CardHeader>

                <CardBody className="py-5">
                  <p className="uppercase text-xs text-[#3C46FF] font-semibold">
                    {item.category}
                  </p>

                  <h3 className="text-xl font-bold py-5">{item.title}</h3>

                  <Button
                    variant="light"
                    className="mt-2 p-0 text-base"
                    endContent={<ChevronRight size={16}/>}
                  >
                    View Project
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Arrow Controls */}
          <div className="absolute right-20 flex gap-2">
            <Button isIconOnly variant="solid" onPress={() => scroll("left")}>
              <ChevronLeft/>
            </Button>

            <Button isIconOnly variant="solid" onPress={() => scroll("right")}>
              <ChevronRight/>
            </Button>
          </div>
        </div>
      </section>


      <section className="bg-black text-white px-36">
        <div className="flex flex-row items-top justify-between pt-60 gap-55">
          <div className="flex flex-col items-left justify-start pt-10">
            <span className="text-[#FFA84B] text-1xl lg:text-xl font-semibold uppercase py-5 text-left">Blogs</span>
            <span className={title()}>Latest Blogs</span>
            <div className="item-left">
              <Button
                variant="solid"
                className="mt-2 pr-5 py-6 text-base bg-black text-white" radius="none"
                endContent={<ChevronRight size={14} color="#ffffff"/>}
              >
                View all projects
              </Button>
            </div>
          </div>
          <div className="bg-black text-white w-auto max-w-2xl mx-auto py-10">
            {posts.map((post, i) => (
              <div key={i} className="py-6">
                <p className="text-sm opacity-70">
                  {post.date} · {post.reading}
                </p>

                <h2 className="text-xl font-semibold mt-2">{post.title}</h2>

                <Link
                  href="#"
                  underline="none"
                  className="flex items-center gap-2 mt-3 text-white lg:text-sm  pt-3 pr-2"
                >
                  Read the article →
                </Link>

                <Divider className="mt-6 bg-white/20"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-36">
        <div className="flex flex-col items-center justify-between pt-20">
          <div className="flex flex-row justify-between items-center w-full py-20">
            <div className="flex flex-col items-left w-[50%]">
              <span className="text-[#FF5E69] text-1xl lg:text-xl font-semibold uppercase py-5 text-left">Product Designer</span>
              <span className={title()}>Latest Blogs</span>
            </div>
            <div className="w-[50%]">
              <span className={subtitle()}>Over the past 12 years, I've worked with a diverse range of clients, from startups to Fortune 500 companies. I love crafting interfaces that delight users and help businesses grow.</span>
            </div>
          </div>
          <div className="flex flex-row w-full gap-5 ">
            <Card radius="none">
              <CardBody className="p-0">
                <Image
                  alt="Woman listing to music"
                  className="object-cover"
                  height={620}
                  src="/images/prod1.svg"
                  width={330}
                  removeWrapper
                  radius="none"
                />
              </CardBody>
            </Card>
            <Card radius="none">
              <CardBody className="p-0">
                <Image
                  alt="Woman listing to music"
                  className="object-cover"
                  height={620}
                  src="/images/prod2.svg"
                  width={500}
                  removeWrapper
                  radius="none"
                />
              </CardBody>
            </Card>
            <div className="flex flex-col justify-between">
              <Card radius="none">
                <CardBody className="p-0">
                  <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    height={300}
                    src="/images/prod3.svg"
                    width={330}
                    radius="none"
                  />
                </CardBody>
              </Card>
              <Card radius="none">
                <CardBody className="p-0">
                  <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    height={300}
                    src="/images/prod4.svg"
                    width={330}
                    radius="none"
                  />
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full py-20">
          <div>
            <span className="text-1xl lg:text-2xl font-medium uppercase text-left">📚 Education</span>
            <div className="pt-10">
              {education.map((item, i) => (
                <div key={i} className="py-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm opacity-70">{item.subtitle}</p>
                    </div>

                    <div className="flex items-center gap-1 text-sm opacity-70">
                      {item.dates}
                      <ArrowUpRight size={14} className="opacity-60"/>
                    </div>
                  </div>

                  <Divider className="mt-4 bg-black/10"/>
                </div>
              ))}

            </div>
          </div>
          <div>
            <span className="text-1xl lg:text-2xl font-medium uppercase py-5 text-left">💼 Work Experience</span>
            <div className="pt-10">
              {experience.map((item, i) => (
                <div key={i} className="py-4">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-3 items-start">
                      <Avatar size="md"
                              showFallback
                              classNames={{
                                base: "bg-[#FFC960]"
                              }}
                              fallback={
                                <CrownIcon
                                  className="animate-pulse w-6 h-6 text-default-500"
                                  fill="currentColor"
                                  size={20}
                                />
                              }
                              src="https://images.unsplash.com/broken"
                      />
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm opacity-70">{item.subtitle}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-sm opacity-70 whitespace-nowrap">
                      {item.dates}
                      <ArrowUpRight size={14} className="opacity-60"/>
                    </div>
                  </div>

                  <Divider className="mt-4 bg-black/10"/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-36">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-left w-[50%]">
            <span
              className="text-[#4353FF] text-1xl lg:text-xl font-semibold uppercase py-5 text-left">Testimonials</span>
            <span className={title()}>Word on the street</span>
          </div>
        </div>
        <div className="flex flex-row justify-between py-20">
          <div>
            <Image
              alt="Woman listing to music"
              className="object-cover"
              height={450}
              src="/images/niger.svg"
              width={485}
              radius="none"
            />
          </div>
          <div className="flex flex-col justify-between w-[50%]">
            <div className="flex flex-col items-left ">
              <QuotesIcon/>
              <span className="text-4xl lg:text-4xl font-bold py-8 text-left">Jade helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design.</span>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col items-left ">
                <span className="text-xl lg:text-xl font-semibold">John Frankin</span>
                <span>Founder, Double Bunch</span>
              </div>
              <div className="flex flex-row">
                <Button isIconOnly variant="solid" radius="none" onPress={() => scroll("left")} className="bg-black">
                  <ChevronLightLeft/>
                </Button>

                <Button isIconOnly variant="solid" radius="none" onPress={() => scroll("right")} className="bg-black">
                  <ChevronLightRight/>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-36 flex-grow bg-black">
        <div className="px-6 text-white">
          <div className="flex flex-col items-center py-10">
            <p className="text-center text-2xl font-semibold text-[#FF8A56] tracking-wide mb-2">
              FAQ
            </p>

            <h2 className={title()}>
              Frequently asked questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white py-10">
            {faqs.map((item, i) => (
              <Accordion key={i} variant="splitted" showDivider={true}>
                <AccordionItem
                  key={i}
                  aria-label={item.q}
                  title={item.q}
                  classNames={{
                    base: "bg-black border-0 text-2xl font-semibold lg:text-2xl",
                    trigger: "border-b border-neutral-800 py-8",
                    title: "text-white",
                    subtitle: "text-white",
                    content: "text-white ",
                  }}
                >
                  {item.a}
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
