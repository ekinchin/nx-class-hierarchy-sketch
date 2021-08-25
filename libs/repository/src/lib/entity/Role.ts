import { Column, Entity, Index, OneToMany } from "typeorm";
import { TypeRole } from "./TypeRole";

@Index("role_pk", ["role"], { unique: true })
@Entity("role", { schema: "public" })
export class Role {
  @Column("character varying", { primary: true, name: "role" })
  role: string;

  @Column("character varying", { name: "description", nullable: true })
  description: string | null;

  @OneToMany(() => TypeRole, (typeRole) => typeRole.role2)
  typeRoles: TypeRole[];
}
