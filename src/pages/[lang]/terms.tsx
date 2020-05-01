/** @jsx jsx */
import { jsx } from '@emotion/core';
import { createLogger } from '@unly/utils-simple-logger';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
// eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
import React from 'react';
import I18nLink from '../../components/I18nLink';
import { StaticParams } from '../../types/StaticParams';
import { StaticProps } from '../../types/StaticProps';

const fileLabel = 'pages/terms';
const logger = createLogger({ // eslint-disable-line no-unused-vars,@typescript-eslint/no-unused-vars
  label: fileLabel,
});

export const getStaticProps: GetStaticProps<StaticProps, StaticParams> = async (props) => {
  console.log('getStaticProps', props);
  return {
    props: {
      lang: props?.params?.lang,
      isStaticRendering: true,
    },
    // unstable_revalidate: false,
  };
};

export const getStaticPaths: GetStaticPaths<StaticParams> = async () => {
  return {
    paths: [{ params: { lang: 'fr' } }, { params: { lang: 'en' } }],
    fallback: false,
  };
};

type Props = {
  lang: string;
  isStaticRendering: boolean;
};

const Terms: NextPage<Props> = (props): JSX.Element => {
  const { lang } = props;
  console.log('Terms props', props);
  console.log('lang', lang);

  return (
    <div>
      <h1>{lang}</h1>

      <I18nLink
        lang={lang}
        href={'/'}
        passHref
      >
        <a>Index</a>
      </I18nLink>
    </div>
  );
};

export default Terms;
