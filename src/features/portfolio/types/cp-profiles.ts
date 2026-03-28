export type CpProfile = {
  platform: "LeetCode" | "CodeChef" | string;
  username: string;
  url: string;
  color?: string;
  solved?: number;
  easySolved?: number;
  mediumSolved?: number;
  hardSolved?: number;
  ranking?: number;
  rating?: number;
  stars?: number;
  maxRating?: number;
};
