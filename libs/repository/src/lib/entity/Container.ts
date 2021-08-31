import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Type } from "./Type";
import { Qr } from "./Qr";

@Index("container_pk", ["id"], { unique: true })
@Entity("container", { schema: "public" })
export class ContainerC {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "inv_no", nullable: true })
  invNo: string | null;

  @Column("date", { name: "created_at", nullable: true })
  createdAt: string | null;

  @Column("date", { name: "destroyed_at", nullable: true })
  destroyedAt: string | null;

  @ManyToOne(() => Type, (type) => type.containers)
  @JoinColumn([{ name: "type", referencedColumnName: "type" }])
  type: Type;

  @OneToMany(() => Qr, (qr) => qr.container)
  qrs: Qr[];
}
