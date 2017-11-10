import React from "react";
import CMS from "netlify-cms";

import PostPreview from "./cms-preview-templates/post";
import ProductsPreview from "./cms-preview-templates/products";
import InternalPreview from "./cms-preview-templates/internal";
import HotelsPreview from "./cms-preview-templates/hotels";
import HomePreview from "./cms-preview-templates/home";

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

CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("products", ProductsPreview);
CMS.registerPreviewTemplate("ports", InternalPreview);
CMS.registerPreviewTemplate("airports", InternalPreview);
CMS.registerPreviewTemplate("hotels", HotelsPreview);
CMS.registerPreviewTemplate("osj", OSJPreview);
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerWidget("color", ColorControl);
