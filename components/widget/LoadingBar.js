import Router from 'next/router';
import { useEffect,useRef } from 'react';
import LoadingLine from 'react-top-loading-bar';

const LoadingBar = () =>{
  // let loadBar;
  const loadBar = useRef(null)
  useEffect(()=>{
    const pageLoadStart = url => {

      if(loadBar.current)
      loadBar.current.continuousStart()
    }
    const pageLoadEnd = url => {
      if(loadBar.current)
      loadBar.current.complete()
    }
    Router.events.on('routeChangeStart', pageLoadStart)
    Router.events.on("routeChangeComplete", pageLoadEnd)
    return () => {
      Router.events.off('routeChangeStart', pageLoadStart)
      Router.events.off("routeChangeComplete", pageLoadEnd)
    }
  },[])

  return (
    <LoadingLine
      height={3}
      color='#FFBC42'
      ref={loadBar}
      className="test-bar"
    />
  )

}

export default LoadingBar