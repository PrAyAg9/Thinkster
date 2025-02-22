import { useEffect, useState } from "react"

export default function BackToTop() {
    const [hasScrolled, setHasScrolled] = useState("false")

    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    })

    const onScroll = () => {
        if (window.scrollY > 100 && !hasScrolled) {
            setHasScrolled(true)
        } else if (window.scrollY < 100 && hasScrolled) {
            setHasScrolled(false)
        }
    }

    const handleScrollToTop = () => {
        // Implement logic to scroll to the top of the page
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // You can change this to 'auto' for instant scrolling
        });
    };

    return (
        <>
            {hasScrolled && (
                <button className="scroll__top scroll-to-target open" onClick={handleScrollToTop}>
                    <i className="tg-flaticon-arrowhead-up d-block"></i>
                </button>
            )}
        </>
    )
}