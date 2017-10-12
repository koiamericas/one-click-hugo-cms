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
        <div className="main-banner" style={{
          backgroundImage: image && `url(${image})`
        }}>

            <p className="small top">
                { entry.getIn(["data", "title"]) }
            </p>

            <p className="big">
                { entry.getIn(["data", "heading"]) }
            </p>

            <p className="small hide-on-mobile">
                { entry.getIn(["data", "subHeading", "desktop"]) }
            </p>

            <p className="small show-mobile-only banner-mobile-copy">
                { entry.getIn(["data", "subHeading", "mobile"]) }
            </p>

            <a href="#" target="_blank">
                { entry.getIn(["data", "headerButton", "text"]) }
            </a>

            <p className="big bold">
                { entry.getIn(["data", "bigHeaderMessage"]) }
            </p>
            <img src="/img/icons/down-white-arrow.svg" className="down-white-arrow show-mobile-only"/>

        </div>
        <div className="message-container centered-box-content-all ">

        <p className="title">
            { entry.getIn(["data", "heroBanner", "title"]) }
        </p>

        <div id="izquiero-message" className="message">

            <p className="first-p">
            { entry.getIn(["data", "heroBanner", "first"]) }
            </p>

            <p>
            { entry.getIn(["data", "heroBanner", "paragraph"]) }
            </p>

            <p className="signature-name">
                { entry.getIn(["data", "heroBanner", "signatureName"]) }
            </p>

            <p className="signature-position">
                { entry.getIn(["data", "heroBanner", "signaturePosition"]) }
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

