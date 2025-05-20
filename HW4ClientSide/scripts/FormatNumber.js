function formatNumber(amount) {
    if (amount == null) return "N/A"; // Handle null or undefined cases

    if (amount >= 1_000_000_000) {
        return (amount / 1_000_000_000).toFixed(1) + "B"; // Billions
    }
    else if (amount >= 1_000_000) {
        return (amount / 1_000_000).toFixed(1) + "M"; // Millions
    }
    else if (amount >= 1_000) {
        return (amount / 1_000).toFixed(1) + "K"; // Thousands
    }
    else {
        return amount.toString(); // If less than 1K, show raw value
    }
}