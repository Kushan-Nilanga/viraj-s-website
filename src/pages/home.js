export default function Home(props) {
    return (
        <>
            <div>
                <div style={{
                    paddingTop: "20%",
                    paddingBottom: "20%",
                    backgroundSize: "cover",
                    backgroundImage: "url('https://i.pinimg.com/originals/11/53/b3/1153b3a3537ed0174970c12f0172ad1d.jpg')",
                }}>
                    <h1 className="display-2 text-center">
                        <span style={{ color: "white" }}>Welcome to <span style={{ color: "lightblue" }}>Kaloha</span> Facility Services</span>
                    </h1>
                    <div className="p-4 d-flex justify-content-center">
                        <button className="btn btn-primary btn-lg m-1">
                            Get a Quote →
                        </button>
                        <button className="btn btn-primary btn-lg m-1">
                            Book a Service →
                        </button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div>
                    Get a Quote
                </div>
                <div>
                    Book a cleaning
                </div>
                <div>
                    Our Services
                </div>
                <div>
                    Client Stories
                </div>
            </div>

        </>
    );
}