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
        <div class="hotels-table-container">
            <div class="table-top">
                <div class="half first">
                    <img src="/img/icons/hotel-grey.svg"/>
                    <p>
                        Here is the operating status of over 100 hotels in Puerto Rico, including the date by which they're accepting reservations.
                    </p>
                </div>
                <div class="half second">
                    <div class="buttons-container">
                        <p>
                            Show
                        </p>
                        <div class="buttons-row">
                            <div class="filter-button">
                                Open
                            </div>
                            <div class="filter-button">
                                Closed
                            </div>
                            <div class="filter-button selected">
                                All
                            </div>
                        </div>
                    </div>
                    <div class="update-time-row">
                        <p>
                            Updated on:
                        </p>
                        <div class="update-time">
                            { format(entry.getIn(["data", "date"]), "dddd MMM D, YY") }
                        </div>
                    </div>
                </div>
            </div>
            <div class="hotels-table">
                <div class="hotel-row table-header">
                    <div class="name">
                        Hotel Name
                    </div>
                    <div class="status">
                        Status
                    </div>
                    <div class="date">
                        Next Reservation
                    </div>
                    <div class="more-info">
                        More info
                    </div>
                </div>
                {(entry.getIn(['data', 'hotels']) || []).map((hotel, index) => 
                    <div className={'hotel-row listed ' + (hotel.get('open') ? 'open' : 'closed')} key={index}>
                        <div class="name">
                            {hotel.get('name')}
                        </div>
                        <div class="status">    
                            {hotel.get('open') ? 'Open' : 'Closed'}
                        </div>
                        <div class="date">
                            {hotel.get('date')}
                        </div>
                        <div class="phone hidden">
                            {hotel.get('phone')}
                        </div>
                        <div class="view-info down"></div>
                        <div class="more-info collapsed">
                            <div class="date">
                                {hotel.get('date') == 'Booking' ? <strong>Hotel is booking new reservations.</strong> : (hotel.get('date') == 'Booking' ? <strong>Next reservation date is pending.</strong> : <strong>Next Reservation: </strong> + hotel.get('date') )}
                            </div>
                            <div class="phone hidden">
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

