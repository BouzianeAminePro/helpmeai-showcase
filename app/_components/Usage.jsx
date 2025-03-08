import { IconCloud } from "./magicui/icon-cloud";

const slugs = [
    "gmail",
    "chatbot",
    "claude",
    "youtube",
    "googlechat",
    "reddit",
    "x",
    "mailboxdotorg",
    "googledrive",
    "livechat"
];

export function Usage() {
    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
    );

    return (
        <div className="relative flex size-full items-center justify-center overflow-hidden">
            <IconCloud images={images} />
        </div>
    );
}
