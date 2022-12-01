export default function EmojiItem() {
  return (
    < div
    className = "component-emoji-result-row copy-to-clipboard"
          >
            <img  src={'/cdn.jsdelivr.net/emojione/assets/png/1f638.png'} alt="" />
            <span className="title">Emoji</span>
            <span className="info">Click to copy emoji</span>
          </div>
  );
}
