// Async function to fetch a random fact
async function fetchRandomFact() {
    try {
        const response = await fetch(
            "https://uselessfacts.jsph.pl/random.json"
        );
        if (!response.ok) {
            throw new Error("Failed to fetch random fact");
        }
        const fact = await response.json();
        const fact2 = fact.text;
        console.log("Random Fact:", fact2);
    } catch (error) {
        console.error("Error fetching random fact:", error);
        throw error;
    }
}

fetchRandomFact();
