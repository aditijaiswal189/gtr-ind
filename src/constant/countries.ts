import {
  Globe,
  GraduationCap,
  Building,
  Award,
  Check,
  DollarSign,
  Landmark,
} from "lucide-react";

export interface CountryFact {
  text: string;
  icon?: React.ComponentType;
}

export interface CountryConfig {
  id: string;
  name: string;
  description: string;
  backgroundColor: string;
  textColor: string;
  facts: CountryFact[];
  images: string[];
}

// Country configuration with all details
export const countriesConfig: CountryConfig[] = [
  {
    id: "usa",
    name: "United States",
    description:
      "Study in one of the most prestigious higher education systems globally and access some high-end technology and cutting-edge research for an immersive, engaging & collaborative study experience. Choose from an extensive range of schools, numerous study disciplines and niche qualifications that are difficult to find by in other parts of the world and experience a uniquely flexible education system allowing you to apply to a variety of programs suiting your academic & career goals. Graduate with a truly global outlook and real-world skills for the future.",
    backgroundColor: "#fff1f2", // Soft red
    textColor: "black",
    facts: [
      {
        text: "USA hosts more than a million international students",
        icon: Award,
      },
      {
        text: "Over 25% of world’s top 100 universities are in the USA",
        icon: Building,
      },
      {
        text: "Post-study stay back visas (OPT) up to 3 years for STEM programs",
        icon: DollarSign,
      },
      {
        text: "Internships (CPT) up to 12 months while studying",
        icon: GraduationCap,
      },
    ],
    images: [
      "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "canada",
    name: "Canada",
    description:
      "Study in a country that has tripled its international student population over the past decade, thanks to its globally recognized universities offering a world class education, highly practical programs with hands-on learning and some of the most affordable tuition fees among English-speaking countries. Enjoy top quality life in the ‘most liveable cities’ of Vancouver and Toronto and advance your career in one of the very resource rich, industrialized and stable economies.",
    backgroundColor: "#f0f9ff", // Soft blue
    textColor: "black",
    facts: [
      {
        text: "Among the Safest Countries Globally",
        icon: GraduationCap,
      },
      {
        text: "Hands-on learning",
        icon: Landmark,
      },
      {
        text: "Paid Internships Available",
        icon: DollarSign,
      },
      {
        text: "Post Study Work Visa up to 3 Years",
        icon: Check,
      },
    ],
    images: [
      "/images/n/brcolumbia.jpg",
      "https://images.pexels.com/photos/2773578/pexels-photo-2773578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1796505/pexels-photo-1796505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5997999/pexels-photo-5997999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "germany",
    name: "Germany",
    description:
      "Learn from some of the world's best academics and experts in some of world’s most prestigious universities and benefit from their exceptional academic support. Study alongside some of the finest and brilliant minds and hone your skills using state-of-the-art technology. Avail placements, internships and volunteering positions that are your right fit through strong industry links of UK universities and apply your knowledge and skills in a real-world professional environment. Graduate with skills and expertise that are in high demand around the world and get hired by your dream employers.",
    backgroundColor: "#fefce8", // Soft yellow

    textColor: "black",
    facts: [
      {
        text: "The UK undertakes 5% of the world’s scientific research and produces 14% of the world’s most frequently cited papers",
        icon: DollarSign,
      },
      {
        text: "UK welcomes over 400,000 students every year",
        icon: GraduationCap,
      },
      {
        text: "Post study work visa of 2 years",
        icon: Globe,
      },
      {
        text: "12 of world’s top 100 universities are in The UK (QS World Rankings 2024)",
        icon: Building,
      },
    ],
    images: [
      "https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1963557/pexels-photo-1963557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1486577/pexels-photo-1486577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "australia",
    name: "Australia",
    description:
      "Study in a country that has produced over 2.5 million global graduates and has set exceptional standards for global education. Pursue high-quality & globally recognized qualifications from world class institutions. Enhance your career prospects by gaining hands-on industry experience through placements and internships, make connections with global employers, and succeed in the global workforce. Feel welcomed & inspired in some of the most liveable cities that are rich with people from diverse nationalities and cultures from all over the world.",
    backgroundColor: "#f0fdf4", // Soft green
    textColor: "black",
    facts: [
      { text: " 9 of World’s Top 100 Universities", icon: Award },
      {
        text: "Choose from over 22,000 Courses across 1,100 Institutions",
        icon: GraduationCap,
      },
      {
        text: "5 out of 30 Best Student Cities in the world are in Australia (QS Best Student Cities 2024)",
        icon: Check,
      },
      {
        text: "More than A$300 Million Invested in Scholarships for International Students",
        icon: DollarSign,
      },
    ],
    images: [
      "/images/n/visitorvisa.png",
      "https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "ireland",
    name: "Ireland",
    description:
      "Home to 9 of 10 global ICT companies, 8 of the 10 global pharmaceutical companies, a global financial services powerhouse and a centre of international banking excellence, Ireland is the European hub to over 1,000 leading multinational corporations across multiple sectors. Potential career opportunities in a host of global giants including Microsoft, Google, PayPal, Apple, Twitter, Microsoft, LinkedIn, Pfizer, GSK and Genzyme make studying in Ireland a very lucrative opportunity. High academic standards of Irish universities are enabling their graduates to make an impact on academia, research and the global business world.",
    backgroundColor: "#fff1f2", // Soft red
    textColor: "black",
    facts: [
      {
        text: "Ranked as the 13th most peaceful place on Earth.Europe’s fastest growing economy",
        icon: Award,
      },
      {
        text: "Ranked #10 Globally for High-Quality Scientific Research",
        icon: Building,
      },
      {
        text: "Post Study Work Visa up to 2 Years",
        icon: DollarSign,
      },
      {
        text: "All Universities Globally Ranked among top 5%",
        icon: GraduationCap,
      },
    ],
    images: [
      "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "newzealand",
    name: "New Zealand",
    description:
      "Study in a high-quality education system closely monitored and regulated by the NZ government. Experience practical teaching style and hands-on learning to inculcate real-world skills that will open doors of global opportunities. Gain impeccable English language abilities to be effective in multicultural and challenging work environments. Stay ahead in the competition with NZ qualifications that are highly sought after in the international job market.",
    backgroundColor: "#f0f9ff", // Soft blue
    textColor: "black",
    facts: [
      {
        text: " New Zealand universities are ranked in the top 3% in the world",
        icon: GraduationCap,
      },

      {
        text: "Only country in the world to have all its universities in the global top 500",
        icon: Landmark,
      },
      {
        text: "Over 20,000 international students from 160 countries",
        icon: DollarSign,
      },
      {
        text: "8 state-funded universities, 16 Institutes of Technology and Polytechnics (ITPs) & 550 Private Training Establishments (PTEs)",
        icon: Check,
      },
    ],
    images: [
      "/images/n/brcolumbia.jpg",
      "https://images.pexels.com/photos/2773578/pexels-photo-2773578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1796505/pexels-photo-1796505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5997999/pexels-photo-5997999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "france",
    name: "France",
    description:
      "France is home to one of the most prestigious educational systems in the world. No matter what subjects or degrees you wish to pursue, there are plenty of universities and institutions that are a perfect match to your academic pursuits in France.",
    backgroundColor: "#fefce8", // Soft yellow

    textColor: "black",
    facts: [
      {
        text: " 64 Nobel Laureates and 15 Fields Medals",
        icon: DollarSign,
      },
      {
        text: "Post Study Work Visa up to 2 Years (post Masters’ degree)",
        icon: GraduationCap,
      },
      {
        text: "France is home to 3,500 higher education institutions",
        icon: Globe,
      },
      {
        text: "4 French universities in top 100 in the world (QS World Rankings 2022)",
        icon: Building,
      },
    ],
    images: [
      "https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1963557/pexels-photo-1963557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1486577/pexels-photo-1486577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "neatherlands",
    name: "Neatherlands",
    description:
      "With Netherlands hosting students from as many as 160 countries, you can experience an excellent international culture in Dutch universities, which is complemented by an education ecosystem that is student centered and industry oriented at the same time.",
    backgroundColor: "#f0fdf4", // Soft green
    textColor: "black",
    facts: [
      {
        text: "9 universities among top 200 in the world (QS World Rankings 2022)",
        icon: Award,
      },
      {
        text: "Multicultural country -One in every 10 university students is an international student",
        icon: GraduationCap,
      },
      { text: "Post Study Work Visa up to 1 Year", icon: Check },
      {
        text: "Amsterdam, the capital city, is among the best student cities worldwide",
        icon: DollarSign,
      },
    ],
    images: [
      "/images/n/visitorvisa.png",
      "https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "sweden",
    name: "Sweden",
    description:
      "With an education system that fosters creativity and emphasizes more on academic pursuits than just achieving higher grades and home to universities that instil ambition, innovation and critical thinking, Sweden is among the most innovative study destinations in the world.",
    backgroundColor: "#fff1f2", // Soft red
    textColor: "black",
    facts: [
      {
        text: " Around 40 universities to study from",
        icon: Award,
      },
      {
        text: "Over 900 programs to choose from",
        icon: Building,
      },
      {
        text: "6 Swedish universities among world’s top 200 (QS World Rankings 2022)",
        icon: DollarSign,
      },
      {
        text: "Post Study Work Visa up to 1 Year",
        icon: GraduationCap,
      },
    ],
    images: [
      "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "austria",
    name: "Austria",
    description:
      "Austria lies in the centre of Europe with easy access to its neighbouring countries by air, road, or rail.",
    backgroundColor: "#f0f9ff", // Soft blue
    textColor: "black",
    facts: [
      {
        text: "The universities and higher education facilities are well respected throughout the world",
        icon: GraduationCap,
      },

      {
        text: "With a thriving industry base and high employment ratio, the opportunities for graduates are many and varied",
        icon: Landmark,
      },
      {
        text: "Austria is widely recognized as one of the most livable countries in the world",
        icon: DollarSign,
      },
      {
        text: "In 2018, seven Austrian universities were included in the QS World University Rankings, with five institutions making it into the top 500",
        icon: Check,
      },
    ],
    images: [
      "/images/n/brcolumbia.jpg",
      "https://images.pexels.com/photos/2773578/pexels-photo-2773578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1796505/pexels-photo-1796505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5997999/pexels-photo-5997999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "denmark",
    name: "Denmark",
    description:
      "Denmark regularly ranks on lists of most pleasant, safest and happiest places on earth thanks to its high quality of life and per capita income, as well as its advanced education, health care and civil rights. Undertaking an education in Denmark places you right in the centre of this socially developed nation. Denmark is consistently featured on the list of top 10 countries in Europe to study abroad, especially when it comes to the personal development opportunities and the access to higher quality teaching.",
    backgroundColor: "#fefce8", // Soft yellow

    textColor: "black",
    facts: [
      {
        text: "The Danes are known to consistently be ranked as the happiest people on the planet",
        icon: DollarSign,
      },
      {
        text: "Education for all is a key priority in Denmark in order to ensure growth, welfare and competitiveness",
        icon: GraduationCap,
      },
      {
        text: "Danish universities and higher education institutions are highly international and offer many programmes in English",
        icon: Globe,
      },
      {
        text: "Post study work visa for 6 months to search for a job",
        icon: Building,
      },
    ],
    images: [
      "https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1963557/pexels-photo-1963557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1486577/pexels-photo-1486577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "finland",
    name: "Finland",
    description:
      "A country with pristine natural beauty and landscapes, Finland is among Europe’s most modern and innovative countries. With an education system that is at par with global standards, it is also a popular choice of international students due to the academic reputation of Finnish Universities.",
    backgroundColor: "#f0fdf4", // Soft green
    textColor: "black",
    facts: [
      {
        text: "7 universities among top 500 in the world (QS World Rankings 2022)",
        icon: Award,
      },

      { text: "Post Study Work Visa up to 1 Year", icon: GraduationCap },
      { text: "Helsinki – among the most popular student cities", icon: Check },
      {
        text: "Finland hosts over 20,000 international students",
        icon: DollarSign,
      },
    ],
    images: [
      "/images/n/visitorvisa.png",
      "https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "italy",
    name: "Italy",
    description:
      "Italy is widely known for being an education hub of Europe and is home to an impressive 40 universities which feature in the QS World University Rankings 2021. But there’s more to Italy than exceptional education - delicious food to beautiful museums and most importantly the career opportunities.",
    backgroundColor: "#fff1f2", // Soft red
    textColor: "black",
    facts: [
      {
        text: "Home to some of the oldest universities in the world",
        icon: Award,
      },

      {
        text: "Cost of living and tuition fees in Italy is budget-friendly",
        icon: Building,
      },
      {
        text: "Courses offered in the field of Architecture, Arts, Design and Fashion, Italy is very fluent in the language of Research and Science",
        icon: DollarSign,
      },
      {
        text: "Wide offer of courses in English language",
        icon: GraduationCap,
      },
    ],
    images: [
      "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "hungary",
    name: "Hungary",
    description:
      "Hungarian higher education has been representing academic excellence for more than 650 years with its first university founded in 1367. Now, there are 65 higher education institutions in Hungary. Hungarian institutions offer more than 500 courses in English, German, French and other languages. The foreign language programmes are of a high standard and tuition fees are very favourable when compared to its competitors.",
    backgroundColor: "#f0f9ff", // Soft blue
    textColor: "black",
    facts: [
      {
        text: " Students can earn double degrees at many universities through joint degree programmes",
        icon: GraduationCap,
      },
      {
        text: "Students can combine studies with professional practice by taking an Erasmus internship in Hungary",
        icon: Landmark,
      },
      {
        text: "Globally accepted degrees",
        icon: DollarSign,
      },
      {
        text: "Many local and international companies offer internship positions to students",
        icon: Check,
      },
    ],
    images: [
      "/images/n/brcolumbia.jpg",
      "https://images.pexels.com/photos/2773578/pexels-photo-2773578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1796505/pexels-photo-1796505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5997999/pexels-photo-5997999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "switzerland",
    name: "Switzerland",
    description:
      "Switzerland has a very innovative educational system. Swiss universities are among the best, not only in Europe but in the entire world. Each year, Switzerland accepts a large influx of international students from all over the world, all aiming to add Swiss higher education degree to their academic careers.",
    backgroundColor: "#fefce8", // Soft yellow

    textColor: "black",
    facts: [
      {
        text: "Home of most global sport world bodies, global business corporations and international UN organisations, World Trade Offices, and Hotel and Tourism bodies (IATA etc)",
        icon: DollarSign,
      },

      {
        text: "3 Swiss Universities are ranked in top 100 in the world (QS World Rankings 2023)",
        icon: GraduationCap,
      },
      {
        text: "About 2,60,000 students enrolled at a Swiss higher education institutions",
        icon: Globe,
      },
      {
        text: "Paid Internship opportunities available for International Students",
        icon: Building,
      },
    ],
    images: [
      "https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1963557/pexels-photo-1963557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1486577/pexels-photo-1486577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "spain",
    name: "Spain",
    description:
      "   A major economic power in Europe, Spain has rapidly become a hub for young, creative talent, with hundreds of start-ups, entrepreneurs boarding on new ventures and growing business industries. With an economical cost of living and unending opportunities to play sports and socialize, Spain is the perfect location for international education.",
    backgroundColor: "#f0fdf4", // Soft green
    textColor: "black",
    facts: [
      {
        text: "The Spanish offer of graduates and postgraduates is broad and of very high level. Résumé will earn points with an educational experience in Spain",
        icon: Award,
      },
      {
        text: "One of the safest countries in the world and people are very friendly",
        icon: GraduationCap,
      },
      {
        text: "Spaniards are happy to converse with international students",
        icon: Check,
      },
      {
        text: "Spain is about 17% cheaper than Germany and can be more than 30% less than the cost of living in France. ",
        icon: DollarSign,
      },
    ],
    images: [
      "/images/n/visitorvisa.png",
      "https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "lithuania",
    name: "Lithuania",
    description:
      "Lithuania is a modern northern European country and a member of the European Union. Foreigners are welcome and English is a widely spoken language in Lithuania. Lithuania is a country of the fastest and cheapest internet connection in the European Union. Lithuanian institutions offer over 500 study programmes taught in English or Russian which are Internationally recognized.",
    backgroundColor: "#fff1f2", // Soft red
    textColor: "black",
    facts: [
      {
        text: "International students are eligible to apply for Lithuanian state scholarships",
        icon: Award,
      },
      {
        text: "The cost of living in Lithuania is cheaper than 54 percent of the countries in the world",
        icon: Building,
      },
      {
        text: "Lithuanian people are known for their welcoming, friendly attitudes and it is the easiest country in the Schengen Area to get a visa from",
        icon: DollarSign,
      },
      {
        text: "Lithuanian grants students the right to work up to 20 hours a week with education",
        icon: GraduationCap,
      },
    ],
    images: [
      "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "cyprus",
    name: "Cyprus",
    description:
      "Cyprus is an island divided into northern and southern parts. Cyprus is one of the largest islands in the Mediterranean Sea, located in the south of Turkey. Studying in Cyprus may be interesting for many students, as in addition to the well-ranked universities in the country, the cost of studying in Cyprus is also very affordable. Cyprus provides a great opportunity for students to study in different fields such as medical, paramedical, finance, art, and music fields.",
    backgroundColor: "#f0f9ff", // Soft blue
    textColor: "black",
    facts: [
      {
        text: "More than 25,000 students to choose study in Cyprus",
        icon: GraduationCap,
      },
      {
        text: "Top-notch quality of education at a reasonable cost, Bachelor and Master’s degree in Cyprus is recognized world-wide",
        icon: Landmark,
      },
      {
        text: "Scholarships for international students that cover up to forty percent of tuition fees",
        icon: DollarSign,
      },
      {
        text: "Plethora of opportunities for career-growth",
        icon: Check,
      },
    ],
    images: [
      "/images/n/brcolumbia.jpg",
      "https://images.pexels.com/photos/2773578/pexels-photo-2773578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1796505/pexels-photo-1796505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5997999/pexels-photo-5997999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "malta",
    name: "Malta",
    description:
      "Malta has a rich history that dates to prehistory, it has a modern outlook and has stepped up to the times and kept pace with the world, not just in terms of overall outlook. International students who choose to study abroad in Malta are guaranteed of quality education through self-awareness, combined with world recognition.",
    backgroundColor: "#fefce8", // Soft yellow

    textColor: "black",
    facts: [
      {
        text: "Top-notch quality of education at a reasonable cost",
        icon: DollarSign,
      },
      {
        text: "Roughly 90% of the population speak English and Malta is a popular destination for students seeking English language courses in Europe",
        icon: GraduationCap,
      },
      {
        text: "Plethora of opportunities for career-growth. More than 200 courses are offered in Malta",
        icon: Globe,
      },
      {
        text: "Popular courses in field of agriculture, forestry and fishery, education and teaching and tourism and leisure, Social and behavioural sciences, Transport and logistics",
        icon: Building,
      },
    ],
    images: [
      "https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1963557/pexels-photo-1963557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1486577/pexels-photo-1486577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "russia",
    name: "Russia",
    description:
      "According to publicly available information from the Russian Federation's Ministry of Science and Higher Education, there are currently about 4 million students in the nation. 315,000 of them are foreign nationals. Candidates pick prestigious universities in Russia. The traditional hot fields for training are IT, engineering specialities, and medicine. Foreigners prioritise economics, finance, and the natural sciences among other fields of study. Students in Russia not only receive a high calibre of education but also the chance to pursue their scientific endeavours and find fulfilling employment.",
    backgroundColor: "#f0fdf4", // Soft green
    textColor: "black",
    facts: [
      { text: "Numerous educational programmes are available", icon: Award },
      { text: "Courses for education in English", icon: GraduationCap },
      { text: "Campuses and labs with a focus on technology", icon: Check },
      {
        text: "International students' adaptation programmes",
        icon: DollarSign,
      },
    ],
    images: [
      "/images/n/visitorvisa.png",
      "https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "belgium",
    name: "Belgium",
    description:
      "  International students claim that Belgium offers some of Europe's best higher education. A recognition for the happiness of overseas students was given to seven universities in Belgium. The majority of student evaluations of studying in Belgium centre on the vibrant cities and welcoming culture of the nation, which is regarded as a major plus. Compared to many other European countries, international students in Belgium are more appreciative of the quality of city life. In terms of student satisfaction, the social life and global environment provided by the three national languages (French, Dutch, and German) as well as English play a critical influence.",
    backgroundColor: "#fff1f2", // Soft red
    textColor: "black",
    facts: [
      {
        text: "Quality of Education",
        icon: Award,
      },

      {
        text: "The price of living and attending school in Belgium",
        icon: Building,
      },
      {
        text: "Multiple instruction languages",
        icon: DollarSign,
      },
      {
        text: "A favourable environment for international students",
        icon: GraduationCap,
      },
    ],
    images: [
      "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "georgia",
    name: "Georgia",
    description:
      "Georgia, despite its relatively small size, offers a unique and enriching environment for studying. It is emerging in the limelight of the academic sphere as a promising place of interest for impressions of international students intent on fulfilling their aspiration for acquiring knowledge and higher learning.",
    backgroundColor: "#f0f9ff", // Soft blue
    textColor: "black",
    facts: [
      {
        text: "Low tuition fees and a lower cost of living",
        icon: GraduationCap,
      },
      {
        text: "Programs taught in English",
        icon: Landmark,
      },
      {
        text: "Emerging destination for higher education",
        icon: DollarSign,
      },
      {
        text: "Straightforward visa procedures",
        icon: Check,
      },
    ],
    images: [
      "/images/n/brcolumbia.jpg",
      "https://images.pexels.com/photos/2773578/pexels-photo-2773578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1796505/pexels-photo-1796505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5997999/pexels-photo-5997999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "monaco",
    name: "Monaco",
    description:
      "A sovereign state that is neutral and independent. It is a dynamic and multi-business economic hub. International Trade, Service Sector, Tourism, Real Estate, Construction and Engineering, The Banking and Finance sectors are the pillars of the Principality of Monaco’s economy. Monaco is a small sovereign city-state located on the French Riviera in Western Europe. It is known for its luxurious lifestyle, picturesque landscapes, and prestigious events such as the Monaco Grand Prix and the Monte Carlo Casino. Monaco is home to a diverse population and a thriving economy, particularly in sectors such as finance, tourism, and luxury goods.",
    backgroundColor: "#fefce8", // Soft yellow

    textColor: "black",
    facts: [
      {
        text: "Monaco is the second-smallest country in the world, after Vatican City",
        icon: DollarSign,
      },
      {
        text: "Programs fully taught in English. Small class size with Experiential learning",
        icon: GraduationCap,
      },
      {
        text: "It has one of the highest population densities globally, with approximately 38,000 residents",
        icon: Globe,
      },
      {
        text: "Affordable tuition fees and living expenses",
        icon: Building,
      },
    ],
    images: [
      "https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1963557/pexels-photo-1963557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1486577/pexels-photo-1486577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "croatia",
    name: "Croatia",
    description:
      " Croatia is a perfect destination for students interested in studying in a nation that boasts a centuries-long tradition of teaching and studying, and one famous for its stunning coastline, its blend of Mediterranean and Central European atmosphere, and for the wealth of its history and culture. The Croatian system of higher education boasts a rich educational heritage retained largely by its public universities. The Croatian system of higher education is organised in three cycles (undergraduate, graduate and postgraduate) and higher education studies in Croatia are organised based on the system of transferable credits (ECTS), hence facilitating international students (from Europe and abroad) to study in Croatia and have their studies accredited in their home countries",
    backgroundColor: "#f0fdf4", // Soft green
    textColor: "black",
    facts: [
      { text: "Croatia has 133 higher education institutions", icon: Award },
      {
        text: "More than 1600 English Taught study programs to choose from",
        icon: GraduationCap,
      },
      { text: "Post Study Work Visa up to 1 Year", icon: Check },
      {
        text: "Most of the universities and polytechnics are public institutions, and most colleges of applied sciences are private institutions.",
        icon: DollarSign,
      },
    ],
    images: [
      "/images/n/visitorvisa.png",
      "https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "singapore",
    name: "Singapore",
    description:
      "Study in Singapore to experience one of the best education systems in the world, to earn a globally recognized qualification from high ranked institutions and to experience a multicultural society with a very high quality of life.",
    backgroundColor: "#fff1f2", // Soft red
    textColor: "black",
    facts: [
      {
        text: "One of the financial capitals of the world",
        icon: Award,
      },
      {
        text: "Institutions affiliated with top international universities in the USA, the UK, Canada & Australia",
        icon: Building,
      },
      {
        text: "2 universities ranked among the top 20 in the world",
        icon: DollarSign,
      },
      {
        text: "Ranked as the second-best country to live and work in, according to an HSBC ranking in 2019",
        icon: GraduationCap,
      },
    ],
    images: [
      "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "dubai",
    name: "Dubai",
    description:
      "Study in Dubai, a futuristic city that is home to over 60 world renowned university campuses and colleges and that offers plenty of higher education opportunities meeting your aspirations. Pursue a world class undergraduate or postgraduate degree from this destination and advance your career globally.",
    backgroundColor: "#f0f9ff", // Soft blue
    textColor: "black",
    facts: [
      {
        text: "Institutions in Dubai are affiliated with top international universities in Australia and The UK",
        icon: GraduationCap,
      },
      {
        text: "Global tourism and entertainment hub",
        icon: Landmark,
      },
      {
        text: "A safe city and a modern design capital",
        icon: DollarSign,
      },
      {
        text: "Dubai – a popular student city",
        icon: Check,
      },
    ],
    images: [
      "/images/n/brcolumbia.jpg",
      "https://images.pexels.com/photos/2773578/pexels-photo-2773578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1796505/pexels-photo-1796505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5997999/pexels-photo-5997999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "malaysia",
    name: "Malaysia",
    description:
      "With natural attractions, rich culture and gorgeous scenery, Malaysia attracts people from all over the world. The country has a unique combination of ancient and modern architecture, inspired by their mix of cultures and ethnicities. Its location makes it the perfect destination for any international student looking for a new experience for their studies and has progressively emerged as one of the prominent student destinations in Asia. Home to many international Universities, it is well-known for providing quality education at inexpensive costs as well as simpler visa and immigration procedures thus attracting students from across the globe.",
    backgroundColor: "#fefce8", // Soft yellow

    textColor: "black",
    facts: [
      {
        text: "Home to many foreign Universities",
        icon: DollarSign,
      },
      {
        text: "Affordable cost of living and cost of education",
        icon: GraduationCap,
      },
      {
        text: "Malaysia is an increasingly popular place to get tertiary education with more than 95,000 international students from over 100 countries studying in Malaysia",
        icon: Globe,
      },
      {
        text: "8 Malaysian universities in the 2023 QS World University ranking top 500",
        icon: Building,
      },
    ],
    images: [
      "https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1963557/pexels-photo-1963557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1486577/pexels-photo-1486577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "mauritius",
    name: "Mauritius",
    description:
      "Mauritius is a located in the Indian Ocean which is best known for its white beaches, reefs and fascinating forests. It is one of the best countries to pursue an education at an affordable price in South Asia. The country has developed one of the finest education systems that have led to students enrolling in universities from various parts of the world. It provides world-class and internationally recognised education followed by affordable living costs for international students.",
    backgroundColor: "#f0fdf4", // Soft green
    textColor: "black",
    facts: [
      { text: "Home to many foreign Universities", icon: Award },
      {
        text: "International Students can work part time for 20 hours per week",
        icon: GraduationCap,
      },
      {
        text: "It has carved a reputation of being socially, economically and politically stable",
        icon: Check,
      },
      {
        text: "Plethora of opportunities for career-growth",
        icon: DollarSign,
      },
    ],
    images: [
      "/images/n/visitorvisa.png",
      "https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "japan",
    name: "Japan",
    description:
      "Japan is renowned for its excellent education system and is one of the top-performing country in reading literacy, math and sciences. Excellent safety, accessibility, and high quality of life standards make Japan a top location for students. Studying abroad in Japan means that the students will further studies in a well-rounded education system, experience a unique new culture, and gain a more international perspective. Japan is a popular study abroad destination and offers many advantages for students. International students in Japan can engage with Japanese culture, cuisine, and language. Japan is widely considered a safe country for students, with efficient public transportation.",
    backgroundColor: "#fff1f2", // Soft red
    textColor: "black",
    facts: [
      {
        text: "1st City GDP (USD 1.8 Trill.)",
        icon: Award,
      },
      {
        text: "76% of foreign companies’ HQs",
        icon: Building,
      },
      {
        text: "3rd Global power City Index 2017",
        icon: DollarSign,
      },
      {
        text: "4th Global City Ranking 2017",
        icon: GraduationCap,
      },
    ],
    images: [
      "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "vietnam",
    name: "Vietnam",
    description:
      " Vietnam is known for its rigorous curriculum that is deemed competitive for students. Vietnam is the home to many world heritage sites recognized by UNESCO. Vietnam is known for its endless natural beauty and its famous attraction. Vietnam’s economy is growing steadily at near 7% which will make it fastest growing markets in the world. Vietnam offers a variety of programs while the student will study in a multi- cultural environment",
    backgroundColor: "#f0f9ff", // Soft blue
    textColor: "black",
    facts: [
      {
        text: "Increasing economic growth creates strong demand in Manpower resources",
        icon: GraduationCap,
      },
      {
        text: "One of the safest countries and is among the 11 world countries those are free from conflict",
        icon: Landmark,
      },
      {
        text: "Cost of Living and Tuition fee is much affordable compared to study in Australia and UK",
        icon: DollarSign,
      },
      {
        text: "Degrees are globally recognised",
        icon: Check,
      },
    ],
    images: [
      "/images/n/brcolumbia.jpg",
      "https://images.pexels.com/photos/2773578/pexels-photo-2773578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1796505/pexels-photo-1796505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5997999/pexels-photo-5997999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "china",
    name: "China",

    description:
      "The number of higher education institutions in China has doubled in the last decade, and there are almost 3,000 institutions now. 6 Chinese universities rank within the top 100 as per the QS World University Rankings 2021. Overall, 40 Chinese institutions received a ranking. China has also made numerous partnerships with renowned, reputed universities of the UK and the U.S.",
    backgroundColor: "#fefce8", // Soft yellow

    textColor: "black",
    facts: [
      {
        text: "Due to its growing economy over the past three decades numerous Fortune 500 companies are based in China",
        icon: DollarSign,
      },
      {
        text: "500,000 international students studying at Chinese universities",
        icon: GraduationCap,
      },
      {
        text: "Tuition fees is almost 5 times lower than the UK or the US Universities",
        icon: Globe,
      },
      {
        text: "6 of Chinese Universities are ranked in top 100 in the world (QS World Rankings 2023)",
        icon: Building,
      },
    ],
    images: [
      "https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1963557/pexels-photo-1963557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1486577/pexels-photo-1486577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "south-korea",
    name: "South Korea",
    description:
      " Study in South Korea to get the world-class education at the most affordable cost and experience the perfect blend of innovation and rich-traditional culture. The country is safe and student friendly. Apart from providing numerous scholarships, the country is offering a plethora of job opportunities to international students. International students can work unlimited hours during holidays to aid their studies.",
    backgroundColor: "#f0fdf4", // Soft green
    textColor: "black",
    facts: [
      {
        text: "Highly affordable tuition fees and living expenses.",
        icon: Award,
      },
      {
        text: "Ranked as one of the leading OECD countries for academic achievement and competitiveness.",
        icon: GraduationCap,
      },
      {
        text: "Stands high in the global index of cognitive skills and educational attainment rankings.",
        icon: Check,
      },
      {
        text: "You can work up to 20 hours per week and indefinite/unlimited hours during holidays.",
        icon: DollarSign,
      },
    ],
    images: [
      "/images/n/visitorvisa.png",
      "https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "indonesia",
    name: "Indonesia",
    description:
      "Studying in Indonesia offers international students a unique combination of affordable education, cultural diversity, and academic opportunity. With over 3,000 higher education institutions, including top-ranked universities, students can pursue a wide range of programs in fields such as engineering, business, medicine, and cultural studies. Many universities offer English-taught programs and scholarship opportunities. Indonesia’s low cost of living, rich traditions, and vibrant student life make it an attractive destination for those seeking both academic and cultural enrichment in the heart of Southeast Asia.",
    backgroundColor: "#fff1f2", // Soft red
    textColor: "black",
    facts: [
      {
        text: "Home to vibrant cultural cities like Jakarta, Yogyakarta, and Bandung",
        icon: Award,
      },
      {
        text: "Internship and research opportunities in fields such as marine biology, environmental science, and social development",
        icon: Building,
      },
      {
        text: "Affordable tuition fees and a low cost of living – ideal for budget-conscious students",
        icon: DollarSign,
      },
      {
        text: "Over 3,000 higher education institutions; 2 Indonesian universities ranked among Asia’s Top 100 (QS Asia Rankings)",
        icon: GraduationCap,
      },
    ],
    images: [
      "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
];
