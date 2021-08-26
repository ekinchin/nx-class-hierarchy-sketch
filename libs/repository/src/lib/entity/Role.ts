import { Column, Entity, Index, JoinTable, ManyToMany } from "typeorm";
import { Type } from "./Type";

@Index("role_pk", ["role"], { unique: true })
@Entity("role", { schema: "public" })
export class Role {
  @Column("character varying", { primary: true, name: "role" })
  role: string;

  @Column("character varying", { name: "description", nullable: true })
  description: string | null;

  @ManyToMany(() => Type, (type) => type.roles)
  @JoinTable({
    name: "type_role",
    joinColumns: [{ name: "role", referencedColumnName: "role" }],
    inverseJoinColumns: [{ name: "type", referencedColumnName: "type" }],
    schema: "public",
  })
  types: Type[];
}
