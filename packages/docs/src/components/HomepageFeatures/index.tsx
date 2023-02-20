import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  img: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    img: require("@site/static/img/easy-to-use.jpeg").default,
    description: (
      <>
        SetApp Cli was designed from the ground up to be easily used to generate
        React sites and with a template full included with one command.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    img: require("@site/static/img/focus.jpeg").default,
    description: (
      <>
        SetApp lets you focus on your apps, and we&apos;ll do the Initial Setup
        and CI/CD tasks related. Go ahead and have a happy coding.
      </>
    ),
  },
  {
    title: "Powered by Standard Common tools",
    img: require("@site/static/img/tools.webp").default,
    description: (
      <>
        Create your website by using preconfiugred tools: Vite, Github Actions,
        React and a bunch more. It&apos;s all ready for you.
      </>
    ),
  },
];

function Feature({ title, img, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} src={img} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
