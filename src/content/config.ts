import { z, defineCollection } from "astro:content"

const message = z.object({
        type: z.string(),
        tabNum: z.string(),
        name: z.string(),
        color: z.string(),
        timestamp: z.string(),
        content: z.string()
      });

const sill = z.object({
  type: z.string(),
  imageSrc: z.string(),
  alt: z.string(),
  caption: z.string(),
  isPortrait: z.boolean()
});

const request = z.object({
  type: z.string(),
  title: z.string(),
  content: z.array(z.string()),
});

const note = z.object({
  type: z.string(),
  title: z.string(),
  content: z.array(z.string()),
});

const unitData = z.object({
  type: z.string(),
  dataSrc: z.string(),
});


const pcDataCollection = defineCollection({
  type: "data",
  schema: z.object({
    race: z.string(),
    advLv: z.string(),
    pcName: z.string(),
    HP: z.string(),
    MP: z.string(),
    resistVit: z.string(),
    resistMnd: z.string(),
    movePoint: z.string(),
    guardPoint: z.string().or(z.void()),
    dex: z.string(),
    agi: z.string(),
    mus: z.string(),
    vit: z.string(),
    int: z.string(),
    mnd: z.string(),
    addDex: z.string().or(z.void()),
    addAgi: z.string().or(z.void()),
    addMus: z.string().or(z.void()),
    addVit: z.string().or(z.void()),
    addInt: z.string().or(z.void()),
    addMnd: z.string().or(z.void()),
    dexB: z.string(),
    agiB: z.string(),
    musB: z.string(),
    vitB: z.string(),
    intB: z.string(),
    mndB: z.string(),
    skillData: z.array(z.object({
      name: z.string(),
      lv: z.string(),
    })),
    description: z.string()
  }),
});

const sessionLogCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    sectionNum: z.number(),
    isPreplay: z.boolean().or(z.void()),
    charaData: z.array(z.string()).or(z.void()),
    data: z.array(
      z.any()
    )
  }),
});

const sessionDataCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    url: z.string(),
    siteDescription: z.string(),
    siteName: z.string(),
    rights: z.string(),
    participants: z.array(z.object({
      name: z.string(),
      color: z.string(),
      role: z.string(),
      charactor: z.array(z.object({
        name: z.string(),
        characterSheet: z.string().url(),
        imageSrc: z.string(),
        copyright: z.union([z.void(), z.object({
          name: z.string(),
          link: z.string().url()
        })])
      })).or(z.any())
    }))
  })
});

export const collections = {
  sessionLog: sessionLogCollection,
  sessionData: sessionDataCollection,
  pcData: pcDataCollection
};

