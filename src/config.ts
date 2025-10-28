// siteConfig.js

const siteConfig = {
  name: "Derek Lamb",
  title: "Guest Experience Manager",
  description: "Portfolio website of Derek Lamb",
  accentColor: "#1d4ed8",
  social: {
    email: "derek.lamb@disney.com",
    linkedin: "https://www.linkedin.com/in/dlamb95",
    github: "https://github.com/D-Lamb95/portfolio",
  },
  aboutMe: `Hi, I’m **Derek Lamb**, an aspiring data scientist and operations leader passionate about using analytics to drive sustainable, data-informed decision-making. At Disney, I lead Merchandise operations and oversee a team of 90 Cast Members, utilizing real-time insights to enhance performance, efficiency, and the guest experience.
  
My academic work in Data Science focuses on renewable energy forecasting, environmental analytics, natural language processing, and large-scale data engineering using tools such as NiFi, HDFS, Hive, HBase, and Spark. I thrive at the intersection of leadership and technology, turning data into stories that inspire action.`,

  skills: [
    "Python",
    "Pandas",
    "SQL",
    "Machine Learning",
    "Data Visualization",
    "Power BI",
    "Tableau",
    "Hadoop / Spark",
    "NiFi / Hive / HBase",
  ],

  projects: [
    {
      name: "Renewable Energy Forecasting",
      description:
        "Predicted solar and wind energy production using EIA and CIMIS datasets through ARIMA/SARIMA and regression models to identify seasonal and temperature trends.",
      link: "https://github.com/D-Lamb95/renewable-energy-forecasting",
      skills: ["Python", "Pandas", "ARIMA/SARIMA", "Regression", "Matplotlib"],
    },
    {
      name: "Fraud Detection & AML Big Data Architecture",
      description:
        "Designed a scalable $100M financial data ecosystem using NiFi, HDFS, Hive, HBase, and Spark to support real-time fraud detection and compliance monitoring.",
      link: "https://github.com/D-Lamb95/fraud-detection-aml-architecture",
      skills: ["NiFi", "HDFS", "Hive", "HBase", "Spark", "Architecture Design"],
    },
    {
      name: "End-to-End Data Pipeline with NiFi, Hive, and Spark",
      description:
        "Built a complete ETL pipeline using the Students_Grading_Dataset, moving data through ingestion, storage, warehousing, and Spark analytics.",
      link: "https://github.com/D-Lamb95/nifi-hive-spark-pipeline",
      skills: ["NiFi", "HDFS", "Hive", "Spark", "ETL"],
    },
    {
      name: "GBIF Biodiversity Analysis (North American Bird Data)",
      description:
        "Analyzed biodiversity data from GBIF to explore bird distribution patterns across the U.S., Canada, and Mexico, focusing on observation density and citizen-science impacts.",
      link: "https://github.com/D-Lamb95/gbif-bird-biodiversity",
      skills: ["Python", "GeoPandas", "Matplotlib", "Data Cleaning", "Visualization"],
    },
    {
      name: "Movie Database API Integration",
      description:
        "Created a Python-based data mining system using the OMDb API, combining JSON parsing and SQL integration to generate a searchable movie dataset.",
      link: "https://github.com/D-Lamb95/movie-database-api",
      skills: ["Python", "APIs", "Requests", "SQL", "JSON"],
    },
    {
      name: "Weather Data Transformation and Cleansing",
      description:
        "Combined data from BeautifulSoup web scraping and the OpenWeatherMap API to clean and merge weather datasets for predictive modeling.",
      link: "https://github.com/D-Lamb95/weather-data-transformation",
      skills: ["Python", "BeautifulSoup", "OpenWeatherMap API", "Pandas", "Data Cleaning"],
    },
    {
      name: "Lottery Winning Numbers Analysis",
      description:
        "Developed Power BI and Tableau visualizations to explore the randomness and frequency of lottery winning numbers using histograms, scatterplots, and density plots.",
      link: "https://github.com/D-Lamb95/lottery-winning-numbers",
      skills: ["Power BI", "Tableau", "Python", "Data Visualization"],
    },
    {
      name: "Kia & Hyundai Theft Visualization",
      description:
        "Created geospatial heatmaps and city-level dashboards to analyze theft frequency and visualize high-risk regions using open-source vehicle theft data.",
      link: "https://github.com/D-Lamb95/kia-hyundai-theft-viz",
      skills: ["Python", "GeoPandas", "Power BI", "Data Visualization"],
    },
    {
      name: "WAVES Visitor Appointment Analysis",
      description:
        "Analyzed visitor appointment data for trend detection using stacked bar and line charts, identifying high-volume months and weekly patterns.",
      link: "https://github.com/D-Lamb95/waves-visitor-analysis",
      skills: ["Python", "Pandas", "Matplotlib", "Time Series", "EDA"],
    },
    {
      name: "Hybrid Recommendation System (Planned)",
      description:
        "Planned correlation-based recommendation system using DataFrames to analyze user-item preferences and similarity-based recommendations.",
      link: "https://github.com/D-Lamb95/hybrid-recommender",
      skills: ["Python", "Pandas", "Recommendation Systems", "Similarity Metrics"],
    },
  ],

  experience: [
    {
      company: "The Walt Disney Company",
      title: "Guest Experience Manager, Merchandise",
      dateRange: "June 2025 – Present",
      bullets: [
        "Lead a team of 90 Cast Members including Disney Programs participants, ensuring operational excellence and positive guest experiences.",
        "Use SharePoint, HotSOS, and real-time reporting tools to streamline communication, safety, and efficiency across Merchandise operations.",
        "Leverage performance data to track KPIs such as sales conversion, guest satisfaction, and productivity.",
      ],
    },
    {
      company: "The Walt Disney Company",
      title: "College and International Recruitment Coordinator",
      dateRange: "July 2023 – June 2025",
      bullets: [
        "Forecasted staffing needs for 2,000+ seasonal candidates through data-driven models aligning projected vs. actual hiring outcomes.",
        "Collaborated with People Insights to evaluate forecasting accuracy during recruitment cycles.",
        "Streamlined recruiting workflows and stakeholder communication across 50+ recruiters using SharePoint and Jira.",
      ],
    },
  ],

  education: [
    {
      school: "Bellevue University",
      degree: "Master of Science in Data Science",
      dateRange: "Expected 2026",
    },
    {
      school: "University of Maryland",
      degree: "Bachelor of Science in Biology",
      dateRange: "2013 – 2017",
    },
  ],
};

export default siteConfig;
