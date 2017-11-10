import React from "react";
import format from "date-fns/format";

export default class OSJPreview extends React.Component {
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
        <div className="sites-table-container">
            <div className="table-top">
                <div className="half first">
                    <img src="/img/icons/hotel-grey.svg"/>
                    <p>
                        { entry.getIn(["data", "copy_table"]) }
                    </p>
                </div>
                <div className="half second">
                    <div className="update-time-row">
                        <p>
                            Updated on:
                        </p>
                        <div className="update-time">
                            { format(entry.getIn(["data", "date"]), "dddd MMM D, YY") }
                        </div>
                    </div>
                </div>
            </div>
            <div className="sites-table">
                <div className="site-row table-header">
                    <div className="name">
                        Name
                    </div>
                    <div className="type">
                        Status
                    </div>
                </div>
                {(entry.getIn(['data', 'sites']) || []).map((site, index) => 
                    <div className={'site-row listed ' + (site.get('open') ? 'open' : 'closed')} key={index}>
                        <div className="name">
                            {site.get('name')}
                        </div>
                        <div className="type">    
                            {site.get('type')}
                        </div>
                    </div>
                )}
            </div>
        </div>        
    </div>;
  }
}
