import { Column, Entity, Index, OneToMany } from "typeorm";
import { Container } from "./Container";
import { TypeRole } from "./TypeRole";

@Index("type_pk", ["type"], { unique: true })
@Index("type_un", ["type"], { unique: true })
@Entity("type", { schema: "public" })
export class Type {
  @Column("character varying", { primary: true, name: "type" })
  type: string;

  @OneToMany(() => Container, (container) => container.type)
  containers: Container[];

  @OneToMany(() => TypeRole, (typeRole) => typeRole.type2)
  typeRoles: TypeRole[];
}
