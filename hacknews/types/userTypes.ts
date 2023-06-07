export interface User {
    id: string;
    email: string;
    password: string;
    roles: string[]; // 
}
// mysql 取出的字段 password 过滤掉
// User 复制到 UserWithoutPassword 并排除 password
export type UserWithoutPassword = Omit<User, "password">;