import Title from "./Title";

function Header() {
    const isLive = true;

    return(
        <header>
            <Title />

            <p>
                {isLive
                ? "🎵 Listening now."
                : "Playing from your recent playlist."}
            </p>
        </header>
    );
}
export default Header;