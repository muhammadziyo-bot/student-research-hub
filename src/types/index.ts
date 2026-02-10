export interface User {
  id: string;
  name: string;
  email: string;
  institution: string;
  field: string;
  bio?: string;
  avatar?: string;
  joinedAt: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  abstract: string;
  content: string;
  category: string;
  author: User;
  coauthors?: User[];
  keywords: string[];
  publishedAt: string;
  views: number;
  downloads: number;
  status: 'draft' | 'published' | 'under_review';
  pdfUrl?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  paperCount: number;
  color: string;
  image: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

export interface SearchFilters {
  category?: string;
  keywords?: string;
  author?: string;
  dateRange?: {
    start: string;
    end: string;
  };
}

export interface Professor {
  id: string;
  name: string;
  title: string;
  institution: string;
  field: string;
  bio: string;
  expertise: string[];
  mentorshipAvailable: boolean;
  maxStudents: number;
  currentStudents: number;
  rating: number;
  languages: string[];
  avatar?: string;
}

export interface MentorshipRequest {
  id: string;
  studentId: string;
  professorId: string;
  researchTopic: string;
  status: 'pending' | 'accepted' | 'rejected';
  message: string;
  createdAt: string;
  responseMessage?: string;
}

export interface Feedback {
  id: string;
  paperId: string;
  reviewerId: string;
  reviewerName: string;
  rating: number;
  comment: string;
  suggestions: string[];
  createdAt: string;
  helpful: number;
}
