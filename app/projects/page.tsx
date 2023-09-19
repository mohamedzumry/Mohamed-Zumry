import React from "react";
import { client } from "../lib/sanity";
import Image from "next/image";

interface Data {
  _id: string;
  title: string;
  overview: string;
  imageUrl: string;
  link: string;
}

async function getProjects() {
  const query = `*[_type == "project"]{
    _id,
    title,
    overview,
    "imageUrl": image.asset->url,
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Projects() {
  const data: Data[] = await getProjects();
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          All projects
        </h1>
      </div>

      <div className="grid gap-4 sm:grid-cols-2  md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
        {data.map((project) => (
          <article
            key={project._id}
            className="overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-gray-700 shadow-teal-100"
          >
            <div className="h-56 w-full relative">
              <Image fill src={project.imageUrl} alt="Image of the project" className="w-full h-full object-cover"/>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
