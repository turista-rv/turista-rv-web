export interface LeadsUser {
  leads: Leads;
  accessToken: string;
  refreshToken: string;
}

export interface Leads {
  id?: string | undefined;
  name: string;
  email: string;
  phone: string;
}
