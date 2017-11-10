import React from "react";
import format from "date-fns/format";

export default class HotelsPreview extends React.Component {
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
        <div className="hotels-table-container">
            <div className="table-top">
                <div className="half first">
                    <img src="/img/icons/hotel-grey.svg"/>
                    <p>
                        { entry.getIn(["data", "tablecopy"]) }
                    </p>
                </div>
                <div className="half second">
                    <div className="buttons-container">
                        <p>
                            Show
                        </p>
                        <div className="buttons-row">
                            <div className="filter-button">
                                Open
                            </div>
                            <div className="filter-button">
                                Closed
                            </div>
                            <div className="filter-button selected">
                                All
                            </div>
                        </div>
                    </div>
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
            <div className="hotels-table">
                <div className="hotel-row table-header">
                    <div className="name">
                        Hotel Name
                    </div>
                    <div className="status">
                        Status
                    </div>
                    <div className="date">
                        Next Reservation
                    </div>
                    <div className="more-info">
                        More info
                    </div>
                </div>
                {(entry.getIn(['data', 'hotels']) || []).map((hotel, index) => 
                    <div className={'hotel-row listed ' + (hotel.get('open') ? 'open' : 'closed')} key={index}>
                        <div className="name">
                            {hotel.get('name')}
                        </div>
                        <div className="status">    
                            {hotel.get('open') ? 'Open' : 'Closed'}
                        </div>
                        <div className="date">
                            {hotel.get('date')}
                        </div>
                        <div className="phone hidden">
                            {hotel.get('phone')}
                        </div>
                        <div className="view-info down"></div>
                        <div className="more-info collapsed">
                            <div className="date">
                                {hotel.get('date')}
                            </div>
                            <div className="phone hidden">
                                {hotel.get('phone')}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>        
    </div>;
  }
}
