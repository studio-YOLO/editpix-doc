import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/features/undraw_proud_coder.svg').default,
    description: (
      <>
        EditPix was designed to be simple to use and obtain the desired result in a few simple steps.
      </>
    ),
  },
  {
    title: 'Works directly in the browser',
    Svg: require('@site/static/img/features/undraw_website_setup.svg').default,
    description: (
      <>
        EditPix does not require the use of Node.js, making the library easy to integrate into your front-end.
      </>
    ),
  },
  {
    title: 'Usable with Vue and React',
    Svg: require('@site/static/img/features/undraw_javascript_frameworks.svg').default,
    description: (
      <>
        You can use EditPix with most front-end frameworks, including Vue and React.
      </>
    ),
  },
];




function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
