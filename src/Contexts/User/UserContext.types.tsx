export interface UserData {
    _id?: string,
    name?: string,
    email?: string,
    notes?: [],
}

export interface UserContextType {
    user: UserData | null;
  }