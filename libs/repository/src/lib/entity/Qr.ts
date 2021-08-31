import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { PackageListC } from "./PackageList";
import { ContainerC } from "./Container";

@Index("qr_pk", ["code"], { unique: true })
@Entity("qr", { schema: "public" })
export class Qr {
  @Column("character varying", { primary: true, name: "code" })
  code: string;

  @OneToMany(() => PackageListC, (packageList) => packageList.code)
  packageLists: PackageListC[];

  @ManyToOne(() => ContainerC, (container) => container.qrs)
  @JoinColumn([{ name: "container", referencedColumnName: "id" }])
  container: ContainerC;
}
