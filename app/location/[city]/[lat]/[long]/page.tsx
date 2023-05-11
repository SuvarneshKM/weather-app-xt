type Props = {
    params: {
        city: string;
        lat: string;
        long: string;
    }
}
function WeatherPage({ params: { city, lat, long } }: Props) {
    return (
        <div>page: {city}{lat}{long}</div>
    )
}

export default WeatherPage