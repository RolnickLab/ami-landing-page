import { useTranslations } from "next-intl";

export const useContent = () => {
  const t = useTranslations();

  return {
    title: t("PAGE_TITLE"),
    subTitle: t("PAGE_SUB_TITLE"),
    menuItems: [
      { label: t("COMMON_HOME"), labelShort: t("COMMON_HOME"), href: "/" },
      {
        label: t("INITIATIVES_TITLE"),
        labelShort: t("INITIATIVES_TITLE_SHORT"),
        href: "/initiatives",
      },
      {
        label: t("CONSORTIUM_TITLE"),
        labelShort: t("CONSORTIUM_TITLE_SHORT"),
        href: "/consortium",
      },
    ],
    categories: [
      { id: "software", label: t("CATEGORY_SOFTWARE") },
      { id: "hardware", label: t("CATEGORY_HARDWARE") },
      { id: "analysis", label: t("CATEGORY_ANALYSIS") },
      { id: "knowledge", label: t("CATEGORY_KNOWLEDGE") },
      { id: "conservation", label: t("CATEGORY_CONSERVATION") },
    ],
    about: {
      intro: {
        title: t("ABOUT_INTRO_TITLE"),
        description: t("ABOUT_INTRO_DESCRIPTION"),
      },
      content: {
        title: t("ABOUT_CONTENT_TITLE"),
        description: t("ABOUT_CONTENT_DESCRIPTION"),
      },
    },
    projects: {
      title: t("INITIATIVES_TITLE"),
      description: t("INITIATIVES_DESCRIPTION"),
      list: [
        {
          partners: ["au"],
          title: t("INITIATIVE_JENSENS_TITLE"),
          description: t("INITIATIVE_JENSENS_DESCRIPTION"),
          href: "https://www.avjf.dk/",
          categories: ["software", "hardware", "analysis"],
        },
        {
          partners: ["au"],
          title: t("INITIATIVE_BIODIVERSA_TITLE"),
          description: t("INITIATIVE_BIODIVERSA_DESCRIPTION"),
          href: "https://www.biodiversa.eu/biodiversity-monitoring/pilot/",
          categories: ["software", "hardware", "analysis"],
        },
        {
          partners: ["au"],
          title: t("INITIATIVE_MAMBO_TITLE"),
          description: t("INITIATIVE_MAMBO_DESCRIPTION"),
          href: "https://www.mambo-project.eu/",
          categories: ["software", "hardware", "analysis"],
        },
        {
          partners: ["usherbrooke", "ulaval"],
          title: t("INITIATIVE_IMPERFECT_TITLE"),
          description: t("INITIATIVE_IMPERFECT_DESCRIPTION"),
          categories: ["analysis"],
        },
        {
          partners: ["mila", "espacepourlavie"],
          title: t("INITIATIVE_ANTENNA_TITLE"),
          description: t("INITIATIVE_ANTENNA_DESCRIPTION"),
          href: "https://www.insectai.org/",
          categories: ["software"],
        },
        {
          partners: ["natural-resources"],
          description: t("INITIATIVE_NATURAL_RESOURCES_DESCRIPTION"),
          categories: ["analysis"],
        },
        {
          partners: ["turing", "ukceh"],
          title: t("INITIATIVE_AMBER_TITLE"),
          description: t("INITIATIVE_AMBER_DESCRIPTION"),
          href: "https://www.turing.ac.uk/research/research-projects/amber",
          categories: ["software", "analysis"],
        },
        {
          partners: ["ukceh"],
          title: t("INITIATIVE_AMI_SYSTEM_TITLE"),
          description: t("INITIATIVE_AMI_SYSTEM_DESCRIPTION"),
          href: "https://www.ceh.ac.uk/solutions/equipment/automated-monitoring-insects-trap",
          categories: ["hardware"],
        },
        {
          partners: ["ukceh"],
          title: t("INITIATIVE_AGZERO_TITLE"),
          description: t("INITIATIVE_AGZERO_DESCRIPTION"),
          href: "https://www.ceh.ac.uk/our-science/projects/agzero",
          categories: ["analysis"],
        },
        {
          partners: ["ukceh", "au"],
          title: t("INITIATIVE_INSECTAI_TITLE"),
          description: t("INITIATIVE_INSECTAI_DESCRIPTION"),
          href: "https://insectai.eu/",
          categories: ["knowledge"],
        },
        {
          partners: ["vtecostudies"],
          title: t("INITIATIVE_ATLAS_TITLE"),
          description: t("INITIATIVE_ATLAS_DESCRIPTION"),
          href: "https://val.vtecostudies.org/",
          categories: ["conservation", "analysis"],
        },
      ],
    },
    resources: {
      title: t("RESOURCES_TITLE"),
      list: [
        {
          title: t("RESOURCES_ANTENNA_TITLE"),
          description: t("RESOURCES_ANTENNA_DESCRIPTION"),
          href: "https://insectai.org",
        },
        {
          title: t("RESOURCES_DATASET_TITLE"),
          description: t("RESOURCES_DATASET_DESCRIPTION"),
          href: "https://zenodo.org/records/12554005",
        },
        {
          title: t("RESOURCES_SYSTEM_TITLE"),
          description: t("RESOURCES_SYSTEM_DESCRIPTION"),
          href: "https://www.ceh.ac.uk/solutions/equipment/automated-monitoring-insects-trap",
        },
      ],
    },
    publications: {
      title: t("PUBLICATIONS_TITLE"),
      list: [
        {
          title: t("PUBLICATION_AMT_TITLE"),
          description: t("PUBLICATION_AMT_SUMMARY"),
          href: "https://doi.org/10.3390/s21020343",
        },
        {
          title: t("PUBLICATION_AMI_DATASET_TITLE"),
          description: t("PUBLICATION_AMI_DATASET_SUMMARY"),
          href: "https://arxiv.org/abs/2406.12452",
        },
        {
          title: t("PUBLICATION_PHIL_TRANS_TITLE"),
          description: t("PUBLICATION_PHIL_TRANS_SUMMARY"),
          href: "https://doi.org/10.1098/rstb.2023.0108",
        },
      ],
    },
    media: {
      title: t("MEDIA_TITLE"),
      articles: [
        {
          title: "Un algorithme au secours des insectes | Découverte",
          description:
            "Les populations d'insectes s'effondrent à un rythme sans précédent, et il manque de scientifiques pour documenter ce déclin.",
          image:
            "https://images.radio-canada.ca/q_auto,w_1200/v1/ici-tele/emissions/16x9/decouverte-5627-insectarium-ia.jpg",
          href: "https://ici.radio-canada.ca/tele/decouverte/site/segments/reportage/1900347/insectarium-intelligence-artificielle-menace-insectes",
        },
      ],
      videos: [
        {
          src: "https://www.youtube.com/embed/9MtOHwPSF50?si=Qrjp2qHUuhn1Ui0a",
          caption: "The UKCEH AMI System deployed in Panama",
        },
        {
          src: "https://globalnews.ca/video/embed/10188149/",
          caption:
            "How Montreal researchers are using AI to discover new species",
        },
        {
          src: "https://www.youtube.com/embed/VXJ40hAmTZY?si=0Rc2Zgwja_dk4V9P",
          caption:
            "Antenna - L'IA pour protéger la biodiversité | Antenna - AI to protect biodiversity",
        },
      ],
    },
    consortium: {
      title: t("CONSORTIUM_TITLE"),
      description: t("CONSORTIUM_DESCRIPTION"),
      partners: {
        title: t("MEMBERS_TITLE"),
        titleShort: t("MEMBERS_TITLE_SHORT"),
        list: [
          {
            id: "au",
            logo: "/partners/aarhus-university.png",
            label: "Aarhus University",
            location: t("COUNTRY_DENMARK"),
            href: "https://international.au.dk/",
          },
          {
            id: "mila",
            logo: "/partners/mila.png",
            label: "Mila - Quebec Artificial Intelligence Institute",
            location: t("COUNTRY_CANADA"),
            href: "https://mila.quebec/en/automated-monitoring-of-insects-ami",
          },
          {
            id: "espacepourlavie",
            logo: "/partners/montreal-space-for-life.png",
            label: "Montreal Space for Life - Insectarium",
            location: t("COUNTRY_CANADA"),
            href: "https://espacepourlavie.ca/en/news/how-ai-will-revolutionize-preservation-biodiversity",
          },
          {
            id: "natural-resources",
            logo: "/partners/natural-resources-canada.svg",
            label: "Natural Resources Canada",
            location: t("COUNTRY_CANADA"),
            href: "https://natural-resources.canada.ca/",
          },
          {
            id: "turing",
            logo: "/partners/the-alan-turing-institute.png",
            label: "The Alan Turing Institute",
            location: t("COUNTRY_UK"),
            href: "https://www.turing.ac.uk/",
          },
          {
            id: "ukceh",
            logo: "/partners/ukceh.png",
            label: "UK Centre for Ecology & Hydrology",
            location: t("COUNTRY_UK"),
            href: "https://www.ceh.ac.uk/solutions/equipment/automated-monitoring-insects-trap",
          },
          {
            id: "usherbrooke",
            logo: "/partners/universite-de-sherbrooke.png",
            label: "Université de Sherbrooke",
            location: t("COUNTRY_CANADA"),
            href: "https://www.usherbrooke.ca/",
          },
          {
            id: "ulaval",
            logo: "/partners/universite-laval.png",
            label: "Université Laval",
            location: t("COUNTRY_CANADA"),
            href: "https://www.ulaval.ca/",
          },
          {
            id: "vtecostudies",
            logo: "/partners/vermont-center-for-ecostudies.webp",
            label: "Vermont Center for Ecostudies",
            location: t("COUNTRY_US"),
            href: "https://vtecostudies.org/",
          },
        ],
      },
      people: {
        image: "/people.jpg",
        caption: t("CAPTION_PEOPLE"),
      },
      committee: {
        title: t("CONSORTIUM_COMMITTEE"),
        list: [
          { name: "Tom August", affiliation: "UKCEH" },
          { name: "Marc Bélisle", affiliation: "Université de Sherbrooke" },
          { name: "Joe Bowden", affiliation: "Natural Resources Canada" },
          {
            name: "Michael Bunsen",
            affiliation: "Mila / Montreal Space for Life",
          },
          {
            name: "Katriona Goldmann",
            affiliation: "The Alan Turing Institute",
          },
          { name: "Toke Thomas Høye", affiliation: "Aarhus University" },
          { name: "Jenna Lawson", affiliation: "UKCEH" },
          { name: "Maxim Larrivée", affiliation: "Montreal Space for Life" },
          { name: "Marc Mazerolle", affiliation: "Université Laval" },
          {
            name: "Kent McFarland",
            affiliation: "Vermont Center for Ecostudies",
          },
          { name: "David Rolnick", affiliation: "Mila" },
          { name: "David Roy", affiliation: "UKCEH" },
        ],
      },
    },
  };
};
