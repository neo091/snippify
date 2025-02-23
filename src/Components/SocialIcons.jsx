import IconGithubAlt from "../assets/GitHubIcon"
import IconSocialYoutube from "../assets/YoutubeIcon"

export const SocialIcons = () => {
    return (
        <>
            <div className=" absolute bottom-4 right-4 flex gap-4">


                <a href="https://GitHub.Com/Neo091">
                    <IconGithubAlt className={"text-snippify hover:text-white hover:animate-pulse "} />
                </a>

                <a href="https://GitHub.Com/Neo091">
                    <IconSocialYoutube className={"text-snippify hover:text-white hover:animate-pulse "} />
                </a>

            </div>
        </>
    )
}