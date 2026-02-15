export type AffinitySegment = 'minimal' | 'streetwear' | 'editorial';

const key = 'tsg_affinity_segment';

export function readAffinitySegment(): AffinitySegment {
  if (typeof window === 'undefined') {
    return 'minimal';
  }

  const stored = window.localStorage.getItem(key) as AffinitySegment | null;
  return stored ?? 'minimal';
}

export function writeAffinitySegment(segment: AffinitySegment) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(key, segment);
}
