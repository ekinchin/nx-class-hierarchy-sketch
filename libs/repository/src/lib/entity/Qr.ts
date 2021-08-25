import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { PackageList } from "./PackageList";
import { Container } from "./Container";

@Index("qr_pk", ["code"], { unique: true })
@Entity("qr", { schema: "public" })
export class Qr {
  @Column("character varying", { primary: true, name: "code" })
  code: string;

  @OneToMany(() => PackageList, (packageList) => packageList.code)
  packageLists: PackageList[];

  @ManyToOne(() => Container, (container) => container.qrs)
  @JoinColumn([{ name: "container", referencedColumnName: "id" }])
  container: Container;
}
