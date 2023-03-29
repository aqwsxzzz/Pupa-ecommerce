import { Schema, model } from "mongoose";

interface User {
  username: string;
  password: string;
  email: string;
  type: string;
}
const UserSchema = new Schema<User>({
  username: String,
  password: String,
  email: String,
  type: String,
});

export const UserModel = model<User>("User", UserSchema);
