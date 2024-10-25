export enum ApplicationRoutes {
  Root = '/',
  Any = '*',
  SignIn = '/sign-in',
  SignUp = '/sign-up',
  Profile = '/profile',
  Service = '/service',
  Docs = '/docs',
  Contact = '/contact',
}

export enum Faculties {
  FI = 'FI',
  FGN = 'FGN',
  FEN = 'FEN',
  FSNST = 'FSNST',
  FOS = 'FOS',
  FPrN = 'FPrN',
  FPvN = 'FPvN',
}

export enum Specialties {
  AppliedMathematics = 'Applied mathematics',
  SoftwareEngineering = 'Software engineering',
  ComputerScience = 'Computer science',
  CybersecurityAndInformationProtection = 'Cybersecurity and information protection',
  AutomationComputerIntegratedTechnologiesAndRobotics = 'Automation, computer-integrated technologies and robotics',
  HistoryAndArcheology = 'History and archeology',
  Philosophy = 'Philosophy',
  CulturalStudies = 'Cultural studies',
  PhilologyUkrainian = 'Philology (Ukrainian)',
  PhilologyGermanic = 'Philology (Germanic)',
  Economics = 'Economics',
  FinanceBankingInsuranceAndTheStockMarket = 'Finance, banking, insurance and the stock market',
  Management = 'Management',
  Marketing = 'Marketing',
  PoliticalScience = 'Political science',
  Sociology = 'Sociology',
  Journalism = 'Journalism',
  InternationalRelationsPublicCommunicationsAndRegionalStudies = 'International Relations, Public Communications and Regional Studies',
  Psychology = 'Psychology',
  PublicHealth = 'Public health',
  SocialWork = 'Social work',
  BiologyAndBiochemistry = 'Biology and biochemistry',
  Ecology = 'Ecology',
  Chemistry = 'Chemistry',
  PhysicsAndAstronomy = 'Physics and astronomy',
  Law = 'Law',
  PublicManagementAndAdministration = 'Public management and administration',
}

export enum YearsOfStudy {
  BP1 = 'BP1',
  BP2 = 'BP2',
  BP3 = 'BP3',
  BP4 = 'BP4',
}

export enum DocumentTypes {
  CertificateOfStudy = 'Certificate of study',
  CertificateOfTuitionFees = 'Certificate of Tuition Fees',
  CertificateOfFulfillmentOfTheCorporateAgreement = 'Certificate of fulfillment of the Corporate Agreement',
  CertificateOfStorageOfOriginalDocuments = 'Certificate of storage of original documents',
  CertificateOfPaymentForTheContract = 'Certificate of payment for the contract',
}

export const SpecialtiesToFaculties = {
  [Faculties.FI]: [
    Specialties.AppliedMathematics,
    Specialties.SoftwareEngineering,
    Specialties.ComputerScience,
    Specialties.CybersecurityAndInformationProtection,
    Specialties.AutomationComputerIntegratedTechnologiesAndRobotics,
  ],
  [Faculties.FGN]: [
    Specialties.HistoryAndArcheology,
    Specialties.Philosophy,
    Specialties.CulturalStudies,
    Specialties.PhilologyUkrainian,
    Specialties.PhilologyGermanic,
  ],
  [Faculties.FEN]: [
    Specialties.Economics,
    Specialties.FinanceBankingInsuranceAndTheStockMarket,
    Specialties.Management,
    Specialties.Marketing,
  ],
  [Faculties.FSNST]: [
    Specialties.PoliticalScience,
    Specialties.Sociology,
    Specialties.Journalism,
    Specialties.InternationalRelationsPublicCommunicationsAndRegionalStudies,
  ],
  [Faculties.FOS]: [Specialties.Psychology, Specialties.PublicHealth, Specialties.SocialWork],
  [Faculties.FPrN]: [
    Specialties.BiologyAndBiochemistry,
    Specialties.Ecology,
    Specialties.Chemistry,
    Specialties.PhysicsAndAstronomy,
  ],
  [Faculties.FPvN]: [Specialties.Law, Specialties.PublicManagementAndAdministration],
};
