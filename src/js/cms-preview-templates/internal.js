import React from "react";
import format from "date-fns/format";

export default class InternalPreview extends React.Component {
  render() {
    const {entry, getAsset, widgetFor} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
      image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return <div>
      <div className="pv5 ph1 cover single-head" >
        <div className="single-head-background bg-center cover" style={{
          backgroundImage: image && `url(${image})`
        }}></div>
        <div className="single-head-text mw7 center">
          <h1 className="single-head-title">
          { entry.getIn(["data", "title"]) }
          </h1>
          <h6 className="single-head-subtitle">
          { entry.getIn(["data", "subtitle"]) }
          </h6>
        </div>
      </div>
      <div className="mw7 center ph3 pv4 internal-content">
        <div className="mw7 cms single-content">
          <div className="flex justify-between date-info">
            <h4 className="update-time-entry">The latest updates as of { format(entry.getIn(["data", "date"]), "ddd, MMM D, YYYY") } EDT</h4>
          </div>

          { widgetFor("body") }
        </div>
      </div>
    </div>;
  }
}

