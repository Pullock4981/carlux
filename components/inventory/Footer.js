const Footer = () => {
    return (
        <footer className="w-full bg-[#050505]">
            {/* Top divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div
                className="flex flex-col items-center justify-center gap-4 px-4 sm:px-6"
                style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
            >
                {/* Brand */}
                <span
                    className="font-black italic tracking-tighter uppercase text-white"
                    style={{
                        fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                        filter: "drop-shadow(0 0 12px rgba(216,27,96,0.5))",
                    }}
                >
                    CARLUX
                </span>

                {/* Divider dot */}
                <div
                    style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "#D81B60",
                    }}
                />

                {/* Copyright */}
                <p
                    className="text-gray-500 font-medium tracking-wide text-center"
                    style={{ fontSize: "clamp(0.8rem, 1.5vw, 1rem)" }}
                >
                    Copyright © {new Date().getFullYear()} — All rights reserved by{" "}
                    <span className="text-gray-300 font-semibold">
                        Carlux Performance Division
                    </span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
