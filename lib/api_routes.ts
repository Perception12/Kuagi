const BASE_URL = "https://api.kuagi.ng";

export const AUTH = {
    login : () => `${BASE_URL}/api/sanctum/token`,
    register : () => `${BASE_URL}/api/register`,
    logout : () => `${BASE_URL}/sanctum/logout`,
    user: () =>  `${BASE_URL}/api/user`,
}

export const COURSES = {
    all: () => `${BASE_URL}/api/courses`,
    single: (id: string) => `${BASE_URL}/api/courses/${id}`,
    create: () => `${BASE_URL}/api/courses`,
    update: (id: string) => `${BASE_URL}/api/courses/${id}`,
    delete: (id: string) => `${BASE_URL}/api/courses/${id}`,
}

export const EVENTS = {
    all: () => `${BASE_URL}/api/events`,
    single: (id: string) => `${BASE_URL}/api/events/${id}`,
    create: () => `${BASE_URL}/api/events`,
    update: (id: string) => `${BASE_URL}/api/events/${id}`,
    delete: (id: string) => `${BASE_URL}/api/events/${id}`,
}

export const GENERAL_INFO = {
    all: () => `${BASE_URL}/api/info`,
    single: (id: string) => `${BASE_URL}/api/info/${id}`,
    create: () => `${BASE_URL}/api/info`,
    update: () => `${BASE_URL}/api/info`,
    delete: (id: string) => `${BASE_URL}/api/info/${id}`,
}

export const OUR_PARTNERS = {
    all: () => `${BASE_URL}/api/our-partners`,
    single: (id: string) => `${BASE_URL}/api/our-partners/${id}`,
    create: () => `${BASE_URL}/api/our-partners`,
    update: (id: string) => `${BASE_URL}/api/our-partners/${id}`,
    delete: (id: string) => `${BASE_URL}/api/our-partners/${id}`,
}

export const COMMENTS = {
    all: () => `${BASE_URL}/api/comments`,
    single: (id: string) => `${BASE_URL}/api/comments/${id}`,
    create: () => `${BASE_URL}/api/comments`,
    update: (id: string) => `${BASE_URL}/api/comments/${id}`,
    delete: (id: string) => `${BASE_URL}/api/comments/${id}`,
}

export const CONTACTS = {
    all: () => `${BASE_URL}/api/contacts`,
    single: (id: string) => `${BASE_URL}/api/contacts/${id}`,
    create: () => `${BASE_URL}/api/contacts`,
    update: (id: string) => `${BASE_URL}/api/contacts/${id}`,
    delete: (id: string) => `${BASE_URL}/api/contacts/${id}`,
}

export const FAQS = {
    all: () => `${BASE_URL}/api/faqs`,
    single: (id: string) => `${BASE_URL}/api/faqs/${id}`,
    create: () => `${BASE_URL}/api/faqs`,
    update: (id: string) => `${BASE_URL}/api/faqs/${id}`,
    delete: (id: string) => `${BASE_URL}/api/faqs/${id}`,
}

export const GALLERIES = {
    all: () => `${BASE_URL}/api/galleries`,
    single: (id: string) => `${BASE_URL}/api/galleries/${id}`,
    create: () => `${BASE_URL}/api/galleries`,
    update: (id: string) => `${BASE_URL}/api/galleries/${id}`,
    delete: (id: string) => `${BASE_URL}/api/galleries/${id}`,
}

export const SUCCESS_STORIES = {
    all: () => `${BASE_URL}/api/success-stories`,
    single: (id: string) => `${BASE_URL}/api/success-stories/${id}`,
    create: () => `${BASE_URL}/api/success-stories`,
    update: (id: string) => `${BASE_URL}/api/success-stories/${id}`,
    delete: (id: string) => `${BASE_URL}/api/success-stories/${id}`,
}

export const TESTIMONIALS = {
    all: () => `${BASE_URL}/api/testimonials`,
    single: (id: string) => `${BASE_URL}/api/testimonials/${id}`,
    create: () => `${BASE_URL}/api/testimonials`,
    update: (id: string) => `${BASE_URL}/api/testimonials/${id}`,
    delete: (id: string) => `${BASE_URL}/api/testimonials/${id}`,
}

export const VIRTUAL_OFFICES = {
    all: () => `${BASE_URL}/api/virtual-offices`,
    single: (id: string) => `${BASE_URL}/api/virtual-offices/${id}`,
    create: () => `${BASE_URL}/api/virtual-offices`,
    update: (id: string) => `${BASE_URL}/api/virtual-offices/${id}`,
    delete: (id: string) => `${BASE_URL}/api/virtual-offices/${id}`,
}

export const WORKSPACE_PLANS = {
    all: () => `${BASE_URL}/api/workspace-plans`,
    single: (id: string) => `${BASE_URL}/api/workspace-plans/${id}`,
    create: () => `${BASE_URL}/api/workspace-plans`,
    update: (id: string) => `${BASE_URL}/api/workspace-plans/${id}`,
    delete: (id: string) => `${BASE_URL}/api/workspace-plans/${id}`,
}

export const PARTNERS = {
    all: () => `${BASE_URL}/api/partners`,
    single: (id: string) => `${BASE_URL}/api/partners/${id}`,
    create: () => `${BASE_URL}/api/partners`,
    update: (id: string) => `${BASE_URL}/api/partners/${id}`,
    delete: (id: string) => `${BASE_URL}/api/partners/${id}`,
}

export const PROJECTS = {
    all: () => `${BASE_URL}/api/projects`,
    single: (id: string) => `${BASE_URL}/api/projects/${id}`,
    create: () => `${BASE_URL}/api/projects`,
    update: (id: string) => `${BASE_URL}/api/projects/${id}`,
    delete: (id: string) => `${BASE_URL}/api/projects/${id}`,
}

export const SERVICES = {
    all: () => `${BASE_URL}/api/services`,
    single: (id: string) => `${BASE_URL}/api/services/${id}`,
    create: () => `${BASE_URL}/api/services`,
    update: (id: string) => `${BASE_URL}/api/services/${id}`,
    delete: (id: string) => `${BASE_URL}/api/services/${id}`,
}