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
      text: "AMI is a non-lethal, end-to-end monitoring solution for automated insect detection and species classification that leverages machine learning (artificial intelligence). AMI can be used to process, analyse, quality control and compile large batches of standardised data in near real-time. It is brought to you by a consortium of international experts.",
    },
    {
      title: "Why AMI is Needed",
      text: "There are over a million known species of insects on Earth, representing nearly one half of all known organisms. Insects provide essential services that are critical for humans, such as the pollination of fruit, vegetables, and flowers or the control of pests and disease vectors, among others. Insect populations are declining in abundance and diversity due to multiple stressors including deforestation and insecticides. These changes raise concerns about ecosystem health and potential global ecological and economic consequences.\n\nStill, data on insect populations is sparse. It is challenging and resource-intensive to collect data and train subject matter experts to scale up the study and conservation of insects. There is therefore a worldwide need for robust, cost-effective methods to fill the data gap in a way that minimizes bias and maximizes the quantity and quality of data collected.\n\nAMI fills that gap to enable scientists to track or predict insect biodiversity loss and mitigate its impacts on human health, livelihoods, and economies.",
    },
  ],
  projects: [
    {
      image: "/ami-trap.jpeg",
      title: "Hardware",
      text: "The UKCEH AMI Biorecorder consists of UV and white lights for attracting moths, high-capacity data storage to collate images over long sampling periods, battery and solar power to allow for deployment away from mains power, and customisable sampling schedules. Images collected can be processed through one’s own workflow or using the Mila AMI Data Platform.",
      href: "https://www.ceh.ac.uk/solutions/equipment/automated-monitoring-insects-trap",
    },
    {
      image: "/ami-companion.jpg",
      title: "Data management",
      text: "The Mila AMI Data Platform and its offline Data Companion utilize machine learning (ML) to automatically and efficiently organise large amounts of data. It is device-agnostic and can be used for images taken by any camera. It rapidly performs fine-grained species classification and new species discovery using the GBIF and Darwin Core Standards. Experts review the classifications and rectify them as needed, thereby improving the accuracy of the algorithms. The Mila AMI Data Platform and its Companion are open source and have been developed in collaboration with AMI Consortium Partners (see GitHub repository for list of contributors). Public contributions to improve its performance and/or to enrich its offerings are most welcome.",
      href: "https://mila.quebec/en/automated-monitoring-of-insects-ami",
    },
    {
      image: "/ami-offline.jpeg",
      title: "Analytical Toolbox",
      text: "The Mila AMI Data Platform provides the ability to browse, filter and sort images publicly shared by users. The Platform continuously deploys additional functionalities to support data analysis, such as dataset downloading as a file or programmatically through an API, or data visualisations and coding libraries for analysis (under development). The AMI Consortium will share its methodological research results and best analytical practices for AMI datasets.",
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
        "We provide the first large-scale machine learning benchmarks for fine-grained insect recognition, designed to match real-world tasks faced by ecologists.",
      href: "https://arxiv.org/abs/2406.12452",
    },
    {
      title:
        "Towards a standardized framework for AI-assisted, image-based monitoring of nocturnal insects",
      description:
        "We describe computer vision approaches for the detection, tracking and classification of insects, including models built from existing aggregations of labelled insect images. We propose ten priorities towards a step-change in automated monitoring of nocturnal insects, a vital task in the face of rapid biodiversity loss from global threats.",
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
