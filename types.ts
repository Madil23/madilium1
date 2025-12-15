export type TemplateId = 'sleek-dark' | 'modern-glass' | 'professional-light' | 'minimalist-mono' | 'neon-cyber' | 'nature-organic' | 'bold-pop' | 'soft-pastel';

export interface SocialLink {
  id: string;
  platform: 'instagram' | 'linkedin' | 'twitter' | 'website' | 'email';
  url: string;
}

export interface UserProfile {
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
  themeColor: string;
  templateId: TemplateId;
  links: SocialLink[];
}

export interface TemplateProps {
  data: UserProfile;
}