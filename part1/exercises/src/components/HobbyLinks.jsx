export default function HobbyLinks() {
    let hobbyLinks = ["https://www.thriftbooks.com/", "https://www.wacom.com/en-us"];
    return (
        <div>
            <h3>My Hobbies</h3>
            <a href={hobby[0]} target = "blank">Thrift books</a><br></br>
            <a href={hobby[1]} target = "blank">Wacom</a>
        </div>
    );
}