import Image from 'next/image';

import { Meta } from '@/layout/Meta';
import banner from '@/public/assets/images/snap.png';
import { Main } from '@/templates/Main';

function Index() {
  return (
    <Main
      meta={
        <Meta
          title="🌊 Oceans 22 DAO 🌊"
          description="The Oceans 22 DAO Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <a href="https://github.com/Oceans-22">
        <Image
          alt="hello world"
          src={banner}
          layout="intrinsic"
          objectFit="cover"
          quality={100}
        />
      </a>
      <h1 className="text-2xl font-bold">
        Oceans 22 Boilerplate for Next.JS projects with Tailwind CSS &amp; Saas
        UI.
      </h1>
      <p>
        <span role="img" aria-label="ocean">
          🌊
        </span>{' '}
        Oceans 22 Boilerplate is a starter code for your Next js project by
        putting developer experience first .{' '}
        <span role="img" aria-label="zap">
          ⚡️
        </span>{' '}
        Made with Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged,
        VSCode, Netlify, PostCSS, Tailwind CSS and Saas UI.
      </p>
      <h2 className="text-lg font-semibold">Oceans 22 Boilerplate Features</h2>
      <p>Developer experience first:</p>
      <ul>
        <li>
          <span role="img" aria-label="fire">
            🔥
          </span>{' '}
          <a href="https://nextjs.org" rel="nofollow">
            Next.js
          </a>{' '}
          for Static Site Generator
        </li>
        <li>
          <span role="img" aria-label="art">
            🎨
          </span>{' '}
          Integrate with{' '}
          <a href="https://tailwindcss.com" rel="nofollow">
            Tailwind CSS
          </a>
        </li>
        <li>
          <span role="img" aria-label="art">
            🖥
          </span>{' '}
          Admin Dashboard with{' '}
          <a href="https://saas-ui.dev" rel="nofollow">
            Saas UI
          </a>
        </li>
        <li>
          <span role="img" aria-label="nail_care">
            💅
          </span>{' '}
          PostCSS for processing Tailwind CSS
        </li>
        <li>
          <span role="img" aria-label="tada">
            🎉
          </span>{' '}
          Type checking Typescript
        </li>
        <li>
          <span role="img" aria-label="pencil2">
            ✏️
          </span>{' '}
          Linter with{' '}
          <a href="https://eslint.org" rel="nofollow">
            ESLint
          </a>
        </li>
        <li>
          <span role="img" aria-label="hammer_and_wrench">
            🛠
          </span>{' '}
          Code Formatter with{' '}
          <a href="https://prettier.io" rel="nofollow">
            Prettier
          </a>
        </li>
        <li>
          <span role="img" aria-label="fox_face">
            🦊
          </span>{' '}
          Husky for Git Hooks
        </li>
        <li>
          <span role="img" aria-label="no_entry_sign">
            🚫
          </span>{' '}
          Lint-staged for running linters on Git staged files
        </li>
        <li>
          <span role="img" aria-label="no_entry_sign">
            🗂
          </span>{' '}
          VSCode configuration: Debug, Settings, Tasks and extension for
          PostCSS, ESLint, Prettier, TypeScript, and Saas UI.
        </li>
        <li>
          <span role="img" aria-label="robot">
            🤖
          </span>{' '}
          SEO metadata, JSON-LD and Open Graph tags with Next SEO
        </li>
        <li>
          <span role="img" aria-label="robot">
            ⚙️
          </span>{' '}
          <a
            href="https://www.npmjs.com/package/@next/bundle-analyzer"
            rel="nofollow"
          >
            Bundler Analyzer
          </a>
        </li>
        <li>
          <span role="img" aria-label="rainbow">
            🌈
          </span>{' '}
          Built with a Saas UI Theme
        </li>
        <li>
          <span role="img" aria-label="hundred">
            💯
          </span>{' '}
          Maximize lighthouse score
        </li>
      </ul>
      <p>Built-in feature from Next.js:</p>
      <ul>
        <li>
          <span role="img" aria-label="coffee">
            ☕
          </span>{' '}
          Minify HTML &amp; CSS
        </li>
        <li>
          <span role="img" aria-label="dash">
            💨
          </span>{' '}
          Live reload
        </li>
        <li>
          <span role="img" aria-label="white_check_mark">
            ✅
          </span>{' '}
          Cache busting
        </li>
      </ul>
      <h2 className="text-lg font-semibold">Our Starter code Philosophy</h2>
      <ul>
        <li>
          <span role="img" aria-label="iphone">
            📱
          </span>{' '}
          Mobile Optimized
        </li>
        <li>
          <span role="img" aria-label="floppydisk">
            💾
          </span>{' '}
          Minimal code
        </li>
        <li>
          <span role="img" aria-label="search">
            🔎
          </span>{' '}
          SEO-friendly
        </li>
        <li>
          <span role="img" aria-label="rocket">
            🚀
          </span>{' '}
          Production-ready
        </li>
      </ul>
      <p>
        Check our GitHub project for more information about our{' '}
        <a href="https://github.com/Oceans-22">Oceans 22 Boilerplate</a>. You
        can also browse our <a href="https://oceans22.org">Knowledgebase</a> on
        our website to support this project.
      </p>
    </Main>
  );
}

export default Index;
