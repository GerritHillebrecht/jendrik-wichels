// ./src/sanity/lib/queries.ts

import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`;

export const PROJECTS_QUERY = groq`*[_type == "project" && defined(slug.current)][0...12]{
  _id, title, slug, video
}`;

export const PROJECT_QUERY = groq`*[_type == "project" && slug.current == $slug][0]{
  title, desc, video
}`;
