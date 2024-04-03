import { getPostData, getSortedPostsData } from "@/lib/posts";
import React from "react";
import { notFound } from "next/navigation";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getSortedPostsData(); //deduped!

  return posts.map((posts) => ({
    postId: posts.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData(); //deduped!
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData(); //deduped!
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl py-2 font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h1>
        <p className="text-base font-semibold leading-7 text-indigo-600">
          {pubDate}
        </p>
        <p className="mt-6 text-xl leading-8"></p>
        <div className="mt-10 max-w-2xl">
          <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </div>
    </div>
  );
}
