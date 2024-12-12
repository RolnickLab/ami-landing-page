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
        description: t.raw("ABOUT_CONTENT_DESCRIPTION"),
      },
    },
    projects: {
      title: t("INITIATIVES_TITLE"),
      description: t("INITIATIVES_DESCRIPTION"),
      list: [
        {
          partners: ["au"],
          title: "Aage V Jensens Naturfond",
          description: [
            "The long-term monitoring of nocturnal insects at Nature Reserves owned and managed by the not-for-profit Charity Aage V Jensens Naturfond started in 2022 and currently has funding to continue until 2028.",
          ],
          href: "https://www.avjf.dk/",
          categories: ["software", "hardware", "analysis"],
        },
        {
          partners: ["au"],
          title:
            "Biodiversa+ pilot projects (Invasive Alien Species, IAS and Automated Biodiversity Monitoring Stations, ABMS)",
          description: [
            "Biodiversa+ pilot projects test and refine biodiversity monitoring approaches across Europe. They contribute to a more unified monitoring scheme through standardisation, technological innovation and by increasing the availability of data. AMI traps are tested as part of the IAS and ABMS Biodiversa+ pilots.",
          ],
          href: "https://www.biodiversa.eu/biodiversity-monitoring/pilot/",
          categories: ["software", "hardware", "analysis"],
        },
        {
          partners: ["au"],
          title: "Modern Approaches to the Monitoring of Biodiversity (MAMBO)",
          description: [
            "The Horizon Europe project MAMBO refines insect camera trap functionality by developing deep learning models targeted at the detection and classification of insects. One of the focal tools for MAMBO is the AMI trap.",
          ],
          href: "https://www.mambo-project.eu/",
          categories: ["software", "hardware", "analysis"],
        },
        {
          partners: ["usherbrooke", "ulaval"],
          title: "Moth monitoring under imperfect detection and classification",
          description: [
            "AMI will generate unprecedented amounts of site occupancy and abundance data. Regardless of the level of effort involved, however, AMI will never be perfect because not all individuals or species present during the sampling event will be detected and classified without error.",
            "With a focus on moths, our research aims at adapting and developing sampling schemes and statistical methods for collecting and analysing AMI data to mitigate biases originating from imperfect detection and classification.",
          ],
          categories: ["analysis"],
        },
        {
          partners: ["mila", "espacepourlavie"],
          title: "Antenna",
          description: [
            "The Antenna Data Platform is an interdisciplinary hub for automatically processing insect data at wide spatial, temporal and taxonomic scales.",
            "The platform uses state-of-the-art machine learning algorithms developed by Mila researchers to detect and classify insects in large volumes of images. Antenna offers a full range of functions:",
          ],
          listItems: [
            "Automated detection of insects in images",
            "Species-level taxonomic classification of moths",
            "Expert validation of classifications",
            "Curation of datasets across species and locations",
            "Data exploration and download for analysis",
            "(Coming soon!) New species discovery using the GBIF and Darwin Core Standards",
          ],
          href: "https://www.insectai.org/",
          categories: ["software"],
        },
        {
          partners: ["natural-resources"],
          description: [
            "Natural Resources Canada is employing the Antenna Data Platform to detect and monitor forest pest insect species as well as for forest health monitoring (i.e., insect biodiversity). This work includes the provisioning of insect image data for the platform.",
          ],
          categories: ["analysis"],
        },
        {
          partners: ["turing", "ukceh"],
          title: "AMBER",
          description: [
            "The AMBER project, funded by the Abrdn Charitable Foundation, will develop and trial AMI technology for monitoring nocturnal insects, with a focus on tropical deployments. The project will combine expertise from UKCEH, the Alan Turing institute, and a range of local partners, to push the current generation of AMI hardware to their limits.",
            "The Alan Turing Institute contributes to the AMBER project by developing and implementing machine learning models for AMI systems. With an emphasis on edge-based processing, these models are optimised to run directly on Raspberry Pi devices, enabling data analysis and species identification to take place entirely in the field. This approach significantly reduces the need for large-scale data transfer and reliance on researchers manually collecting data in person.",
          ],
          href: "https://www.turing.ac.uk/research/research-projects/amber",
          categories: ["software", "analysis"],
        },
        {
          partners: ["ukceh"],
          title: "UKCEH AMI System",
          description: [
            "The UKCEH AMI System consists of UV and white lights for attracting moths, high-capacity data storage to collate images over long sampling periods, battery and solar power to allow for deployment away from mains power, and customisable sampling schedules. The images it collects can be processed through one’s own workflow or using the AMI Data Platform. Work is underway to add additional features to the UKCEH AMI System to widen the taxonomic groups that it can monitor. The addition of audible and ultrasound recording will shortly increase the taxonomic coverage of the trap to include birds, bats, and orthoptera.",
          ],
          href: "https://www.ceh.ac.uk/solutions/equipment/automated-monitoring-insects-trap",
          categories: ["hardware"],
        },
        {
          partners: ["ukceh"],
          title: "AgZero+",
          description: [
            "AgZero+ is an ambitious five-year research programme supporting the UK’s transition towards domestic food production that is sustainable, carbon-neutral and has a positive effect on nature. UKCEH AMI systems are deployed across a range of farms to test their ability to monitor impacts of farming practise on nocturnal insect communities.",
          ],
          href: "https://www.ceh.ac.uk/our-science/projects/agzero",
          categories: ["analysis"],
        },
        {
          partners: ["ukceh", "au"],
          title: "InsectAI",
          description: [
            "InsectAI will bring together researchers and stakeholders interested in harnessing new camera and AI technologies for monitoring insects. Together we will direct and drive the research agenda, build research capacity across Europe, and support innovation and application.",
          ],
          href: "https://insectai.eu/",
          categories: ["knowledge"],
        },
        {
          partners: ["vtecostudies"],
          title: "Vermont Atlas of Life",
          description: [
            "The Vermont Atlas of Life is an ever-growing library of knowledge on Vermont’s biodiversity – an online, real-time resource with maps, photographs, and primary biodiversity data open for anyone to use. As human activity profoundly alters the map of life on local and global scales, our response requires knowledge of plant and animal distributions across vast landscapes and over long periods of time. Vermonters cannot respond effectively to climate change, natural disasters, invasive species, and other environmental and economic threats without a new understanding of the state’s living resources.",
          ],
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
          title:
            "An Automated Light Trap to Monitor Moths (Lepidoptera) Using Computer Vision-Based Tracking and Deep Learning",
          description:
            "We present a portable computer vision system capable of attracting and detecting live insects. More specifically, the paper proposes detection and classification of species by recording images of live individuals attracted to a light trap. An Automated Moth Trap (AMT) with multiple light sources and a camera was designed to attract and monitor live insects during twilight and night hours. A computer vision algorithm referred to as Moth Classification and Counting (MCC), based on deep learning analysis of the captured images, tracked and counted the number of insects and identified moth species.",
          href: "https://doi.org/10.3390/s21020343",
        },
        {
          title: "Insect Identification in the Wild: The AMI Dataset",
          description:
            "We provide the first large-scale machine learning benchmarks for fine-grained insect recognition, designed to match real-world tasks faced by ecologists.",
          href: "https://arxiv.org/abs/2406.12452",
        },
        {
          title:
            "Towards a standardized framework for AI-assisted, image-based monitoring of nocturnal insects.",
          description:
            "We describe computer vision approaches for the detection, tracking and classification of insects, including models built from existing aggregations of labelled insect images. We propose ten priorities towards a step-change in automated monitoring of nocturnal insects, a vital task in the face of rapid biodiversity loss from global threats.",
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
