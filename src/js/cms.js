import React from "react";
import CMS from "netlify-cms";

import PostPreview from "./cms-preview-templates/post";
import ProductsPreview from "./cms-preview-templates/products";
import InternalPreview from "./cms-preview-templates/internal";

// Example of creating a custom color widget
class ColorControl extends React.Component {
  render() {
    return <input
        style={{height: "80px"}}
        type="color"
        value={this.props.value}
        onInput={(e) => this.props.onChange(e.target.value)}
    />;
  }
}
window.addEventListener("load", () => {
  const element = document.getElementsByClassName("rdt")[0].children[0];
  element.readOnly = true;
});

CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("products", ProductsPreview);
CMS.registerPreviewTemplate("ports", InternalPreview);
CMS.registerPreviewTemplate("airports", InternalPreview);
CMS.registerPreviewTemplate("hotels", InternalPreview);
CMS.registerWidget("color", ColorControl);
