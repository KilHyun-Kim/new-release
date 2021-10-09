import React from "react";
import { Mobile, Desktop } from "./mediaWrapper";

type Props = {
  mobile: React.FunctionComponent;
  desktop: React.FunctionComponent;
  props?: any;
};

export default function ResponsiveRender({
  mobile,
  desktop,
  props = {},
}: Props) {
  if (!!mobile && typeof mobile !== "function") {
    console.error("[ResponsiveRender] mobile prop is not function");
    return null;
  }
  if (!!desktop && typeof desktop !== "function") {
    console.error("[ResponsiveRender] desktop prop is not function");
    return null;
  }

  return (
    <div className="responsiveRender">
      <Mobile>{!!mobile ? mobile(props) : desktop(props)}</Mobile>
      <Desktop>{!!desktop ? desktop(props) : mobile(props)}</Desktop>
    </div>
  );
}
