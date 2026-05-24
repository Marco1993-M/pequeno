import Link from "next/link";

import { buyerIntentArticles } from "@/data/buyerIntentArticles";

export default function BuyerIntentCluster({
  currentHref,
  title = "Explore more planning guides",
  intro = "These articles cover the questions buyers usually ask before they commit to a building system, budget, or site strategy.",
}) {
  const relatedArticles = buyerIntentArticles.filter(
    (article) => article.href !== currentHref,
  );

  return (
    <section className="mt-16 rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm md:p-10">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c45734]">
          Planning Guides
        </p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight text-gray-900 md:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">{intro}</p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {relatedArticles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="rounded-[2rem] bg-[#f7f2ec] p-6 transition hover:-translate-y-0.5 hover:bg-[#efe6dc]"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-gray-500">
              {article.category}
            </p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight text-gray-900">
              {article.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-gray-700">
              {article.description}
            </p>
            <p className="mt-6 text-sm font-medium text-[#ff5c36]">
              Read guide →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
