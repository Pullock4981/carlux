"use client";

import { useState, useEffect, useMemo } from 'react';

export const useInventory = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState(""); // "low-to-high" or "high-to-low"

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://dummyjson.com/products/category/vehicle');
                if (!response.ok) {
                    throw new Error('Failed to fetch inventory');
                }
                const data = await response.json();
                setProducts(data.products);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchVehicles();
    }, []);

    const filteredAndSortedProducts = useMemo(() => {
        let result = [...products];

        // Filtering by Title
        if (searchQuery) {
            result = result.filter((product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Sorting by Price
        if (sortOrder === "low-to-high") {
            result.sort((a, b) => a.price - b.price);
        } else if (sortOrder === "high-to-low") {
            result.sort((a, b) => b.price - a.price);
        }

        return result;
    }, [products, searchQuery, sortOrder]);

    return {
        products: filteredAndSortedProducts,
        loading,
        error,
        searchQuery,
        setSearchQuery,
        sortOrder,
        setSortOrder
    };
};
