/**
 * Safely extracts the YouTube video ID from various supported URL formats:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/shorts/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 */
export function getYouTubeVideoId(url: string | null | undefined): string | null {
  if (!url || typeof url !== "string") return null;

  try {
    const trimmedUrl = url.trim();

    // Standard youtube.com/watch?v= ID extraction
    const watchMatch = trimmedUrl.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/
    );
    if (watchMatch && watchMatch[1]) {
      return watchMatch[1];
    }

    // Direct 11-char video ID format check
    if (/^[a-zA-Z0-9_-]{11}$/.test(trimmedUrl)) {
      return trimmedUrl;
    }
  } catch (err) {
    console.error("Error parsing YouTube URL:", err);
  }

  return null;
}

/**
 * Returns a safe, privacy-enhanced YouTube embed URL
 */
export function getYouTubeEmbedUrl(url: string | null | undefined): string | null {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) return null;
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
}

/**
 * Automatically generates a high-resolution YouTube thumbnail URL from a YouTube URL
 */
export function getYouTubeThumbnailUrl(url: string | null | undefined): string | null {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) return null;
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}
