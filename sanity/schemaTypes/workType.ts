import { EarthAmericasIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const workType = defineType({
  name: "work",
  title: "Work",
  type: "document",
  icon: EarthAmericasIcon,
  fields: [
    defineField({
      name: "jobtitle",
      title: "Job Title",
      description: "The title of the job",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "jobtitle",
      },
    }),
    defineField({
      name: "employer",
      title: "Arbeitgeber",
      type: "string",
    }),
    defineField({
      name: "employerLogo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
    defineField({
      name: "location",
      title: "Ort",
      type: "string",
    }),
    defineField({
      name: "date",
      title: "Zeitraum",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Ressource-Link",
      description: "Webseite des Arbeitgebers, des Videos, etc.",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "jobtitle",
      employer: "employer",
      date: "date",
      location: "location",
      media: "employerLogo",
    },
    prepare(selection) {
      const { employer, location, title, date, media } = selection;
      return {
        ...selection,
        title: `${title} at ${employer}`,
        subtitle: `${date} | ${location}`,
      };
    },
  },
});
