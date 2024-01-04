const GOOGLE_API_KEY = "AIzaSyAWBTPW1O3JYKpyjsZ01M1fXQtn97CO9fM";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";
