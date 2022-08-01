import './Trip.css'

export default function Trip(props) {
    console.log(props)
    return (
        <section className="trip-card">
            <img className="trip-img" src={`./images${props.imageUrl}`} />
            <div className="trip-info">
                <div className="country-info">
                    <p className="country-name"><i className="fa-solid fa-location-dot"></i> {props.country}</p>
                    <a href={props.googleMapsUrl} className="google-maps-link">View on Google Maps</a>
                </div>
                <h2 className="city-name">{props.city}</h2>
                <p className="trip-date">{props.startDate} - {props.endDate}</p>
                <p className="trip-details">{props.description}</p>
            </div>
        </section>
    )
}