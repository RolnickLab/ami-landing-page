export const data = {
  partners: [
    {
      label: "Aarhus University",
      location: "Denmark",
    },
    {
      logo: "/mila-logo.png",
      label: "Mila - Quebec Artificial Intelligence Institute",
      location: "Canada",
      href: "https://mila.quebec/en/automated-monitoring-of-insects-ami",
    },
    {
      logo: "/space-logo.png",
      label: "Montreal Space for Life - Insectarium",
      location: "Canada",
      href: "https://espacepourlavie.ca/en/news/how-ai-will-revolutionize-preservation-biodiversity",
    },
    {
      label: "Natural Resources Canada",
      location: "Canada",
    },
    {
      label: "The Alan Turing Institute",
      location: "United Kingdom",
    },
    {
      logo: "/ukceh-logo.png",
      label: "UK Centre for Ecology & Hydrology",
      location: "United Kingdom",
      href: "https://www.ceh.ac.uk/solutions/equipment/automated-monitoring-insects-trap",
    },
    {
      label: "Université de Sherbrooke",
      location: "Canada",
    },
    {
      label: "Université Laval",
      location: "Canada",
    },
    {
      logo: "/vermont-logo.webp",
      label: "Vermont Center for Ecostudies",
      location: "United States of America",
      href: "https://vtecostudies.org/",
    },
  ],
  committee: [
    { name: "Tom August", affiliation: "UKCEH" },
    { name: "Marc Bélisle", affiliation: "Université de Sherbrooke" },
    { name: "Joe Bowden", affiliation: "Natural Resources Canada" },
    { name: "Michael Bunsen", affiliation: "Mila / Montreal Space for Life" },
    { name: "Katriona Goldmann", affiliation: "The Alan Turing Institute" },
    { name: "Toke Høye", affiliation: "Aarhus University" },
    { name: "Jenna Lawson", affiliation: "UKCEH" },
    { name: "Maxim Larrivée", affiliation: "Montreal Space for Life" },
    { name: "Marc Mazerolle", affiliation: "Université Laval" },
    { name: "Kent McFarland", affiliation: "Vermont Center for Ecostudies" },
    { name: "David Rolnick", affiliation: "Mila" },
    { name: "David Roy", affiliation: "UKCEH" },
  ],
  about: [
    {
      title: "What is Automated Monitoring of Insects (AMI)?",
      text: "AMI is a range of services that enable the large-scale capture, enhancement, and analysis of images of insects in the wild. The various services are contributed by a consortium of international experts who envision a world in which trustworthy data is openly available on insects through sensors and AI technology at wide spatial, temporal and taxonomic scales empowering local communities to protect and conserve biodiversity.\n\nAMI has built a non-lethal, end-to-end monitoring solution for automated insect detection, fine-grained species classification, and new species discovery algorithms. Its data management platform is powered by machine learning (artificial intelligence) to process, analyse, quality control and compile large batches of standardised data in near real-time.",
    },
    {
      title: "Why AMI is Needed",
      text: "Insects represent half of all global biodiversity and their populations around the world are in sharp decline. This loss is accelerating with climate change and has severe implications for ecosystems, including agriculture and forestry. Yet data on insect diversity and abundance are woefully inadequate due to the insufficient availability of experts and the lack of scalable tools for monitoring such an abundant and diverse group of organisms. There is therefore a worldwide need for robust, cost-effective methods to fill the data gap in a way that minimizes bias and maximizes the quantity and quality of data collected.\n\nSuch augmented data will enable scientists to track or predict the effects of climate change on biodiversity and how they vary in space and time. Armed with these empirical insights, decision-making support tools can be developed to inform conservation efforts as well as mitigate impacts on human health, livelihoods, and economies.",
      blocks: [],
    },
  ],
  projects: [
    {
      image: "/ami-trap.jpeg",
      title: "Hardware",
      text: "The UKCEH AMI System consists of UV and white lights for attracting and imaging moths, high-capacity data storage to collate images over long sampling periods, battery and solar power to allow the system to be deployed away from mains power, and customisable sampling schedules. Images collected can be processed through your own workflow or using the Mila AMI Data Platform.",
      href: "https://www.ceh.ac.uk/solutions/equipment/automated-monitoring-insects-trap",
    },
    {
      image: "/ami-companion.jpg",
      title: "Data management",
      text: "The Mila AMI Data Platform utilizes machine learning (ML; an area of artificial intelligence) to automatically and efficiently organise large amounts of images. It is device-agnostic and can be used for images taken by any camera. The Platform is open-source and welcomes public contributions to improve its performance and/or to enrich its offerings of ML algorithms.",
      href: "https://mila.quebec/en/automated-monitoring-of-insects-ami",
    },
    {
      image: "/ami-offline.jpeg",
      title: "Analytical Toolbox",
      text: "The Mila AMI Data Platform provides the ability to browse, filter and sort all images publicly shared by its users. The Platform continuously deploys additional functionalities to support data analysis, such as dataset downloading as a file or programmatically through an API, or data visualisations and coding libraries for analysis (under development).",
      href: "https://mila.quebec/en/automated-monitoring-of-insects-ami",
    },
  ],
  resources: [
    {
      title: "AMI Dataset",
      description:
        "The AMI (Automated Monitoring of Insects) dataset, consists of two parts: 1) AMI-GBIF, a dataset of ∼2.5M human-captured insect images curated from citizen science platforms and museum collections, 2) AMI-Traps, an expert-annotated dataset of 2,893 insect camera trap images (representing 52,948 labeled insects) collected from a global network of automated camera traps, designed to test in-the-wild performance.",
      href: "https://zenodo.org/records/12554005",
    },
  ],
  publications: [
    {
      title: "Insect Identification in the Wild: The AMI Dataset",
      description:
        "Paper presented at European Conference on Computer Vision 2024",
      href: "https://arxiv.org/abs/2406.12452",
    },
    {
      title:
        "Towards a standardized framework for AI-assisted, image-based monitoring of nocturnal insects",
      description:
        "In Philosophical Transactions of the Royal Society B: Biological Sciences (2024)",
      href: "https://doi.org/10.1098/rstb.2023.0108",
    },
  ],
  media: [
    {
      src: "https://www.youtube.com/embed/9MtOHwPSF50?si=Qrjp2qHUuhn1Ui0a",
      caption: "The UKCEH AMI System deployed in Panama",
    },
    {
      src: "https://globalnews.ca/video/embed/10188149/",
      caption: "How Montreal researchers are using AI to discover new species",
    },
  ],
};
