export interface LeadsUser {
    leads:         Leads;
    accessToken:  string;
    refreshToken: string;
}

export interface Leads {
    name: string;
    email: string;
    phone: string;
}

