export interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  timestamp: Date;
}
