export interface Info {
    contintent: string;
    domain: string;
    name: string;
    country: string;
    organization: string;
    value: string;
    path: string;
    httpOnly: boolean;
    secure: boolean;
    expires: number;
    priority: string;
    sameSite: string;
    flag: [];
    flagCookies: string;
    ip: string;
    port: number;
    banner: string;
    status: string;
    user_id: number;
    authors_id: number;
    is_leader: boolean;
    likesCount?: number;
    commentsCount?: number;
}

    

export interface Article {
    id: number;
    title: string;
    annotation: string;
    description: string;
    slug: string;
    image: string;
    locale: string;
    visited: boolean;
    is_published: boolean;
    created_by: string;
    updated_by: string;
    created_at: string;
    updated_at: string;
    editors_choice: boolean;
    author_id: number;
    category_id: number;
    type_id: number;
    is_news: boolean;
    user_id: number;
    authors_id: number;
    is_leader: boolean;
    likesCount?: number;
    commentsCount?: number;
}