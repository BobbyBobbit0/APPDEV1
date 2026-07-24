import { useState } from "react";

const userData = {
  name: "Louise Buen",
  avatarUrl: "https://scontent-mnl3-3.xx.fbcdn.net/v/t39.30808-1/615151335_1512475133163046_8574977672308112323_n.jpg?stp=dst-jpg_tt6&cstp=mx957x958&ctp=s200x200&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEX7h7cmpj8wjlCCu1MHW6crm8vLomAr1auby8uiYCvVgmn4JWYKpUwOdr142B3MEnpOkeQ2FfymwPGCZJOQoCf&_nc_ohc=d99Wc4HG_F4Q7kNvwHAy8OJ&_nc_oc=AdpgMgAMB4zmfmMcXGjSLxtc3fBBUGueIUno6ryFXha5pVPulngybumPMyLlnSOtZYc&_nc_zt=24&_nc_ht=scontent-mnl3-3.xx&_nc_gid=viA1e7bVE4lMTyXlrn9KEA&_nc_ss=7b2a8&oh=00_AQCJIEeHnP5dJexz-MhC1bks2sUyiJh7vUMassFDkLH1zQ&oe=6A691650", // sample avatar
  bio: "Im a student.",
  skills: ["React", "JavaScript", "HTML", "CSS"],
  isOnline: true,
  lastUpdated: "1 minute ago",
};

function UserProfileCard() {
    const [messageCount, setMessageCount] = useState(0);
    const [isFavorited, setIsFavorited] = useState(false);

    function handleSendMessage() {
        setMessageCount(messageCount + 1);
    }

    function handleReset() {
        setMessageCount(0);
    }

    function handleToggleFavorite() {
        setIsFavorited(!isFavorited);
    }

    return (
        <>
            <div className="profile-card">
                <img src={userData.avatarUrl} />

                <h2>{userData.name}</h2>

                <label htmlFor="bio">Bio</label>
                <p id="bio">{userData.bio}</p>

                <h3>Skills</h3>
                <ul>
                    {userData.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>

                <div style={{ color: "blue", fontWeight: "bold" }}>
                    Messages sent: {messageCount}
                </div>

                {userData.isOnline ? <span>🟢 Online</span> : <span>⚪ Offline</span>}

                <button onClick={handleSendMessage}>Send Message</button>
                <button onClick={handleReset}>Reset</button>

                {userData.isOnline && (
                    <button onClick={handleToggleFavorite}>
                        {isFavorited ? "★ Favorited" : "☆ Favorite"}
                    </button>
                )}
            </div>
            <p className="footer">Card last updated: {userData.lastUpdated}</p>
        </>
    );
}

export default UserProfileCard;