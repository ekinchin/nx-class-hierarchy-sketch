import { Column, Entity, Index, ManyToMany, OneToMany } from "typeorm";
import { ContainerC } from "./Container";
import { Role } from "./Role";

@Index("type_un", ["type"], { unique: true })
@Index("type_pk", ["type"], { unique: true })
@Entity("type", { schema: "public" })
export class Type {
  @Column("character varying", { primary: true, name: "type" })
  type: string;

  @OneToMany(() => ContainerC, (container) => container.type)
  containers: ContainerC[];

  @ManyToMany(() => Role, (role) => role.types)
  roles: Role[];
}
