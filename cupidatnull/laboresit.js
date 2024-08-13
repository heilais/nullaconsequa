function processColor(h, s, l, opacity) {
    return arguments.length === 1 
        ? cubehelixConvert(h) 
        : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

// Example usage:
console.log(processColor(120)); // Calls cubehelixConvert(120)
console.log(processColor(120, 0.5, 0.5)); // Creates new Cubehelix(120, 0.5, 0.5, 1)
console.log(processColor(120, 0.5, 0.5, 0.7)); // Creates new Cubehelix(120, 0.5, 0.5, 0.7)
