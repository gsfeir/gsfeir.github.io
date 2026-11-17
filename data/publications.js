/* =====================================================================
   PUBLICATIONS — the only file you need to edit to update the list.
   ---------------------------------------------------------------------
   HOW TO ADD A PAPER
     1. Copy any entry below (from "{" to "},").
     2. Paste it at the top of the list and change the fields.
     The site sorts by year and files it under the right filter.

   HOW TO MOVE A PAPER FROM "UNDER REVIEW" TO "PUBLISHED"
     1. Change   status: "under-review"   to   status: "published"
     2. Update   venue   (add volume, article number / pages)
     3. Replace  link    (arXiv link -> DOI link)
     4. Update   year    if needed

   FIELDS
     id      short unique name (used to link papers to projects)
     status  "published" | "under-review" | "conference"
     year    number, e.g. 2026
     authors as you want it shown — "Sfeir, G." is bolded automatically
     title   paper title (becomes a link if "link" is filled in)
     venue   journal / conference, volume, pages, location...
     note    optional extra line, e.g. "Under review at ..."
     link    optional URL (DOI or arXiv); leave "" for none

   Editing on github.com: open this file, click the pencil icon,
   make the change, then "Commit changes". The site updates in ~1 min.
   ===================================================================== */

window.PUBLICATIONS = [

  /* ---------------- Journal papers — under review ---------------- */
  {
    id: "J10",
    status: "under-review",
    year: 2026,
    authors: "Torrejón, L.M., Hess, S., Hancock, T.O., Sfeir, G.",
    title: "Using machine learning metrics to provide deeper insights into the performance of choice models",
    venue: "arXiv preprint arXiv:2609.20655",
    note: "Under review at Transportation Research Part C: Emerging Technologies",
    link: "https://doi.org/10.48550/arXiv.2609.20655",
  },
  {
    id: "J9",
    status: "under-review",
    year: 2026,
    authors: "Sfeir, G., Hess, S., Hancock, T.O., Rodrigues, F., Rad, J.A., Bliemer, M., Beck, M., Khan, F.",
    title: "A Bayesian latent class reinforcement learning framework to capture adaptive, feedback-driven travel behaviour",
    venue: "arXiv preprint arXiv:2512.14713",
    note: "Under review at Transportation Research Part C: Emerging Technologies",
    link: "https://doi.org/10.48550/arXiv.2512.14713",
  },

  /* ---------------- Journal papers — published ---------------- */
  {
    id: "J8",
    status: "published",
    year: 2026,
    authors: "Tsoleridis, P., Hancock, T.O., Hess, S., Sfeir, G.",
    title: "Modelling choices: The conflict between realism and prediction performance",
    venue: "Journal of Choice Modelling, 61, 100636",
    link: "https://doi.org/10.1016/j.jocm.2026.100636",
  },
  {
    id: "J7",
    status: "published",
    year: 2026,
    authors: "Sfeir, G., Nova, G., Hess, S., van Cranenburgh, S.",
    title: "Can large language models assist choice modelling? Insights into prompting and current models’ capabilities",
    venue: "Journal of Choice Modelling, 60, 100623",
    link: "https://doi.org/10.1016/j.jocm.2026.100623",
  },
  {
    id: "J6",
    status: "published",
    year: 2024,
    authors: "Sfeir, G., Rodrigues, F., Abou-Zeid, M., Pereira, F.C.",
    title: "Analyzing the reporting error of public transport trips in the Danish national travel survey using smart card data",
    venue: "Transportation",
    link: "https://doi.org/10.1007/s11116-024-10535-z",
  },
  {
    id: "J5",
    status: "published",
    year: 2023,
    authors: "Lahoz, T.L., Pereira, F.C., Sfeir, G., Arkoudi, I., Monteiro, M.M., Azevedo, C.L.",
    title: "Attitudes and latent class choice models using machine learning",
    venue: "Journal of Choice Modelling, 49, 100452",
    link: "https://doi.org/10.1016/j.jocm.2023.100452",
  },
  {
    id: "J4",
    status: "published",
    year: 2022,
    authors: "Sfeir, G., Rodrigues, F., Abou-Zeid, M.",
    title: "Gaussian process latent class choice models",
    venue: "Transportation Research Part C: Emerging Technologies, 136, 103552",
    link: "https://doi.org/10.1016/j.trc.2022.103552",
  },
  {
    id: "J3",
    status: "published",
    year: 2021,
    authors: "Sfeir, G., Abou-Zeid, M., Rodrigues, F., Pereira, F.C., Kaysi, I.",
    title: "Latent class choice model with a flexible class membership component: A mixture model approach",
    venue: "Journal of Choice Modelling, 41, 100320",
    link: "https://doi.org/10.1016/j.jocm.2021.100320",
  },
  {
    id: "J2",
    status: "published",
    year: 2020,
    authors: "Sfeir, G., Abou-Zeid, M., Kaysi, I.",
    title: "Multivariate count data models for adoption of new transport modes in an organization-based context",
    venue: "Transport Policy, 91, 59–75",
    link: "https://doi.org/10.1016/j.tranpol.2020.03.014",
  },
  {
    id: "J1",
    status: "published",
    year: 2018,
    authors: "Sfeir, G., Antoniou, C., Abbas, N.",
    title: "Simulation-based evacuation planning using state-of-the-art sensitivity analysis techniques",
    venue: "Simulation Modelling Practice and Theory, 89, 160–174",
    link: "https://doi.org/10.1016/j.simpat.2018.09.017",
  },

  /* ---------------- Conference papers ---------------- */
  {
    id: "C24",
    status: "conference",
    year: 2026,
    authors: "Hess, S., Sfeir, G., Palma, D., Bunch, D.",
    title: "Gradient-assisted model specification",
    venue: "14th Symposium of the European Association for Research in Transportation (hEART), Paris, France",
    link: "",
  },
  {
    id: "C23",
    status: "conference",
    year: 2026,
    authors: "Torrejón, L.M., Hess, S., Hancock, T.O., Sfeir, G.",
    title: "Variational autoencoders for anomaly detection in choice models",
    venue: "14th Symposium of the European Association for Research in Transportation (hEART), Paris, France",
    link: "",
  },
  {
    id: "C22",
    status: "conference",
    year: 2026,
    authors: "Sfeir, G., Hess, S., Pereira, F.C.",
    title: "Symbolic regression for choice models: An interpretable data-driven machine learning for discovering utility specifications",
    venue: "14th Symposium of the European Association for Research in Transportation (hEART), Paris, France",
    link: "",
  },
  {
    id: "C21",
    status: "conference",
    year: 2026,
    authors: "Hess, S., Sfeir, G., Palma, D., Bunch, D.",
    title: "Gradient-assisted model specification",
    venue: "9th International Choice Modelling Conference (ICMC), Gold Coast, Australia",
    link: "",
  },
  {
    id: "C20",
    status: "conference",
    year: 2026,
    authors: "Hancock, T.O., Hess, S., Choudhury, C., Wang, Y., Rad, J.A., Sfeir, G.",
    title: "Better models or better data? What matters more in capturing behavioural change?",
    venue: "9th International Choice Modelling Conference (ICMC), Gold Coast, Australia",
    link: "",
  },
  {
    id: "C19",
    status: "conference",
    year: 2026,
    authors: "Torrejón, L.M., Hess, S., Hancock, T.O., Sfeir, G.",
    title: "Variational autoencoders for anomaly detection in choice models",
    venue: "9th International Choice Modelling Conference (ICMC), Gold Coast, Australia",
    link: "",
  },
  {
    id: "C18",
    status: "conference",
    year: 2026,
    authors: "Sfeir, G., Hess, S., Pereira, F.C.",
    title: "Symbolic regression for choice models: An interpretable data-driven machine learning for discovering utility specifications",
    venue: "9th International Choice Modelling Conference (ICMC), Gold Coast, Australia",
    link: "",
  },
  {
    id: "C17",
    status: "conference",
    year: 2026,
    authors: "Sfeir, G., Nova, G., Hess, S., van Cranenburgh, S.",
    title: "Can large language models assist choice modelling? Insights into prompting and current models’ capabilities",
    venue: "Modelling World Conference, Leeds, UK",
    link: "",
  },
  {
    id: "C16",
    status: "conference",
    year: 2026,
    authors: "Pascariu, B., Sfeir, G., Marlière, G., Rodrigues, F., Azevedo, C. M. L., Pellegrini, P.",
    title: "An integrated passenger–traffic simulation framework for evaluating rail management optimization",
    venue: "27th ROADEF Conference, Tours, France",
    link: "",
  },
  {
    id: "C15",
    status: "conference",
    year: 2025,
    authors: "Sfeir, G., Hess, S., Hancock, T.O., Rad, J.A., Rodrigues, F., Bliemer, M., Beck, M., Khan, F.",
    title: "Bridging econometrics with mathematical psychology and Bayesian variational inference: The case of latent class reinforcement learning",
    venue: "27th Annual Meeting of the Euro Working Group on Transportation, Edinburgh, Scotland",
    link: "",
  },
  {
    id: "C14",
    status: "conference",
    year: 2025,
    authors: "Torrejón, L.M., Hess, S., Hancock, T.O., Sfeir, G.",
    title: "Analysis of choice models and machine learning algorithms performance using probabilistic machine learning metrics",
    venue: "27th Annual Meeting of the Euro Working Group on Transportation, Edinburgh, Scotland",
    link: "",
  },
  {
    id: "C13",
    status: "conference",
    year: 2025,
    authors: "Sfeir, G., Hancock, T.O., Hess, S.",
    title: "From multinomial logit to decision field theory: A neural network-based indirect inference approach",
    venue: "Virtual MathPsych / 23rd International Conference on Cognitive Modeling (ICCM)",
    link: "",
  },
  {
    id: "C12",
    status: "conference",
    year: 2025,
    authors: "Sfeir, G., Rodrigues, F., Seshadri, R., Azevedo, C.L.",
    title: "Choice sets and smart card data in public transport route choice models: Generated vs. empirical sets",
    venue: "16th International Conference on Advanced Systems in Public Transport (CASPT2025), Kyoto, Japan",
    link: "",
  },
  {
    id: "C11",
    status: "conference",
    year: 2024,
    authors: "Pascariu, B., Marlière, G., Sfeir, G., Flensburg, J. V., Naldini, F., Rodrigues, F., Pellegrini, P., Azevedo, C.L.",
    title: "Integrated demand and supply simulation for realistic assessment of rail traffic management optimization",
    venue: "International Conference on Optimization and Decision Science (ODS), Badesi – Sardinia, Italy",
    link: "",
  },
  {
    id: "C10",
    status: "conference",
    year: 2024,
    authors: "Pascariu, B., Marlière, G., Sfeir, G., Flensburg, J. V., Naldini, F., Rodrigues, F., Pellegrini, P., Azevedo, C.L.",
    title: "Realistic assessment of rail traffic management optimization: a demand-supply simulation framework",
    venue: "33rd European Conference on Operational Research, Copenhagen, Denmark",
    link: "",
  },
  {
    id: "C9",
    status: "conference",
    year: 2024,
    authors: "Sfeir, G., Rodrigues, F., Seshadri, R., Azevedo, C.L.",
    title: "Identifying choice sets for public transport route choice models using smart-card data: Generated vs. empirical sets",
    venue: "17th International Conference on Travel Behaviour Research, Vienna, Austria",
    link: "",
  },
  {
    id: "C8",
    status: "conference",
    year: 2024,
    authors: "Sfeir, G., Rodrigues, F., Pereira, F.C.",
    title: "Generative latent class choice models: Enriching smart card data with travel surveys using variational auto-encoders",
    venue: "8th International Choice Modelling Conference (ICMC), Puerto Varas, Chile",
    link: "",
  },
  {
    id: "C7",
    status: "conference",
    year: 2024,
    authors: "Sfeir, G., Rodrigues, F., Abou-Zeid, M., Pereira, F.C.",
    title: "Analyzing the reporting error of public transport trips in the Danish national travel survey using smart card data",
    venue: "Transportation Research Board 103rd Annual Meeting, Washington D.C., USA",
    link: "",
  },
  {
    id: "C6",
    status: "conference",
    year: 2023,
    authors: "Lahoz, T.L., Pereira, F.C., Sfeir, G., Arkoudi, I., Monteiro, M.M., Azevedo, C.L.",
    title: "Attitudes and latent class choice models using machine learning",
    venue: "11th Symposium of the European Association for Research in Transportation (hEART), Zurich, Switzerland",
    link: "",
  },
  {
    id: "C5",
    status: "conference",
    year: 2022,
    authors: "Sfeir, G., Rodrigues, F., Abou-Zeid, M.",
    title: "Gaussian process latent class choice models",
    venue: "7th International Choice Modelling Conference (ICMC), Reykjavik, Iceland",
    link: "",
  },
  {
    id: "C4",
    status: "conference",
    year: 2021,
    authors: "Myhrmann, M.S., Sfeir, G.",
    title: "Changes in interpretation and empirical findings when fully specifying latent classes in a latent class choice model",
    venue: "9th International Cycling Safety Conference, Lund, Sweden",
    link: "",
  },
  {
    id: "C3",
    status: "conference",
    year: 2020,
    authors: "Sfeir, G., Abou-Zeid, M., Rodrigues, F., Pereira, F.C., Kaysi, I.",
    title: "Gaussian mixture models meet econometric models",
    venue: "Transportation Research Board 99th Annual Meeting, Washington D.C., USA",
    link: "",
  },
  {
    id: "C2",
    status: "conference",
    year: 2018,
    authors: "Sfeir, G., Abou-Zeid, M., Kaysi, I.",
    title: "Modeling the demand for a shared-ride taxi and shuttle services in an organization-based context",
    venue: "15th International Conference on Travel Behaviour Research, Santa Barbara, USA",
    link: "",
  },
  {
    id: "C1",
    status: "conference",
    year: 2017,
    authors: "Sfeir, G., Antoniou, C., Abbas, N.",
    title: "Simulation-based evacuation planning using state-of-the-art sensitivity analysis techniques",
    venue: "Transportation Research Board 96th Annual Meeting, Washington D.C., USA",
    link: "",
  },

];
