// ================================================================
//  QUESTION BANK
//  Each question has:
//    q    – question text
//    opts – answer choices (array)
//    a    – correct option index (0-based)
//    exp  – explanation of why the correct answer is right
//    oe   – per-option explanations (array, same length as opts)
//           for correct option: reinforce why it's right
//           for wrong options:  explain why it's wrong
// ================================================================
const QUESTIONS = [

  // ──────────────────────── PATIENT CARE ────────────────────────

  { cat:"Patient Care", sub:"Legal & Ethics",
    q:"Respondeat superior means:",
    opts:["The thing speaks for itself","A radiographer needs no malpractice insurance","The reasonably prudent person should decide","Let the master answer"],
    a:3,
    exp:"Respondeat superior ('let the master answer') holds the employer liable for an employee's negligent acts — though the employee may also be personally liable.",
    oe:[
      "This describes res ipsa loquitur ('the thing speaks for itself') — used when negligence is self-evident, like a sponge left inside a patient.",
      "Malpractice insurance status is unrelated to this legal doctrine. All healthcare workers can be personally liable regardless.",
      "The 'reasonably prudent person' doctrine is the standard used to judge whether negligence occurred — not the definition of respondeat superior.",
      "Correct. Respondeat superior means the employer ('master') is vicariously liable for employees' negligent acts committed in the scope of employment."
    ]
  },

  { cat:"Patient Care", sub:"Legal & Ethics",
    q:"Res ipsa loquitur means:",
    opts:["The master is responsible","The thing speaks for itself","As low as reasonably achievable","The patient's rights prevail"],
    a:1,
    exp:"Res ipsa loquitur ('the thing speaks for itself') applies when negligence is so obvious that it requires no further proof — e.g., a surgical instrument left inside a patient.",
    oe:[
      "This describes respondeat superior, not res ipsa loquitur. These are two separate legal doctrines.",
      "Correct. 'The thing speaks for itself' — in cases where the cause of harm is obviously due to negligence, the plaintiff does not need to prove every element.",
      "ALARA (As Low As Reasonably Achievable) is a radiation protection principle — entirely unrelated to civil tort law.",
      "Patient rights are governed by the Patient's Bill of Rights / HIPAA. This is a patient advocacy concept, not a legal negligence doctrine."
    ]
  },

  { cat:"Patient Care", sub:"Legal & Ethics",
    q:"Battery, in the legal context, means:",
    opts:["Threatening a patient","Unlawful touching or contact without consent","Unjustified restraint of a person","Writing false information about a patient"],
    a:1,
    exp:"Battery is unlawful touching without consent. In radiology this includes imaging the wrong patient, the wrong body part, or performing a procedure against a patient's will.",
    oe:[
      "Threatening a patient is assault — the patient fears being harmed. Assault does not require physical contact.",
      "Correct. Battery = unlawful or unconsented touching. Performing radiography on the wrong patient or body part also qualifies as battery.",
      "Unjustified restraint is false imprisonment, not battery.",
      "Writing false damaging information is libel (written defamation), not battery."
    ]
  },

  { cat:"Patient Care", sub:"Legal & Ethics",
    q:"Assault, in the legal context, means:",
    opts:["Striking the patient","Touching the patient without consent","Causing apprehension or fear of being harmed","Performing radiography against the patient's will"],
    a:2,
    exp:"Assault does NOT require physical contact. It means the patient is made to fear that harm is imminent. The radiographer's imprudent conduct that frightens the patient is grounds for assault.",
    oe:[
      "Striking the patient is battery (unlawful physical contact), not assault. Assault precedes the act — it's the threat or fear.",
      "Touching without consent is battery. Assault is about causing fear, not physical contact.",
      "Correct. Assault = apprehension or fear of imminent harm. No physical contact required.",
      "Radiographing against the patient's will is battery (unconsented touching), though the prior intimidation could also constitute assault."
    ]
  },

  { cat:"Patient Care", sub:"Legal & Ethics",
    q:"Which four elements must ALL be proven to establish malpractice?",
    opts:["Standard of care existed; it was violated; violation caused the injury; actual loss occurred","Injury occurred; patient was harmed; radiographer was present; there was a standard of care","Gross negligence occurred; injury occurred; physician ordered the exam; radiographer violated protocol","Patient complained; standard of care was violated; injury occurred; employer was notified"],
    a:0,
    exp:"All four elements are required for malpractice: (1) a standard of care existed, (2) it was violated by the defendant, (3) that violation directly caused the injury, (4) actual loss or injury occurred.",
    oe:[
      "Correct. This is the complete four-element test: duty, breach, causation, and damages.",
      "Being 'present' is not a legal element. Malpractice requires proof that the radiographer's specific actions caused the harm.",
      "Gross negligence is a higher standard than needed. Also, the physician's order alone doesn't establish radiographer malpractice.",
      "A complaint is not required — patients can sue without prior complaint. Notifying the employer is a reporting step, not a malpractice element."
    ]
  },

  { cat:"Patient Care", sub:"Legal & Ethics",
    q:"False imprisonment is best defined as:",
    opts:["Photographing a patient without permission","Unjustified restraint of a person","Spreading false information verbally","Touching the patient without consent"],
    a:1,
    exp:"False imprisonment is the unjustified restraint of a person's freedom of movement. In radiography, improper use of restraint straps or having others forcibly hold a patient can constitute false imprisonment.",
    oe:[
      "Photographing without permission is invasion of privacy — a separate legal concept.",
      "Correct. Unjustified restraint = false imprisonment. Care must be taken with positioning straps and immobilization devices.",
      "Verbally spreading false damaging information is slander (oral defamation).",
      "Touching without consent is battery. Physical contact is a different legal tort from restraint."
    ]
  },

  { cat:"Patient Care", sub:"Legal & Ethics",
    q:"The ARRT Rules of Ethics are:",
    opts:["Aspirational goals for professional practice","Advisory recommendations that vary by state","Mandatory and carry sanctions for violations","Set and enforced by state licensing boards only"],
    a:2,
    exp:"The Rules of Ethics are mandatory and enforceable — violations can result in sanctions including revocation of ARRT certification. The Code of Ethics (separate) describes aspirational goals.",
    oe:[
      "This describes the Code of Ethics, not the Rules. The Code is aspirational; the Rules are binding.",
      "The Rules of Ethics apply nationally to all ARRT certificate holders. They are not advisory and do not vary by state.",
      "Correct. The Rules of Ethics are mandatory and enforced by the ARRT with potential sanctions.",
      "While state boards also regulate practice, the ARRT Rules of Ethics are enforced by the ARRT itself, not only state boards."
    ]
  },

  { cat:"Patient Care", sub:"Infection Control",
    q:"The single most effective method to prevent the spread of infection is:",
    opts:["Wearing gloves","Wearing gowns","Maintaining distance from patients","Proper handwashing"],
    a:3,
    exp:"Handwashing remains the gold standard of infection prevention. Gloves and gowns are important secondary barriers but do not replace proper hand hygiene before and after every patient contact.",
    oe:[
      "Gloves reduce contact transmission but are not a substitute for handwashing — hands must be washed when removing gloves.",
      "Gowns protect clothing but do not prevent hand-borne transmission, which is the most common route.",
      "Distance reduces airborne and droplet transmission but does not prevent contact transmission from contaminated surfaces.",
      "Correct. Handwashing removes and kills pathogens from hands — the most common vector of infection spread in healthcare."
    ]
  },

  { cat:"Patient Care", sub:"Infection Control",
    q:"Standard precautions assume that:",
    opts:["Only patients in known isolation are potentially infectious","All patients' body fluids are potentially infectious at all times","Gloves must be worn for every patient contact regardless of situation","Only patients with visible symptoms pose an infection risk"],
    a:1,
    exp:"Standard precautions treat ALL patients as potentially infectious. All blood, body fluids, secretions, and non-intact skin are treated as potential infection sources regardless of known diagnosis.",
    oe:[
      "Standard precautions apply to ALL patients, not just those in isolation. Many patients are infectious before diagnosis.",
      "Correct. Standard precautions = treat every patient's body fluids as infectious, always.",
      "Gloves are required when contact with body fluids is anticipated, not for every single patient interaction (e.g., handshakes).",
      "Many infectious patients are asymptomatic. Waiting for visible symptoms defeats the purpose of standard precautions."
    ]
  },

  { cat:"Patient Care", sub:"Infection Control",
    q:"Airborne transmission differs from droplet transmission because:",
    opts:["Airborne particles are larger and heavier than droplet particles","Airborne particles can remain suspended in the air for extended periods and travel long distances","Droplet transmission requires an insect vector","Airborne transmission only occurs outdoors"],
    a:1,
    exp:"Airborne particles (droplet nuclei, <5 µm) remain suspended in air for extended periods and can travel beyond 3 feet. Droplets (>5 µm) fall quickly and only spread within ~3 feet of the source.",
    oe:[
      "Airborne particles are actually SMALLER (≤5 µm) than droplet particles (>5 µm). Size is the key difference — smaller = stays airborne longer.",
      "Correct. Airborne particles are tiny enough to stay suspended, making airborne precautions (negative pressure rooms, N95 masks) necessary.",
      "Insect vectors are vector-borne transmission (e.g., malaria via mosquitoes). No insect is involved in airborne or droplet transmission.",
      "Airborne transmission occurs wherever the pathogen is aerosolized — indoors or outdoors."
    ]
  },

  { cat:"Patient Care", sub:"Infection Control",
    q:"A fomite is:",
    opts:["A type of pathogen","An insect that transmits disease","A contaminated inanimate object that can transmit infection","A portal of entry for pathogens"],
    a:2,
    exp:"A fomite is an inanimate object (e.g., imaging table, lead apron, blood pressure cuff) contaminated with pathogens. When susceptible tissue contacts the fomite, infection can be transmitted.",
    oe:[
      "A pathogen is the infectious microorganism itself (bacterium, virus, etc.). A fomite is an object — not the pathogen.",
      "An insect that transmits disease is a vector (e.g., a tick carrying Lyme disease). Fomites are non-living objects.",
      "Correct. Fomite = contaminated inanimate object. Examples in radiology: imaging equipment, X-ray tables, detector plates.",
      "A portal of entry is a route by which pathogens enter the body (mouth, nose, skin break). A fomite is an object, not an entry point."
    ]
  },

  { cat:"Patient Care", sub:"Infection Control",
    q:"The most common site of healthcare-acquired (nosocomial) infections is:",
    opts:["Open wounds","Compound fractures","Urinary catheters","Surgical incisions"],
    a:2,
    exp:"Urinary catheters are the most common source of HAIs, accounting for the majority of healthcare-associated urinary tract infections. Approximately 2 million HAIs occur per year in the U.S.",
    oe:[
      "Open wounds are a significant source of infection but are not the most common site of HAIs overall.",
      "Compound fractures are an orthopedic concern but not the primary source of institutional HAIs.",
      "Correct. Urinary catheters are the #1 source. The catheter provides a direct pathway for bacteria to reach the bladder.",
      "Surgical site infections are the second most common type of HAI, not the most common."
    ]
  },

  { cat:"Patient Care", sub:"Pharmacology",
    q:"Barium sulfate is classified as:",
    opts:["A dissolvable organic salt","An inert inorganic salt","A non-ionic iodinated contrast agent","A water-soluble contrast agent"],
    a:1,
    exp:"Barium sulfate (BaSO₄) is an inert inorganic salt. It does not dissolve or absorb into the bloodstream, making it safe for routine GI studies. It is contraindicated if bowel perforation is suspected.",
    oe:[
      "Barium sulfate does NOT dissolve in water or body fluids — this is key to its safety and its contraindication with bowel perforation.",
      "Correct. Inert = chemically unreactive; inorganic salt = not carbon-based. BaSO₄ passes through the GI tract unchanged.",
      "Non-ionic iodinated agents (e.g., iohexol) are water-soluble contrast media used for vascular and CT studies — completely different from barium.",
      "Barium sulfate is NOT water-soluble. Water-soluble contrast agents (e.g., Gastrografin) are used when perforation is suspected."
    ]
  },

  { cat:"Patient Care", sub:"Pharmacology",
    q:"Which lab values are most important before administering iodinated contrast media?",
    opts:["CBC and platelet count","PT/INR and aPTT","BUN, creatinine, and GFR","Fasting glucose and HbA1c"],
    a:2,
    exp:"BUN, creatinine, and GFR assess kidney function. Iodinated contrast is nephrotoxic and can cause contrast-induced nephropathy. Patients with impaired renal function require dose adjustment or alternative imaging.",
    oe:[
      "CBC and platelets assess blood counts and clotting capacity — relevant for procedures with bleeding risk, not specifically contrast nephrotoxicity.",
      "PT/INR and aPTT assess coagulation — relevant for procedures with bleeding risk (e.g., angiography) but not the primary concern for contrast administration.",
      "Correct. BUN and creatinine reflect kidney function. Elevated values indicate renal impairment that increases risk of contrast-induced nephropathy.",
      "Glucose and HbA1c monitor diabetes management. While diabetics on metformin need special precautions with contrast, these labs don't directly assess renal function."
    ]
  },

  { cat:"Patient Care", sub:"Pharmacology",
    q:"At the first sign of an iodinated contrast reaction, the radiographer should:",
    opts:["Immediately call a cardiac arrest code","Stop the examination, stay with the patient, and call for help","Administer epinephrine from the crash cart","Continue the exam since most reactions are mild and self-limiting"],
    a:1,
    exp:"Stop the exam immediately. Never leave the patient alone — even mild reactions can rapidly progress to severe anaphylaxis. Call for help calmly. Document everything. The radiologist determines treatment.",
    oe:[
      "A cardiac arrest code is only called if the patient loses pulse/breathing. Calling a code unnecessarily causes panic and delays appropriate treatment.",
      "Correct. Stop, stay, call for help. Early recognition and staying with the patient are critical — mild symptoms can escalate rapidly.",
      "Epinephrine is administered by a physician or under direct physician order. The radiographer's role is to stop the exam, call for help, and support the patient.",
      "Never continue an exam when a reaction is suspected. Even mild symptoms (sneezing, flushing, hives) are warnings that a more severe reaction may follow."
    ]
  },

  { cat:"Patient Care", sub:"Emergency Care",
    q:"Hypovolemic shock is caused by:",
    opts:["Allergic reaction to foreign proteins","Cardiac failure or dysfunction","Loss of a large amount of blood or plasma","Infection causing a dramatic drop in blood pressure"],
    a:2,
    exp:"Hypo = low, volemic = volume. Loss of blood or plasma reduces circulating volume, causing inadequate perfusion of organs and tissues. Classic signs: tachycardia, cool/clammy skin, low BP.",
    oe:[
      "Allergic reaction to foreign proteins causes anaphylactic shock. Anaphylaxis involves histamine release causing vasodilation and bronchoconstriction — not volume loss.",
      "Cardiac failure causes cardiogenic shock. The heart can't pump effectively even though blood volume may be normal.",
      "Correct. Hypovolemic = low blood volume from hemorrhage, burns, or plasma loss. The heart races to compensate for insufficient volume.",
      "Infection causing a blood pressure drop is septic shock — bacterial toxins cause massive vasodilation and immune response, not primary volume loss."
    ]
  },

  { cat:"Patient Care", sub:"Patient Transfer",
    q:"When using proper body mechanics during a patient transfer, the radiographer should:",
    opts:["Use the back muscles to do all lifting to protect the knees","Keep knees slightly bent, back straight, and lift with the legs","Always transfer patients alone to protect patient privacy","Avoid explaining the procedure to prevent increasing patient anxiety"],
    a:1,
    exp:"Proper mechanics: slight knee bend, straight back, use leg muscles for lifting. This protects the radiographer's spine. Always explain the transfer to gain cooperation and reduce fear.",
    oe:[
      "Using back muscles is the opposite of correct — this is the primary cause of occupational back injuries. Leg muscles must do the lifting.",
      "Correct. Legs are the powerhouse; the back stays straight. This protects the lumbar spine and avoids injury.",
      "Patient transfers should generally be done with assistance when needed, not alone. Patient safety outweighs privacy concerns.",
      "Explaining the transfer procedure is essential — it reduces fear, gains cooperation, and is part of professional patient care."
    ]
  },

  { cat:"Patient Care", sub:"Scheduling",
    q:"When scheduling multiple radiographic examinations on the same day, barium studies should be scheduled:",
    opts:["First to prepare the GI tract","Before urological studies","Before CT scans","Last, because residual barium interferes with other exams"],
    a:3,
    exp:"Barium is radiopaque and persists in the GI tract for days. Residual barium obscures structures on CT, IVP, ultrasound, and nuclear medicine studies. Correct order: endoscopy → urinary → biliary → CT → barium.",
    oe:[
      "Barium should never be first — it interferes with virtually every other study. Endoscopy is done first.",
      "Urological studies (IVP) should be done BEFORE barium. Barium in the colon can obscure the kidneys and ureters.",
      "CT scans must be done BEFORE barium because barium causes streak artifacts on CT images.",
      "Correct. Barium is always last. Its persistence in the GI tract would compromise all other imaging modalities."
    ]
  },

  { cat:"Patient Care", sub:"Communication",
    q:"For valid informed consent, which conditions must be met?",
    opts:["Patient must be of legal age; consent must be voluntary; patient must be mentally competent","Patient must be given a written brochure; must be of legal age; must fully understand every aspect","A physician must witness the consent; patient must be of legal age; must be in writing","Patient must be adult; consent must be notarized; two witnesses must be present"],
    a:0,
    exp:"Three core elements: (1) legal age or legal guardian, (2) voluntary consent (free from coercion), (3) mental competency. A brochure is not required, and patients rarely understand every detail.",
    oe:[
      "Correct. Age, voluntariness, and competency are the three essential elements. A brochure is helpful but not legally required.",
      "Patients do not need to fully understand every aspect — that's an unrealistic standard. They must understand the general nature, risks, and alternatives.",
      "Physician witnessing is not universally required. A radiographer or nurse can witness signing in many situations.",
      "Notarization is not required for medical informed consent. Two formal witnesses are not a standard legal requirement for most procedures."
    ]
  },

  // ──────────────────────── SAFETY ────────────────────────

  { cat:"Safety", sub:"Radiation Physics",
    q:"In the photoelectric effect, the incoming x-ray photon:",
    opts:["Scatters with reduced energy and ejects an outer-shell electron","Is completely absorbed by a K-shell electron, which is then ejected as a photoelectron","Vibrates atomic electrons without removing them","Interacts with the atomic nucleus to produce an electron-positron pair"],
    a:1,
    exp:"Photoelectric absorption: the photon transfers ALL its energy to a K-shell electron, ejecting it as a photoelectron. The photon is completely absorbed — no scatter exits. This contributes to patient dose but not scatter fog.",
    oe:[
      "Scattering with reduced energy and ejecting an outer-shell electron describes Compton scatter, not the photoelectric effect.",
      "Correct. The photon is 100% absorbed. A characteristic photon may be released when an outer-shell electron fills the K-shell vacancy.",
      "Vibrating electrons without removal describes coherent (classical) scatter — no ionization occurs.",
      "Electron-positron pair production requires photon energies > 1.02 MeV — far above diagnostic x-ray energies."
    ]
  },

  { cat:"Safety", sub:"Radiation Physics",
    q:"During Compton scatter, which of the following occurs?",
    opts:["The photon is completely absorbed by the atom","The photon interacts with an outer-shell electron, loses some energy, and continues as scattered radiation","Electrons vibrate and re-emit energy without ionization","Pair production occurs in the nucleus"],
    a:1,
    exp:"Compton scatter: the photon ejects an outer-shell electron (recoil electron) and continues in a new direction with reduced energy. Scattered photons travel unpredictably and are the primary source of occupational exposure.",
    oe:[
      "Complete absorption describes the photoelectric effect. In Compton scatter, the photon is deflected — it is not absorbed.",
      "Correct. The photon loses partial energy to the recoil electron, then scatters. Scattered photons can exit the patient in any direction.",
      "Vibration without ionization describes coherent scatter. Compton scatter does cause ionization.",
      "Pair production requires photon energy > 1.02 MeV and involves the nucleus — not relevant in diagnostic imaging."
    ]
  },

  { cat:"Safety", sub:"Radiation Physics",
    q:"The inverse square law states that x-ray beam intensity is:",
    opts:["Directly proportional to the square of the distance","Inversely proportional to distance (doubles when distance halves)","Inversely proportional to the square of the distance","Directly proportional to distance"],
    a:2,
    exp:"I ∝ 1/d². Double the distance → intensity drops to 1/4. Halve the distance → intensity quadruples. This relationship explains why distance is one of the three cardinal radiation protection principles.",
    oe:[
      "If intensity were directly proportional to d², moving further away would increase exposure — the opposite of reality.",
      "Inversely proportional to distance (not squared) would mean doubling distance halves intensity. The actual drop is to 1/4, not 1/2.",
      "Correct. Intensity ∝ 1/d². The squared relationship means small distance changes have large intensity effects.",
      "If directly proportional to distance, intensity would increase as you move away — physically impossible with a point source."
    ]
  },

  { cat:"Safety", sub:"Radiation Physics",
    q:"Bremsstrahlung radiation is produced when:",
    opts:["An incoming electron ejects a K-shell electron at the anode","High-speed electrons decelerate near the atomic nucleus of the anode","A K-shell vacancy is filled by an outer-shell electron","Photons interact with outer-shell electrons in tissue"],
    a:1,
    exp:"Bremsstrahlung ('braking radiation'): cathode electrons are deflected and decelerated by the nuclear electric field of the anode target. Lost kinetic energy is emitted as x-ray photons with a continuous spectrum.",
    oe:[
      "Ejecting a K-shell electron produces characteristic radiation (when the vacancy is subsequently filled), not bremsstrahlung.",
      "Correct. Electrons are 'braked' by the nuclear field — the more the deflection, the higher the photon energy emitted.",
      "A K-shell vacancy being filled by an outer-shell electron is the mechanism that produces characteristic radiation.",
      "Photons interacting with outer-shell electrons in tissue describes Compton scatter — a photon-tissue interaction, not x-ray production."
    ]
  },

  { cat:"Safety", sub:"Radiation Units",
    q:"Which SI unit measures absorbed dose (energy deposited per unit mass of tissue)?",
    opts:["Sievert (Sv)","Gray (Gy)","Coulomb/kilogram (C/kg)","Becquerel (Bq)"],
    a:1,
    exp:"Gray (Gy) = absorbed dose = joules per kilogram of tissue. Sievert = effective/equivalent dose (Gray × radiation weighting factor). C/kg = exposure (ionization in air). Bq = radioactivity (decays per second).",
    oe:[
      "Sievert measures effective or equivalent dose — Gray multiplied by the radiation weighting factor (Wr) to account for biological effectiveness.",
      "Correct. Gray (Gy) = J/kg = absorbed dose. One Gray = one joule of energy absorbed per kilogram of matter.",
      "Coulomb/kilogram (C/kg) measures exposure — the ionization produced in air by x- or gamma radiation. It replaced the roentgen (R).",
      "Becquerel (Bq) measures radioactivity — the rate of nuclear disintegrations per second. It replaced the curie (Ci)."
    ]
  },

  { cat:"Safety", sub:"Dose Limits",
    q:"The NCRP #116 annual occupational effective dose limit for radiographers is:",
    opts:["10 mSv","20 mSv","50 mSv","100 mSv"],
    a:2,
    exp:"NCRP #116 sets the annual occupational effective dose limit at 50 mSv. Cumulative limit = age × 10 mSv. These limits apply to whole-body dose for the lens, gonads, and red bone marrow.",
    oe:[
      "10 mSv/year is too restrictive — it would prevent most radiographers from working. The actual limit is 50 mSv.",
      "20 mSv/year is the ICRP recommendation but NOT the NCRP standard used in the U.S. The NCRP sets 50 mSv.",
      "Correct. 50 mSv/year occupational effective dose limit (NCRP #116). Cumulative = age (years) × 10 mSv.",
      "100 mSv would exceed the level associated with deterministic effects and is far above the occupational limit."
    ]
  },

  { cat:"Safety", sub:"Dose Limits",
    q:"The total equivalent dose limit for an embryo/fetus throughout the entire pregnancy is:",
    opts:["0.5 mSv","1 mSv","5 mSv","10 mSv"],
    a:2,
    exp:"NCRP #116: 5 mSv total for the entire gestational period; no more than 0.5 mSv in any single month. Once pregnancy is declared, dosimetry at the waist (under apron) is required.",
    oe:[
      "0.5 mSv is the maximum dose per MONTH during pregnancy — not the total gestational limit.",
      "1 mSv/year is the annual limit for the general public for frequent exposures — not the embryo/fetus standard.",
      "Correct. 5 mSv total for pregnancy, with a monthly sub-limit of 0.5 mSv to protect against critical-period exposures.",
      "10 mSv greatly exceeds fetal protection limits and would not be acceptable for an entire pregnancy."
    ]
  },

  { cat:"Safety", sub:"Dose-Response",
    q:"The linear-nonthreshold (LNT) dose-response model states that:",
    opts:["No effects occur below a specific threshold dose","Response is proportional to dose and no dose is considered completely safe","Response increases exponentially above a threshold","Effects only occur at high doses relevant to radiation therapy"],
    a:1,
    exp:"LNT: any dose, no matter how small, carries some probability of biological harm. The probability of harm is directly proportional to dose. This conservative model is the basis for radiation protection regulations.",
    oe:[
      "A threshold model (linear-threshold or nonlinear-threshold) states no response below a certain dose. LNT has no threshold.",
      "Correct. Linear = proportional response; nonthreshold = no safe dose. This justifies the ALARA principle.",
      "Exponential response above a threshold describes the nonlinear-threshold model, used for some deterministic effects like cataracts.",
      "LNT applies specifically to stochastic (cancer, genetic) effects at ALL dose levels, not just high therapeutic doses."
    ]
  },

  { cat:"Safety", sub:"Dose-Response",
    q:"Stochastic effects of radiation are best described as:",
    opts:["Effects that increase in severity with dose above a threshold","Randomly occurring effects whose probability increases with dose but whose severity does not","Effects that only occur at very high doses","Effects that are always immediately apparent after exposure"],
    a:1,
    exp:"Stochastic effects (cancer, genetic mutations): probability increases with dose but severity doesn't — cancer is cancer whether from a small or large dose. They follow the LNT model with no threshold.",
    oe:[
      "Increasing severity above a threshold describes deterministic (non-stochastic) effects like cataracts, erythema, and epilation.",
      "Correct. Stochastic = random occurrence. More dose = higher chance of cancer, but the cancer itself isn't 'worse' because of higher dose.",
      "Stochastic effects can theoretically occur at any dose per the LNT model — not only at high doses.",
      "Stochastic effects (particularly cancer) may not appear for years to decades after exposure — they are not immediately apparent."
    ]
  },

  { cat:"Safety", sub:"Radiobiology",
    q:"The most radiosensitive types of cells are those that are:",
    opts:["Mature, highly specialized, and non-dividing","Immature, rapidly dividing, and undifferentiated","Mature with a long lifespan","Large with high metabolic activity"],
    a:1,
    exp:"The Law of Bergonié and Tribondeau: radiosensitivity increases with cell immaturity, rapid division rate, and lack of differentiation. Immature blood cells and embryonic cells are most vulnerable.",
    oe:[
      "Mature, specialized, non-dividing cells (e.g., neurons, mature muscle cells) are the MOST radioresistant. They have little mitotic activity.",
      "Correct. Immature + rapidly dividing + undifferentiated = maximum radiosensitivity. Examples: lymphocytes, spermatogonia, intestinal crypt cells.",
      "A long lifespan in non-dividing cells correlates with radioresistance, not radiosensitivity.",
      "Metabolic activity alone does not determine radiosensitivity. Mitotic rate and differentiation are the primary factors."
    ]
  },

  { cat:"Safety", sub:"Radiobiology",
    q:"Which acute radiation syndrome affects blood cell production and can result in death from infection or hemorrhage?",
    opts:["Central nervous system syndrome","Gastrointestinal syndrome","Hematopoietic syndrome","Cardiovascular syndrome"],
    a:2,
    exp:"Hematopoietic (bone marrow) syndrome: occurs at ~1–6 Gy. Destroys stem cells in bone marrow, reducing all blood cell counts. Death results from infection (low WBCs), bleeding (low platelets), or anemia.",
    oe:[
      "CNS syndrome occurs at very high doses (>50 Gy). Caused by cerebrovascular damage, it leads to rapid death within hours to days.",
      "GI syndrome occurs at doses of ~6–10 Gy. Destroys intestinal lining, causing fluid loss, infection, and death within days to weeks.",
      "Correct. Hematopoietic syndrome: radiation destroys bone marrow stem cells at 1–6 Gy, reducing white cells, red cells, and platelets.",
      "There is no classic 'cardiovascular syndrome' in acute radiation exposure. Cardiovascular effects are secondary to other syndromes."
    ]
  },

  { cat:"Safety", sub:"Radiation Protection",
    q:"The three cardinal principles of radiation protection are:",
    opts:["Shielding, collimation, and filtration","Time, distance, and shielding","ALARA, dosimetry, and shielding","kVp, mAs, and distance"],
    a:1,
    exp:"Time (minimize exposure duration), Distance (maximize distance from source — uses inverse square law), Shielding (interpose attenuating material). These apply to personnel protection from all ionizing radiation sources.",
    oe:[
      "Collimation and filtration are patient protection techniques, not the three cardinal principles of personnel protection.",
      "Correct. Time, distance, shielding — the universal trio of radiation protection for all ionizing radiation scenarios.",
      "ALARA is the overarching philosophy; dosimetry is monitoring. Neither are cardinal protection principles.",
      "kVp and mAs are technical exposure factors, not radiation protection principles. Distance is the only overlap."
    ]
  },

  { cat:"Safety", sub:"Radiation Protection",
    q:"ALARA stands for:",
    opts:["Always Limit All Radiation Activities","As Low As Reasonably Achievable","All Levels Adjusted for Radiographic Accuracy","Avoid Long And Repeated Acquisitions"],
    a:1,
    exp:"ALARA (As Low As Reasonably Achievable) is the guiding philosophy of radiation protection. It requires minimizing patient and personnel dose while maintaining diagnostic image quality — not simply reaching minimum dose at all costs.",
    oe:[
      "Not a real acronym. ALARA specifically means 'as low as reasonably achievable' — the word 'reasonably' is key because zero dose is often not achievable.",
      "Correct. 'Reasonably achievable' acknowledges that some dose is unavoidable in diagnostic imaging — the goal is to minimize unnecessary dose.",
      "This is not the correct definition. ALARA has nothing to do with adjusting levels for image accuracy.",
      "Not a real acronym. ALARA doesn't refer to acquisition duration, though minimizing fluoroscopy time is an application of ALARA."
    ]
  },

  { cat:"Safety", sub:"Radiation Protection",
    q:"During fluoroscopy, the radiographer's dosimeter should be worn:",
    opts:["Under the lead apron at waist level","Outside the lead apron at collar level","Under the lead apron at chest level","On the wrist nearest the radiation source"],
    a:1,
    exp:"Collar-level placement outside the apron monitors dose to unshielded areas: thyroid, eyes, and head. This provides the most conservative (highest) reading. For pregnant workers, a second badge is worn at waist level under the apron.",
    oe:[
      "Under the apron at waist gives a reading after attenuation by lead — it underestimates actual dose to unshielded body parts.",
      "Correct. Outside at collar = measures dose to unshielded areas. The reading is used to estimate effective dose conservatively.",
      "Under the apron at chest still misses the unshielded head and neck area, underestimating total effective dose.",
      "Wrist dosimeters may be used for extremity monitoring during interventional procedures — not as the primary whole-body dosimeter."
    ]
  },

  { cat:"Safety", sub:"Radiation Protection",
    q:"The minimum source-to-skin distance (SSD) for mobile (portable) radiography units is:",
    opts:["6 inches","12 inches","15 inches","20 inches"],
    a:1,
    exp:"Per NCRP #102 and 21 CFR: minimum SSD for mobile/portable = 12 inches (30 cm). For fixed fluoroscopy tables: minimum 15 inches source to tabletop. For mobile fluoroscopy: minimum 12 inches.",
    oe:[
      "6 inches is far too close — beam intensity at that distance is extremely high and would result in excessive patient skin dose.",
      "Correct. 12 inches minimum for portable units. This limit reduces skin dose by ensuring adequate distance.",
      "15 inches is the minimum for fixed fluoroscopy tables, not mobile radiography units.",
      "20 inches is more than the minimum but not the stated regulatory minimum for mobile units."
    ]
  },

  { cat:"Safety", sub:"Dosimetry",
    q:"The thermoluminescent dosimeter (TLD) operates on which principle?",
    opts:["Ionization of gas in a sealed chamber","Latent image formation on photographic film","Electrons trapped in crystal lattice; released as light when heated","Real-time electronic measurement of ionization"],
    a:2,
    exp:"TLDs: radiation traps electrons at higher energy levels in a lithium fluoride crystal. When heated, electrons return to ground state and emit visible light proportional to the radiation dose received.",
    oe:[
      "Ionization of gas in a sealed chamber describes an ionization chamber dosimeter (survey meter), not a TLD.",
      "Latent image on photographic film describes a film badge dosimeter. Film badges are sensitive to heat/humidity and are being phased out.",
      "Correct. TLD = thermoluminescence: crystal traps electrons → heat → light emission → dose measurement. Accurate and does not fade over time.",
      "Real-time electronic measurement describes an electronic personal dosimeter (EPD) — a different device that provides immediate digital readout."
    ]
  },

  // ──────────────────────── IMAGE PRODUCTION ────────────────────────

  { cat:"Image Production", sub:"Exposure Factors",
    q:"mAs primarily controls which property of the x-ray beam?",
    opts:["Beam quality (penetrating energy)","Beam quantity (number of photons produced)","Subject contrast in the patient","Spatial resolution of the image"],
    a:1,
    exp:"mAs (milliampere-seconds) controls the QUANTITY of x-rays — the number of photons. Doubling mAs doubles the photon output and doubles patient dose (directly proportional). kVp controls beam quality (energy).",
    oe:[
      "Beam quality (penetrating power / energy) is controlled by kVp. Higher kVp = shorter wavelength = more penetrating radiation.",
      "Correct. mAs = milliamps × seconds = total charge = number of electrons = number of photons produced. Linear relationship with dose.",
      "Subject contrast is primarily controlled by kVp (higher kVp → lower contrast). mAs affects density/exposure, not subject contrast.",
      "Spatial resolution is controlled by focal spot size, OID, SID, and pixel size — not mAs."
    ]
  },

  { cat:"Image Production", sub:"Exposure Factors",
    q:"The 15% rule states that:",
    opts:["Increasing SID by 15% doubles receptor exposure","Increasing kVp by 15% doubles receptor exposure; decreasing by 15% halves it","Increasing mAs by 15% doubles receptor exposure","Grids reduce receptor exposure by 15% per grid ratio unit"],
    a:1,
    exp:"15% rule: ↑ kVp by 15% = receptor exposure doubles (equivalent to doubling mAs). ↓ kVp by 15% = exposure halves. This allows kVp/mAs trade-offs: increase kVp by 15% AND halve mAs to maintain exposure with lower patient dose.",
    oe:[
      "Changing SID follows the inverse square law, not a 15% rule. Doubling SID reduces exposure to 1/4.",
      "Correct. A 15% kVp increase doubles receptor exposure — useful for reducing mAs and patient dose while maintaining image brightness.",
      "Increasing mAs by 15% increases exposure by only 15% (linear relationship), not by double. Doubling exposure requires doubling mAs.",
      "Grid effects are expressed using grid conversion factors (Bucky factors), not a 15% rule."
    ]
  },

  { cat:"Image Production", sub:"Exposure Factors",
    q:"If SID is doubled with no other technique changes, receptor exposure becomes:",
    opts:["Doubled","Halved","Reduced to one-fourth","Reduced to one-eighth"],
    a:2,
    exp:"Inverse square law: I ∝ 1/d². Doubling d → intensity drops to 1/(2²) = 1/4. To compensate, mAs must be multiplied by 4 (exposure maintenance formula: mAs₁/mAs₂ = SID₁²/SID₂²).",
    oe:[
      "Exposure doubling would require reducing SID to 1/√2 of original — the opposite of doubling SID.",
      "Halving would occur if exposure were inversely proportional to distance (not squared). The actual relationship is inverse-square.",
      "Correct. d × 2 → intensity × 1/4. This is one of the most commonly tested relationships in radiographic physics.",
      "One-eighth would occur with a cubic relationship. The actual relationship is inverse-square, giving 1/4 at double distance."
    ]
  },

  { cat:"Image Production", sub:"Exposure Factors",
    q:"The anode heel effect describes:",
    opts:["Overheating of the anode causing gradual output reduction","Greater x-ray intensity on the cathode side of the beam than the anode side","Reduced beam penetration at high kVp","Increased scatter on the anode side"],
    a:1,
    exp:"Anode heel effect: x-ray intensity varies along the longitudinal axis — greater on the cathode side, less on the anode side. Clinical application: place the thicker/denser body part under the cathode end of the tube.",
    oe:[
      "Anode overheating is a tube-load concern (thermal rating). The heel effect is a geometric property of the angled anode — it exists whether or not overheating occurs.",
      "Correct. The angled anode absorbs some of its own radiation on the anode side. Result: cathode side = brighter, anode side = dimmer.",
      "kVp determines beam penetration — not the heel effect. The heel effect is about intensity distribution, not energy.",
      "Scatter originates in the patient, not at the anode. The heel effect is about primary beam intensity distribution."
    ]
  },

  { cat:"Image Production", sub:"Digital Imaging",
    q:"In digital radiography, a pixel is best defined as:",
    opts:["A volume element of patient tissue that corresponds to detector data","The smallest picture element in the image matrix","The space between adjacent detector elements","The algorithm used to reconstruct the digital image"],
    a:1,
    exp:"Pixel (picture element) = the smallest unit of the digital image matrix. Each pixel displays a shade of gray. Each pixel corresponds to a voxel (volume element) of patient tissue.",
    oe:[
      "A voxel (volume element) is the corresponding 3D unit of patient tissue — not the pixel itself. Pixel is the image display unit.",
      "Correct. Pixel = picture element = smallest component of the 2D matrix. More pixels = finer spatial resolution.",
      "The space between detector elements is the interspace or 'dead' area — not the pixel. This affects fill factor and DQE.",
      "The image reconstruction algorithm (processing algorithm) is a software function — not a structural component of the image matrix."
    ]
  },

  { cat:"Image Production", sub:"Digital Imaging",
    q:"Contrast resolution in digital imaging is primarily controlled by:",
    opts:["Pixel size","Pixel pitch","Bit depth","Matrix size"],
    a:2,
    exp:"Bit depth determines the number of gray shades possible (2ⁿ levels). More bits = more gray shades = better contrast resolution. Common bit depths: 10-bit = 1,024 gray levels; 12-bit = 4,096; 14-bit = 16,384.",
    oe:[
      "Pixel size controls SPATIAL resolution (how sharp detail appears). Smaller pixels = better spatial resolution, not contrast resolution.",
      "Pixel pitch (center-to-center distance between pixels) also affects spatial resolution, not contrast resolution.",
      "Correct. Bit depth = number of bits per pixel = 2ⁿ gray shades. More bits → smoother gray scale → better discrimination of subtle tissue differences.",
      "Matrix size (total number of pixels) affects the overall image but doesn't specifically control contrast resolution."
    ]
  },

  { cat:"Image Production", sub:"Digital Imaging",
    q:"'Dose creep' in digital radiography refers to:",
    opts:["Gradual increase in background radiation in the radiology department","Chronic overexposure of patients because digital post-processing masks technique errors","Cumulative lifetime dose to radiation workers","Increasing dose from repeated fluoroscopic runs"],
    a:1,
    exp:"Dose creep: digital systems can compensate for overexposure by adjusting image brightness, making the image look correct even when the patient received an excessive dose. This leads to habitually using too high mAs.",
    oe:[
      "Background radiation increase is an environmental concern — not related to how digital systems handle technique errors.",
      "Correct. Digital post-processing masks overexposure → radiographers may unknowingly use higher-than-necessary technique → patients receive more dose than needed.",
      "Cumulative dose to workers is tracked by dosimetry. This is occupational exposure, not dose creep.",
      "Fluoroscopy dose concerns are related to beam-on time and fluoroscopy technique, not dose creep as a concept."
    ]
  },

  { cat:"Image Production", sub:"Spatial Resolution",
    q:"Which factor would DECREASE spatial resolution?",
    opts:["Small focal spot","Short OID (object-to-image distance)","Long SID (source-to-image distance)","Large OID"],
    a:3,
    exp:"Large OID → magnification → penumbra (blur) → reduced spatial resolution. Small focal spot, short OID, and long SID all improve spatial resolution by minimizing geometric unsharpness.",
    oe:[
      "Small focal spot IMPROVES spatial resolution — less penumbra (geometric blur) because x-rays originate from a smaller area.",
      "Short OID IMPROVES spatial resolution — the part is closer to the receptor, minimizing magnification and blur.",
      "Long SID IMPROVES spatial resolution — more parallel x-ray paths, less divergence, less magnification.",
      "Correct. Large OID = part far from receptor = more magnification = more geometric blur = reduced spatial resolution."
    ]
  },

  { cat:"Image Production", sub:"Image Contrast",
    q:"High kVp produces which type of contrast scale?",
    opts:["Short-scale (high contrast): few gray shades, extreme black-and-white","Long-scale (low contrast): many gray shades, small differences between tones","No change in contrast scale","Increased contrast due to more photoelectric interactions"],
    a:1,
    exp:"High kVp: more beam penetration → more uniform attenuation → more gray shades visible (long scale / low contrast). Low kVp: more photoelectric absorption → stark differences → short scale / high contrast.",
    oe:[
      "Short-scale (high contrast) occurs with LOW kVp. Low energy photons are absorbed by photoelectric effect, creating extreme black/white differences.",
      "Correct. High kVp → long gray scale → low contrast. Many gray shades are visible because high-energy photons penetrate most tissues relatively uniformly.",
      "kVp absolutely affects contrast scale — it is the primary controller of subject contrast.",
      "High kVp actually REDUCES photoelectric interactions in favor of Compton scatter, which reduces subject contrast (more scatter, more uniform gray shades)."
    ]
  },

  { cat:"Image Production", sub:"Grids",
    q:"Grid ratio is expressed as:",
    opts:["Grid frequency divided by lead strip height","Height of lead strips divided by distance between strips (H/D)","Total lead content per square inch of grid","Distance between strips divided by strip height (D/H)"],
    a:1,
    exp:"Grid ratio = H/D. H = height of the lead strips; D = distance between them. Higher ratio (e.g., 16:1) = better scatter cleanup but less positioning latitude. Ranges from 4:1 to 16:1.",
    oe:[
      "Grid frequency is the number of lead strips per inch — a separate specification from grid ratio.",
      "Correct. Grid ratio = H/D. A 16:1 grid has strips 16× taller than their spacing — very efficient at absorbing scatter.",
      "Lead content per area describes grid density — not how grid ratio is calculated.",
      "D/H would be the inverse of grid ratio. Correct formula is H over D (height over distance)."
    ]
  },

  { cat:"Image Production", sub:"Grids",
    q:"An inverted (upside-down) focused grid produces:",
    opts:["Grid lines visible throughout the radiograph","Normal density in the center with cutoff (decreased density) on both sides","Decreased density in the center with normal density at the sides","Uniform density throughout the image"],
    a:1,
    exp:"Inverted focused grid: the angled lead strips converge in the wrong direction. The central ray passes through but peripheral image-forming rays are absorbed. Result: normal center, cutoff at both sides.",
    oe:[
      "Grid lines are visible with a stationary (non-moving) grid regardless of orientation. The inverted grid produces cutoff, not just grid lines.",
      "Correct. The center of the grid coincidentally aligns with the central ray, so density is normal there. Lead strips diverge at the periphery, absorbing image-forming rays.",
      "Decreased center density occurs with lateral decentering or grid-focus decentering, not inversion.",
      "Uniform density would indicate correct grid use or no grid. An inverted focused grid never produces uniform density."
    ]
  },

  { cat:"Image Production", sub:"X-ray Equipment",
    q:"Thermionic emission refers to:",
    opts:["Production of characteristic radiation at the anode","Emission of electrons from the heated cathode filament","Interaction of photons with outer-shell electrons in tissue","Deceleration of electrons near the anode nucleus"],
    a:1,
    exp:"Thermionic emission: the cathode filament is heated by the filament current until electrons gain enough energy to escape the metal surface, forming an electron cloud (space charge) ready for acceleration toward the anode.",
    oe:[
      "Characteristic radiation is produced at the ANODE when incoming electrons eject K-shell electrons and outer-shell electrons fill the vacancies — not related to thermionic emission.",
      "Correct. Thermo = heat; ionic = ions (charged particles). Filament heat → electron escape → electron cloud ready to be accelerated.",
      "Photon-outer-shell electron interaction describes Compton scatter in tissue — a completely different process from x-ray tube electron emission.",
      "Electron deceleration near the anode nucleus describes bremsstrahlung production — the end product of the accelerated electrons, not their origin at the cathode."
    ]
  },

  { cat:"Image Production", sub:"Filtration",
    q:"The purpose of adding aluminum filtration to the x-ray beam is to:",
    opts:["Increase the number of high-energy photons reaching the patient","Remove low-energy photons that increase patient dose without contributing to image quality","Reduce beam intensity by removing high-energy photons to protect the patient","Increase image contrast by narrowing the energy spectrum"],
    a:1,
    exp:"Filtration removes long-wavelength (low-energy, 'soft') photons. These would be absorbed by the patient's superficial tissues (skin dose), contributing to dose but NOT to the image. Filtration 'hardens' the beam and reduces skin dose.",
    oe:[
      "Filtration removes photons — it doesn't add them. The beam has fewer but higher-average-energy photons after filtration.",
      "Correct. Low-energy photons are absorbed in the filter rather than the patient. This reduces patient surface dose while maintaining diagnostic beam quality.",
      "Filtration specifically removes LOW-energy photons. High-energy photons pass through aluminum filtration essentially unchanged.",
      "Filtration slightly changes contrast by narrowing the energy spectrum, but this is a secondary effect. The primary purpose is reducing patient dose."
    ]
  },

  { cat:"Image Production", sub:"AEC",
    q:"Automatic exposure control (AEC) terminates the exposure when:",
    opts:["A pre-programmed mAs value is reached","The selected ionization chamber detects sufficient radiation to produce an adequate image","The kVp reaches its set level","The fluoroscopy timer alarm sounds"],
    a:1,
    exp:"AEC uses ionization chambers (or photomultiplier cells) positioned behind the image receptor. When sufficient radiation reaches the chamber for a diagnostic image, a signal terminates the exposure. The radiographer selects the appropriate chamber(s).",
    oe:[
      "AEC is not simply a pre-set mAs timer — it dynamically terminates the exposure based on actual radiation reaching the detector, not a fixed mAs value.",
      "Correct. The chamber measures radiation reaching the IR. When enough signal accumulates, the exposure ends — accommodating varying patient thicknesses automatically.",
      "kVp is set by the radiographer and doesn't change during an exposure to trigger termination.",
      "The fluoroscopy cumulative timer alarm is an independent safety feature unrelated to AEC in static radiography."
    ]
  },

  // ──────────────────────── PROCEDURES ────────────────────────

  { cat:"Procedures", sub:"Chest",
    q:"The standard PA chest radiograph is performed at which source-to-image distance (SID)?",
    opts:["40 inches (102 cm)","56 inches (142 cm)","72 inches (183 cm)","48 inches (122 cm)"],
    a:2,
    exp:"72-inch SID for PA chest minimizes cardiac magnification (the heart is anterior, away from the IR). Long SID = more parallel beam paths = less geometric unsharpness. This is a non-negotiable standard positioning parameter.",
    oe:[
      "40 inches is the standard SID for most tabletop and Bucky work. Using 40 inches for a chest radiograph would magnify the heart and reduce sharpness.",
      "56 inches is not a standard chest SID. Some departments use 60 inches, but 72 inches is the established standard.",
      "Correct. 72 inches (183 cm) — the long SID minimizes heart magnification and produces the sharpest chest image.",
      "48 inches is too short for chest radiography; it would produce significant cardiac magnification and poor pulmonary detail."
    ]
  },

  { cat:"Procedures", sub:"Chest",
    q:"For a lateral decubitus chest radiograph, this projection is primarily ordered to demonstrate:",
    opts:["Pneumothorax (air in the pleural space)","Free pleural fluid in the pleural space","Hilar adenopathy","Pulmonary nodules"],
    a:1,
    exp:"Lateral decubitus (affected side down): free fluid pools along the dependent lateral chest wall under gravity, making even small effusions visible as a layering density along the dependent chest wall.",
    oe:[
      "Pneumothorax is demonstrated on the lateral decubitus with the affected side UP (air rises to the non-dependent side). This is a separate indication.",
      "Correct. Free pleural fluid demonstrates on decubitus with the affected side DOWN. Fluid layers along the dependent wall, quantifiable and distinct.",
      "Hilar adenopathy is assessed on PA/lateral erect views or CT — the decubitus position adds no advantage for hilar evaluation.",
      "Pulmonary nodules are evaluated on PA/lateral or CT. A decubitus view doesn't improve nodule detection."
    ]
  },

  { cat:"Procedures", sub:"Abdomen",
    q:"Free intraperitoneal air (pneumoperitoneum) is best demonstrated on:",
    opts:["AP supine abdomen","AP erect abdomen only","Erect PA chest radiograph","Left lateral decubitus abdomen"],
    a:2,
    exp:"An erect PA chest radiograph shows free subdiaphragmatic air most clearly — even a very small volume of free air (as little as 1 cc) appears as a crescentic lucency under the diaphragm. It also provides better lung visualization.",
    oe:[
      "AP supine abdomen: free air rises to the anterior abdomen and is difficult to see against overlying gas in the bowel and liver.",
      "AP erect abdomen can show free air under the diaphragm but is less sensitive than a PA chest view due to technical factors.",
      "Correct. Erect PA chest is most sensitive for pneumoperitoneum. The patient must be erect for at least 5–10 minutes before exposure for air to rise.",
      "Left lateral decubitus (right side up): can detect free air if the patient cannot stand erect, but the PA chest is preferred when possible."
    ]
  },

  { cat:"Procedures", sub:"Upper Extremity",
    q:"The PA projection with ulnar deviation of the wrist is performed primarily to demonstrate:",
    opts:["The distal radius and ulnar styloid","The scaphoid without foreshortening","Carpal tunnel anatomy","The hook of the hamate"],
    a:1,
    exp:"PA with ulnar deviation (Stecher method): pulls the scaphoid out from under the radius, reducing foreshortening and opening the joint spaces. This is the best view for suspected scaphoid fractures.",
    oe:[
      "The distal radius and ulnar styloid are well-demonstrated on a routine PA wrist projection without special positioning.",
      "Correct. Ulnar deviation elongates and 'opens up' the scaphoid, making fractures visible that would be hidden on a neutral PA view.",
      "Carpal tunnel views (tangential/axial projections) are used to demonstrate the carpal tunnel — a completely different positioning technique.",
      "The hook of the hamate is shown on a carpal tunnel (axial) view or a supinated oblique view, not ulnar deviation."
    ]
  },

  { cat:"Procedures", sub:"Lower Extremity",
    q:"The tunnel view (Camp-Coventry method) of the knee is performed to demonstrate:",
    opts:["The patella in axial projection","The intercondylar fossa of the femur","The head of the fibula","The lateral tibial plateau"],
    a:1,
    exp:"Tunnel view: PA axial projection, knee flexed 40–50°, CR angled 40–45° caudad through the knee joint. Opens the intercondylar fossa to show loose bodies, osteochondral defects, and cruciate ligament attachment sites.",
    oe:[
      "The patella in axial projection is shown on the sunrise/Merchant view (axial patella), not the tunnel view.",
      "Correct. The tunnel/notch view specifically opens the intercondylar fossa, which is closed on AP/lateral views. Essential for detecting loose bodies in the posterior knee.",
      "The head of the fibula is visible on standard AP and lateral knee views. No special axial view is needed.",
      "The lateral tibial plateau is assessed on oblique or AP weight-bearing views, not the tunnel view."
    ]
  },

  { cat:"Procedures", sub:"Spine",
    q:"Oblique projections (45°) of the lumbar spine are performed primarily to demonstrate:",
    opts:["Vertebral body height and alignment","The zygapophyseal (facet) joints","The intervertebral disc spaces","The spinous processes in profile"],
    a:1,
    exp:"Oblique lumbar spine: 45° oblique positions project the zygapophyseal joints into profile. The classic 'Scottie dog' appearance: ear = superior articular process; eye = pedicle; neck = pars interarticularis; body = lamina.",
    oe:[
      "Vertebral body height and alignment are best assessed on AP and lateral views, which provide a true frontal and sagittal perspective.",
      "Correct. 45° oblique = facet joints in profile. Spondylolysis (pars defect) appears as a 'collar on the Scottie dog's neck' on oblique views.",
      "Intervertebral disc spaces are best evaluated on lateral projections, where the disc height can be measured accurately.",
      "Spinous processes in profile are shown on the AP projection (end-on) and lateral projection — not on oblique views."
    ]
  },

  { cat:"Procedures", sub:"Spine",
    q:"For the open-mouth (odontoid) projection of the cervical spine, the patient's position and central ray are:",
    opts:["CR angled 15° cephalad to C4 with mouth closed","Mouth open wide; CR perpendicular to the IR through the open mouth to C1-C2","CR angled 10° caudad to C3 with neutral head position","Lateral recumbent; CR perpendicular to C2"],
    a:1,
    exp:"Open-mouth (Waters/odontoid) view: patient opens mouth wide, CR passes through the open mouth perpendicular to the IR. This is the ONLY standard projection that directly visualizes the dens (odontoid process) of C2 and the atlas (C1).",
    oe:[
      "Angling 15° cephalad to C4 with mouth closed describes the AP axial cervical spine — used to demonstrate C3–C7, not C1–C2.",
      "Correct. Mouth open + perpendicular CR through the oral cavity = clear view of C1-C2 unobstructed by teeth and mandible.",
      "Angling 10° caudad to C3 is not a standard cervical projection. Caudal angles are used for some oblique cervical views.",
      "A lateral view shows C1–C7 but does not isolate the dens. The open-mouth view is specifically for the odontoid process in AP projection."
    ]
  },

  { cat:"Procedures", sub:"Skull",
    q:"The Waters projection of the facial bones is best used to demonstrate:",
    opts:["Frontal sinuses and anterior ethmoid air cells","Maxillary sinuses and orbital floors","Sphenoid sinuses and sella turcica","Mastoid air cells and internal auditory canals"],
    a:1,
    exp:"Waters (PA axial, 37° MML angulation): projects the petrous ridges BELOW the maxillary sinuses, giving an unobstructed view of the maxillary sinuses and the orbital floors (evaluation for blowout fractures).",
    oe:[
      "Frontal sinuses and anterior ethmoid cells are shown on the Caldwell projection (15° caudad angulation), which projects the petrosa into the lower third of the orbits.",
      "Correct. Waters = maxillary sinuses + orbital floors. The tilted head angle lifts the petrous ridges out of the maxillary sinus fields.",
      "Sphenoid sinuses and sella are best shown on a lateral skull projection or a Haas/Towne projection. The Waters does not reach the sella.",
      "Mastoids and internal auditory canals require specialized projections (Stenvers, Arcelin, modified Law) — not the Waters projection."
    ]
  },

  { cat:"Procedures", sub:"Pelvis/Hip",
    q:"For an AP projection of the pelvis, the lower limbs are internally rotated 15–20° to:",
    opts:["Show the greater trochanters in profile","Place the femoral necks parallel to the IR for true length demonstration","Reduce magnification of the acetabula","Open the SI (sacroiliac) joints"],
    a:1,
    exp:"Internal rotation 15–20°: counteracts the natural anteversion (forward tilt) of the femoral neck, placing the neck parallel to the IR. Without this, the neck is foreshortened and the lesser trochanter is hidden.",
    oe:[
      "Internal rotation actually HIDES the greater trochanters by rotating them posteriorly. External rotation would profile the greater trochanters.",
      "Correct. Femoral necks are anteverted ~15–20° from the coronal plane. Internal rotation compensates for this, showing the neck in its true length.",
      "Acetabular magnification is not affected by limb rotation; it's determined by SID and the hip-to-IR distance.",
      "SI joints are evaluated on AP pelvis and oblique views, but limb rotation doesn't change SI joint visualization."
    ]
  },

  { cat:"Procedures", sub:"GI Studies",
    q:"During an upper GI (UGI) series, the right posterior oblique (RPO) position best demonstrates:",
    opts:["The fundus of the stomach filled with barium","The pyloric canal and duodenal bulb filled with barium","The lesser curvature of the stomach","The esophagus as it enters the stomach"],
    a:1,
    exp:"RPO position (35–45°): rotates the stomach to profile the pyloric canal, pylorus, and the C-loop of the duodenum. This is the primary position for evaluating the duodenal bulb for ulcers.",
    oe:[
      "The fundus fills with air (not barium) in RPO position because air rises when the patient is semi-erect. The fundus is best shown in RAO or PA position.",
      "Correct. RPO 35–45° profiles the pylorus and duodenal bulb — the most important UGI position for detecting duodenal ulcers.",
      "The lesser curvature is profiled on the RAO (right anterior oblique) position, not the RPO.",
      "The gastroesophageal junction and esophagus are shown on RAO or right lateral projections — not the RPO."
    ]
  },

  { cat:"Procedures", sub:"Trauma",
    q:"When imaging a trauma patient with suspected cervical spine injury, which projection is performed FIRST?",
    opts:["AP open-mouth odontoid view","Bilateral oblique projections","Cross-table lateral (horizontal beam) projection","Flexion-extension views"],
    a:2,
    exp:"Cross-table lateral: performed first WITHOUT moving the patient. All 7 cervical vertebrae (C1–C7) must be visible. The patient is NOT repositioned until fracture/instability has been ruled out by the radiologist or clinician.",
    oe:[
      "The open-mouth odontoid view requires patient cooperation (mouth opening) and slight head repositioning — not done until the lateral is cleared.",
      "Oblique projections require patient movement and are done last in the trauma series after the AP and lateral are cleared.",
      "Correct. Cross-table horizontal beam lateral is the first priority. It shows alignment and obvious fractures without moving the patient.",
      "Flexion-extension views are NEVER done on an acute trauma patient — they carry serious risk of cord injury if instability is present."
    ]
  },

  { cat:"Procedures", sub:"Pediatrics",
    q:"The most important technical consideration when radiographing pediatric patients is:",
    opts:["Using higher mAs to compensate for anticipated patient motion","Using lower kVp to increase contrast and improve detail","Using the shortest possible exposure time combined with immobilization and collimation","Using higher kVp and longer exposure time for better penetration"],
    a:2,
    exp:"Pediatric radiography priority: short exposure time freezes motion; proper immobilization; tight collimation limits field size and dose; gonadal shielding when not in the field. All technical choices should minimize radiation dose (ALARA).",
    oe:[
      "Higher mAs increases radiation dose and doesn't by itself freeze motion. Short exposure times — controlled by ms setting — are needed to freeze motion.",
      "Lower kVp increases patient dose because more photons are absorbed photoelectrically. Appropriate kVp is used with the shortest exposure time.",
      "Correct. Short exposure time = frozen motion. Immobilization reduces repeat exposures. Tight collimation limits dose to the area of interest.",
      "Higher kVp improves penetration but longer exposure time would blur motion. The priority is always the shortest possible exposure time in pediatrics."
    ]
  }

];
