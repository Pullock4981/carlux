"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 640);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);
    return isMobile;
};

const CarCard = ({ car }) => {
    const [imgError, setImgError] = useState(false);
    const isMobile = useIsMobile();

    const formatPrice = (price) =>
        new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
        }).format(price);

    const getRatingColor = (rating) => {
        if (rating >= 4.5) return "#22c55e";
        if (rating >= 3.5) return "#eab308";
        return "#ef4444";
    };

    return (
        <div
            style={{
                background: "linear-gradient(145deg, #111111 0%, #0d0d0d 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "1.25rem",
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                cursor: "default",
                position: "relative",
            }}
            onClick={() => window.location.href = `/cars/${car.id}`}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 24px 60px rgba(216,27,96,0.12), 0 8px 24px rgba(0,0,0,0.4)";
                e.currentTarget.style.borderColor = "rgba(216,27,96,0.25)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
            }}
        >
            {/* Image Section */}
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: isMobile ? "16/7" : "16/10",
                    background: "linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)",
                    overflow: "hidden",
                }}
            >
                {/* Brand badge */}
                <div
                    style={{
                        position: "absolute",
                        top: "0.75rem",
                        left: "0.75rem",
                        zIndex: 10,
                        background: "rgba(0,0,0,0.7)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "0.5rem",
                        padding: "0.25rem 0.6rem",
                    }}
                >
                    <span
                        style={{
                            fontSize: "0.65rem",
                            fontWeight: "800",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#D81B60",
                        }}
                    >
                        {car.brand || "Unknown"}
                    </span>
                </div>

                {/* Rating badge */}
                <div
                    style={{
                        position: "absolute",
                        top: "0.75rem",
                        right: "0.75rem",
                        zIndex: 10,
                        background: "rgba(0,0,0,0.7)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "0.5rem",
                        padding: "0.25rem 0.5rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                    }}
                >
                    <span style={{ fontSize: "0.7rem" }}>★</span>
                    <span
                        style={{
                            fontSize: "0.7rem",
                            fontWeight: "700",
                            color: getRatingColor(car.rating),
                        }}
                    >
                        {car.rating?.toFixed(1)}
                    </span>
                </div>

                {/* Car Image */}
                {!imgError ? (
                    <img
                        src={car.thumbnail}
                        alt={car.title}
                        onError={() => setImgError(true)}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.5s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                ) : (
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.5rem",
                            color: "rgba(255,255,255,0.2)",
                        }}
                    >
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="1" y="3" width="15" height="13" rx="2" />
                            <path d="M16 8h2l3 3v4h-5V8Z" />
                            <circle cx="5.5" cy="18.5" r="2.5" />
                            <circle cx="18.5" cy="18.5" r="2.5" />
                        </svg>
                        <span style={{ fontSize: "0.7rem", letterSpacing: "0.1em" }}>NO IMAGE</span>
                    </div>
                )}

                {/* Gradient overlay */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "40%",
                        background: "linear-gradient(to top, rgba(13,13,13,0.9) 0%, transparent 100%)",
                    }}
                />
            </div>

            {/* Content Section */}
            <div style={{ padding: isMobile ? "0.85rem 1rem 1rem" : "1.25rem 1.5rem 1.5rem" }}>
                {/* Title */}
                <h3
                    style={{
                        fontSize: "1rem",
                        fontWeight: "700",
                        color: "#ffffff",
                        letterSpacing: "-0.01em",
                        lineHeight: "1.3",
                        marginBottom: "0.35rem",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    {car.title}
                </h3>

                {/* Category tag */}
                <span
                    style={{
                        display: "inline-block",
                        fontSize: "0.65rem",
                        fontWeight: "600",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.35)",
                        marginBottom: isMobile ? "0.6rem" : "1.1rem",
                    }}
                >
                    {car.category?.replace(/-/g, " ") || "Vehicle"}
                </span>

                {/* Divider */}
                <div
                    style={{
                        height: "1px",
                        background: "linear-gradient(to right, rgba(216,27,96,0.3), transparent)",
                        marginBottom: isMobile ? "0.6rem" : "1.1rem",
                    }}
                />

                {/* Price + CTA row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
                    {/* Price */}
                    <div>
                        <div
                            style={{
                                fontSize: "0.6rem",
                                fontWeight: "600",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: "rgba(255,255,255,0.3)",
                                marginBottom: "0.2rem",
                            }}
                        >
                            Starting at
                        </div>
                        <div
                            style={{
                                fontSize: "1.35rem",
                                fontWeight: "900",
                                fontStyle: "italic",
                                letterSpacing: "-0.03em",
                                color: "#ffffff",
                            }}
                        >
                            {formatPrice(car.price)}
                        </div>
                    </div>

                    {/* CTA Link */}
                    <Link
                        href={`/cars/${car.id}`}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "linear-gradient(135deg, #4c1d95 0%, #9b1a37 100%)",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: "999px",
                            padding: "0.55rem 1.2rem",
                            fontSize: "0.7rem",
                            fontWeight: "800",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            cursor: "pointer",
                            whiteSpace: "nowrap",
                            transition: "opacity 0.2s ease, transform 0.2s ease",
                            boxShadow: "0 0 20px rgba(155,26,55,0.25)",
                            textDecoration: "none"
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = "0.85";
                            e.currentTarget.style.transform = "scale(1.04)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = "1";
                            e.currentTarget.style.transform = "scale(1)";
                        }}
                    >
                        View Details
                    </Link>
                </div>

                {/* Stock indicator */}
                {car.stock !== undefined && (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            marginTop: "1rem",
                        }}
                    >
                        <div
                            style={{
                                width: "6px",
                                height: "6px",
                                borderRadius: "50%",
                                backgroundColor: car.stock > 10 ? "#22c55e" : car.stock > 0 ? "#eab308" : "#ef4444",
                                boxShadow: `0 0 6px ${car.stock > 10 ? "#22c55e" : car.stock > 0 ? "#eab308" : "#ef4444"}`,
                            }}
                        />
                        <span
                            style={{
                                fontSize: "0.65rem",
                                fontWeight: "600",
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                color: "rgba(255,255,255,0.35)",
                            }}
                        >
                            {car.stock > 10 ? "In Stock" : car.stock > 0 ? `Only ${car.stock} left` : "Sold Out"}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CarCard;
