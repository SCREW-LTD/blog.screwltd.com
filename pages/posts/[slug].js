import { getGlobalData } from '../../utils/global-data';
import {
  getNextPostBySlug,
  getPostBySlug,
  getPreviousPostBySlug,
  postFilePaths,
} from '../../utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import ArrowIcon from '../../components/ArrowIcon';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Head,
};

export default function PostPage({
  source,
  frontMatter,
  prevPost,
  nextPost,
  globalData,
}) {
  return (
    <Layout>
      <SEO
        title={`${frontMatter.title} - ${globalData.name}`}
        description={frontMatter.description}
      />
      <Header name={globalData.name} />
      <article className="px-6 md:px-0">
        <header>
          <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-3">
            {frontMatter.title}
          </h1>
          {frontMatter.tag && (
            <center>
              <div className="align-middle rounded-full w-max px-2 mt-2 backdrop-blur-lg bg-white dark:bg-purple-500 dark:bg-opacity-40 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 md:border-r-1">
                <p className='text-sm font-sans font-thin'>{frontMatter.tag}</p>
              </div>
            </center>
          )}
          <div className='mb-3' />
          {frontMatter.description && (
            <p className="text-xl mb-4">{frontMatter.description}</p>
          )}
        </header>
        <main>
          <article className="prose dark:prose-dark">
            <MDXRemote {...source} components={components} />
          </article>
        </main>
        {frontMatter.developer && (
          <div className='mt-4 whitespace-nowrap'>
            <a href={'https://' + frontMatter.developer + ".screwltd.com/"}>
              <div className="inline cursor-pointer rounded-lg w-max py-3.5 px-2 mt-2 backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 md:border-r-1">
                <p className="cursor-pointer center-text text-l pb-1 font-medium"><img className='cursor-pointer center-text w-9 h-9 rounded-full' src={"https://cdn.screwltd.com/developers/" + frontMatter.developer + ".png"} />&nbsp;&nbsp;{frontMatter.developer}&nbsp;</p>
              </div>
            </a>

            {frontMatter.developer2 && (
              <div className='inline whitespace-nowrap'>
                &nbsp;&nbsp;&nbsp;
                <a href={'https://' + frontMatter.developer2 + ".screwltd.com/"}>
                  <div className="inline cursor-pointer rounded-lg w-max py-3.5 px-2 mt-2 backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 md:border-r-1">
                    <p className="cursor-pointer center-text text-l pb-1 font-medium"><img className='cursor-pointer center-text w-9 h-9 rounded-full' src={"https://cdn.screwltd.com/developers/" + frontMatter.developer2 + ".png"} />&nbsp;&nbsp;{frontMatter.developer2}&nbsp;</p>
                  </div>
                </a>
              </div>
            )}

            {frontMatter.support && (
              <div className='inline whitespace-nowrap'>
                &nbsp;&nbsp;&nbsp;
                {frontMatter.title == 'REMNANT' && (
                  <a href='https://pages.donately.com/screwltd/campaign/remnant-7bbc8c108f5e'>
                    <div className="inline cursor-pointer rounded-full py-2.5 px-2 mt-2 backdrop-blur-lg bg-white dark:bg-purple-500 dark:bg-opacity-40 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 md:border-r-1">
                      <img src='https://cdn.screwltd.com/blog/bank.png' className='w-7 h-7 inline pr-0.5 pl-0.5 pb-1 mb-0' />
                    </div>
                  </a>
                )}
              </div>
            )}
          </div>
        )}
        <div className="grid mt-6 md:grid-cols-2 lg:-mx-24 ">
          {prevPost && (
            <Link href={`/posts/${prevPost.slug}`}>
              <a className="py-8 px-10 text-center md:text-right first:rounded-t-lg md:first:rounded-tr-none md:first:rounded-l-lg last:rounded-r-lg first last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-t md:border-r-0 md:last:border-r md:last:rounded-r-none flex flex-col">
                <p className="uppercase text-gray-500 mb-4 dark:text-white dark:opacity-60">
                  Previous
                </p>
                <h4 className="text-2xl text-gray-700 mb-6 dark:text-white">
                  {prevPost.title}
                </h4>
                <ArrowIcon className="transform rotate-180 mx-auto md:mr-0 mt-auto" />
              </a>
            </Link>
          )}
          {nextPost && (
            <Link href={`/posts/${nextPost.slug}`}>
              <a className="py-8 px-10 text-center md:text-left md:first:rounded-t-lg last:rounded-b-lg first:rounded-l-lg md:last:rounded-bl-none md:last:rounded-r-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-t-0 first:border-t first:rounded-t-lg md:border-t border-b-0 last:border-b flex flex-col">
                <p className="uppercase text-gray-500 mb-4 dark:text-white dark:opacity-60">
                  Next
                </p>
                <h4 className="text-2xl text-gray-700 mb-6 dark:text-white">
                  {nextPost.title}
                </h4>
                <ArrowIcon className="mt-auto mx-auto md:ml-0" />
              </a>
            </Link>
          )}
        </div>
      </article>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
      <style jsx>{`
        .center-text {
          vertical-align: middle;
          display: inline;
          position: relative;
          top: -0.5px;
        },
        .dev-block {
          height: 20px;
          width: 20px;
        },
        .developers
        {
          display: inline;
        }
      `}</style>

    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const globalData = getGlobalData();
  const { mdxSource, data } = await getPostBySlug(params.slug);
  const prevPost = getPreviousPostBySlug(params.slug);
  const nextPost = getNextPostBySlug(params.slug);

  return {
    props: {
      globalData,
      source: mdxSource,
      frontMatter: data,
      prevPost,
      nextPost,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
