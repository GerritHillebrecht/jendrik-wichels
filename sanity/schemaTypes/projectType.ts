import { ImagesIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Projekte",
  type: "document",
  icon: ImagesIcon,
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "video",
      title: "Video URL (z.B. Vimeo)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail URL (z.B. Vimeo)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    // defineField({
    //   name: "image",
    //   type: "image",
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    defineField({
      name: "desc",
      title: "Beschreibung",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          title: "Block",
          type: "block",
          lists: [],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
      subtitle: "desc",
    },
  },
});
