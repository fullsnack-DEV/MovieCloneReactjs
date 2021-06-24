import { useCallback, useEffect, useState } from "react";

export const useMedia = (queries = [], values = [], defaluvalues) => {
  //create a Media Query List

  const MediaQueryList = queries.map((q) => window.matchMedia(q));
  // console.log(MediaQueryList);

  //get value func
  //Wrapping with usecallback to Prevent unecessary render
  const getvalue = useCallback(() => {
    const index = MediaQueryList.findIndex((mql) => mql.matches);
    // console.log(index);
    // console.log("Thisis tva;", values[index]);
    return typeof values[index] !== "undefined" ? values[index] : defaluvalues;
  }, [MediaQueryList, values, defaluvalues]);

  //console.log(getvalue());

  const [value, setValue] = useState(getvalue);

  //side effect

  useEffect(() => {
    const handler = () => setValue(getvalue);
    MediaQueryList.forEach((mql) => mql.addListener(handler));

    //Cleanup
    return () => MediaQueryList.forEach((mql) => mql.removeListener(handler));
  }, [getvalue, MediaQueryList]);

  return value;
};
