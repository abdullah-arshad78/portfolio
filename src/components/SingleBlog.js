import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../sanityClient";
import SanityBlockContent from "@sanity/block-content-to-react";
const SingleBlog = () => {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current=="${slug}"]{
            title,
            _id,
            slug,
            mainImage{
              asset->{ 
                url
       }
    },
              body
 }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost)
    return (
      <div className="px-4 md:px-12 pt-[9rem] pb-[6rem]  about-background simple-text text-slate-600 text-xl min-h-[98vh] flex items-center justify-center">
        <h2 className="secondary-heading text-5xl text-center mb-6 md:mb-[3rem] text-zinc-600 move-up">
          Loading...
        </h2>
      </div>
    );

  return (
    <div className="px-4 md:px-12 pt-[9rem] pb-[6rem]  about-background simple-text text-slate-600 text-xl min-h-[98vh] flex flex-col items-center justify-start">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-green-50 flex flex-col justify-center shadow shadow-lg shadow-slate-300 rounded-lg move-up">
        <img
          src={singlePost.mainImage.asset.url}
          alt={singlePost.title}
          className="w-full h-[10rem] sm:h-[20rem] xl:h-[25rem] object-cover rounded-t-lg"
        />
        <div className="py-2 px-4 md:py-6 md:px-8 flex flex-col items-center justify-start">
          <h1 className="secondary-heading text-5xl text-center mb-6 md:mb-[3rem] text-zinc-600 move-up my-2">
            {singlePost.title}
          </h1>
          <SanityBlockContent
            blocks={singlePost.body}
            dataset="production"
            projectId="q6fw7y9s"
            className="small-bio-font leading-tight sm:leading-normal lg:leading-relaxed  m:text-basic md:text-xl prose prose-slate prose-img:rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
