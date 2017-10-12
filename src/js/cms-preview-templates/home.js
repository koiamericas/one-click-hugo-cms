import React from "react";
// import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
      image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return <div>
      <div className="message-container centered-box-content-all ">

        <p className="title">
            Message from the Executive Director
        </p>

        <div id="izquiero-message" className="message show-less">

            <p className="first-p">
            { entry.getIn(["data", "first"]) }
            </p>

            <p>
            { entry.getIn(["data", "paragraph"]) }
            </p>

            <p className="signature-name">
                Jose Izquierdo
            </p>

            <p className="signature-position">
                Executive Director of the Puerto Rico Tourism Company
            </p>

        </div>

        <div id="show-more-btn" className="show-more-btn show-mobile-only">

            <div className="text">
                Keep reading
            </div>

            <img src="/img/icons/down-white-arrow.svg" className="down-white-arrow show-mobile-only"/>

        </div>

    </div>
  </div>;
  }
}

