import { Column, Entity, Index, ManyToMany, OneToMany } from "typeorm";
import { Container } from "./Container";
import { Role } from "./Role";

@Index("type_un", ["type"], { unique: true })
@Index("type_pk", ["type"], { unique: true })
@Entity("type", { schema: "public" })
export class Type {
  @Column("character varying", { primary: true, name: "type" })
  type: string;

  @OneToMany(() => Container, (container) => container.type)
  containers: Container[];

  @ManyToMany(() => Role, (role) => role.types)
  roles: Role[];
}
