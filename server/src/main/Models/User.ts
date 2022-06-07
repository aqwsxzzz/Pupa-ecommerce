import { Schema, model } from "mongoose";

interface User {
  username: string;
  password: string;
  email: string;
  type: string;
}
