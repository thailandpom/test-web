import Head from 'next/head';
import React, { memo } from 'react';
import api from '../../utils/api';

const Layout = memo((props) => {
  const {
    title,
    children,
    loading
  } = props;

  return (
    <>

      <Head>
        <title>{title ? title : 'Test App'}</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="Cache-Control" content="no-cache" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />

        <link async rel="stylesheet" type="text/css" href={`${api.frontend_url}/fonts/stylesheet.css`}/>
        <link async rel="stylesheet" type="text/css" href={`${api.frontend_url}/css/bootstrap.css`}/>
        <link async rel="stylesheet" type="text/css" href={`${api.frontend_url}/css/style.css`}/>
        <link async rel="stylesheet" type="text/css" href={`${api.frontend_url}/css/style_responsive.css`}/>
        <link async rel="stylesheet" type="text/css" href={`${api.frontend_url}/css/style_laptop.css`}/>
        <link async rel="stylesheet" type="text/css" href={`${api.frontend_url}/css/style_mobile.css`}/>

      </Head>

      <div className="main-layout">
        {children}
      </div>

    </>
  );
});

export default Layout;
