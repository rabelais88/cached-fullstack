export interface CustomError extends Error {
  statusCode?: number;
  code?: string;
  data?: string; 
}

export interface ErrorResponse {
  statusCode: number;
  message: string;
  code: string;
  data: any;
}
