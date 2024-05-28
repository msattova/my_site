import { z, defineCollection } from "astro:content"
import { ElementTypes } from "@modules/elementTypes";
import { SectionTypes } from "@modules/sectionTypes";


const sectionTypeEnum = z.enum(
  [
    SectionTypes.normal,
    SectionTypes.preplay,
    SectionTypes.appendix
  ]);
type sectionTypeEnum = z.infer<typeof sectionTypeEnum>;


const message = z.object({
        type: z.string(),
        tabNum: z.string(),
        name: z.string(),
        color: z.string(),
        timestamp: z.string(),
        content: z.string()
      });

const still = z.object({
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

const timeline = z.object({
  type: z.string(),
  data: z.array(z.object({
    period: z.string(),
    summary: z.string().optional(),
    content: z.array(z.string())
  })),
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
    guardPoint: z.string().optional(),
    dex: z.string(),
    agi: z.string(),
    mus: z.string(),
    vit: z.string(),
    int: z.string(),
    mnd: z.string(),
    addDex: z.string().optional(),
    addAgi: z.string().optional(),
    addMus: z.string().optional(),
    addVit: z.string().optional(),
    addInt: z.string().optional(),
    addMnd: z.string().optional(),
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
    sectionType: z.enum(["normal", "preplay", "appendix"]).optional(),
    charaData: z.array(z.string()).optional(),
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
        copyright: z.object({
          name: z.string(),
          link: z.string().url()
        }).optional()
      })).or(z.any())
    }))
  })
});

export const collections = {
  sessionLog: sessionLogCollection,
  sessionData: sessionDataCollection,
  pcData: pcDataCollection
};

