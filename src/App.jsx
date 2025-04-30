import AudioPlayer from "./Components/Player/AudioPlayer.jsx";


function App() {

    return (
        <div className='app-container'>
            {/* Background video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className='video-bg'
            >
                <source src="/StyleContent/space-meteor-bg.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
                <div className="video-overlay"></div>
            {/* Foreground content */}
            <main className='main'>
                <div>
                    <AudioPlayer/>
                </div>
            </main>
        </div>
    );
}

export default App
