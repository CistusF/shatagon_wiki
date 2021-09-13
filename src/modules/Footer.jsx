import style from "./footer.module.css";

function Footer() {
    return (
        <div className={style.Footer}>
            <p><a className={style.link} href="https://discord.com/invite/ZU9zhn6">Discord</a> / <a className={style.link} href="https://robertsspaceindustries.com/orgs/NJG">함대링크</a></p>
            <p>© Shatagon™ / Cistus</p>
        </div>
    );
}

export default Footer;