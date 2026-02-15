export function contrastRatio(hexA: string, hexB: string) {
  const toRgb = (hex: string) => {
    const normalized = hex.replace('#', '');
    const bigint = parseInt(normalized, 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
  };

  const luminance = (hex: string) => {
    const [r, g, b] = toRgb(hex).map((channel) => {
      const scaled = channel / 255;
      return scaled <= 0.03928 ? scaled / 12.92 : ((scaled + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const l1 = luminance(hexA);
  const l2 = luminance(hexB);
  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  return Number(ratio.toFixed(2));
}
