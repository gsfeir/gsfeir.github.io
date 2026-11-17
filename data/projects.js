/* =====================================================================
   PROJECTS — edit this file to add or change project cards.
   ---------------------------------------------------------------------
   FIELDS
     title        short name shown on the card
     subtitle     full project title
     description  a short paragraph
     role         your role
     funding      funder / scheme
     amount       optional award amount
     period       e.g. "2022 – 2024"
     host         host institution
     website      optional project website ("" for none)
     code         optional list of { label, url } for code repositories
     papers       list of publication ids from data/publications.js
   ===================================================================== */

window.PROJECTS = [
  {
    title: "Econ-ML",
    subtitle: "Econometric Machine Learning for Better Heterogeneity Representation",
    description:
      "Econ-ML brings machine learning into discrete choice models to capture how preferences " +
      "and behaviour differ across people, while keeping the models interpretable. " +
      "The project developed latent class and generative choice models that combine smart card " +
      "data with travel surveys, with applications to public transport route choice and travel behaviour.",
    role: "Fellow / Principal Investigator",
    funding: "Marie Skłodowska-Curie Postdoctoral Fellowship (MSCA-2021-PF-01), European Commission",
    amount: "€214,934",
    period: "2022 – 2024",
    host: "Technical University of Denmark (DTU)",
    website: "https://econml.org/",
    code: [],
    papers: [],
  },
];
