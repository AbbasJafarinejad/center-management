export interface Center {
  id: string;
  status: string;
  type: string;
  manager: {
    id?: string;
    name: string;
    user_id?: string;
    avatar:
      | {
          id?: string;
          file_name?: string;
          slug?: string;
          url: string;
          mode: string;
          type?: string;
          mime?: string;
          exec?: string;
        }[]
      | null;
  };
  detail: {
    title: string;
    description?: string | null;
    address: string | null;
    phone_numbers?: string[] | null;
    avatar?:
      | {
          id?: string;
          file_name?: string;
          slug?: string;
          url: string;
          mode: string;
          type?: string;
          mime?: string;
          exec?: string;
        }[]
      | null;
  };
  created_at?: number;
  acceptation?: null;
}
