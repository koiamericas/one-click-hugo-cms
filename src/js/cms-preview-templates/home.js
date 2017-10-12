import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset, widgetFor} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
      image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return <div>
      <div class="message-container centered-box-content-all ">

        <p class="title">
            Message from the Executive Director
        </p>

        <div id="izquiero-message" class="message show-less">

            <p class="first-p">
            { entry.getIn(["data", "first"]) }
            </p>

            <p>
            { entry.getIn(["data", "paragraph"]) }
            </p>

            <p class="signature-name">
                Jose Izquierdo
            </p>

            <p class="signature-position">
                Executive Director of the Puerto Rico Tourism Company
            </p>

        </div>

        <div id="show-more-btn" class="show-more-btn show-mobile-only">

            <div class="text">
                Keep reading
            </div>

            <img src="/img/icons/down-white-arrow.svg" class="down-white-arrow show-mobile-only"/>

        </div>

    </div>
  </div>;
  }
}

