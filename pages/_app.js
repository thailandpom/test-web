import React from 'react';
import LoadingBar from '../components/widget/LoadingBar';
import { GlobalDebug } from '../utils/debug';


const MyApp = (props) =>{
  const {Component,pageProps} = props;
	//Open/Close console.log for dev mode or production mode
  if (process.env.ENABLE_CONSOLE == 0) GlobalDebug(false);

  return (
	<>
		<LoadingBar />
		<Component {...pageProps} />
	</>
  )
}


export default MyApp;
