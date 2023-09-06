export function intermediateColor(color1: string, color2: string): string {
	// Convert HEX colors to RGB components
	const r1 = parseInt(color1.slice(1, 3), 16);
	const g1 = parseInt(color1.slice(3, 5), 16);
	const b1 = parseInt(color1.slice(5, 7), 16);

	const r2 = parseInt(color2.slice(1, 3), 16);
	const g2 = parseInt(color2.slice(3, 5), 16);
	const b2 = parseInt(color2.slice(5, 7), 16);

	// Calculate intermediate value for each RGB component
	const rIntermediate = Math.round((r1 + r2) / 2);
	const gIntermediate = Math.round((g1 + g2) / 2);
	const bIntermediate = Math.round((b1 + b2) / 2);

	// Convert intermediate RGB components back to HEX format
	const intermediateColorHex = `#${(rIntermediate < 16 ? '0' : '') + rIntermediate.toString(16)}${
		(gIntermediate < 16 ? '0' : '') + gIntermediate.toString(16)
	}${(bIntermediate < 16 ? '0' : '') + bIntermediate.toString(16)}`;

	return intermediateColorHex;
}
