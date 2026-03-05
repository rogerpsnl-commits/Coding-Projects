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
  },

  // ──────────────────────── PATIENT CARE (BATCH 2) ────────────────────────

  { cat:"Patient Care", sub:"Emergency Care",
    q:"A patient experiencing insulin shock (hypoglycemia) will most likely present with:",
    opts:["Slow onset, deep breathing (Kussmaul respirations), and fruity breath odor","Rapid onset, shakiness, diaphoresis, confusion, and pale skin","Gradual onset with polyuria, polydipsia, and warm dry skin","Chest pain, shortness of breath, and nausea"],
    a:1,
    exp:"Hypoglycemia (insulin shock): blood sugar drops too low. Onset is rapid because the brain is immediately deprived of glucose. Signs: shakiness, diaphoresis (sweating), confusion, pallor, tachycardia. Untreated can lead to seizure or unconsciousness.",
    oe:[
      "Slow onset, Kussmaul respirations, and fruity breath describe diabetic ketoacidosis (DKA / hyperglycemic coma) — HIGH blood sugar, not low.",
      "Correct. Rapid onset diaphoresis, shakiness, and confusion = hypoglycemia. The brain lacks glucose and the sympathetic system fires trying to compensate.",
      "Gradual onset with polyuria and polydipsia describes hyperglycemia (too much blood sugar), not insulin shock.",
      "Chest pain and shortness of breath suggest cardiac or pulmonary emergency — not the classic presentation of hypoglycemia."
    ]
  },

  { cat:"Patient Care", sub:"Emergency Care",
    q:"A patient suddenly loses consciousness and has no pulse. After calling for help, the radiographer's next action should be:",
    opts:["Begin rescue breathing only","Apply the AED and shock the patient immediately","Begin high-quality chest compressions at a rate of 100–120 per minute","Place the patient in the recovery position and await the code team"],
    a:2,
    exp:"Current AHA guidelines: C-A-B (Compressions-Airway-Breathing). Begin chest compressions immediately at 100–120/min, depth ≥2 inches, allowing full chest recoil. Do not delay compressions waiting for an AED or breathing assessment.",
    oe:[
      "Rescue breathing alone is not recommended without compressions. Current guidelines prioritize compressions as the highest priority intervention.",
      "AED application is important but should not delay starting CPR. Compressions begin immediately while the AED is retrieved and attached.",
      "Correct. Hard and fast compressions maintain cardiac output until the code team arrives. Rate: 100–120/min; depth: ≥2 inches; allow full chest recoil.",
      "Recovery position is for unconscious patients who ARE breathing. A pulseless patient requires CPR — not the recovery position."
    ]
  },

  { cat:"Patient Care", sub:"Emergency Care",
    q:"Vasovagal syncope (fainting) is best managed by:",
    opts:["Elevating the patient's head and giving oxygen","Placing the patient in the Trendelenburg position (feet elevated above heart)","Calling a code and initiating chest compressions","Administering epinephrine immediately"],
    a:1,
    exp:"Vasovagal syncope results from a sudden drop in heart rate and blood pressure. Trendelenburg (supine, feet elevated 15–30°) increases venous return to the heart and brain, restoring perfusion rapidly. Monitor and reassure.",
    oe:[
      "Elevating the head would worsen cerebral perfusion by further lowering blood pressure to the brain. The opposite is needed.",
      "Correct. Trendelenburg = gravity assists venous return to heart and brain. Most patients recover quickly in this position.",
      "A code is only called for pulseless/apneic patients. Vasovagal syncope has a pulse — just temporarily inadequate perfusion.",
      "Epinephrine is for anaphylaxis, not vasovagal syncope. It would be inappropriate and dangerous here."
    ]
  },

  { cat:"Patient Care", sub:"Pharmacology",
    q:"The most serious type of contrast reaction, requiring immediate epinephrine, is:",
    opts:["Mild: sneezing, flushing, urticaria (hives)","Moderate: bronchospasm, facial edema, hypotension","Severe: laryngeal edema, anaphylactic shock, loss of consciousness","Delayed: nausea, vomiting occurring more than 1 hour post-injection"],
    a:2,
    exp:"Severe (anaphylactoid) reactions involve cardiovascular collapse, laryngeal edema causing airway obstruction, and loss of consciousness. Epinephrine 1:1,000 (0.3–0.5 mL IM) is the first-line treatment.",
    oe:[
      "Mild reactions (sneezing, hives, flushing) are self-limiting and treated with observation and antihistamines — epinephrine is not required.",
      "Moderate reactions (bronchospasm, facial edema) are treated with oxygen, bronchodilators, and possibly epinephrine depending on severity.",
      "Correct. Severe anaphylaxis with airway compromise and shock is life-threatening. Epinephrine, oxygen, and IV fluids are the immediate treatments.",
      "Delayed reactions (nausea, vomiting hours later) are not anaphylaxis — they are managed symptomatically and are rarely life-threatening."
    ]
  },

  { cat:"Patient Care", sub:"Pharmacology",
    q:"IV contrast extravasation (infiltration) into surrounding tissue is most safely managed by:",
    opts:["Applying heat immediately to promote absorption","Applying a cold compress, elevating the extremity, and notifying the radiologist","Massaging the site vigorously to disperse the contrast","Continuing the injection at a reduced rate"],
    a:1,
    exp:"Extravasation management: STOP the injection, remove the IV catheter, elevate the extremity to reduce swelling, apply cold compress to minimize tissue damage, and notify the radiologist. Document the amount extravasated and appearance of the site.",
    oe:[
      "Heat increases blood flow and could worsen tissue damage by promoting inflammation around the extravasated contrast material.",
      "Correct. Cold compress causes vasoconstriction, limiting spread. Elevation reduces edema. Radiologist notification is mandatory for documentation and follow-up.",
      "Massaging the site disperses contrast into a wider tissue area, potentially worsening tissue injury.",
      "Continuing the injection after extravasation is detected would worsen the extravasation and tissue damage."
    ]
  },

  { cat:"Patient Care", sub:"Legal & Ethics",
    q:"Under HIPAA, the minimum necessary standard requires that:",
    opts:["All patient information must be shared with the entire care team","Only the minimum amount of PHI (protected health information) necessary to accomplish a task should be used or disclosed","All imaging reports must be verbally communicated to the patient","Patient records must be deleted after 5 years"],
    a:1,
    exp:"HIPAA's minimum necessary standard: limit the use, disclosure, and request for PHI to only what is needed for the specific purpose. Radiographers should not share patient information beyond what is clinically necessary.",
    oe:[
      "Sharing all information with the entire care team violates the minimum necessary standard unless all team members have a need-to-know for that specific information.",
      "Correct. Minimum necessary = use only what is needed. This limits incidental exposure of PHI and protects patient privacy.",
      "HIPAA does not require verbal communication of reports to patients. Patients do have a right to access their records, but verbal communication is not mandated.",
      "HIPAA does not set a 5-year deletion requirement. Medical records retention is governed by state laws and varies by record type."
    ]
  },

  { cat:"Patient Care", sub:"Legal & Ethics",
    q:"Which statement best describes a patient's right to refuse radiographic examination?",
    opts:["A competent adult may refuse any examination, even if it could harm their health","Patients may only refuse optional (elective) procedures, not diagnostic studies","A physician can override a patient's refusal in emergencies","Refusal is only valid if the patient signs a specific legal form"],
    a:0,
    exp:"Competent adults have the absolute right to refuse any medical treatment or diagnostic procedure, even one necessary to preserve life. The radiographer must stop, document the refusal, and notify the referring physician.",
    oe:[
      "Correct. Autonomy is a fundamental patient right. A competent adult can refuse ANY procedure regardless of medical necessity.",
      "There is no distinction between elective and diagnostic studies for the right to refuse. All procedures require patient consent.",
      "Even in emergencies, a competent adult's refusal must be respected. Implied consent only applies when the patient is unable to communicate.",
      "Refusal can be verbal. While a signed refusal form is good documentation practice, the refusal itself is valid whether or not a form is signed."
    ]
  },

  { cat:"Patient Care", sub:"Infection Control",
    q:"Surgical aseptic technique requires that:",
    opts:["Gloves must be worn but a mask is optional","All items in and around the sterile field are considered sterile unless contaminated","Once a sterile package is opened, it remains sterile indefinitely if kept dry","A sterile field may be left unattended briefly if covered with a sterile drape"],
    a:1,
    exp:"Surgical asepsis: once established, everything within and immediately around the sterile field is considered sterile. Any breach — reaching across, unknown contact, moisture, or leaving unattended — contaminates the field.",
    oe:[
      "In surgical asepsis, mask, gown, and gloves are ALL required. A mask is not optional because oral/nasal droplets can contaminate the sterile field.",
      "Correct. The entire sterile field and its immediate surroundings are treated as sterile — doubt = contaminated.",
      "A sterile package or field does NOT remain sterile indefinitely. It can become compromised by time, moisture, or packaging damage.",
      "A sterile field must NEVER be left unattended, even briefly. Unobserved, it can be contaminated by air currents, insects, or unnoticed contact."
    ]
  },

  { cat:"Patient Care", sub:"Emergency Care",
    q:"Normal adult vital signs include all of the following EXCEPT:",
    opts:["Blood pressure: 120/80 mmHg","Pulse: 60–100 beats per minute","Respiratory rate: 12–20 breaths per minute","Temperature: 38.6°C (101.5°F)"],
    a:3,
    exp:"Normal adult temp = 37°C (98.6°F). Temperature of 38.6°C (101.5°F) is a fever. Normal ranges: BP 120/80, pulse 60–100 bpm, respirations 12–20/min, temp 36.5–37.5°C.",
    oe:[
      "120/80 mmHg is the classic normal blood pressure. Values up to 130/80 are now considered normal by current ACC/AHA guidelines.",
      "60–100 beats per minute is the normal adult resting heart rate. Below 60 = bradycardia; above 100 = tachycardia.",
      "12–20 breaths per minute is the normal adult respiratory rate. Below 12 = bradypnea; above 20 = tachypnea.",
      "Correct. 38.6°C (101.5°F) is a fever. Normal body temperature is approximately 37°C (98.6°F). This is an abnormal vital sign."
    ]
  },

  { cat:"Patient Care", sub:"Patient Transfer",
    q:"When assisting a patient from a wheelchair to the radiographic table, the wheelchair should be:",
    opts:["Placed parallel to the table at 90 degrees","Placed at a 45-degree angle to the table with the wheels locked","Positioned behind the patient throughout the transfer","Left at the foot of the table to maximize the patient's walking distance"],
    a:1,
    exp:"Wheelchair at 45° to the table with brakes locked: provides the shortest pivot distance, keeps the patient stable, allows natural body mechanics for both patient and radiographer. The patient pivots rather than side-steps.",
    oe:[
      "90° parallel placement requires the patient to side-step or pivot awkwardly over a long arc, increasing fall risk.",
      "Correct. 45° angle = shortest pivot path. Wheels MUST be locked before the patient attempts to stand.",
      "Placing the wheelchair behind the patient creates a fall hazard — the patient cannot use it for support during the transfer.",
      "Maximizing walking distance increases fall risk for patients who may be weak or unsteady. The 45° position minimizes ambulation needed."
    ]
  },

  { cat:"Patient Care", sub:"Communication",
    q:"When communicating with a hearing-impaired patient, the radiographer should:",
    opts:["Speak very loudly and exaggerate lip movements for emphasis","Face the patient, speak clearly at a normal pace, and use written materials or gestures as needed","Rely entirely on family members to interpret all communications","Avoid using sign language or written notes as they may embarrass the patient"],
    a:1,
    exp:"Best practice: face the patient (lip reading), speak clearly at normal pace (not slower — distorts lip movements), use visual aids, written notes, or professional interpreter if needed. Never exclude the patient from communication.",
    oe:[
      "Speaking very loudly and exaggerating lip movements actually distorts natural lip movements and makes lip-reading harder, not easier.",
      "Correct. Face the patient for lip-reading, clear speech at normal pace, and visual/written supplements are all appropriate strategies.",
      "Family members should not be primary interpreters — they may omit, alter, or misinterpret information, and privacy is compromised.",
      "Written notes and non-verbal communication are valuable tools and are never embarrassing — they demonstrate respect for the patient."
    ]
  },

  { cat:"Patient Care", sub:"Pharmacology",
    q:"Which medication route has the fastest onset of action?",
    opts:["Oral (PO)","Intramuscular (IM)","Subcutaneous (SC)","Intravenous (IV)"],
    a:3,
    exp:"IV administration delivers medication directly into the bloodstream — onset is immediate (seconds to minutes). IM and SC routes require absorption through tissue. Oral requires GI absorption and first-pass metabolism (slowest).",
    oe:[
      "Oral medications must be absorbed through the GI tract and undergo first-pass liver metabolism before reaching systemic circulation — the slowest route.",
      "IM injection is absorbed through muscle capillaries — faster than oral or SC, but minutes slower than IV.",
      "Subcutaneous injection is absorbed through subcutaneous capillaries — slower than IM due to less vascularity.",
      "Correct. IV = into the vein = directly into circulation = immediate onset. This is why emergencies use IV epinephrine and IV fluids."
    ]
  },

  { cat:"Patient Care", sub:"Scheduling",
    q:"For which condition is barium sulfate orally administered CONTRAINDICATED?",
    opts:["Gastric ulcer","Suspected bowel perforation or esophageal tear","Irritable bowel syndrome","Constipation"],
    a:1,
    exp:"Barium sulfate is contraindicated when bowel perforation is suspected because barium leaking into the peritoneal cavity causes severe peritonitis. In these cases, water-soluble contrast agents (e.g., Gastrografin/diatrizoate) are used instead.",
    oe:[
      "Gastric ulcers are not a contraindication to barium — they may actually be demonstrated by a UGI barium study.",
      "Correct. Barium in the peritoneal cavity causes life-threatening barium peritonitis. Use water-soluble contrast if perforation is possible.",
      "IBS is not a contraindication to barium. A barium enema may be performed to evaluate colon anatomy.",
      "Constipation may actually be caused by barium retention but is not a contraindication to administration of barium."
    ]
  },

  // ──────────────────────── SAFETY (BATCH 2) ────────────────────────

  { cat:"Safety", sub:"Radiation Units",
    q:"The traditional (non-SI) unit for measuring radiation exposure in air is:",
    opts:["Rad","Rem","Roentgen (R)","Curie (Ci)"],
    a:2,
    exp:"Roentgen (R) measures ionization produced in air by x- or gamma radiation. The SI replacement is C/kg (coulombs per kilogram). 1 R ≈ 2.58 × 10⁻⁴ C/kg.",
    oe:[
      "Rad (radiation absorbed dose) measures absorbed dose in tissue — the traditional unit replaced by the Gray (Gy). 1 rad = 0.01 Gy.",
      "Rem (roentgen equivalent man) measures effective/equivalent dose — the traditional unit replaced by the Sievert (Sv). 1 rem = 0.01 Sv.",
      "Correct. Roentgen = ionization in air. It is the traditional exposure unit. 1 R ≈ 1 rad ≈ 1 rem for x-ray and gamma radiation in tissue.",
      "Curie (Ci) measures radioactivity (disintegrations per second) — the traditional unit replaced by the Becquerel (Bq). 1 Ci = 3.7 × 10¹⁰ Bq."
    ]
  },

  { cat:"Safety", sub:"Dose Limits",
    q:"The annual occupational equivalent dose limit for the lens of the eye is:",
    opts:["5 mSv","15 mSv","50 mSv","150 mSv"],
    a:3,
    exp:"NCRP #116 lens of eye limit: 150 mSv/year occupational. The lens is more sensitive than skin but less sensitive than gonads/red marrow. (Recent ICRP 2011 revised it downward to 20 mSv/year; NCRP has not yet adopted this.)",
    oe:[
      "5 mSv is the annual dose limit for the general public (frequent exposure). Not the occupational lens limit.",
      "15 mSv is not a standard NCRP dose limit value. Avoid confusing with the 15% kVp rule.",
      "50 mSv/year is the occupational WHOLE-BODY effective dose limit — not the specific lens limit.",
      "Correct. 150 mSv/year for the lens of the eye (NCRP #116). This is higher than the whole-body limit because the lens is a less critical organ in terms of systemic risk."
    ]
  },

  { cat:"Safety", sub:"Dose Limits",
    q:"The annual occupational equivalent dose limit for the extremities (hands, forearms, feet) is:",
    opts:["50 mSv","150 mSv","250 mSv","500 mSv"],
    a:3,
    exp:"NCRP #116: extremity limit = 500 mSv/year. Extremities are relatively radioresistant and do not contain critical organs, allowing a higher limit. This is 10× the whole-body limit.",
    oe:[
      "50 mSv is the whole-body effective dose limit — not the extremity limit.",
      "150 mSv is the lens of the eye limit — not the extremity limit.",
      "250 mSv is not a standard NCRP dose limit value for extremities.",
      "Correct. Extremity limit = 500 mSv/year. The higher limit reflects the lower radiation sensitivity of extremity tissues versus radiosensitive organs."
    ]
  },

  { cat:"Safety", sub:"Dose Limits",
    q:"The annual effective dose limit for members of the general public (frequent exposure) is:",
    opts:["1 mSv","5 mSv","10 mSv","50 mSv"],
    a:1,
    exp:"NCRP #116: general public frequent exposure = 1 mSv/year. Infrequent exposure = 5 mSv/year. The public limit is lower than occupational because the public includes more vulnerable groups (children, elderly, pregnant) and they receive no compensation for radiation risk.",
    oe:[
      "1 mSv is actually the ICRP recommendation for frequent public exposure, but NCRP sets the U.S. standard at 1 mSv as well — this IS correct per NCRP #116.",
      "Correct. 1 mSv/year for frequent public exposure (NCRP #116). This is 50× lower than the occupational whole-body limit.",
      "10 mSv is not a standard NCRP general-public dose limit value.",
      "50 mSv is the occupational whole-body effective dose limit — never the public limit."
    ]
  },

  { cat:"Safety", sub:"Radiation Physics",
    q:"The half-value layer (HVL) is defined as:",
    opts:["The thickness of material that reduces beam intensity by one-quarter","The thickness of material that reduces beam intensity by one-half","The thickness of lead required to stop all x-ray photons","The distance at which beam intensity drops to half due to the inverse square law"],
    a:1,
    exp:"HVL = the thickness of a specific material (often aluminum or lead) that reduces beam intensity (or exposure rate) to 50% of its original value. HVL is used to evaluate beam quality: higher kVp = greater penetration = larger HVL.",
    oe:[
      "Reducing by one-quarter would require TWO half-value layers (each HVL reduces by half: 100% → 50% → 25%).",
      "Correct. HVL = thickness reducing intensity to 50%. After 2 HVLs → 25%; after 3 HVLs → 12.5%, etc.",
      "No practical material stops ALL photons — attenuation follows an exponential relationship. Complete absorption is theoretical.",
      "Intensity drop due to distance is described by the inverse square law — a completely different concept from HVL."
    ]
  },

  { cat:"Safety", sub:"Radiation Physics",
    q:"Coherent (classical/Rayleigh) scatter differs from Compton scatter in that coherent scatter:",
    opts:["Ejects an outer-shell electron and produces ionization","Involves the photoelectric absorption of the incident photon","Does NOT cause ionization; the photon is deflected with no energy loss","Produces a pair of electron and positron particles"],
    a:2,
    exp:"Coherent scatter: the photon interacts with an atom and sets the entire atom vibrating; the photon re-emits in a different direction with essentially the SAME energy. No ionization occurs and no energy is transferred to tissue. Negligible in diagnostic imaging.",
    oe:[
      "Ejecting an outer-shell electron with ionization describes Compton scatter. Coherent scatter involves no electron ejection.",
      "Complete absorption of the photon describes the photoelectric effect. In coherent scatter, the photon is not absorbed.",
      "Correct. Coherent scatter = elastic scatter. The photon bounces off with no energy loss and no ionization. It contributes minimally to scatter fog.",
      "Electron-positron pair production requires photon energies > 1.02 MeV and has nothing to do with coherent scatter."
    ]
  },

  { cat:"Safety", sub:"Radiation Protection",
    q:"A primary protective barrier must be able to attenuate the unattenuated primary beam. The minimum required lead equivalency for a primary barrier in a radiographic room is typically:",
    opts:["0.25 mm Pb","1/16 inch Pb","1/8 inch Pb (approximately 1.5–2 mm Pb)","5 mm Pb"],
    a:2,
    exp:"Primary barriers (walls struck by the primary beam) require approximately 1/16 inch (1.5–2 mm) lead equivalent shielding per NCRP #49 and #147. Secondary barriers (scatter/leakage) require less: ~1/32 inch (0.8 mm Pb).",
    oe:[
      "0.25 mm Pb is insufficient for a primary barrier — this is closer to lead apron equivalency for diagnostic x-ray levels.",
      "1/16 inch Pb is actually the correct thickness — this is the same as approximately 1.5 mm Pb. (Note: option C describes 1/8 inch which is the next level up.)",
      "Correct. 1/8 inch lead (≈1.5–2 mm Pb) is the typical primary barrier requirement for standard radiographic rooms per NCRP guidelines.",
      "5 mm Pb greatly exceeds typical requirements for diagnostic radiography and would be used in high-energy therapy facilities."
    ]
  },

  { cat:"Safety", sub:"Radiobiology",
    q:"LD 50/30 refers to:",
    opts:["The dose at which 50% of exposed individuals develop radiation-induced cancer within 30 years","The lethal dose that causes 50% mortality within 30 days","The dose limiting 50% of radiation to 30 days after exposure","The cumulative dose allowed over 30 years of occupational exposure"],
    a:1,
    exp:"LD 50/30: the radiation dose that causes 50% of an exposed population to die within 30 days. For humans: approximately 3.5–4.5 Gy (350–450 rad) to the whole body. This falls in the hematopoietic syndrome dose range.",
    oe:[
      "Cancer development probability describes a stochastic effect — not the LD 50/30, which refers to acute lethality within 30 days.",
      "Correct. Lethal Dose 50/30 = the dose at which 50% of irradiated individuals die within 30 days. For humans: ~3.5–4.5 Gy whole body.",
      "This interpretation reverses the meaning — LD 50/30 is not about limiting doses or time periods for exposure.",
      "Occupational cumulative dose is governed by the formula Age × 10 mSv — entirely different from LD 50/30."
    ]
  },

  { cat:"Safety", sub:"Radiobiology",
    q:"The organ that is considered MOST radiosensitive among the following options is:",
    opts:["Brain","Liver","Bone marrow (hematopoietic cells)","Muscle"],
    a:2,
    exp:"Bone marrow (hematopoietic stem cells) is among the most radiosensitive tissues because these cells are rapidly dividing, undifferentiated, and maintain blood cell production. Muscles, brain, and liver are comparatively radioresistant.",
    oe:[
      "Brain cells are highly differentiated, non-dividing neurons — making them relatively radioresistant per Bergonié and Tribondeau.",
      "Liver cells are differentiated with limited mitotic activity under normal conditions — moderately radioresistant.",
      "Correct. Hematopoietic (bone marrow) cells are rapidly dividing and undifferentiated — highly radiosensitive. This is why the hematopoietic syndrome occurs at the lowest acute dose range.",
      "Muscle cells are highly differentiated and have very low mitotic activity — among the MOST radioresistant tissues in the body."
    ]
  },

  { cat:"Safety", sub:"Radiation Protection",
    q:"Gonadal shielding should be used when the gonads are within approximately what distance from the edge of the primary beam?",
    opts:["1 cm","2 cm","5 cm","10 cm"],
    a:2,
    exp:"NCRP recommendation: use gonadal shielding when the gonads are within 5 cm (2 inches) of the primary field edge AND shielding won't obscure clinically necessary anatomy. Shielding should also be used whenever the patient is of reproductive age.",
    oe:[
      "1 cm is too restrictive — scatter reaches well beyond 1 cm. The accepted distance is 5 cm from the primary beam edge.",
      "2 cm underestimates the useful protection zone. The NCRP guideline is 5 cm (approximately 2 inches).",
      "Correct. 5 cm (≈2 inches) from the primary beam edge is the threshold for applying gonadal shielding per NCRP guidelines.",
      "10 cm is overly conservative — at that distance from the beam edge, there is minimal scatter dose to the gonads."
    ]
  },

  { cat:"Safety", sub:"Radiation Protection",
    q:"The maximum permissible leakage radiation from an x-ray tube housing is:",
    opts:["10 mR/hr at 1 meter","100 mR/hr at 1 meter","500 mR/hr at 1 meter","1000 mR/hr at 1 meter"],
    a:1,
    exp:"Federal regulations (21 CFR Part 1020) require that x-ray tube housing leakage must not exceed 100 mR/hr (1 mSv/hr) at 1 meter from the focal spot when the tube is operated at its maximum rated conditions.",
    oe:[
      "10 mR/hr is more restrictive than the federal standard. The actual limit is 100 mR/hr at 1 meter.",
      "Correct. 100 mR/hr (1 mSv/hr) at 1 meter is the maximum leakage radiation permitted from the tube housing.",
      "500 mR/hr exceeds the permissible limit by 5×. This level of leakage would indicate a defective or damaged tube housing.",
      "1000 mR/hr would be 10× the permissible limit and would represent a dangerously defective tube housing."
    ]
  },

  { cat:"Safety", sub:"Dose-Response",
    q:"Deterministic effects of radiation (formerly called non-stochastic effects) are characterized by:",
    opts:["No threshold dose; probability increases linearly with dose","A threshold dose below which no effect is observed; severity increases with dose above threshold","Random occurrence with probability proportional to dose but constant severity","Occurring only in germ cells and therefore heritable"],
    a:1,
    exp:"Deterministic (threshold) effects: erythema, cataract, epilation, gonadal suppression. A minimum dose must be reached before any effect appears. Above the threshold, severity increases with dose. Examples: cataract threshold ~500 mGy, erythema threshold ~2 Gy.",
    oe:[
      "No threshold with linear probability describes stochastic effects (cancer, genetic mutations) — not deterministic effects.",
      "Correct. Deterministic = threshold + dose-dependent severity. Below threshold: no effect. Above threshold: effect severity worsens with dose.",
      "Random occurrence with constant severity at varying doses describes stochastic effects. Deterministic effects are predictable and severity-dependent.",
      "Heritable effects in germ cells describe genetic stochastic effects — not deterministic effects, which occur in somatic tissues."
    ]
  },

  { cat:"Safety", sub:"Radiation Protection",
    q:"Which type of radiation monitoring device provides the most accurate measurement of cumulative dose and is NOT sensitive to heat and humidity?",
    opts:["Film badge","Optically stimulated luminescence (OSL) dosimeter","Pocket ionization chamber","Electronic personal dosimeter (EPD)"],
    a:1,
    exp:"OSL dosimeters (e.g., Luxel): aluminum oxide crystal stores electrons when irradiated; stimulated with laser light, emitting luminescence proportional to dose. More sensitive and accurate than film, not affected by heat/humidity, can be re-read multiple times.",
    oe:[
      "Film badges are affected by heat, humidity, and light — they can give false readings and have largely been replaced by OSL dosimeters.",
      "Correct. OSL (optically stimulated luminescence) dosimeters are accurate, durable, unaffected by environmental conditions, and can be re-analyzed if needed.",
      "Pocket ionization chambers are self-reading and immediate but less accurate for long-term cumulative dose measurement.",
      "Electronic personal dosimeters (EPDs) give real-time readouts but are used as supplemental devices — OSL remains the standard for official cumulative dosimetry."
    ]
  },

  // ──────────────────────── IMAGE PRODUCTION (BATCH 2) ────────────────────────

  { cat:"Image Production", sub:"Digital Imaging",
    q:"The exposure index (EI) in digital radiography is:",
    opts:["A measure of patient dose during the exposure","A numeric indicator of the radiation exposure reaching the image receptor","A setting the radiographer selects to control image brightness","The ratio of correct to incorrect exposures in a department"],
    a:1,
    exp:"Exposure index (EI): a numeric value generated by the DR/CR system indicating how much radiation reached the detector. Higher EI = more exposure; lower EI = less exposure. Used to evaluate whether appropriate technique was used and detect over- or underexposure.",
    oe:[
      "The EI reflects dose to the receptor, not directly to the patient — though they are correlated. Patient dose requires a separate dose indicator (DAP meter).",
      "Correct. EI = detector exposure indicator. Each manufacturer uses a different scale but the concept is universal: number reflects exposure level.",
      "Image brightness in digital radiography is controlled by post-processing algorithms — the EI measures what happened to the detector, not what the display does.",
      "The EI is a technical metric, not a quality management ratio. It applies to individual exposures, not departmental statistics."
    ]
  },

  { cat:"Image Production", sub:"Digital Imaging",
    q:"In digital imaging, window width (WW) controls:",
    opts:["Image brightness (average gray level displayed)","The range of tissue densities displayed and therefore the contrast of the image","Spatial resolution by adjusting pixel size","The total number of gray levels in the image"],
    a:1,
    exp:"Window width determines which range of CT numbers (Hounsfield units) are mapped to the visible gray scale. Narrow WW = high contrast (few shades, dramatic black/white). Wide WW = low contrast (many shades, subtle distinctions visible).",
    oe:[
      "Image brightness (average gray level) is controlled by window LEVEL (WL), not window width. WL sets the center of the density range being displayed.",
      "Correct. Window width = the contrast control. Narrow = more contrast; wide = less contrast. Analogous to scale of contrast in film radiography.",
      "Spatial resolution is determined by detector element size, matrix size, and reconstruction algorithm — not window width.",
      "The total number of gray levels is set by bit depth (e.g., 12-bit = 4,096 levels) — independent of window width settings."
    ]
  },

  { cat:"Image Production", sub:"Digital Imaging",
    q:"Computed radiography (CR) differs from direct digital radiography (DR) primarily in that CR:",
    opts:["Uses a flat-panel detector with amorphous silicon","Stores the latent image in a photostimulable phosphor (PSP) plate that must be scanned by a laser reader","Provides an immediate image without separate processing steps","Uses cesium iodide or amorphous selenium for direct image capture"],
    a:1,
    exp:"CR uses a photostimulable phosphor plate (imaging plate) that stores a latent image. The plate is removed from the cassette and inserted into a laser reader that stimulates light emission proportional to dose. DR detectors capture and display the image immediately without this intermediate step.",
    oe:[
      "Flat-panel detectors with amorphous silicon describe indirect DR systems (e.g., cesium iodide scintillator + amorphous silicon photodetector) — not CR.",
      "Correct. CR = PSP plate stores latent image → laser reader → digital image. This process requires more time and steps than DR.",
      "Immediate image without separate processing describes DR (direct digital radiography), not CR. CR requires the plate to be physically transported to the reader.",
      "Cesium iodide (CsI) and amorphous selenium (a-Se) describe DR detector materials. CR plates use barium fluorohalide (e.g., BaFBr) phosphors."
    ]
  },

  { cat:"Image Production", sub:"Digital Imaging",
    q:"Quantum mottle (quantum noise) in digital radiography is caused by:",
    opts:["Electronic noise from the detector circuitry","Too few x-ray photons reaching the detector (insufficient mAs)","Excessive scatter reaching the receptor","Software compression artifacts"],
    a:1,
    exp:"Quantum mottle = statistical noise from insufficient photons. When too few photons reach the detector, the image appears grainy/mottled because the photon distribution is statistically uneven. Increasing mAs provides more photons and reduces noise.",
    oe:[
      "Electronic noise from circuitry is a separate type of noise (electronic/thermal noise) — distinct from quantum mottle, which is photon-related.",
      "Correct. Quantum mottle = too few quanta (photons). Photons follow Poisson statistics — too few = visible statistical variation = grainy image.",
      "Excess scatter reduces contrast but creates a fog-like overall graying rather than the mottled, grainy appearance of quantum noise.",
      "Software compression artifacts appear as blocking or ringing patterns — distinctly different from the random mottled appearance of quantum noise."
    ]
  },

  { cat:"Image Production", sub:"X-ray Equipment",
    q:"Full-wave rectification in the x-ray circuit:",
    opts:["Allows only the negative half of the AC cycle to reach the tube","Converts both positive and negative halves of AC into pulsating DC, increasing x-ray output efficiency","Has no effect on x-ray output compared to half-wave rectification","Produces a constant (ripple-free) DC supply to the x-ray tube"],
    a:1,
    exp:"Full-wave (4-diode bridge) rectification converts BOTH halves of the AC sine wave into pulsating positive DC. This doubles the number of pulses per cycle (from 1 to 2 per cycle for single-phase), increasing average kV and x-ray output efficiency.",
    oe:[
      "Allowing only the negative half is a description of half-wave rectification (and the negative half is actually unused — only the positive drives the tube).",
      "Correct. Full-wave = 4 rectifiers flip the negative half cycle into positive, resulting in 2 pulses per AC cycle. More effective than half-wave (1 pulse per cycle).",
      "Full-wave rectification produces roughly DOUBLE the x-ray output of half-wave, because both halves of the AC cycle contribute to x-ray production.",
      "Ripple-free constant DC describes a 3-phase or high-frequency generator — not single-phase full-wave rectification, which still has significant ripple."
    ]
  },

  { cat:"Image Production", sub:"X-ray Equipment",
    q:"A rotating anode x-ray tube has which advantage over a stationary anode?",
    opts:["It produces less heat during exposure","It allows much higher tube currents (mA) and mAs values by distributing heat over a larger anode surface","It produces a larger focal spot for improved spatial resolution","It eliminates the need for filtration"],
    a:1,
    exp:"Rotating anode: the anode disk spins at 3,000–10,000 RPM, continuously presenting a cool anode surface to the electron beam. The effective heat load is spread over the entire anode track rather than a single fixed point.",
    oe:[
      "A rotating anode does not produce less heat — it produces the same heat but distributes it more effectively. Total heat generated = mA × kVp × time.",
      "Correct. Distributing heat over the entire rotating track allows far higher mA stations and longer exposures without exceeding anode heat capacity.",
      "A rotating anode does not inherently produce a larger focal spot. Focal spot size is determined by the filament size and anode angle, not rotation.",
      "Filtration requirements are governed by federal regulation (≥2.5 mm Al total at ≥70 kVp) and are completely unrelated to anode type."
    ]
  },

  { cat:"Image Production", sub:"X-ray Equipment",
    q:"The effective focal spot is SMALLER than the actual (true) focal spot because of:",
    opts:["The line-focus principle: the angled anode projects a smaller area toward the patient","The inverse square law reducing apparent size at greater distances","Penumbra formation at the edges of the focal spot","The space charge effect reducing electron beam size"],
    a:0,
    exp:"Line-focus principle: the anode face is angled (typically 7°–17°). This projects the actual rectangular focal spot (seen face-on) into a smaller apparent square as seen along the central ray. Smaller effective focal spot = better spatial resolution.",
    oe:[
      "Correct. The line-focus principle: angled anode + oblique projection = smaller effective focal spot. Smaller effective FS = sharper image detail.",
      "The inverse square law describes intensity changes with distance — it has no effect on the apparent size of the focal spot.",
      "Penumbra is the unsharpness zone around a projected object — it results FROM focal spot size but doesn't make the focal spot appear smaller.",
      "The space charge effect (electron cloud buildup at low mA) affects tube current, not the optical projection of the focal spot."
    ]
  },

  { cat:"Image Production", sub:"Spatial Resolution",
    q:"Modulation transfer function (MTF) is a measure of:",
    opts:["Patient dose per unit of image quality","A detector system's ability to faithfully reproduce spatial frequency information from the object","The amount of scatter produced relative to primary beam intensity","The number of pixels per centimeter in the image matrix"],
    a:1,
    exp:"MTF quantifies how well an imaging system transfers contrast at different spatial frequencies (line pairs per mm). MTF = 1.0 (perfect resolution) at 0 frequency; approaches 0 at the system's resolution limit. Higher MTF across frequencies = better image quality.",
    oe:[
      "Dose per unit image quality is described by dose efficiency or the DQE (Detective Quantum Efficiency) metric — not MTF.",
      "Correct. MTF measures resolution fidelity across spatial frequencies. A detector with high MTF reproduces fine detail accurately.",
      "Scatter to primary ratio (S/P ratio) quantifies scatter — a completely different image quality metric from MTF.",
      "Pixels per centimeter describes spatial sampling frequency (related to pixel pitch/size) — a component of MTF measurement but not the definition of MTF."
    ]
  },

  { cat:"Image Production", sub:"Grids",
    q:"Off-level grid error (grid tilt) produces which artifact?",
    opts:["Cutoff (decreased density) only on one side of the image","Uniform decrease in density across the entire image","Normal density in the center with progressive cutoff toward both sides","No visible artifact unless the tilt exceeds 45°"],
    a:1,
    exp:"Off-level (tilted) grid: the grid is angled relative to the x-ray beam, causing all lead strips to absorb primary radiation unequally across the field. Result: uniform overall decreased density (not one-sided, not central — the whole field is affected).",
    oe:[
      "One-sided cutoff is caused by off-center (lateral decentering) error — the CR is not centered over the grid, so one side receives more absorption.",
      "Correct. Tilted grid = uniformly decreased density over the entire image. This is different from lateral decentering (one-sided) or inversion (central normal with peripheral cutoff).",
      "Normal center with peripheral bilateral cutoff is caused by using an inverted focused grid — a different type of grid error.",
      "Even minor off-level errors produce a visible uniform density decrease. Significant artifacts can occur with as little as 3–5° of tilt."
    ]
  },

  { cat:"Image Production", sub:"AEC",
    q:"When using AEC, the radiographer is responsible for selecting:",
    opts:["The exposure time only","The mAs value only","The kVp, the appropriate detector cell(s), and the backup time","The exact mAs and kVp combination automatically set by the system"],
    a:2,
    exp:"With AEC, the radiographer selects: kVp (determines penetration and contrast), which ionization chamber cell(s) to activate (must be under the anatomy of interest), and a backup time (maximum mAs failsafe). The AEC controls the actual duration/mAs.",
    oe:[
      "The AEC controls exposure time automatically. The radiographer does not set exposure time when using AEC.",
      "The AEC controls mAs automatically. The radiographer sets kVp and selects which cell(s) to use.",
      "Correct. Radiographer inputs: kVp for appropriate penetration, cell selection for proper anatomy placement, backup time to prevent overexposure if AEC fails.",
      "The AEC dynamically determines exposure time/mAs based on radiation reaching the detector — the radiographer does not set these values."
    ]
  },

  { cat:"Image Production", sub:"Image Contrast",
    q:"Added filtration affects image contrast by:",
    opts:["Increasing contrast by adding more high-energy photons to the beam","Decreasing subject contrast slightly by hardening the beam and reducing the range of photon energies","Increasing contrast by removing scatter photons","Having no effect on image contrast — filtration only affects dose"],
    a:1,
    exp:"Beam hardening from filtration removes low-energy photons, making the beam more monoenergetic. A narrower energy spectrum produces slightly lower subject contrast (less differentiation between tissues) but reduces patient dose.",
    oe:[
      "Filtration REMOVES photons, not adds them. The remaining beam has fewer but higher-average-energy photons.",
      "Correct. Filtration hardens the beam → narrower spectrum → slightly reduced contrast. The trade-off is acceptable because dose reduction is the primary goal.",
      "Filtration removes low-energy primary photons from the beam before reaching the patient — it does NOT remove scatter (grids do that).",
      "Filtration does affect contrast — it's a minor secondary effect. Filtration's primary purpose is dose reduction; contrast change is an accepted consequence."
    ]
  },

  { cat:"Image Production", sub:"Exposure Factors",
    q:"Which change in exposure factors will maintain radiographic density while REDUCING patient dose the most?",
    opts:["Increase kVp by 15% and keep mAs the same","Increase kVp by 15% and reduce mAs by one-half","Double the mAs and reduce kVp by 15%","Increase SID and increase mAs proportionally"],
    a:1,
    exp:"The 15% rule + halving mAs: increasing kVp by 15% doubles receptor exposure, so halving mAs returns to the original density. Net result: same image density but mAs (and patient dose) reduced by 50%. Higher kVp also reduces photoelectric absorption, further reducing patient dose.",
    oe:[
      "Increasing kVp by 15% without reducing mAs would DOUBLE receptor exposure (overexposure). Patient dose would also increase.",
      "Correct. +15% kVp doubles exposure; ÷2 mAs halves it back. Net receptor exposure maintained, but patient dose is approximately halved.",
      "Doubling mAs and decreasing kVp by 15% maintains density but INCREASES patient dose because lower kVp causes more photoelectric absorption in tissue.",
      "Increasing SID requires mAs increase (inverse square law) to maintain density — this does not reduce patient dose."
    ]
  },

  // ──────────────────────── PROCEDURES (BATCH 2) ────────────────────────

  { cat:"Procedures", sub:"Spine",
    q:"The AP axial projection of the cervical spine uses a central ray angle of:",
    opts:["10° caudad to C4","15°–20° cephalad to C4","Perpendicular (0°) to C3","5° caudad to C2"],
    a:1,
    exp:"AP axial cervical spine: patient supine or erect; CR angled 15–20° cephalad to the level of C4. This cephalad angle opens the intervertebral disk spaces and projects the mandible superiorly, demonstrating C3–C7 clearly.",
    oe:[
      "A caudad angle would project the mandible over the cervical spine, obscuring the vertebral bodies. Cephalad angulation is required.",
      "Correct. 15–20° cephalad to C4 opens the disk spaces and clears the mandible from the field of view. C3–C7 are demonstrated.",
      "A perpendicular CR to C3 without angulation does not open the intervertebral spaces and allows the mandible to overlap C3–C4.",
      "5° caudad to C2 is incorrect — caudad angles are used for other projections (e.g., some skull projections). Cervical spine AP requires cephalad angulation."
    ]
  },

  { cat:"Procedures", sub:"Spine",
    q:"The lateral projection of the thoracic spine uses which breathing technique to improve image quality?",
    opts:["Deep inspiration and breath hold","Deep expiration and breath hold","Shallow breathing (breathing technique) during the exposure","No breathing technique is required for thoracic spine"],
    a:2,
    exp:"Breathing technique (autotomography): the patient breathes slowly and continuously during a long exposure (3–4 seconds). Lung and rib structures blur out, while the vertebrae (stationary) remain sharp. Superb for demonstrating the intervertebral disk spaces.",
    oe:[
      "Deep inspiration and breath-hold is used for chest and AP thoracic spine projections. For lateral thoracic, the breathing technique is preferred.",
      "Deep expiration and breath-hold can be used for lateral thoracic but is not preferred over the breathing technique, which blurs ribs more effectively.",
      "Correct. Breathing (motion blur) technique: during a 3–4 second exposure, ribs and lung structures blur away while stationary vertebrae remain in focus.",
      "Breathing technique is specifically recommended for lateral thoracic spine — it's one of the few projections where patient motion is deliberately used."
    ]
  },

  { cat:"Procedures", sub:"Spine",
    q:"The AP projection of the sacrum requires the central ray to be angled:",
    opts:["10° caudad","15° cephalad","20° cephalad","Perpendicular with no angle"],
    a:2,
    exp:"AP sacrum: CR angled 15° cephalad (some references say up to 20°) centered to the midpoint between the pubic symphysis and ASIS. The cephalad angle compensates for the forward tilt of the sacrum, projecting the sacral segments without superimposition.",
    oe:[
      "Caudad angulation would project the sacrum further into the pelvis and is used for coccyx projections, not the sacrum.",
      "15° cephalad is within accepted range for AP sacrum — some references use this value. 20° is also acceptable depending on patient habitus.",
      "Correct. 15°–20° cephalad for AP sacrum to compensate for the normal sacral inclination (forward tilt) in the anatomical position.",
      "A perpendicular CR would foreshorten the sacrum and cause self-superimposition of sacral segments — not appropriate for this projection."
    ]
  },

  { cat:"Procedures", sub:"Lower Extremity",
    q:"The axial (plantodorsal) projection of the calcaneus (os calcis) is performed with:",
    opts:["Patient prone, CR perpendicular to the plantar surface","Patient supine with foot dorsiflexed, CR angled 40° cephalad from the long axis of the foot","Patient lateral recumbent, CR perpendicular","Patient standing on the IR with perpendicular CR"],
    a:1,
    exp:"Calcaneus axial (plantodorsal): patient seated or supine; foot dorsiflexed 90° to the leg; CR angled 40° cephalad (toward the knee) along the long axis of the foot. This opens the subtalar joint and demonstrates the entire calcaneus in axial projection.",
    oe:[
      "Prone with perpendicular CR describes a dorsoplantar axial view — the reverse direction. The standard approach is plantodorsal (CR from the plantar surface).",
      "Correct. Foot dorsiflexed + 40° cephalad CR = plantodorsal axial view of the calcaneus. Demonstrates calcaneal fractures and the subtalar joint.",
      "Lateral recumbent with perpendicular CR gives a lateral view of the foot and calcaneus — not the axial projection.",
      "Standing on the IR with perpendicular CR is used for weight-bearing foot projections, not the axial calcaneus view."
    ]
  },

  { cat:"Procedures", sub:"Upper Extremity",
    q:"The Coyle method for the elbow is used to demonstrate the:",
    opts:["Olecranon process in profile","Radial head and coronoid process free from superimposition","Lateral epicondyle in profile","Distal humerus in AP projection"],
    a:1,
    exp:"Coyle method (acute flexion): two projections taken with the elbow acutely flexed — one CR angled toward the shoulder shows the radial head; one CR angled toward the elbow shows the coronoid process. Used when the elbow cannot be fully extended (trauma).",
    oe:[
      "The olecranon process is demonstrated on the lateral elbow projection or on a dedicated AP axial projection, not the Coyle method.",
      "Correct. The Coyle method provides two acute-flexion views that separately profile the radial head and coronoid process for trauma patients.",
      "The lateral epicondyle is shown on the AP projection of the elbow in standard positioning — not a specialized method.",
      "The distal humerus in AP projection is the routine AP elbow; no special method is needed for this structure."
    ]
  },

  { cat:"Procedures", sub:"Upper Extremity",
    q:"The Grashey method (true AP) for the shoulder joint is used to demonstrate:",
    opts:["The acromioclavicular joint space","The glenohumeral joint space in true AP projection by rotating the body 35–45° toward the affected side","The supraspinatus outlet and subcoracoid space","The coracoid process free from superimposition"],
    a:1,
    exp:"Grashey method: the patient is rotated 35–45° posterior oblique (affected side toward the IR) to place the glenoid fossa en face (face on). This eliminates the obliquity of the glenohumeral joint, opening the joint space for true AP visualization.",
    oe:[
      "Acromioclavicular joints are shown on a bilateral AP weight-bearing view using low kVp — not the Grashey method.",
      "Correct. The Grashey (true AP shoulder): rotating toward the affected side places the glenoid face-on, opening the glenohumeral joint space.",
      "The supraspinatus outlet (Neer view) uses a tangential lateral projection angled caudad — completely different from the Grashey method.",
      "The coracoid process is demonstrated on a special AP axial (AP with CR angled 30° cephalad) — not the Grashey method."
    ]
  },

  { cat:"Procedures", sub:"Upper Extremity",
    q:"The transthoracic lateral projection of the shoulder (Lawrence method) is used primarily for:",
    opts:["Evaluating the AC joint for separation","Demonstrating the proximal humerus in lateral projection when the patient cannot abduct the arm","Detecting Hill-Sachs lesions on the posterior humeral head","Visualizing the rotator cuff tendons"],
    a:1,
    exp:"Transthoracic lateral (Lawrence): patient erect, affected side against the IR, unaffected arm raised. CR passes through the thorax. Used for trauma patients who cannot raise the affected arm — shows the proximal humerus and glenohumeral relationship in lateral projection.",
    oe:[
      "AC joint separation is assessed with bilateral AP weight-bearing views — transthoracic lateral is not used for this purpose.",
      "Correct. Transthoracic lateral = proximal humerus in lateral projection without moving the injured arm. Essential for trauma positioning.",
      "Hill-Sachs lesions (posterior humeral head defect from anterior shoulder dislocation) are best seen on internal rotation AP or the Stryker notch view.",
      "Rotator cuff tendons are assessed with MRI or ultrasound — radiographs cannot directly visualize tendons."
    ]
  },

  { cat:"Procedures", sub:"Lower Extremity",
    q:"The mortise view of the ankle is obtained by:",
    opts:["Dorsiflexing the foot 90° with CR perpendicular","Internally rotating the foot/leg 15–20° with CR perpendicular to the ankle joint","Externally rotating the foot 45° with CR angled 15° cephalad","Patient weight-bearing with CR perpendicular in AP position"],
    a:1,
    exp:"Mortise view (AP oblique ankle): 15–20° internal rotation. This rotation places all three ankle joint spaces (medial, superior, lateral) in the same plane, visible simultaneously as a true mortise. Essential for evaluating ankle stability and fractures.",
    oe:[
      "Dorsiflexion with perpendicular CR is used for stress views — not the mortise projection. Dorsiflexion does not open the mortise.",
      "Correct. 15–20° internal rotation = mortise view. All three joint compartments open simultaneously. Critical for evaluating syndesmosis and joint stability.",
      "45° external rotation is used for the medial oblique foot view — not the ankle mortise. 15° internal, not external, opens the ankle mortise.",
      "Weight-bearing AP views are used for alignment studies but do not specifically demonstrate the mortise unless combined with internal rotation."
    ]
  },

  { cat:"Procedures", sub:"Lower Extremity",
    q:"An AP weight-bearing view of the foot demonstrates which clinical information not visible on a non-weight-bearing AP?",
    opts:["Fractures of the phalanges","Hallux valgus angle and longitudinal arch collapse (flat foot/pes planus)","Stress fractures of the metatarsals","Osteophyte formation on the first MTP joint"],
    a:1,
    exp:"Weight-bearing AP and lateral foot: shows the foot under physiologic stress. Hallux valgus angle, metatarsus adductus, and arch height are accurately measured only when bearing weight. Non-weight-bearing views show anatomy but not functional alignment.",
    oe:[
      "Phalangeal fractures are well-demonstrated on routine non-weight-bearing AP. Weight bearing adds no diagnostic value for acute phalangeal injury.",
      "Correct. Weight-bearing views reveal functional deformity — arch collapse, hallux valgus angulation, and metatarsal splaying that are absent or underrepresented in the non-weight-bearing position.",
      "Stress fractures are evaluated on standard AP projections or bone scan/MRI. Weight bearing does not improve fracture visualization.",
      "Osteophytes are visible on both weight-bearing and non-weight-bearing views. Weight bearing adds no specific advantage for detecting osteophytes."
    ]
  },

  { cat:"Procedures", sub:"Skull",
    q:"The Towne (Grashey) projection of the skull is primarily used to demonstrate:",
    opts:["The facial bones and orbits","The posterior cranial fossa, occipital bone, and dorsum sellae","The frontal sinuses and anterior skull","The petrous ridges and mastoid air cells in AP projection"],
    a:1,
    exp:"Towne (AP axial): patient supine or erect, OML perpendicular to IR, CR angled 30° caudad (with OML) or 37° caudad (with IOML). This projects the foramen magnum, occipital bone, posterior clinoid processes, and dorsum sellae into view.",
    oe:[
      "Facial bones and orbits are demonstrated by the Waters (PA axial) and Caldwell projections, not the Towne.",
      "Correct. Towne projection = posterior fossa. Classic for showing the occipital bone, foramen magnum, and dorsum sella through the foramen magnum.",
      "The frontal sinuses and anterior skull are shown on the Caldwell (PA axial, 15° caudad CR) projection — not the Towne.",
      "Petrous ridges in AP projection are shown in the Towne but that is a secondary finding — the primary purpose is the posterior cranial fossa and occipital bone."
    ]
  },

  { cat:"Procedures", sub:"Chest",
    q:"For an AP lordotic view of the chest, the central ray is directed:",
    opts:["15° caudad to the mid-sternum","Perpendicular with patient leaning backward (lordotic position)","15° cephalad to T6 with patient standing erect","Horizontal to demonstrate air-fluid levels"],
    a:1,
    exp:"AP lordotic: patient leans backward (arching the back) so the thorax is parallel to the IR, OR the patient stands erect with a 15° cephalad CR. The clavicles and first rib are projected above the lung apices, clearing the apex for evaluation of apical masses or middle lobe atelectasis.",
    oe:[
      "15° caudad angulation would project apices downward — the opposite of the lordotic effect needed to elevate the clavicles.",
      "Correct. Leaning backward (lordotic position) + perpendicular CR, or erect patient + cephalad CR. The clavicles are projected superiorly, clearing the lung apices.",
      "15° cephalad to T6 with erect patient is an alternate technique for the AP lordotic — this is also acceptable and achieves the same result.",
      "Horizontal CR is used for decubitus projections to demonstrate air-fluid levels or free pleural effusion — not the lordotic view."
    ]
  },

  { cat:"Procedures", sub:"Abdomen",
    q:"The AP abdomen (KUB) is used as a primary projection for all of the following EXCEPT:",
    opts:["Demonstrating kidney size, shape, and position","Identifying radiopaque renal calculi (kidney stones)","Demonstrating bowel gas distribution and obstruction","Evaluating mucosal detail of the bowel wall"],
    a:3,
    exp:"KUB (Kidney, Ureter, Bladder): provides an overview of solid organs and calcifications. Mucosal detail of the bowel wall requires contrast studies (barium enema, small bowel follow-through) or endoscopy — plain radiography cannot resolve mucosal folds without contrast.",
    oe:[
      "The KUB does show renal outlines using the perirenal fat plane — kidney size and shape are routinely assessed.",
      "Radiopaque calculi (calcium oxalate, calcium phosphate) are visible on KUB as dense opacities in the renal, ureteral, or bladder regions.",
      "Bowel gas patterns (dilated loops, air-fluid levels, free air) are classic KUB findings — used for bowel obstruction workup.",
      "Correct. Mucosal detail (rugae, haustra, villi) requires contrast material. A plain KUB cannot demonstrate bowel mucosa — that requires barium or CT."
    ]
  },

  { cat:"Procedures", sub:"GI Studies",
    q:"A double-contrast barium enema (DCBE) uses:",
    opts:["A high volume of thick barium to coat and fill the entire colon","A small amount of thick barium to coat the mucosal lining plus air insufflation to distend the colon","Barium mixed with iodinated contrast for dual visualization","A water-soluble contrast agent combined with CO₂ gas"],
    a:1,
    exp:"DCBE: dense barium coats the mucosa, then air (or CO₂) is insufflated to distend the colon. The thin barium lining + air provides excellent mucosal detail, making it superior to single-contrast BE for detecting polyps, early carcinoma, and inflammatory bowel disease changes.",
    oe:[
      "High-volume thick barium filling the entire colon describes a SINGLE-contrast barium enema — good for large lesions but poor for mucosal detail.",
      "Correct. Double-contrast = mucosal coating with dense barium + luminal distension with air. This produces the best mucosal detail for polyp detection.",
      "Barium and iodinated contrast are not mixed — they are chemically incompatible and serve different purposes.",
      "Water-soluble contrast + CO₂ is used in specific situations (suspected perforation, post-operative patients) — not the standard DCBE technique."
    ]
  },

  { cat:"Procedures", sub:"GI Studies",
    q:"During an intravenous urogram (IVU/IVP), the nephrogram phase (parenchymal blush) occurs approximately:",
    opts:["30–60 seconds after contrast injection","5–7 minutes after injection","15–20 minutes after injection","Only during the voiding phase"],
    a:0,
    exp:"IVU phases: nephrogram (parenchymal blush) 30–60 seconds post-injection as contrast fills the kidney tubules. Pyelogram phase (collecting system) 3–5 minutes. Full urogram (ureters/bladder) 5–15 minutes. Voiding cystogram at end.",
    oe:[
      "Correct. 30–60 seconds = nephrogram phase. The renal parenchyma enhances as contrast is filtered by the glomeruli and enters the tubules.",
      "5–7 minutes represents the early pyelogram/collecting system phase when contrast enters the renal pelvis and proximal ureters.",
      "15–20 minutes is the delayed phase when contrast fills the ureters and bladder — useful for demonstrating ureteral anatomy.",
      "The voiding phase (VCUG component) occurs at the very end — after the bladder is full — to show the urethra and assess vesicoureteral reflux."
    ]
  },

  { cat:"Procedures", sub:"Upper Extremity",
    q:"For the AP projection of the thumb, the hand is:",
    opts:["Placed flat on the IR with the thumb in neutral position","Hyperpronated (internally rotated) so the posterior surface of the thumb rests on the IR","Positioned lateral with the thumb pointing upward","Extended with the palm facing up and the thumb abducted"],
    a:1,
    exp:"AP thumb: the hand is hyperpronated (rotated internally). The dorsal surface of the thumb naturally contacts the IR, placing the thumb in true AP projection. All other fingers rest on the table beside the hand.",
    oe:[
      "Hand flat on the IR places the thumb in an oblique position — not true AP. The thumb would be rotated rather than face-on to the beam.",
      "Correct. Hyperpronation rotates the hand so the thumb dorsum is flat on the IR, giving a true AP projection of the thumb.",
      "Lateral thumb is achieved with the thumb pointing up on a foam wedge — not the technique for an AP projection.",
      "Palm facing up with abducted thumb places the thumb in an oblique or lateral orientation — not the true AP position."
    ]
  },

  { cat:"Procedures", sub:"Pelvis/Hip",
    q:"The axiolateral hip projection (Clements-Nakayama modification) is used when:",
    opts:["Routine frog-leg lateral is insufficient","The patient cannot abduct the hip due to suspected fracture or hip arthroplasty","Evaluating both hips simultaneously","Measuring femoral anteversion angle"],
    a:1,
    exp:"Clements-Nakayama (modified axiolateral): for patients who cannot move the injured leg — no abduction required. The IR is placed vertically against the hip, the CR is directed horizontally through the femoral neck from the medial thigh. Used for hip fractures and post-op hips.",
    oe:[
      "The frog-leg lateral requires hip abduction and external rotation — it can be done when those movements are possible. The Clements method is for when they cannot be done.",
      "Correct. Clements-Nakayama = no hip movement required. The IR and beam are set up around the immobile patient — critical for trauma and post-surgical cases.",
      "Simultaneous bilateral hip evaluation is done on the AP pelvis projection, not a lateral method.",
      "Femoral anteversion is measured by CT or specific ultrasound technique — not with a lateral hip radiograph."
    ]
  },

  { cat:"Procedures", sub:"Procedures",
    q:"A voiding cystourethrogram (VCUG) is used to evaluate all of the following EXCEPT:",
    opts:["Vesicoureteral reflux (VUR)","Urethral anatomy during voiding","Bladder capacity and shape","Renal parenchymal thickness"],
    a:3,
    exp:"VCUG: contrast is instilled into the bladder via catheter; images are taken during filling and voiding. Demonstrates bladder wall, vesicoureteral reflux, and urethra. It does NOT evaluate renal parenchyma — that requires IVU or US.",
    oe:[
      "VUR (contrast refluxing from bladder into ureters) is a primary indication for VCUG — best demonstrated during voiding when intravesical pressure peaks.",
      "Urethral anatomy (strictures, posterior urethral valves in males) is demonstrated during the voiding phase of the VCUG.",
      "Bladder capacity, shape, diverticula, and trabeculation are all demonstrated during the filling phase of the VCUG.",
      "Correct. Renal parenchyma is evaluated by IVU (nephrogram phase), ultrasound, CT, or MRI — not by VCUG, which only shows the bladder and urethra."
    ]
  },

  { cat:"Procedures", sub:"Procedures",
    q:"For radiographic examination of the paranasal sinuses, the patient must be:",
    opts:["Supine to allow fluid to pool and be visualized","Erect (upright) so air-fluid levels can be demonstrated","Prone to drain secretions before imaging","Lateral recumbent with affected side down"],
    a:1,
    exp:"All sinus projections must be performed ERECT. Gravity allows fluid to settle at the bottom of air-containing sinuses, creating visible air-fluid levels. Supine positioning eliminates air-fluid levels and misses significant pathology.",
    oe:[
      "Supine positioning causes fluid to distribute along the posterior sinus wall, obscuring air-fluid levels. Supine sinus films are non-diagnostic for fluid.",
      "Correct. Erect position + proper projections: Waters, Caldwell, lateral, and submentovertex (SMV). Upright is mandatory for air-fluid level demonstration.",
      "Prone positioning is used for some facial bone projections but is not used for sinus evaluation — it would also obscure air-fluid levels.",
      "Lateral recumbent is used for decubitus projections of the chest and abdomen — it has no role in standard sinus evaluation."
    ]
  },

  { cat:"Procedures", sub:"Procedures",
    q:"Ribs ABOVE the diaphragm (posterior ribs 1–9) are best demonstrated using:",
    opts:["AP projection at full expiration using low kVp","PA projection with the patient prone and full inspiration","AP projection using high kVp to penetrate the lung parenchyma","Oblique projections only, as AP ribs are always obscured by the lungs"],
    a:0,
    exp:"Upper posterior ribs (above diaphragm): AP projection, exposure made at full expiration. Expiration moves the diaphragm upward, projecting the posterior lower ribs above it. Low kVp (65–70) maximizes rib detail by increasing photoelectric absorption contrast.",
    oe:[
      "Correct. AP + expiration + low kVp for upper (above-diaphragm) ribs. Expiration elevates the diaphragm, positioning the lower posterior ribs in the lung field rather than below it.",
      "PA projection would show anterior ribs preferentially. Prone positioning with inspiration is not standard for rib radiography.",
      "High kVp reduces bone contrast by increasing Compton scatter proportionally. Low kVp is used specifically to enhance rib detail.",
      "Oblique rib projections are used to demonstrate the axillary portion of ribs (lateral ribs), not to avoid the AP projection. AP is always included in a rib series."
    ]
  },

  { cat:"Procedures", sub:"Procedures",
    q:"The RAO (right anterior oblique) position for the sternum is used because:",
    opts:["It demonstrates both sternoclavicular joints simultaneously","The sternum is projected off the spine and into the heart shadow, which serves as a uniform background","It shows the sternum in true lateral projection","It demonstrates the manubriosternal joint in profile"],
    a:1,
    exp:"RAO sternum: 15–20° RAO rotation. The sternum rotates to the left, projecting it over the homogeneous background of the cardiac shadow (which blocks scatter). The heart's uniform density makes the sternum easy to see. A perpendicular or lateral view alone is insufficient.",
    oe:[
      "Both sternoclavicular (SC) joints are demonstrated on an AP or PA projection of the SC joints, not the RAO sternum view.",
      "Correct. The RAO moves the sternum off the thoracic spine and positions it over the heart's uniform density. The cardiac shadow is an ideal background for demonstrating the sternum.",
      "A true lateral projection of the sternum is also taken as part of the sternum series, but it is a separate projection — not what the RAO achieves.",
      "The manubriosternal joint is visible on the lateral sternum projection, not specifically the RAO oblique view."
    ]
  },

  { cat:"Procedures", sub:"Pediatrics",
    q:"The Pigg-O-Stat immobilization device is used primarily for:",
    opts:["Pediatric hip and pelvis examinations","Pediatric chest radiography in infants and young children","Pediatric skull projections","Restraining pediatric extremity patients"],
    a:1,
    exp:"Pigg-O-Stat: a device that holds infant/toddler patients in an upright seated position within a clear acrylic tube. Used specifically for PA and lateral chest radiographs. It allows upright chest radiographs with diagnostic quality without radiation-exposed helpers.",
    oe:[
      "Hip and pelvis radiographs in pediatric patients use gonadal shielding and modified AP/frog-leg positioning — not the Pigg-O-Stat.",
      "Correct. Pigg-O-Stat = upright pediatric chest radiography. The clear plastic chair supports the child upright, arms elevated, in PA position.",
      "Pediatric skull projections are done on the table with sponge positioners and parental assistance — the Pigg-O-Stat is not designed for skull positioning.",
      "Extremity immobilization uses wrap bandages, foam positioning aids, or sandbags — not the Pigg-O-Stat, which is specific to chest radiography."
    ]
  },

  { cat:"Procedures", sub:"Trauma",
    q:"For a patient with a suspected hip fracture who cannot be moved, which projection allows assessment of the proximal femur without moving the hip?",
    opts:["Frog-leg lateral — abducting the hip 45°","AP pelvis with bilateral hips","Cross-table axiolateral hip (horizontal beam lateral)","PA oblique using a grid cassette"],
    a:2,
    exp:"Cross-table axiolateral hip: IR placed vertically against the lateral hip; horizontal beam passes from the medial thigh through the hip. NO movement of the injured leg required. This is the trauma lateral hip projection — essential for suspected femoral neck fractures.",
    oe:[
      "Frog-leg lateral requires 45° hip abduction and external rotation — CONTRAINDICATED with suspected hip fracture due to risk of displacing the fracture.",
      "AP pelvis shows both hips simultaneously but is an AP view — it does not show the hip in lateral projection, which is needed to assess fracture displacement.",
      "Correct. Cross-table axiolateral = no movement of the injured leg. Standard trauma protocol: AP pelvis + cross-table lateral of the affected hip.",
      "PA oblique is not a standard trauma hip projection. Oblique views are done after AP and lateral when additional information is needed."
    ]
  },

  { cat:"Procedures", sub:"Chest",
    q:"On a properly positioned PA chest radiograph, how many posterior ribs should be visible above the diaphragm?",
    opts:["6 posterior ribs","8 posterior ribs","10 posterior ribs","12 posterior ribs"],
    a:2,
    exp:"Adequate inspiration on a PA chest: 10 posterior ribs should be visible above the diaphragm. Fewer than 10 suggests poor inspiration (suboptimal), which artificially enlarges the heart and obscures basilar lung detail.",
    oe:[
      "6 posterior ribs above the diaphragm indicates very poor inspiration — the lungs are underinflated and the image is non-diagnostic for pulmonary assessment.",
      "8 posterior ribs represents a partial breath — below the minimum standard of 10. The image may be borderline acceptable.",
      "Correct. 10 posterior ribs above the diaphragm = adequate full inspiration. This is the standard teaching criterion for PA chest positioning.",
      "12 posterior ribs indicates a very deep inspiration — technically acceptable but uncommon in standard clinical practice."
    ]
  }

];
