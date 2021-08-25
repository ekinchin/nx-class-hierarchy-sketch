import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Role } from "./Role";
import { Type } from "./Type";

@Index("type_role_un", ["role", "type"], { unique: true })
@Entity("type_role", { schema: "public" })
export class TypeRole {
  @Column("character varying", { name: "type", nullable: true, unique: true })
  type: string | null;

  @Column("character varying", { name: "role", unique: true })
  role: string;

  @ManyToOne(() => Role, (role) => role.typeRoles)
  @JoinColumn([{ name: "role", referencedColumnName: "role" }])
  role2: Role;

  @ManyToOne(() => Type, (type) => type.typeRoles)
  @JoinColumn([{ name: "type", referencedColumnName: "type" }])
  type2: Type;
}
