import { features } from "@/app/(pages)/about-us/about/about/page";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import { FeatureGrid4 } from "@/components/ui/feature-grid4";
import { Feature3 } from "@/components/ui/feature3";
import { Hero2 } from "@/components/ui/hero2";
import { commonProps } from "@/constant/commonProps";
import React from "react";

// src/config/gridMajor.ts

export interface FeatureItemData {
  title: string;
  description: string;
}

export interface GridMajorConfig {
  title: string;
  description: string;
  features: FeatureItemData[];
}

export const gridMajor: GridMajorConfig[] = [
  {
    title: "TEER 0",
    description: "NOC Codes and Job",
    features: [
      {
        title: "10020",
        description: "Insurance, real estate and financial brokerage managers",
      },
      {
        title: "10012	",
        description: "Purchasing managers",
      },
      {
        title: "10019",
        description: "Other administrative services managers",
      },
      {
        title: "10011	",
        description: "Human resources managers.",
      },
      {
        title: "10010	",
        description: "Financial managers",
      },
      {
        title: "10021",
        description: "Banking, credit and other investment managers",
      },
      {
        title: "10022",
        description: "Advertising, marketing and public relations managers",
      },
      { title: "10029", description: "Other business services managers" },
      { title: "10030", description: "Telecommunication carriers managers" },
      { title: "20010", description: "Engineering managers" },
      { title: "20011", description: "Architecture and science managers" },
      {
        title: "20012",
        description: "Computer and information systems managers",
      },
      { title: "30010", description: "Managers in health care" },
      {
        title: "40010",
        description:
          "Government managers – health and social policy development and program administration",
      },
      {
        title: "40011",
        description:
          "Government managers – economic analysis, policy development and program administration",
      },
      {
        title: "40012",
        description:
          "Government managers – education policy development and program administration",
      },
      {
        title: "40019",
        description: "Other managers in public administration",
      },
      {
        title: "40020",
        description:
          "Administrators – post-secondary education and vocational training",
      },
      {
        title: "40021",
        description:
          "School principals and administrators of elementary and secondary education",
      },
      {
        title: "40030",
        description: "Managers in social, community and correctional services",
      },
      {
        title: "40040",
        description:
          "Commissioned police officers and related occupations in public protection services",
      },
      {
        title: "40041",
        description: "Fire chiefs and senior firefighting officers",
      },
      {
        title: "40042",
        description: "Commissioned officers of the Canadian Armed Forces",
      },
      {
        title: "50010",
        description: "Library, archive, museum and art gallery managers",
      },
      {
        title: "50011",
        description:
          "Managers – publishing, motion pictures, broadcasting and performing arts",
      },
      {
        title: "50012",
        description:
          "Recreation, sports and fitness program and service directors",
      },
      { title: "60010", description: "Corporate sales managers" },
      { title: "60020", description: "Retail and wholesale trade managers" },
      { title: "60030", description: "Restaurant and food service managers" },
      { title: "60031", description: "Accommodation service managers" },
      {
        title: "60040",
        description: "Managers in customer and personal services",
      },
      { title: "70010", description: "Construction managers" },
      { title: "70011", description: "Home building and renovation managers" },
      {
        title: "70012",
        description: "Facility operation and maintenance managers",
      },
      { title: "70020", description: "Managers in transportation" },
      { title: "70021", description: "Postal and courier services managers" },
      {
        title: "80010",
        description: "Managers in natural resources production and fishing",
      },
      { title: "80020", description: "Managers in agriculture" },
      { title: "80021", description: "Managers in horticulture" },
      { title: "80022", description: "Managers in aquaculture" },
    ],
  },
  {
    title: "TEER 1",
    description: "NOC Codes and Job",
    features: [
      { title: "11100", description: "Financial auditors and accountants" },
      { title: "11101", description: "Financial and investment analysts" },
      { title: "11102", description: "Financial advisors" },
      {
        title: "11103",
        description: "Securities agents, investment dealers and brokers",
      },
      { title: "11109", description: "Other financial officers" },
      { title: "11200", description: "Human resources professionals" },
      {
        title: "11201",
        description:
          "Professional occupations in business management consulting",
      },
      {
        title: "11202",
        description:
          "Professional occupations in advertising, marketing and public relations",
      },
      { title: "12100", description: "Executive assistants" },
      {
        title: "12101",
        description: "Human resources and recruitment officers",
      },
      {
        title: "12102",
        description: "Procurement and purchasing agents and officers",
      },
      { title: "12103", description: "Conference and event planners" },
      {
        title: "12104",
        description: "Employment insurance and revenue officers",
      },
      {
        title: "12110",
        description:
          "Court reporters, medical transcriptionists and related occupations",
      },
      {
        title: "12111",
        description: "Health information management occupations",
      },
      { title: "12112", description: "Records management technicians" },
      {
        title: "12113",
        description:
          "Statistical officers and related research support occupations",
      },
      { title: "12200", description: "Accounting technicians and bookkeepers" },
      {
        title: "12201",
        description: "Insurance adjusters and claims examiners",
      },
      { title: "12202", description: "Insurance underwriters" },
      {
        title: "12203",
        description: "Assessors, business valuators and appraisers",
      },
      { title: "13100", description: "Administrative officers" },
      { title: "13101", description: "Property administrators" },
      { title: "13102", description: "Payroll administrators" },
      { title: "13110", description: "Administrative assistants" },
      { title: "13111", description: "Legal administrative assistants" },
      { title: "13112", description: "Medical administrative assistants" },
      { title: "13200", description: "Customs, ship and other brokers" },
      {
        title: "13201",
        description: "Production and transportation logistics coordinators",
      },
      { title: "21100", description: "Physicists and astronomers" },
      { title: "21101", description: "Chemists" },
      { title: "21102", description: "Geoscientists and oceanographers" },
      { title: "21103", description: "Meteorologists and climatologists" },
      {
        title: "21109",
        description: "Other professional occupations in physical sciences",
      },
      { title: "21110", description: "Biologists and related scientists" },
      { title: "21111", description: "Forestry professionals" },
      {
        title: "21112",
        description:
          "Agricultural representatives, consultants and specialists",
      },
      {
        title: "21120",
        description: "Public and environmental health and safety professionals",
      },
      { title: "21200", description: "Architects" },
      { title: "21201", description: "Landscape architects" },
      { title: "21202", description: "Urban and land use planners" },
      { title: "21203", description: "Land surveyors" },
      {
        title: "21210",
        description: "Mathematicians, statisticians and actuaries",
      },
      { title: "21211", description: "Data scientists" },
      { title: "21220", description: "Cybersecurity specialists" },
      { title: "21221", description: "Business systems specialists" },
      { title: "21222", description: "Information systems specialists" },
      {
        title: "21223",
        description: "Database analysts and data administrators",
      },
      {
        title: "21230",
        description: "Computer systems developers and programmers",
      },
      { title: "21231", description: "Software engineers and designers" },
      { title: "21232", description: "Software developers and programmers" },
      { title: "21233", description: "Web designers" },
      { title: "21234", description: "Web developers and programmers" },
      { title: "21300", description: "Civil engineers" },
      { title: "21301", description: "Mechanical engineers" },
      { title: "21310", description: "Electrical and electronics engineers" },
      {
        title: "21311",
        description:
          "Computer engineers (except software engineers and designers)",
      },
      { title: "21320", description: "Chemical engineers" },
      { title: "21321", description: "Industrial and manufacturing engineers" },
      { title: "21322", description: "Metallurgical and materials engineers" },
      { title: "21330", description: "Mining engineers" },
      { title: "21331", description: "Geological engineers" },
      { title: "21332", description: "Petroleum engineers" },
      { title: "21390", description: "Aerospace engineers" },
      { title: "21399", description: "Other professional engineers" },
      {
        title: "31100",
        description: "Specialists in clinical and laboratory medicine",
      },
      { title: "31101", description: "Specialists in surgery" },
      {
        title: "31102",
        description: "General practitioners and family physicians",
      },
      { title: "31103", description: "Veterinarians" },
      { title: "31110", description: "Dentists" },
      { title: "31111", description: "Optometrists" },
      {
        title: "31112",
        description: "Audiologists and speech-language pathologists",
      },
      { title: "31120", description: "Pharmacists" },
      { title: "31121", description: "Dietitians and nutritionists" },
      { title: "31200", description: "Psychologists" },
      { title: "31201", description: "Chiropractors" },
      { title: "31202", description: "Physiotherapists" },
      { title: "31203", description: "Occupational therapists" },
      {
        title: "31204",
        description:
          "Kinesiologists and other professional occupations in therapy and assessment",
      },
      {
        title: "31209",
        description:
          "Other professional occupations in health diagnosing and treating",
      },
      { title: "31300", description: "Nursing coordinators and supervisors" },
      {
        title: "31301",
        description: "Registered nurses and registered psychiatric nurses",
      },
      { title: "31302", description: "Nurse practitioners" },
      {
        title: "31303",
        description:
          "Physician assistants, midwives and allied health professionals",
      },
    ],
  },
  {
    title: "TEER 2",
    description: "NOC Codes and Job",
    features: [
      {
        title: "12010",
        description:
          "Supervisors, general office and administrative support workers",
      },
      {
        title: "12011",
        description: "Supervisors, finance and insurance office workers",
      },
      {
        title: "12012",
        description:
          "Supervisors, library, correspondence and related information workers",
      },
      {
        title: "12013",
        description:
          "Supervisors, supply chain, tracking and scheduling coordination occupations",
      },
      { title: "12100", description: "Executive assistants" },
      {
        title: "12101",
        description: "Human resources and recruitment officers",
      },
      {
        title: "12102",
        description: "Procurement and purchasing agents and officers",
      },
      { title: "12103", description: "Conference and event planners" },
      {
        title: "12104",
        description: "Employment insurance and revenue officers",
      },
      {
        title: "12110",
        description:
          "Court reporters, medical transcriptionists and related occupations",
      },
      {
        title: "12111",
        description: "Health information management occupations",
      },
      { title: "12112", description: "Records management technicians" },
      {
        title: "12113",
        description:
          "Statistical officers and related research support occupations",
      },
      { title: "12200", description: "Accounting technicians and bookkeepers" },
      {
        title: "12201",
        description: "Insurance adjusters and claims examiners",
      },
      { title: "12202", description: "Insurance underwriters" },
      {
        title: "12203",
        description: "Assessors, business valuators and appraisers",
      },
      { title: "13100", description: "Administrative officers" },
      { title: "13101", description: "Property administrators" },
      { title: "13102", description: "Payroll administrators" },
      { title: "13110", description: "Administrative assistants" },
      { title: "13111", description: "Legal administrative assistants" },
      { title: "13112", description: "Medical administrative assistants" },
      { title: "13200", description: "Customs, ship and other brokers" },
      {
        title: "13201",
        description: "Production and transportation logistics coordinators",
      },
      { title: "22100", description: "Chemical technologists and technicians" },
      {
        title: "22101",
        description: "Geological and mineral technologists and technicians",
      },
      {
        title: "22110",
        description: "Biological technologists and technicians",
      },
      {
        title: "22111",
        description: "Agricultural and fish products inspectors",
      },
      { title: "22112", description: "Forestry technologists and technicians" },
      { title: "22113", description: "Conservation and fishery officers" },
      {
        title: "22114",
        description: "Landscape and horticulture technicians and specialists",
      },
      {
        title: "22210",
        description: "Architectural technologists and technicians",
      },
      { title: "22211", description: "Industrial designers" },
      { title: "22212", description: "Drafting technologists and technicians" },
      {
        title: "22213",
        description: "Land survey technologists and technicians",
      },
      {
        title: "22214",
        description: "Technical occupations in geomatics and meteorology",
      },
      { title: "22220", description: "Computer network and web technicians" },
      { title: "22221", description: "User support technicians" },
      {
        title: "22222",
        description: "Information systems testing technicians",
      },
      { title: "22230", description: "Non-destructive testers and inspectors" },
      {
        title: "22231",
        description: "Engineering inspectors and regulatory officers",
      },
      {
        title: "22232",
        description: "Occupational health and safety specialists",
      },
      { title: "22233", description: "Construction inspectors" },
      {
        title: "22300",
        description: "Civil engineering technologists and technicians",
      },
      {
        title: "22301",
        description: "Mechanical engineering technologists and technicians",
      },
      {
        title: "22302",
        description:
          "Industrial engineering and manufacturing technologists and technicians",
      },
      { title: "22303", description: "Construction estimators" },
      {
        title: "22310",
        description:
          "Electrical and electronics engineering technologists and technicians",
      },
      {
        title: "22311",
        description:
          "Electronic service technicians (household and business equipment)",
      },
      {
        title: "22312",
        description: "Industrial instrument technicians and mechanics",
      },
      {
        title: "22313",
        description:
          "Aircraft instrument, electrical and avionics mechanics, technicians and inspectors",
      },
      {
        title: "24100",
        description: "Early childhood educators and assistants",
      },
      {
        title: "24101",
        description: "Instructors of persons with disabilities",
      },
      {
        title: "24102",
        description: "Early childhood educators and assistants",
      }, // if duplicate needed
      // ... continue TEER 2 lists
    ],
  },
  {
    title: "TEER 3",
    description: "NOC Codes and Job",
    features: [
      {
        title: "33100",
        description: "Dental assistants and dental laboratory assistants",
      },
      {
        title: "33101",
        description:
          "Medical laboratory assistants and related technical occupations",
      },
      {
        title: "33102",
        description: "Nurse aides, orderlies and patient service associates",
      },
      {
        title: "33103",
        description: "Pharmacy technical assistants and pharmacy assistants",
      },
      {
        title: "33109",
        description:
          "Other assisting occupations in support of health services",
      },
      {
        title: "43100",
        description: "Elementary and secondary school teacher assistants",
      },
      { title: "43109", description: "Other instructors" },
      { title: "43200", description: "Sheriffs and bailiffs" },
      { title: "43201", description: "Correctional service officers" },
      {
        title: "43202",
        description: "By-law enforcement and other regulatory officers",
      },
      {
        title: "43203",
        description: "Border services, customs, and immigration officers",
      },
      {
        title: "43204",
        description: "Operations members of the Canadian Armed Forces",
      },
      {
        title: "53100",
        description:
          "Registrars, restorers, interpreters and other occupations related to museums and art galleries",
      },
      { title: "53110", description: "Photographers" },
      {
        title: "53111",
        description:
          "Motion pictures, broadcasting, photography and performing arts assistants and operators",
      },
      { title: "53120", description: "Dancers" },
      {
        title: "53121",
        description: "Actors, comedians and circus performers",
      },
      {
        title: "53122",
        description: "Painters, sculptors and other visual artists",
      },
      {
        title: "53123",
        description: "Theatre, fashion, exhibit and other creative designers",
      },
      { title: "53124", description: "Artisans and craftspersons" },
      {
        title: "53125",
        description: "Patternmakers – textile, leather and fur products",
      },
      { title: "53200", description: "Athletes" },
      { title: "53201", description: "Coaches" },
      { title: "53202", description: "Sports officials and referees" },
      // ... continue TEER 3 lists
    ],
  },
  {
    title: "TEER 4",
    description: "NOC Codes and Job",
    features: [
      { title: "14100", description: "General office support workers" },
      { title: "14101", description: "Receptionists" },
      { title: "14102", description: "Personnel clerks" },
      {
        title: "14103",
        description: "Court clerks and related court services occupations",
      },
      {
        title: "14110",
        description: "Survey interviewers and statistical clerks",
      },
      { title: "14111", description: "Data entry clerks" },
      {
        title: "14112",
        description: "Desktop publishing operators and related occupations",
      },
      { title: "14200", description: "Accounting and related clerks" },
      {
        title: "14201",
        description: "Banking, insurance and other financial clerks",
      },
      { title: "14202", description: "Collection clerks" },
      { title: "14300", description: "Library assistants and clerks" },
      {
        title: "14301",
        description: "Correspondence, publication and regulatory clerks",
      },
      { title: "14400", description: "Shippers and receivers" },
      { title: "14401", description: "Storekeepers and partspersons" },
      { title: "14402", description: "Production logistics workers" },
      {
        title: "14403",
        description: "Purchasing and inventory control workers",
      },
      { title: "14404", description: "Dispatchers" },
      {
        title: "14405",
        description: "Transportation route and crew schedulers",
      },
      { title: "44100", description: "Home child care providers" },
      {
        title: "44101",
        description: "Home support workers, caregivers and related occupations",
      },
      {
        title: "44200",
        description: "Primary combat members of the Canadian Armed Forces",
      },
      {
        title: "74200",
        description: "Railway yard and track maintenance workers",
      },
      {
        title: "74201",
        description: "Water transport deck and engine room crew",
      },
      { title: "74202", description: "Air transport ramp attendants" },
      {
        title: "74203",
        description:
          "Automotive and heavy truck and equipment parts installers and servicers",
      },
      { title: "74204", description: "Utility maintenance workers" },
      {
        title: "74205",
        description:
          "Public works maintenance equipment operators and related workers",
      },
      {
        title: "94100",
        description: "Machine operators, mineral and metal processing",
      },
      { title: "94101", description: "Foundry workers" },
      {
        title: "94102",
        description:
          "Glass forming and finishing machine operators and glass cutters",
      },
      {
        title: "94103",
        description: "Concrete, clay and stone forming operators",
      },
      {
        title: "94104",
        description: "Inspectors and testers, mineral and metal processing",
      },
      {
        title: "94105",
        description: "Metalworking and forging machine operators",
      },
      { title: "94106", description: "Machining tool operators" },
      {
        title: "94107",
        description: "Machine operators of other metal products",
      },
      { title: "94110", description: "Chemical plant machine operators" },
      { title: "94111", description: "Plastics processing machine operators" },
      {
        title: "94112",
        description: "Rubber processing machine operators and related workers",
      },
      { title: "94120", description: "Sawmill machine operators" },
      {
        title: "94121",
        description: "Pulp mill, papermaking and finishing machine operators",
      },
      { title: "94122", description: "Paper converting machine operators" },
      {
        title: "94123",
        description:
          "Lumber graders and other wood processing inspectors and graders",
      },
      { title: "94124", description: "Woodworking machine operators" },
      {
        title: "94129",
        description: "Other wood processing machine operators",
      },
      {
        title: "94130",
        description:
          "Textile fibre and yarn, hide and pelt processing machine operators and workers",
      },
      {
        title: "94131",
        description: "Weavers, knitters and other fabric making occupations",
      },
      { title: "94132", description: "Industrial sewing machine operators" },
      {
        title: "94133",
        description:
          "Inspectors and graders, textile, fabric, fur and leather products manufacturing",
      },
      {
        title: "94200",
        description: "Motor vehicle assemblers, inspectors and testers",
      },
      {
        title: "94201",
        description:
          "Electronics assemblers, fabricators, inspectors and testers",
      },
      {
        title: "94202",
        description:
          "Assemblers and inspectors, electrical appliance, apparatus and equipment manufacturing",
      },
      {
        title: "94203",
        description:
          "Assemblers, fabricators and inspectors, industrial electrical motors and transformers",
      },
      { title: "94204", description: "Mechanical assemblers and inspectors" },
      {
        title: "94205",
        description:
          "Machine operators and inspectors, electrical apparatus manufacturing",
      },
      {
        title: "94210",
        description:
          "Furniture and fixture assemblers, finishers, refinishers and inspectors",
      },
      {
        title: "94211",
        description: "Assemblers and inspectors of other wood products",
      },
      {
        title: "94212",
        description: "Plastic products assemblers, finishers and inspectors",
      },
      {
        title: "94213",
        description:
          "Industrial painters, coaters and metal finishing process operators",
      },
      {
        title: "94219",
        description: "Other products assemblers, finishers and inspectors",
      },
    ],
  },
  {
    title: "TEER 5",
    description: "NOC Codes and Job",
    features: [
      {
        title: "45100",
        description:
          "Student monitors, crossing guards and related occupations",
      },
      { title: "55109", description: "Other performers" },
      { title: "65100", description: "Cashiers" },
      { title: "65101", description: "Service station attendants" },
      {
        title: "65102",
        description: "Store shelf stockers, clerks and order fillers",
      },
      { title: "65109", description: "Other sales related occupations" },
      { title: "65200", description: "Food and beverage servers" },
      {
        title: "65201",
        description:
          "Food counter attendants, kitchen helpers and related support occupations",
      },
      {
        title: "65202",
        description: "Meat cutters and fishmongers – retail and wholesale",
      },
      {
        title: "65210",
        description:
          "Support occupations in accommodation, travel and facilities set-up services",
      },
      {
        title: "65211",
        description:
          "Operators and attendants in amusement, recreation and sport",
      },
      { title: "65220", description: "Pet groomers and animal care workers" },
      {
        title: "65229",
        description: "Other support occupations in personal services",
      },
      { title: "65310", description: "Light duty cleaners" },
      { title: "65311", description: "Specialized cleaners" },
      {
        title: "65312",
        description: "Janitors, caretakers and heavy-duty cleaners",
      },
      {
        title: "65320",
        description: "Dry cleaning, laundry and related occupations",
      },
      { title: "65329", description: "Other service support occupations" },
      { title: "75100", description: "Longshore workers" },
      { title: "75101", description: "Material handlers" },
      {
        title: "75110",
        description: "Construction trades helpers and labourers",
      },
      { title: "75119", description: "Other trades helpers and labourers" },
      {
        title: "75200",
        description: "Taxi and limousine drivers and chauffeurs",
      },
      {
        title: "75201",
        description: "Delivery service drivers and door-to-door distributors",
      },
      {
        title: "75210",
        description: "Boat and cable ferry operators and related occupations",
      },
      { title: "75211", description: "Railway and motor transport labourers" },
      { title: "75212", description: "Public works and maintenance labourers" },
      { title: "85100", description: "Livestock labourers" },
      { title: "85101", description: "Harvesting labourers" },
      {
        title: "85102",
        description: "Aquaculture and marine harvest labourers",
      },
      { title: "85103", description: "Nursery and greenhouse labourers" },
      { title: "85104", description: "Trappers and hunters" },
      { title: "85110", description: "Mine labourers" },
      {
        title: "85111",
        description: "Oil and gas drilling, servicing and related labourers",
      },
      { title: "75120", description: "Logging and forestry labourers" },
      {
        title: "75121",
        description: "Landscaping and grounds maintenance labourers",
      },
    ],
  },
];
const features2 = [
  {
    icon: "Briefcase" as const,
    title: "TEER 0	",
    description:
      "Management occupations--	Advertising, marketing and public relations managers,Financial managers",
  },
  {
    icon: "Notebook" as const,
    title: "TEER 1",
    description:
      "Occupations that usually require: a university degree--	Financial advisors,Software engineers",
  },
  {
    icon: "Layers" as const,
    title: "TEER 2",
    description:
      "Occupations that usually require:a college diploma,apprenticeship training of 2 or more years, or supervisory occupations-- Computer network and web technicians,Medical laboratory technologists",
  },
  {
    icon: "NotebookPenIcon" as const,
    title: "TEER 3",
    description:
      "Occupations that usually require: a college diploma,apprenticeship training of less than 2 years, or,more than 6 months of on-the-job training-- Bakers,Dental assistants and dental laboratory assistants",
  },
  {
    icon: "Network" as const,
    title: " TEER 4",
    description:
      "Occupations that usually require: a high school diploma, or several weeks of on-the-job training-- Home child care providers,Retail salespersons and visual merchandisers",
  },
  {
    icon: "Globe" as const,
    title: " TEER 5",
    description:
      "Occupations that usually require: short-term work demonstration and no formal education-- Landscaping and grounds maintenance labourers,Delivery service drivers and door-to-door distributors",
  },
];

const TeerCategoriesNocCodes: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="TEER Categories and NOC Codes"
        description="TEER categories and examples of jobs"
        imageUrl="/images/n/m/federalworker.jpg"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />
      <Feature3
        badgeText="TEER Categories"
        heading="TEER categories and examples of "
        highlighted="jobs"
        description="TEER Categories and National Occupation Classification (NOC) Codes"
        items={features2}
      />
      {/* <FeatureGrid4
        title="TEER 0"
        description="NOC Codes and Job"
        features={features2}
      /> */}
      {gridMajor.map((section, i) => (
        <FeatureGrid4
          key={i}
          title={section.title}
          description={section.description}
          features={section.features}
        />
      ))}
      <CtaWithFeaturesRightImage
        badgeText="TEER Categories and NOC Codes"
        title=" GreenTech Resource Worldwide Canada"
        subtitle=""
        features={features}
      />
    </div>
  );
};

export default TeerCategoriesNocCodes;
