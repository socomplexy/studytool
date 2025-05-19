const getHalfLifeAndDecayRate = ({ halfLife, multiplier }) => ({
  halfLife,
  halfLifeSecs: Math.round(halfLife * multiplier),
  decayRate: Math.round((Math.log(2) / halfLife) * multiplier),
});

export const decayRates = {
  hours: [
    // Multiplier is 3600 to convert hours to seconds
    {
      name: "dubnium-270",
      ...getHalfLifeAndDecayRate({ halfLife: 1, multiplier: 3600 }),
    },
    {
      name: "bismuth-212",
      ...getHalfLifeAndDecayRate({ halfLife: 1.0092, multiplier: 3600 }),
    },
    {
      name: "neptunium-240",
      ...getHalfLifeAndDecayRate({ halfLife: 1.032, multiplier: 3600 }),
    },
    {
      name: "actinium-229",
      ...getHalfLifeAndDecayRate({ halfLife: 1.045, multiplier: 3600 }),
    },
    {
      name: "curium-249",
      ...getHalfLifeAndDecayRate({ halfLife: 1.0692, multiplier: 3600 }),
    },
    {
      name: "lead-204m2",
      ...getHalfLifeAndDecayRate({ halfLife: 1.12, multiplier: 3600 }),
    },
    {
      name: "gallium-68",
      ...getHalfLifeAndDecayRate({ halfLife: 1.1285, multiplier: 3600 }),
    },
    {
      name: "americium-237",
      ...getHalfLifeAndDecayRate({ halfLife: 1.22, multiplier: 3600 }),
    },
    {
      name: "mendelevium-256",
      ...getHalfLifeAndDecayRate({ halfLife: 1.283, multiplier: 3600 }),
    },
    {
      name: "rutherfordium-267",
      ...getHalfLifeAndDecayRate({ halfLife: 1.3, multiplier: 3600 }),
    },
    {
      name: "dubnium-266",
      ...getHalfLifeAndDecayRate({ halfLife: 1.33, multiplier: 3600 }),
    },
    {
      name: "californium-255",
      ...getHalfLifeAndDecayRate({ halfLife: 1.417, multiplier: 3600 }),
    },
    {
      name: "lead-199",
      ...getHalfLifeAndDecayRate({ halfLife: 1.5, multiplier: 3600 }),
    },
    {
      name: "radium-230",
      ...getHalfLifeAndDecayRate({ halfLife: 1.55, multiplier: 3600 }),
    },
    {
      name: "mendelevium-259",
      ...getHalfLifeAndDecayRate({ halfLife: 1.6, multiplier: 3600 }),
    },
    {
      name: "americium-238",
      ...getHalfLifeAndDecayRate({ halfLife: 1.63, multiplier: 3600 }),
    },
    {
      name: "astatine-208",
      ...getHalfLifeAndDecayRate({ halfLife: 1.63, multiplier: 3600 }),
    },
    {
      name: "polonium-205",
      ...getHalfLifeAndDecayRate({ halfLife: 1.66, multiplier: 3600 }),
    },
    {
      name: "einsteinium-249",
      ...getHalfLifeAndDecayRate({ halfLife: 1.703, multiplier: 3600 }),
    },
    {
      name: "bismuth-202",
      ...getHalfLifeAndDecayRate({ halfLife: 1.72, multiplier: 3600 }),
    },
    {
      name: "astatine-207",
      ...getHalfLifeAndDecayRate({ halfLife: 1.8, multiplier: 3600 }),
    },
    {
      name: "bismuth-201",
      ...getHalfLifeAndDecayRate({ halfLife: 1.8, multiplier: 3600 }),
    },
    {
      name: "protactinium-239",
      ...getHalfLifeAndDecayRate({ halfLife: 1.8, multiplier: 3600 }),
    },
    {
      name: "fluorine-18",
      ...getHalfLifeAndDecayRate({ halfLife: 1.8295, multiplier: 3600 }),
    },
    {
      name: "americium-245",
      ...getHalfLifeAndDecayRate({ halfLife: 2.05, multiplier: 3600 }),
    },
    {
      name: "einsteinium-250m",
      ...getHalfLifeAndDecayRate({ halfLife: 2.22, multiplier: 3600 }),
    },
    {
      name: "radon-210",
      ...getHalfLifeAndDecayRate({ halfLife: 2.4, multiplier: 3600 }),
    },
    {
      name: "lead-198",
      ...getHalfLifeAndDecayRate({ halfLife: 2.4, multiplier: 3600 }),
    },
    {
      name: "curium-238",
      ...getHalfLifeAndDecayRate({ halfLife: 2.4, multiplier: 3600 }),
    },
    {
      name: "curium-239",
      ...getHalfLifeAndDecayRate({ halfLife: 2.5, multiplier: 3600 }),
    },
    {
      name: "fermium-256",
      ...getHalfLifeAndDecayRate({ halfLife: 2.627, multiplier: 3600 }),
    },
    {
      name: "yttrium-85",
      ...getHalfLifeAndDecayRate({ halfLife: 2.68, multiplier: 3600 }),
    },
    {
      name: "actinium-224",
      ...getHalfLifeAndDecayRate({ halfLife: 2.78, multiplier: 3600 }),
    },
    {
      name: "californium-247",
      ...getHalfLifeAndDecayRate({ halfLife: 3.11, multiplier: 3600 }),
    },
    {
      name: "berkelium-250",
      ...getHalfLifeAndDecayRate({ halfLife: 3.212, multiplier: 3600 }),
    },
    {
      name: "fermium-254",
      ...getHalfLifeAndDecayRate({ halfLife: 3.24, multiplier: 3600 }),
    },
    {
      name: "lead-209",
      ...getHalfLifeAndDecayRate({ halfLife: 3.253, multiplier: 3600 }),
    },
    {
      name: "lead-202m1",
      ...getHalfLifeAndDecayRate({ halfLife: 3.53, multiplier: 3600 }),
    },
    {
      name: "polonium-204",
      ...getHalfLifeAndDecayRate({ halfLife: 3.53, multiplier: 3600 }),
    },
    {
      name: "lawrencium-262",
      ...getHalfLifeAndDecayRate({ halfLife: 3.6, multiplier: 3600 }),
    },
    {
      name: "berkelium-244",
      ...getHalfLifeAndDecayRate({ halfLife: 4.35, multiplier: 3600 }),
    },
    {
      name: "berkelium-243",
      ...getHalfLifeAndDecayRate({ halfLife: 4.5, multiplier: 3600 }),
    },
    {
      name: "dubnium-267",
      ...getHalfLifeAndDecayRate({ halfLife: 4.6, multiplier: 3600 }),
    },
    {
      name: "plutonium-243",
      ...getHalfLifeAndDecayRate({ halfLife: 4.956, multiplier: 3600 }),
    },
    {
      name: "fermium-251",
      ...getHalfLifeAndDecayRate({ halfLife: 5.3, multiplier: 3600 }),
    },
    {
      name: "polonium-207",
      ...getHalfLifeAndDecayRate({ halfLife: 5.8, multiplier: 3600 }),
    },
    {
      name: "astatine-209",
      ...getHalfLifeAndDecayRate({ halfLife: 5.41, multiplier: 3600 }),
    },
    {
      name: "mendelevium-257",
      ...getHalfLifeAndDecayRate({ halfLife: 5.52, multiplier: 3600 }),
    },
    {
      name: "actinium-228",
      ...getHalfLifeAndDecayRate({ halfLife: 6.13, multiplier: 3600 }),
    },
    {
      name: "dysprosium-153",
      ...getHalfLifeAndDecayRate({ halfLife: 6.4, multiplier: 3600 }),
    },
    {
      name: "protactinium-234",
      ...getHalfLifeAndDecayRate({ halfLife: 6.7, multiplier: 3600 }),
    },
    {
      name: "astatine-211",
      ...getHalfLifeAndDecayRate({ halfLife: 7.214, multiplier: 3600 }),
    },
    {
      name: "einsteinium-256m",
      ...getHalfLifeAndDecayRate({ halfLife: 7.6, multiplier: 3600 }),
    },
    {
      name: "astatine-210",
      ...getHalfLifeAndDecayRate({ halfLife: 8.1, multiplier: 3600 }),
    },
    {
      name: "einsteinium-250",
      ...getHalfLifeAndDecayRate({ halfLife: 8.6, multiplier: 3600 }),
    },
    {
      name: "plutonium-234",
      ...getHalfLifeAndDecayRate({ halfLife: 8.8, multiplier: 3600 }),
    },
    {
      name: "lead-201",
      ...getHalfLifeAndDecayRate({ halfLife: 9.33, multiplier: 3600 }),
    },
    {
      name: "americium-244",
      ...getHalfLifeAndDecayRate({ halfLife: 10.1, multiplier: 3600 }),
    },
    {
      name: "erbium-165",
      ...getHalfLifeAndDecayRate({ halfLife: 10.36, multiplier: 3600 }),
    },
    {
      name: "plutonium-245",
      ...getHalfLifeAndDecayRate({ halfLife: 10.5, multiplier: 3600 }),
    },
    {
      name: "lead-212",
      ...getHalfLifeAndDecayRate({ halfLife: 10.64, multiplier: 3600 }),
    },
    {
      name: "lawrencium-266",
      ...getHalfLifeAndDecayRate({ halfLife: 11, multiplier: 3600 }),
    },
    {
      name: "bismuth-204",
      ...getHalfLifeAndDecayRate({ halfLife: 11.22, multiplier: 3600 }),
    },
    {
      name: "bismuth-203",
      ...getHalfLifeAndDecayRate({ halfLife: 11.76, multiplier: 3600 }),
    },
    {
      name: "americium-239",
      ...getHalfLifeAndDecayRate({ halfLife: 11.9, multiplier: 3600 }),
    },
    {
      name: "uranium-240",
      ...getHalfLifeAndDecayRate({ halfLife: 14.1, multiplier: 3600 }),
    },
    {
      name: "radon-211",
      ...getHalfLifeAndDecayRate({ halfLife: 14.6, multiplier: 3600 }),
    },
    {
      name: "sodium-24",
      ...getHalfLifeAndDecayRate({ halfLife: 14.96, multiplier: 3600 }),
    },
    {
      name: "americium-242",
      ...getHalfLifeAndDecayRate({ halfLife: 16.02, multiplier: 3600 }),
    },
    {
      name: "fermium-255",
      ...getHalfLifeAndDecayRate({ halfLife: 20.07, multiplier: 3600 }),
    },
    {
      name: "lead-200",
      ...getHalfLifeAndDecayRate({ halfLife: 21.5, multiplier: 3600 }),
    },
    {
      name: "protactinium-228",
      ...getHalfLifeAndDecayRate({ halfLife: 22, multiplier: 3600 }),
    },
    {
      name: "neptunium-236m",
      ...getHalfLifeAndDecayRate({ halfLife: 22.5, multiplier: 3600 }),
    },
    {
      name: "berkelium-248m",
      ...getHalfLifeAndDecayRate({ halfLife: 23.7, multiplier: 3600 }),
    },
  ],
};
